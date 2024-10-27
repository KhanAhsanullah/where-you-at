import React, { useState, useRef } from "react";
import { ScrollView, Keyboard, Image } from "react-native";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { Typography } from "../../../components/atoms/Typography";
import { Header } from "../../../components/atoms/Header";
import { onBack } from "../../../navigation/RootNavigation";
import { IMAGES, SCREENS, SCREEN_HEIGHT, theme } from "../../../constants";
import { Button, View } from "react-native-ui-lib";
import { InputText } from "../../../components/atoms/InputText";
import ImageUploader from "../../../components/atoms/ImageUploader";

const IDCardDocs = () => {
  const [cardNum, setCardNum] = useState("");
  return (
    <SafeAreaContainer mode={"dark"} safeArea={false}>
      <Header titleText="" rightIcon={false} />
      <ScrollView>
        <Typography
          textType="bold"
          size={theme.fontSize.extraLarge}
          style={{ paddingHorizontal: 20 }}
        >
          ID Card
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
          <InputText
            label="ID Card Number"
            cardStyle={{ borderWidth: 1 }}
            placeholder={"Enter ID Card Number"}
            onChangeText={(text: any) => setCardNum(text)}
            value={cardNum}
            leftIcon={false}
            autoCapitalize={"none"}
            keyboardType={"number-pad"}
            onSubmitEditing={Keyboard.dismiss()}
            returnKeyType={"next"}
            style={{
              marginVertical: 10,
              borderWidth: 0.3,
              backgroundColor: "#fff",
            }}
          />

          <Image
            source={IMAGES.Idfront}
            style={{ width: "100%", height: SCREEN_HEIGHT * 0.3 }}
            resizeMode="contain"
          />
          <Image
            source={IMAGES.Idback}
            style={{ width: "100%", height: SCREEN_HEIGHT * 0.3 }}
            resizeMode="contain"
          />

          <Button
            label={"Update"}
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

export default IDCardDocs;
