import React, { useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { Header } from "../../../components/atoms/Header";
import { Typography } from "../../../components/atoms/Typography";
import { IMAGES, SCREENS, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";
import { navigate, onBack } from "../../../navigation/RootNavigation";

const RideDetails = () => {
  const renderItem = ({ image, title, subTitle }: any) => {
    return (
      <View row gap-20 style={{ alignItems: "center" }}>
        <Image
          source={image}
          style={{ width: 25, height: 25 }}
          resizeMode="contain"
        />
        <View>
          <Typography>{title}</Typography>
          <Typography>{subTitle}</Typography>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Header titleText="Ride Details" />
        <View style={commonStyles.footerContainer}>
          <View padding-20>
            <Image
              source={IMAGES.car2}
              style={{ width: 300, height: 300 }}
              resizeMode="contain"
            />
            <View row gap-20>
              <Image
                source={IMAGES.avatar}
                style={{ width: 85, height: 85 }}
                resizeMode="contain"
              />
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
                style={{ alignItems: "flex-end" }}
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

            <View row spread marginV-20 gap-20>
              <View gap-20 flex>
                {renderItem({
                  image: IMAGES.watchIcon,
                  title: "Duration",
                  subTitle: "24 Hours",
                })}
                {renderItem({
                  image: IMAGES.car2,
                  title: "Vehicle No#",
                  subTitle: "ABC-1234",
                })}
              </View>
              <View style={commonStyles.verticleLine} />
              <View gap-20 flex>
                {renderItem({
                  image: IMAGES.IconWheel,
                  title: "Make",
                  subTitle: "Audi A8",
                })}
                {renderItem({
                  image: IMAGES.userIcon,
                  title: "Capacity",
                  subTitle: "4 Person",
                })}
              </View>
            </View>

            <Typography>Stop Location</Typography>
            <Typography color={theme.color.tgray}>
              ABC street, Near ABC Road, Toronto.
            </Typography>

            <Button
              label={"Navigate"}
              backgroundColor={theme.color.secondry}
              borderRadius={10}
              style={{ paddingVertical: 15, marginVertical: 20 }}
              onPress={() => navigate(SCREENS.NAV_SCREEN)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default RideDetails;
