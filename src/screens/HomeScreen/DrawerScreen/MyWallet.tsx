import React from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { IMAGES, SCREENS, SCREEN_WIDTH, theme } from "../../../constants";
import { Header } from "../../../components/atoms/Header";
import { Typography } from "../../../components/atoms/Typography";
import { useNavigation } from "@react-navigation/native";
import { navigate } from "../../../navigation/RootNavigation";

const MyWallet = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaContainer safeArea={false}>
      <Header titleText="My Wallet" rightIcon={false} />

      <View center>
        <Image
          source={IMAGES.avatar}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
        />
      </View>
      <View padding-20 center>
        <Typography size={theme.fontSize.large}>Balance</Typography>
        <Typography size={theme.fontSize.extraLarge} textType="bold">
          $50
        </Typography>
        <Typography size={theme.fontSize.small}>+$0 upcoming</Typography>
        <Button
          label="Cash Out"
          style={{
            marginVertical: 30,
            width: 200,
            backgroundColor: theme.color.primary,
          }}
        />
        <Typography size={theme.fontSize.small} color={theme.color.tgray}>
          Will be received within 2 days.
        </Typography>
        <View style={[styles.radioContainer]}>
          <View style={styles.cardDetails}>
            <Image source={IMAGES.masterCard} style={styles.cardImage} />
            <View style={styles.verticleLine} />
            <View>
              <Typography style={styles.radioText}>Bank Account</Typography>
              <Typography color={theme.color.tgray}>11 22 **** 5566</Typography>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigate(SCREENS.ADD_ACCOUNT)}>
          <Typography size={theme.fontSize.small} color={theme.color.tgray}>
            Add New Bank Account
          </Typography>
        </TouchableOpacity>
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    width: 300,
    flexDirection: "row",
    padding: 20,
    marginVertical: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "dashed",
  },
  selectedContainer: {
    borderColor: theme.color.primary,
  },
  cardDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardImage: {
    width: 40,
    height: 25,
    resizeMode: "contain",
    marginRight: 10,
  },
  radioText: {
    fontSize: 16,
    fontWeight: "500",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.color.primary,
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: theme.color.primary,
    marginHorizontal: 10,
  },
});

export default MyWallet;
