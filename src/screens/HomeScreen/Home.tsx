import React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, SCREENS, SCREEN_WIDTH, theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import BusRouteMap from "../../components/atoms/BusRouteMap";
import { commonStyles } from "../../globalStyle";
import { navigate } from "../../navigation/RootNavigation";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Header
          leftIcon={IMAGES.menu}
          onPressLeft={() => navigation.openDrawer()}
          leftWidth={25}
          leftHeight={25}
        />
        <View paddingH-20 style={{ marginTop: 20 }}>
          <View row gap-10>
            <Image
              source={IMAGES.map}
              style={{ width: 45, height: 45 }}
              resizeMode="contain"
            />
            <View>
              <Typography color={theme.color.tgray}>Location</Typography>
              <Typography textType="bold" size={theme.fontSize.large}>
                Abc, Location
              </Typography>
            </View>
          </View>
          <Typography textType="bold" size={theme.fontSize.large24}>
            Ongoing Activity
          </Typography>
          <TouchableOpacity
            onPress={() => navigate(SCREENS.NAV_SCREEN)}
            activeOpacity={0.9}
          >
            <View
              style={{
                marginVertical: 10,
                height: 500,
                width: "100%",
                borderWidth: 1,
                borderRadius: 20,
                backgroundColor: theme.color.primary,
              }}
            >
              <View height={200}>
                <BusRouteMap
                  showCarpoolRide={true}
                  marginMap={10}
                  borderMqp={20}
                />
              </View>
              <View row style={{ alignItems: "center" }}>
                <View marginH-20>
                  <View marginV-20>
                    <Typography color={"#C2B3FF"}>Tracking Number</Typography>
                    <Typography
                      textType="semiBold"
                      color={theme.color.white}
                      size={theme.fontSize.large}
                    >
                      #123135461235
                    </Typography>
                  </View>
                  <View marginV-10>
                    <Typography color={"#C2B3FF"}>Customer</Typography>
                    <Typography
                      textType="semiBold"
                      color={theme.color.white}
                      size={theme.fontSize.large}
                    >
                      Filllo Design
                    </Typography>
                  </View>

                  <View marginV-20>
                    <Typography color={"#C2B3FF"}>Status</Typography>
                    <Button
                      label={"In Transit"}
                      labelStyle={{ color: "#000" }}
                      style={{ height: 40, marginTop: 5 }}
                      backgroundColor="#CDF202"
                    />
                  </View>
                </View>

                <Image
                  source={IMAGES.line}
                  style={{ width: 20, height: 200 }}
                  resizeMode="contain"
                />

                <View flex marginR-20 style={{ alignItems: "flex-end" }}>
                  <View marginV-20 style={{ alignItems: "flex-end" }}>
                    <Typography color={"#C2B3FF"}>From</Typography>
                    <Typography textType="semiBold" color={theme.color.white}>
                      Toronto
                    </Typography>
                  </View>
                  <View marginV-10 style={{ alignItems: "flex-end" }}>
                    <Typography color={"#C2B3FF"}>To</Typography>
                    <Typography textType="semiBold" color={theme.color.white}>
                      Montreal
                    </Typography>
                  </View>

                  <View marginV-20 style={{ alignItems: "flex-end" }}>
                    <Typography color={"#C2B3FF"}>Arrival Date</Typography>
                    <Typography textType="semiBold" color={theme.color.white}>
                      02-02-2024
                    </Typography>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Image
            source={IMAGES.slide}
            style={{ width: 50, height: 10, alignSelf: "center" }}
            resizeMode="contain"
          />
          <View>
            <Typography textType="bold" size={theme.fontSize.extraLarge}>
              Our Services
            </Typography>
            <ScrollView
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}
            >
              {OUR_SERVICES.map((i, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigate(i.navigateTo, { from: i.text })}
                  >
                    <View
                      paddingH-40
                      paddingV-20
                      style={[
                        commonStyles.cardWithShadow,
                        {
                          backgroundColor: i.bkColor,
                          alignItems: "center",
                          gap: 10,
                          width: SCREEN_WIDTH * 0.5,
                        },
                      ]}
                    >
                      <View
                        style={{
                          // padding: index == 2 ? 5 : 0,
                          width: 50,
                          height: 50,
                        }}
                      >
                        <Image
                          source={i.image}
                          // style={{ width: "100%", height: "100%" }}
                          style={{ width: "100%", height: "100%" }}
                          resizeMode="contain"
                        />
                      </View>
                      <Typography
                        align="center"
                        textType="semiBold"
                        size={theme.fontSize.large20}
                      >
                        {i.text}
                      </Typography>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <View marginV-20 row spread style={{ alignItems: "center" }}>
              <Typography textType="semiBold" size={theme.fontSize.large}>
                Tracking History
              </Typography>
              <TouchableOpacity onPress={() => navigate(SCREENS.HISTORY)}>
                <Typography color={theme.color.tgray}>View All</Typography>
              </TouchableOpacity>
            </View>
            {TRACKING_HISTORY.map((i) => {
              return (
                <View
                  style={[
                    commonStyles.cardWithShadow,
                    commonStyles.boxShadow,
                    {
                      padding: 20,
                    },
                  ]}
                >
                  <View row gap-10>
                    <Image
                      source={i.image}
                      style={{ width: 50, height: 50 }}
                      resizeMode="contain"
                    />
                    <View>
                      <Typography size={theme.fontSize.large}>
                        {i.text}
                      </Typography>
                      <Typography size={theme.fontSize.small}>
                        {i.trackId}
                      </Typography>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

const OUR_SERVICES = [
  {
    id: 1,
    image: IMAGES.boxHome,
    text: "Where To\nDeliver",
    bkColor: "#FFAF361F",
    navigateTo: SCREENS.DELIVERY_DETAILS,
  },
  {
    id: 2,
    image: IMAGES.carHome,
    text: "Book A\nRide",
    bkColor: "#E0FFF4",
    navigateTo: SCREENS.BOOK_RIDE,
  },
  {
    id: 3,
    image: IMAGES.busHome,
    text: "Book A\nBus",
    bkColor: "#FFE0F9",
    navigateTo: SCREENS.BOOK_RIDE,
  },
];
const TRACKING_HISTORY = [
  {
    id: 1,
    image: IMAGES.box,
    text: "Documents",
    trackId: "Tracking ID: N8881765",
  },
  {
    id: 2,
    image: IMAGES.car,
    text: "Carpool Ride",
    trackId: "Tracking ID: N8881765",
  },
];

export default Home;
