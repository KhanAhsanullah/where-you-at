import React, { useState, useRef } from "react";
import { ScrollView, Keyboard } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Typography } from "../../components/atoms/Typography";
import { Header } from "../../components/atoms/Header";
import { onBack } from "../../navigation/RootNavigation";
import { theme } from "../../constants";
import { Button, View } from "react-native-ui-lib";
import ImageUploader from "../../components/atoms/ImageUploader";

const Certificate = () => {
  return (
    <SafeAreaContainer mode={"dark"} safeArea={false}>
      <ScrollView>
        <Header titleText="" rightIcon={false} />
        <Typography
          textType="bold"
          size={theme.fontSize.extraLarge}
          style={{ paddingHorizontal: 20 }}
        >
          Certificate Of Vehicle Registration
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
          <View marginV-20>
            <ImageUploader
              title={"Upload Front Picture For Vehicle Certificate"}
            />
          </View>
          <View marginV-0>
            <ImageUploader
              title={"Upload Back Picture For Vehicle Certificate"}
            />
          </View>

          <Button
            label={"Continue"}
            backgroundColor={theme.color.secondry}
            borderRadius={10}
            style={{ paddingVertical: 15, marginVertical: 20 }}
            onPress={() => onBack()}
          />
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default Certificate;
