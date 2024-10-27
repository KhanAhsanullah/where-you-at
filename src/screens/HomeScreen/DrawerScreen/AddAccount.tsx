import React, { useRef, useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { Header } from "../../../components/atoms/Header";
import { Typography } from "../../../components/atoms/Typography";
import { IMAGES, SCREENS, theme } from "../../../constants";
import { InputText } from "../../../components/atoms/InputText";
import { InputDateTime } from "../../../components/atoms/InputDateTime";
import { navigate, onBack } from "../../../navigation/RootNavigation";
import BottomSheet from "../../../components/atoms/CustomModal";
import LottieView from "lottie-react-native";
import { CustomBtn } from "../../../components/atoms/CustomBtn";

const AddAccount = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Header titleText="Add Account" />
        <View padding-20>
          <View marginV-20>
            <InputText
              label={"IBAN Number"}
              placeholder={"5665***********"}
              leftIcon={false}
              style={{ borderRadius: 30 }}
            />

            <InputText
              label={"Account holder's name"}
              placeholder={"John"}
              leftIcon={false}
              style={{ borderRadius: 30 }}
            />

            <InputText
              label={"Account number"}
              placeholder={"6556*******"}
              leftIcon={false}
              style={{ borderRadius: 30 }}
            />
            <View row spread gap-20 width={"100%"}>
              <InputText
                label={"Bank name"}
                value={cvc}
                leftIcon={false}
                placeholder="Abc"
                style={{ width: 150 }}
                onChangeText={(text: string) => setCvc(text)}
              />
              <InputText
                label={"Routing no"}
                value={cvc}
                leftIcon={false}
                placeholder="6556*******"
                keyboardType="numeric"
                style={{ width: 150 }}
                onChangeText={(text: string) => setCvc(text)}
              />
            </View>

            <InputText
              label={"Swift code"}
              placeholder={"bvc656***"}
              leftIcon={false}
              style={{ borderRadius: 30 }}
            />

            <CustomBtn
              label={"Add New Account"}
              style={{ marginTop: 40 }}
              onPress={() => onBack()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "dashed",
  },
  selectedContainer: {
    borderColor: "#2e86de",
    backgroundColor: "#eaf3ff",
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
    borderColor: "#2e86de",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#2e86de",
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "red",
    marginHorizontal: 10,
  },
});

export default AddAccount;
