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

const AddNewCard = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [date, setDate] = useState(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [targetScreen, setTargetScreen] = useState(SCREENS.MAIL_DELIVERED);
  const animationRef = useRef(null);

  const renderRadioButton = (option, imgSource, cardType, cardNumber) => (
    <TouchableOpacity
      style={[
        styles.radioContainer,
        selectedOption === option && styles.selectedContainer,
      ]}
      onPress={() => setSelectedOption(option)}
    >
      <View style={styles.cardDetails}>
        <Image source={imgSource} style={styles.cardImage} />
        <View style={styles.verticleLine} />
        <View>
          <Typography style={styles.radioText}>{cardType}</Typography>
          <Typography color={theme.color.tgray}>{cardNumber}</Typography>
        </View>
      </View>
      <View style={styles.radioCircle}>
        {selectedOption === option && <View style={styles.selectedRb} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Header titleText="Add New Card" />
        <View padding-20>
        
          <View marginV-20>
            <InputText
              label={"Card Number"}
              placeholder={"11 22 33 44 55"}
              leftIcon={false}
              style={{ borderRadius: 30 }}
            />
            <View row spread gap-20 width={"100%"}>
              <View flex style={{ borderRadius: 10, top: -10 }}>
                <Typography style={{ top: 10 }}>Expire Date</Typography>
                <InputDateTime
                  mode={"date"}
                  value={date}
                  onChange={setDate}
                  rightIcon={false}
                  onConfirm={(selectedDate: any) => {
                    console.log("Selected Date:", selectedDate);
                    setDate(selectedDate);
                  }}
                  inputStyle={{ borderRadius: 10 }}
                  visible={datePickerVisible}
                />
              </View>
              <InputText
                label={"CVC"}
                value={cvc}
                leftImage={IMAGES.pass}
                maxLength={3}
                placeholder="CVV"
                keyboardType="numeric"
                style={{ width: 150 }}
                onChangeText={(text: string) => setCvc(text)}
              />
            </View>
            
            <Button
              label={"Done"}
              backgroundColor={theme.color.primary}
              borderRadius={10}
              style={{ paddingVertical: 15,marginTop:80 }}
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

export default AddNewCard;
