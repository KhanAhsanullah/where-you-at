import React, { useState, useRef } from "react";
import { Image, TouchableOpacity } from "react-native";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { Typography } from "../../../components/atoms/Typography";
import { Header } from "../../../components/atoms/Header";
import { navigate, onBack } from "../../../navigation/RootNavigation";
import { IMAGES, SCREENS, theme } from "../../../constants";
import { View } from "react-native-ui-lib";
import { CustomBtn } from "../../../components/atoms/CustomBtn";
import Icon from "react-native-vector-icons/AntDesign";
import { InputText } from "../../../components/atoms/InputText";
import { DropDown } from "../../../components/atoms/DropDown";
import { Transport_Type } from "../../../containers/dummy";

const VechileInfoDocs = () => {
  return (
    <SafeAreaContainer mode={"dark"} safeArea={false}>
      <Header titleText="Vehicle Info" rightIcon={false} />

      <View padding-20>
        <InputText
          placeholder="ABC-1234"
          label="Number Plate"
          leftIcon={false}
          style={{ borderWidth: 0.2 }}
        />
        <InputText
          placeholder="2022"
          label="Vehicle production year"
          leftIcon={false}
          style={{ borderWidth: 0.2 }}
        />
        <Typography>Select Transport</Typography>
        <DropDown
          data={Transport_Type}
          placeholder={"Sedan"}
          style={{
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: "gray",
            marginBottom: 20,
          }}
        />

        <Typography color="#999B9F">
          Certificate of vehicle registration
        </Typography>

        <Image
          source={IMAGES.transport}
          style={{ width: "100%", height: 300 }}
          resizeMode="contain"
        />
      </View>
    </SafeAreaContainer>
  );
};

export default VechileInfoDocs;
