import React from "react";
import { Image, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { verticalScale } from "react-native-size-matters";
import { onBack } from "../../navigation/RootNavigation";
import { IMAGES, theme } from "../../constants";
import { Typography } from "./Typography";

type Props = {
  titleText?: string;
  backBtn?: boolean;
  rightIcons?: JSX.Element;
  fixed?: boolean;
  notificationBtn?: boolean;
  vector?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
};

export const Header = (props: Props) => {
  const {
    onPressLeft = () => onBack(),
    onPressRight = () => {},
    leftIcon = IMAGES.arrowLeft,
    leftIconColor = theme.color.black,
    rightIcon = IMAGES.headerImg,
    titleText = "",
    leftHeight = 40,
    leftWidth = 40,
    style = {},
  }: any = props;

  return (
    <View
      paddingH-20
      style={{
        marginTop: Platform.OS == "ios" ? 40 : 40,
      }}
    >
      <View height={60} row center>
        {leftIcon && (
          <TouchableOpacity onPress={onPressLeft} style={{ flex: 1 }}>
            <Image
              source={leftIcon}
              style={{ width: leftWidth , height: leftHeight  }}
              resizeMode="contain"
            />
          </TouchableOpacity> 
        )}

        <Typography align="center" textType="bold" size={theme.fontSize.large}>
          {titleText}
        </Typography>

        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
            {rightIcon && (
              <TouchableOpacity onPress={onPressRight} style={{}}>
                <Image
                  source={rightIcon}
                  style={{ width: 45, height: 45 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
