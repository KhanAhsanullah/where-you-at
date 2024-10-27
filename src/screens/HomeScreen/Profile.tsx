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
      <Header
        titleText="Profile"
        leftIcon={IMAGES.menu}
        leftWidth={25}
        leftHeight={25}
        onPressLeft={()=> navigation.openDrawer()}
      />

      <View center>
        <Image
          source={IMAGES.avatar}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
        />
      </View>
      <View padding-20>
        <Typography
          color={theme.color.black}
          textType="semiBold"
          size={theme.fontSize.large}
        >
          Full Name
        </Typography>
        <Typography color={theme.color.tgray} size={theme.fontSize.medium}>
          Simon lewis
        </Typography>

        <View marginV-20>
          <Typography
            color={theme.color.black}
            textType="bold"
            size={theme.fontSize.large}
          >
            Email Address
          </Typography>
          <Typography color={theme.color.tgray} size={theme.fontSize.medium}>
            Simon_lewis123@gmail.com
          </Typography>
        </View>

        <Typography
          color={theme.color.black}
          textType="bold"
          size={theme.fontSize.large}
        >
          Phone Number
        </Typography>
        <Typography color={theme.color.tgray} size={theme.fontSize.medium}>
          +1 234 567 8900
        </Typography>
        <View marginV-20>
          <CustomBtn label={"Edit Profile"}  onPress={()=>navigate(SCREENS.EDIT_PROFILE)}/>
        </View>
        <TouchableOpacity onPress={()=>navigate(SCREENS.CHANGE_PASSWORD)}>
          <Typography align="center" size={theme.fontSize.medium}>
            Change Password
          </Typography>
        </TouchableOpacity>
      </View>
    </SafeAreaContainer>
  );
};

export default Profile;
