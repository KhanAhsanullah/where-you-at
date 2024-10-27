import React, { useState, useRef } from "react";
import { TouchableOpacity } from "react-native";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { Typography } from "../../../components/atoms/Typography";
import { Header } from "../../../components/atoms/Header";
import { navigate, onBack } from "../../../navigation/RootNavigation";
import { SCREENS, theme } from "../../../constants";
import { View } from "react-native-ui-lib";
import { CustomBtn } from "../../../components/atoms/CustomBtn";
import Icon from "react-native-vector-icons/AntDesign";

const MyDocuments = () => {
  const DATA = [
    { title: "Vehicle Info", navigateTo: SCREENS.VECHILE_INFO_DOCS },
    { title: "ID card", navigateTo: SCREENS.ID_CARD_DOCS },
    { title: "ID Confirmaton",navigateTo: SCREENS.ID_CONFIRM_DOCS},
    { title: "Driver License", navigateTo: SCREENS.DRIVER_LICENSE_DOCS },
  ];
  return (
    <SafeAreaContainer mode={"dark"} safeArea={false}>
      <Header titleText="My Documents" rightIcon={false} />
    
      <View padding-20>
        <View
          style={{
            borderWidth: 0.4,
            padding: 10,
            borderRadius: 10,
            marginVertical: 20,
          }}
        >
          {DATA.map((item, index) => {
            const hasBorder = index < DATA.length - 1;
            return (
              <TouchableOpacity
                key={item.title}
                onPress={() => navigate(item.navigateTo)}
              >
                <View
                  row
                  spread
                  marginV-10
                  paddingB-20
                  style={{ borderBottomWidth: hasBorder ? 0.2 : 0 }}
                >
                  <Typography>{item.title}</Typography>
                  <Icon name="right" size={22} color={theme.color.black} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View marginV-20>
          <CustomBtn label={"Continue"} onPress={() => onBack()} />
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default MyDocuments;
