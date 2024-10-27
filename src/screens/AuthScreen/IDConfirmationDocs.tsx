import React, { useState, useRef } from "react";
import { Image, ImageBackground } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Typography } from "../../components/atoms/Typography";
import { Header } from "../../components/atoms/Header";
import { onBack } from "../../navigation/RootNavigation";
import { IMAGES, theme } from "../../constants";
import { View } from "react-native-ui-lib";
import { CustomBtn } from "../../components/atoms/CustomBtn";

const IDConfirmationDocs = () => {
  return (
    <SafeAreaContainer mode={"dark"} safeArea={false}>
      <Header titleText="" rightIcon={false} />
      <Typography
        textType="bold"
        size={theme.fontSize.extraLarge}
        style={{ paddingHorizontal: 20 }}
      >
        ID Confirmation
      </Typography>
      <Typography
        style={{ paddingHorizontal: 20 }}
        color={theme.color.tgray}
        size={theme.fontSize.extraSmall12}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut
      </Typography>
      <View padding-20>
        <Typography color={theme.color.tgray}>ID Confirmation</Typography>
        <View>
          <ImageBackground
            source={IMAGES.man}
            style={{
              width: "100%",
              height: 250,
              justifyContent: "center",
              alignItems: "center",
            }}
            imageStyle={{ borderRadius: 10 }}
            resizeMode="cover"
          >
          </ImageBackground>
        </View>
        <View marginV-30>
          <Typography color={theme.color.tgray}>
            Bring the ID card in front of you and take a photo as an example.
            The photo should clearly show the face and your ID card. The photo
            must be taken in good light and in good quality. Photos in
            sunglasses are not allowed.
          </Typography>
        </View>
        <CustomBtn label={"Update"} onPress={() => onBack()} />
      </View>
    </SafeAreaContainer>
  );
};

export default IDConfirmationDocs;
