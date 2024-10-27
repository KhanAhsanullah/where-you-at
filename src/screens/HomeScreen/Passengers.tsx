import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, SCREENS, theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import { CustomBtn } from "../../components/atoms/CustomBtn";
import { navigate } from "../../navigation/RootNavigation";
import BottomSheet from "../../components/atoms/CustomModal";
import { InputText } from "../../components/atoms/InputText";

const Passengers = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Header titleText="Passengers" />
        <View padding-20>
          <View
            row
            style={{
              padding: 10,
              backgroundColor: "#ECECEC",
              borderRadius: 20,
              gap: 10,
            }}
          >
            <Image
              source={IMAGES.avatar}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View>
              <Typography>Simon Lewis</Typography>
              <View row style={{ alignItems: "center" }}>
                <Typography>4.5</Typography>
                <Image
                  source={IMAGES.star}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: theme.color.tgray,
    padding: 10,
    borderRadius: 10,
    paddingVertical: 20,
    marginBottom: 15,
    borderStyle: "dotted",
  },
});

export default Passengers;
