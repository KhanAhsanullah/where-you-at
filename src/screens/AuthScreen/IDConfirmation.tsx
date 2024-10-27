import React, { useState, useRef } from "react";
import { Image, ImageBackground, ScrollView } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Typography } from "../../components/atoms/Typography";
import { Header } from "../../components/atoms/Header";
import { onBack } from "../../navigation/RootNavigation";
import { IMAGES, theme } from "../../constants";
import { View } from "react-native-ui-lib";
import { CustomBtn } from "../../components/atoms/CustomBtn";
import ImageUploader from "../../components/atoms/ImageUploader";

const IDConfirmation = () => {
  return (
    <SafeAreaContainer mode={"dark"} safeArea={false}>
      <Header titleText="" rightIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut
        </Typography>
        <View padding-20>
          <Typography color={theme.color.tgray}>ID Confirmation</Typography>
          <View>
            {/* <ImageBackground
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
            <Image
              source={IMAGES.cameraIcon}
              style={{
                width: "20%",
                height: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
              resizeMode="contain"
            />
            <Typography color={"#fff"} align="center">
              Upload Front ID Card
            </Typography>
          </ImageBackground> */}

            <ImageUploader title={"Upload Front ID Card"} />
            <View marginV-30>
              <Typography color={theme.color.tgray}>
                Bring the ID card in front of you and take a photo as an
                example. The photo should clearly show the face and your ID
                card. The photo must be taken in good light and in good quality.
                Photos in sunglasses are not allowed.
              </Typography>
            </View>
            <CustomBtn label={"Continue"} onPress={() => onBack()} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default IDConfirmation;
