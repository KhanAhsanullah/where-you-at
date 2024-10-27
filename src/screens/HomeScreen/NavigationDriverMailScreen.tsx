import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Button, Text, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, SCREENS, SCREEN_WIDTH, theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import BusRouteMap from "../../components/atoms/BusRouteMap";
import { commonStyles } from "../../globalStyle";
import BottomSheet from "../../components/atoms/CustomModal";
import LottieView from "lottie-react-native";
import StarRating from "react-native-star-rating-widget";
import { navigate } from "../../navigation/RootNavigation";
import { CustomBtn } from "../../components/atoms/CustomBtn";

const NavigationDriverMailScreen = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const animationRef = useRef(null);
  const [ratingModal, setRatingModal] = useState(false);
  const [rating, setRating] = useState(4);
  const [rating2, setRating2] = useState(3);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setBottomSheetVisible(true);
  //   }, 5000); 

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <SafeAreaContainer safeArea={false}>
      <Header titleText="Navigation" rightIcon={false}  />
      <View style={{ flex: 1}}>
        <BusRouteMap />
        <View
          style={[
            commonStyles.cardWithShadow,
            styles.dropoffCard,
          ]}
        >
          <View row gap-10>
            <Image
              source={IMAGES.avatar}
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
            <View>
              <Typography textType="bold" color={"#BEC2CE"} size={theme.fontSize.large20}>Dropoff location</Typography>
              <Typography textType="semiBold" size={theme.fontSize.medium}>ABC street, Near ABC Road, Toronto.</Typography>
              <CustomBtn style={{marginVertical:10}} label="End Ride" onPress={()=> setBottomSheetVisible(true)}/>
            </View>
          </View>
        </View>
      </View>
      {isBottomSheetVisible && (
        <BottomSheet
          onClose={() => {
            setBottomSheetVisible(!isBottomSheetVisible);
            navigate(SCREENS.HOME_DRIVER)

          }}
        >
          <LottieView
            ref={animationRef}
            source={require("../../components/Animation/MessageLottie.json")}
            autoPlay
            style={{ height: 200, width: 200, alignSelf: "center" }}
          />
          <View center marginB-20>
            <Typography
              textType="bold"
              size={theme.fontSize.large20}
              style={{ marginVertical: 10 }}
            >
             Mail Delivered!
            </Typography>

            <Typography
               size={theme.fontSize.extraSmall12}
            >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </Typography>
           
          </View>
        </BottomSheet>
      )}
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  dropoffCard: {
    position: "absolute", 
    bottom: -10, 
    left: 0, 
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
    paddingVertical: 25,
  },
});

export default NavigationDriverMailScreen;
