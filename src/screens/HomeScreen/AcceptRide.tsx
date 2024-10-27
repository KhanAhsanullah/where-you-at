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

const AcceptRide = () => {
  const [buttonText, setButtonText] = useState("Arrived");
  const [showChatIcon, setShowChatIcon] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(true); // Track first click

  const handleButtonClick = () => {
    if (isFirstClick) {
      setButtonText("Start Ride");
      setShowChatIcon(true);
      setIsFirstClick(false); // Set to false after the first click
    } else {
      navigate(SCREENS.NAV_DRAVER_SCREEN); // Navigate on second click
    }
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Header
          titleText="Ride Detail"
          rightIcon={showChatIcon ? IMAGES.chatImg : false}
          onPressRight={() => navigate(SCREENS.CHAT)}
        />

        <View padding-20>
          <View style={styles.viewStyle}>
            <ImageBackground
              source={IMAGES.Shipment}
              style={{
                width: "100%",
                height: 250,
                borderWidth: 3,
                borderRadius: 10,
                borderColor: "#ECECEC",
                justifyContent: "center",
                alignItems: "center",
              }}
              resizeMode="cover"
            >
              <Image
                source={IMAGES.mapLine}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
              />
            </ImageBackground>

            <View row spread margin-10 flex>
              <View flex>
                <Typography color={theme.color.tgray}>
                  Pickup Location
                </Typography>
                <Typography textType="bold">Abc Street</Typography>
              </View>

              <View flex>
                <Typography color={theme.color.tgray}>
                  Dropoff Location
                </Typography>
                <Typography textType="bold">Abc Street</Typography>
              </View>
            </View>

            <View row spread margin-10 flex>
              <View flex>
                <Typography color={theme.color.tgray}>Passengers</Typography>
                <Typography textType="bold">2 Persons</Typography>
              </View>

              <View flex>
                <Typography color={theme.color.tgray}>Luggage</Typography>
                <Typography textType="bold">2 Bags</Typography>
              </View>
            </View>

            <View row spread margin-10 flex>
              <View flex>
                <Typography color={theme.color.tgray}>Date</Typography>
                <Typography textType="bold">26-Sep-2024</Typography>
              </View>

              <View flex>
                <Typography color={theme.color.tgray}>Time</Typography>
                <Typography textType="bold">03:00 PM</Typography>
              </View>
            </View>
            <View flex marginH-10>
              <Typography color={theme.color.tgray}>Estimated Cost</Typography>
              <Typography textType="bold">$30</Typography>
            </View>

            <CustomBtn
              label={buttonText}
              style={{ marginVertical: 20 }}
              onPress={handleButtonClick}
            />
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

export default AcceptRide;
