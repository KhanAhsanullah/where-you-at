import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";

const Passengers = () => {
  const [passengers] = useState([
    { name: "Simon Lewis", available: true },
    { name: "Alice Johnson", available: false },
    { name: "Michael Smith", available: true },
    { name: "Emily Davis", available: false },
    { name: "Chris Brown", available: true },
    { name: "Olivia Wilson", available: false },
    { name: "James Taylor", available: true },
    { name: "Sophia Anderson", available: false },
    { name: "Liam Martinez", available: true },
    { name: "Ava Thomas", available: false },
  ]);

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Header titleText="Passengers" rightIcon={false} />
        <View padding-20>
          {passengers.map((passenger, index) => (
            <View
              key={index}
              row spread padding-10 
              style={{
                backgroundColor: "#ECECEC",
                borderRadius: 10,
                alignItems: 'center',
                marginBottom: 15,
              }}
            >
              <View row center gap-10>
                <Image
                  source={IMAGES.avatar}
                  style={{ width: 60, height: 60 }}
                  resizeMode="contain"
                />
                <Typography textType="semiBold" size={theme.fontSize.medium}>
                  {passenger.name}
                </Typography>
              </View>
              <View row gap-10>
                <Image
                  source={IMAGES.clickIcon}
                  style={{ width: 30, height: 30 }}
                  resizeMode="contain"
                />
                <Image
                  source={IMAGES.signIcon}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: passenger.available ? "red" : "gray",
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          ))}
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
