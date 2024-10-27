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

const NavigationScreen = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const animationRef = useRef(null);
  const [ratingModal, setRatingModal] = useState(false);
  const [rating, setRating] = useState(4);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBottomSheetVisible(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaContainer safeArea={false}>
      <Header titleText="Navigation" />
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
            </View>
          </View>
        </View>
      </View>
      {isBottomSheetVisible && (
        <BottomSheet
          onClose={() => {
            setBottomSheetVisible(!isBottomSheetVisible);
            setRatingModal(true);
          }}
        >
          <LottieView
            ref={animationRef}
            source={require("../../components/Animation/mapLottie.json")}
            autoPlay
            style={{ height: 200, width: 250, alignSelf: "center" }}
          />
          <View center marginV-0>
            <Typography
              textType="bold"
              align="center"
              size={theme.fontSize.large20}
              style={{ marginVertical: 10 }}
            >
              You have arrived at your destination
            </Typography>
           
          </View>
        </BottomSheet>
      )}
        {ratingModal && (
        <BottomSheet
          onClose={() => {
            navigate(SCREENS.HOME);
          }}
        >
          {/* <LottieView
            ref={animationRef}
            source={require("../../components/Animation/MessageLottie.json")}
            autoPlay
            style={{ height: 150, width: 150, alignSelf: "center" }}
          /> */}
          <View center marginV-10>
            <Typography
              textType="bold"
              size={theme.fontSize.large20}
              style={{ marginVertical: 20 }}
            >
              Add your Ratings
            </Typography>
            <Typography
              color={theme.color.tgray}
              size={theme.fontSize.extraSmall12}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the dummy
            </Typography>
            <View marginV-20>
              <StarRating
                rating={rating}
                onChange={(newRating) => setRating(newRating)}
                starSize={40}
                color={"#FFD700"}
              />
            </View>
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

export default NavigationScreen;
