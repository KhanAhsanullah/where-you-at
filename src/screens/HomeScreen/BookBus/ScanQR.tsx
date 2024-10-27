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
import { IMAGES, SCREENS, SCREEN_HEIGHT, SCREEN_WIDTH, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";
import { navigate, onBack } from "../../../navigation/RootNavigation";

const ScanQR = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <Header titleText="Scan QR" />
      <View padding-20>
        <View
          center style={[commonStyles.cardWithShadow, {backgroundColor: theme.color.primary ,borderRadius:10}]}
        >
          <Typography textType="bold" size={theme.fontSize.large} color={theme.color.white}>
            Scan QR Code
          </Typography>
          <Typography color={theme.color.tgray} size={theme.fontSize.small}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod
          </Typography>
        </View>
        <ImageBackground
          source={IMAGES.border}
          style={{ width: "100%", height: SCREEN_HEIGHT * 0.6,justifyContent:"center",alignItems:"center"}}
          resizeMode="contain"
        >
          <Image 
           source={IMAGES.QR}
           style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_HEIGHT * 0.6}}
           resizeMode="contain"
          />
        </ImageBackground>
        <Button
          label={"Scan Me"}
          backgroundColor={theme.color.secondry}
          borderRadius={10}
          style={{ paddingVertical: 15, marginTop: 20 }}
          onPress={() => navigate(SCREENS.BUS_DETAIL)}
        />
      
      </View>
    </SafeAreaContainer>
  );
};

export default ScanQR;
