import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, SCREENS, theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import BusRouteMap from "../../components/atoms/BusRouteMap";
import { commonStyles } from "../../globalStyle";
import { navigate, onBack } from "../../navigation/RootNavigation";
import LottieView from "lottie-react-native";
import BottomSheet from "../../components/atoms/CustomModal";
import StarRating from "react-native-star-rating-widget";

const MailDelivered = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [ratingModal, setRatingModal] = useState(false);
  const animationRef = useRef(null);
  const [rating, setRating] = useState(4);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBottomSheetVisible(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaContainer safeArea={false}>
      <Header titleText="Mail Delivery" />
      <View style={{ flex: 1 }}>
        <BusRouteMap />

        <View style={[commonStyles.cardWithShadow, styles.dropoffCard]}>
          <View row gap-20>
            <TouchableOpacity onPress={() => setBottomSheetVisible(true)}>
              <Image
                source={IMAGES.avatar}
                style={{ width: 85, height: 85 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View>
              <Typography textType="semiBold" size={theme.fontSize.medium}>
                John Smith
              </Typography>
              <Typography
                color={theme.color.tgray}
                textType="semiBold"
                size={theme.fontSize.medium}
              >
                +1 (908) 1234 567
              </Typography>
              <Image
                source={IMAGES.review}
                style={{ width: 100, height: 20 }}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity
              onPress={() => navigate(SCREENS.CHAT)}
              style={{ alignItems: "flex-end", flex: 1 }}
            >
              <ImageBackground
                source={IMAGES.oval}
                style={{
                  width: 80,
                  height: 80,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                resizeMode="contain"
              >
                <Image
                  source={IMAGES.message}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={commonStyles.lineBar} />

          <View style={styles.ridesFriends}>
            <View>
              <Typography size={theme.fontSize.large} textType="semiBold">
                Distance
              </Typography>
              <Typography color={theme.color.tgray} size={theme.fontSize.large}>
                0.2 mi
              </Typography>
            </View>
            <View style={commonStyles.verticleLine}></View>
            <View>
              <Typography size={theme.fontSize.large} textType="semiBold">
                ETA
              </Typography>
              <Typography color={theme.color.tgray} size={theme.fontSize.large}>
                2 min
              </Typography>
            </View>
            <View style={commonStyles.verticleLine}></View>
            <View>
              <Typography size={theme.fontSize.large} textType="semiBold">
                Amount
              </Typography>
              <Typography color={theme.color.tgray} size={theme.fontSize.large}>
                $ 50
              </Typography>
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
            source={require("../../components/Animation/MessageLottie.json")}
            autoPlay
            style={{ height: 150, width: 150, alignSelf: "center" }}
          />
          <View center marginV-10>
            <Typography
              textType="bold"
              size={theme.fontSize.large20}
              style={{ marginVertical: 20 }}
            >
              Mail Delivered!
            </Typography>
            <Typography
              color={theme.color.tgray}
              size={theme.fontSize.extraSmall12}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the dummy
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
    borderTopRightRadius: 20,
    paddingVertical: 25,
  },
  ridesFriends: {
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    // marginBottom: 20,
  },
});

export default MailDelivered;
