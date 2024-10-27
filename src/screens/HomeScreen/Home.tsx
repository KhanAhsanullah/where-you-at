import React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, SCREENS, SCREEN_WIDTH, theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import BusRouteMap from "../../components/atoms/BusRouteMap";
import { commonStyles } from "../../globalStyle";
import { navigate } from "../../navigation/RootNavigation";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Header
          leftIcon={IMAGES.menu}
          onPressLeft={() => navigation.openDrawer()}
          leftWidth={25}
          leftHeight={25}
        />
      </ScrollView>
    </SafeAreaContainer>
  );
};



export default Home;
