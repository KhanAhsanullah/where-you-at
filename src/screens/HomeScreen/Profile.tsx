import React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, SCREENS, SCREEN_WIDTH, theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import BusRouteMap from "../../components/atoms/BusRouteMap";
import { commonStyles } from "../../globalStyle";
import { navigate, onBack } from "../../navigation/RootNavigation";
import { CustomBtn } from "../../components/atoms/CustomBtn";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaContainer safeArea={false}>
      <Header titleText="My Profile" rightIcon={false} />

      <View
        padding-20
        margin-20
        style={{
          borderRadius: 20,
          borderWidth: 1,
          backgroundColor: theme.color.primary,
        }}
      >
        {/* Left Side  */}
        <View row gap-10>
          <View
            style={{
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
              borderTopEndRadius: 50,
              borderTopStartRadius: 50,
              padding: 10,
              borderWidth: 1,
              backgroundColor: theme.color.white,
            }}
          >
            <Image
              source={IMAGES.avatar}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
            <Image
              source={IMAGES.SplashLogo}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </View>
          {/* Right Side  */}
          <View>
            <Typography
              textType="bold"
              color={theme.color.white}
              size={theme.fontSize.extraLarge}
            >
              Simon Lewis
            </Typography>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: theme.color.white,
              }}
            >
              <Typography
                align="center"
                color={theme.color.primary}
                size={theme.fontSize.large24}
              >
                Bus Driver
              </Typography>
            </View>
            <View marginV-20>
              <Typography color={theme.color.white} size={theme.fontSize.large}>
                Employee Id
              </Typography>
              <Typography color={theme.color.white} size={theme.fontSize.large}>
                1234 567 789
              </Typography>
            </View>
          </View>
        </View>

        {/* Bottom Text */}
        <View row spread marginV-20>
          <View>
            <Typography color={theme.color.white} size={theme.fontSize.large}>
              Contact No
            </Typography>
            <Typography
              color={theme.color.white}
              size={theme.fontSize.large}
              textType="semiBold"
            >
              +1234 567 889
            </Typography>
          </View>

          <View>
            <Typography color={theme.color.white} size={theme.fontSize.large}>
              Email Address
            </Typography>
            <Typography
              color={theme.color.white}
              size={theme.fontSize.large}
              textType="semiBold"
            >
              Abc@gmail.com
            </Typography>
          </View>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default Profile;
