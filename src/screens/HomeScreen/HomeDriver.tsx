import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button, Switch, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, SCREENS, SCREEN_WIDTH, theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setIsOnline } from "../../redux/slice/user";
import { navigate } from "../../navigation/RootNavigation";

const HomeDriver = () => {
  const navigation = useNavigation();
  const animationRef = useRef(null);
  const dispatch = useDispatch();
  const { isOnline } = useSelector((state: RootState) => state.user);

  const renderCarpoolRideCard = () => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigate(SCREENS.DRIVER_RIDE_DETAIL)}
      >
        <ImageBackground
          source={IMAGES.Shipment}
          style={styles.imageBackground}
        >
          <View style={styles.rideView}>
            <Typography color={theme.color.white} textType="bold">
              Carpool Ride
            </Typography>
          </View>
        </ImageBackground>
        
        <View row spread marginV-10>
          <View marginT-10>
            <Typography color={theme.color.tgray}>Pickup Location</Typography>
            <Typography textType="bold">Abc Street</Typography>
          </View>
          <View marginT-10>
            <Typography color={theme.color.tgray}>Dropoff Location</Typography>
            <Typography textType="bold">Abc Street</Typography>
          </View>
          <Image
            source={IMAGES.tickImg}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>

        <View row spread marginV-10>
          <View marginT-10>
            <Typography color={theme.color.tgray}>Passengers</Typography>
            <Typography textType="bold">2 Persons</Typography>
          </View>
          <View marginT-10>
            <Typography color={theme.color.tgray}>Estimated Cost</Typography>
            <Typography textType="bold">$30</Typography>
          </View>
          <Image
            source={IMAGES.crossImg}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderMailDeliveryCard = () => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigate(SCREENS.DRIVER_MAIL_DETAIL)}
      >
        <ImageBackground
         source={IMAGES.Shipment}
          style={styles.imageBackground}
        >
          <View style={styles.rideView}>
            <Typography color={theme.color.white} textType="bold">
              Mail Delivery
            </Typography>
          </View>
        </ImageBackground>

        <View row spread marginV-10>
          <View marginT-10>
            <Typography color={theme.color.tgray}>Pickup Location</Typography>
            <Typography textType="bold">XYZ Avenue</Typography>
          </View>
          <View marginT-10>
            <Typography color={theme.color.tgray}>Dropoff Location</Typography>
            <Typography textType="bold">LMN Boulevard</Typography>
          </View>
          <Image
            source={IMAGES.tickImg}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>

        <View row spread marginV-10>
          <View marginT-10>
            <Typography color={theme.color.tgray}>Mail Description</Typography>
            <Typography textType="bold">Loream Epsom</Typography>
          </View>
          <View marginT-10>
            <Typography color={theme.color.tgray}>Estimated Cost</Typography>
            <Typography textType="bold">$60</Typography>
          </View>
          <Image
            source={IMAGES.crossImg}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  };

  const offline = () => {
    return (
      <View style={styles.offlineContainer}>
        <LottieView
          ref={animationRef}
          source={require("../../components/Animation/AvalibleJobLottie.json")}
          autoPlay
          style={styles.animation}
        />
        <View>
          <Typography textType="bold" size={theme.fontSize.large} align="center">
            Sorry, Driver is offline!
          </Typography>
          <Typography align="center" size={theme.fontSize.small}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </View>
      </View>
    );
  };

  const online = () => {
    return (
      <>
        {renderCarpoolRideCard()}
        {renderMailDeliveryCard()}
      </>
    );
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView style={{ backgroundColor: "#fff" }} showsVerticalScrollIndicator={false}>
        <Header
          leftIcon={IMAGES.menu}
          titleText="Available Jobs"
          rightIcon={false}
          onPressLeft={() => navigation.openDrawer()}
          leftWidth={25}
          leftHeight={25}
        />
        <View style={{ position: "absolute", right: 20, top: 60 }}>
          <Switch
            value={isOnline}
            onColor={theme.color.primary}
            offColor={theme.color.tgray}
            onValueChange={(val) => dispatch(setIsOnline(val))}
          />
        </View>
        <View padding-20 style={{ flex: 1 }}>
          {isOnline ? online() : offline()}
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "auto",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  imageBackground: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  rideView: {
    backgroundColor: theme.color.primary,
    borderWidth: 1,
    paddingVertical: 5,
    position: "absolute",
    paddingHorizontal: 20,
    right: 0,
    top: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 45,
    height: 45,
    marginTop: 20,
  },
  offlineContainer: {
    borderRadius: 10,
    padding: 20,
    marginTop: 100,
    backgroundColor: theme.color.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    height: 150,
    width: 150,
  },
});

export default HomeDriver;
