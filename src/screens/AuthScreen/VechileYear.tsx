import React, { useState, useRef } from "react";
import { ScrollView, Keyboard } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Typography } from "../../components/atoms/Typography";
import { Header } from "../../components/atoms/Header";
import { onBack } from "../../navigation/RootNavigation";
import { theme } from "../../constants";
import { Button, View } from "react-native-ui-lib";
import { InputText } from "../../components/atoms/InputText";

const VechileYear = () => {
  const [cardNum, setCardNum] = useState("");
  return (
    <SafeAreaContainer mode={"dark"} safeArea={false}>
      <ScrollView>
        <Header titleText="" rightIcon={false} />
        <Typography
          textType="bold"
          size={theme.fontSize.extraLarge}
          style={{ paddingHorizontal: 20 }}
        >
          Vehicle Production Year
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
          {/* <InputText
            label="Vehicle production year"
            cardStyle={{ borderWidth: 1 }}
            placeholder={"Enter Vehicle production year"}
            onChangeText={(text: any) => setCardNum(text)}
            value={cardNum}
            leftIcon={false}
            autoCapitalize={"none"}

            onSubmitEditing={Keyboard.dismiss()}
            returnKeyType={"done"}
            style={{
              marginVertical: 10,
              borderWidth: 0.3,
            }}
          /> */}

          <InputText
            label="Vehicle production year"
            cardStyle={{ borderWidth: 1 }}
            placeholder={"Enter Vehicle production year"}
            onChangeText={(text) => setCardNum(text)}
            value={cardNum}
            leftIcon={false}
            autoCapitalize={"none"}
            onSubmitEditing={() => Keyboard.dismiss()} // Change this line
            returnKeyType={"done"}
            style={{
              marginVertical: 10,
              borderWidth: 0.3,
            }}
          />

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

export default VechileYear;
