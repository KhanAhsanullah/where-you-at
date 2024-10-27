import React from "react";
import { StyleSheet } from "react-native";
import { Header } from "../../../components/atoms/Header";
import { View } from "react-native-ui-lib";
import { Typography } from "../../../components/atoms/Typography";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { theme } from "../../../constants";

const Terms = (props: any) => {
  // const title = props?.route?.params;
  // console.log('title',title);
  

  return (
    <SafeAreaContainer safeArea={false}>
      <Header titleText={"Terms and Conditions"} />  
      <View paddingH-20>
        <View row gap-10 style={{ alignItems: "center" }}>
          <View
            style={{
              borderWidth: 2,
              height: 20,
              width: 5,
              backgroundColor: theme.color.primary,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
          />
          <Typography textType="semiBold" style={{ marginVertical: 20 }}>
            {"Lorem ipsum dolor sit amet"}
          </Typography>
        </View>

        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe
          nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          {"\n"}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe
          nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        </Typography>
      </View>
    </SafeAreaContainer>
  );
};

export default Terms;
