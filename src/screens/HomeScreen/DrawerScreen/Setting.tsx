import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { Header } from "../../../components/atoms/Header";
import { Typography } from "../../../components/atoms/Typography";
import { Switch, View } from "react-native-ui-lib";
import { SCREENS, theme } from "../../../constants";
import Icon from "react-native-vector-icons/AntDesign";
import { navigate } from "../../../navigation/RootNavigation";

const Setting = (props:any) => {
  const [toggle, setToggle] = useState(true);

  return (
    <SafeAreaContainer safeArea={false}>
      <Header titleText="Navigation" />
      <View padding-20>
        <Typography textType="semiBold" size={theme.fontSize.large}>
          Account Settings
        </Typography>
        <View
          row
          spread
          padding-20
          style={[
            styles.ViewStyle,
            {
              alignItems: "center",
            },
          ]}
        >
          <Typography size={theme.fontSize.medium}>Notifications</Typography>
          <Switch
            value={toggle}
            onColor={theme.color.primary}
            onValueChange={() => setToggle(!toggle)}
          />
        </View>
        <View marginV-20>
          <Typography textType="semiBold" size={theme.fontSize.large}>
            Basic Settings
          </Typography>
          <View padding-10 marginV-20 style={styles.ViewStyle}>
            {SETTING.map((i) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigate(i.navigateTo, {
                      title: i.title, 
                    })
                  }
                  key={i.title}
                >
                  <View row spread padding-10 style={{ alignItems: "center" }}>
                    <Typography size={theme.fontSize.medium}>
                      {i.title}
                    </Typography>
                    <Icon
                      name="arrowright"
                      size={22}
                      color={theme.color.black}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    borderWidth: 0.4,
    borderRadius: 10,
  },
});

const SETTING = [
  {
    title: "Privacy Policy",
    navigateTo: SCREENS.PRIVACY,
  },
  {
    title: "Terms and Conditions",
    navigateTo: SCREENS.TERMS,
  },
];

export default Setting;
