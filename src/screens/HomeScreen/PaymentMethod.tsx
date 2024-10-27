import React, { useRef, useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import { IMAGES, SCREENS, theme } from "../../constants";
import { InputText } from "../../components/atoms/InputText";
import { InputDateTime } from "../../components/atoms/InputDateTime";
import { navigate } from "../../navigation/RootNavigation";
import BottomSheet from "../../components/atoms/CustomModal";
import LottieView from "lottie-react-native";
import { commonStyles } from "../../globalStyle";

const PaymentMethod = ({ route }) => {
  const params = route?.params;
  console.log(params?.isFrom);

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
    <View row spread style={{ alignItems: "center" }}>
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
      </TouchableOpacity>

      <View style={styles.radioCircle}>
        {selectedOption === option && <View style={styles.selectedRb} />}
      </View>
    </View>
  );

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Header titleText="Payment Method" />
        <View padding-20>
          {renderRadioButton(
            "master",
            IMAGES.masterCard,
            "Credit Card",
            "11 22 **** 5566"
          )}
          {renderRadioButton(
            "visa",
            IMAGES.visa,
            "Credit Card",
            "11 22 **** 5566"
          )}
          <View style={commonStyles.lineBar}/>
          <Typography>Add New Card</Typography>
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
            <View row gap-10 marginV-10>
              <TouchableOpacity onPress={() => setSaveCard(!saveCard)}>
                <View style={styles.radioCircle}>
                  {saveCard && (
                    <Image
                      source={IMAGES.click}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: "#2e86de",
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <Typography>Save for next time</Typography>
            </View>
            <Button
              label={"Pay Now"}
              backgroundColor={theme.color.secondry}
              borderRadius={10}
              style={{ paddingVertical: 15 }}
              onPress={() => setBottomSheetVisible(true)}
            />
          </View>
        </View>
      </ScrollView>
      {isBottomSheetVisible && (
        <BottomSheet
          onClose={() => {
            setBottomSheetVisible(false);
            if (params?.isFrom == "Where To\nDeliver") {
              navigate(SCREENS.MAIL_DELIVERED);
            } else if (params?.isFrom == "Book A\nRide") {
              navigate(SCREENS.RIDE_DETAILS);
            } else if (params?.isFrom == "Book A\nBus") {
              console.log("==================================");
              navigate(SCREENS.E_TICKET);
            } else {
            }
          }}
        >
          <LottieView
            ref={animationRef}
            source={require("../../components/Animation/PaymentLottie.json")}
            autoPlay
            style={{ height: 150, width: 150, alignSelf: "center" }}
          />
          <View center marginV-10>
            <Typography
              textType="bold"
              size={theme.fontSize.large20}
              style={{ marginVertical: 20 }}
            >
              Payment Successfully
            </Typography>
            <Typography color={theme.color.tgray} size={theme.fontSize.small}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the dummy text ever since the
              1500s,
            </Typography>
          </View>
        </BottomSheet>
      )}
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    marginRight: 20,
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

export default PaymentMethod;
