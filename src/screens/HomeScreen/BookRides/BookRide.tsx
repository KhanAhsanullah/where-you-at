import React, { useRef, useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { Header } from "../../../components/atoms/Header";
import { Typography } from "../../../components/atoms/Typography";
import { InputText } from "../../../components/atoms/InputText";
import { IMAGES, SCREENS, theme } from "../../../constants";
import { InputDateTime } from "../../../components/atoms/InputDateTime";
import { commonStyles } from "../../../globalStyle";
import BottomSheet from "../../../components/atoms/CustomModal";
import LottieView from "lottie-react-native";
import { navigate } from "../../../navigation/RootNavigation";
import { DropDown } from "../../../components/atoms/DropDown";
import { BAG_TYPES, NUM_BAGS } from "../../../containers/dummy";

const BookRide = ({ route }) => {
  const { from } = route.params; // Receive the parameter
  const [selectedOption, setSelectedOption] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [bag, setBag] = useState('');
  const [noOfBags, setNoofBags] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const animationRef = useRef(null);

  const _radioBtn = () => {
    return (
      <View row gap-20 marginH-20>
        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => setSelectedOption("home")}
        >
          <View style={styles.radioCircle}>
            {selectedOption === "home" && <View style={styles.selectedRb} />}
          </View>
          <Typography style={styles.radioText}>Luggage</Typography>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => setSelectedOption("office")}
        >
          <View style={styles.radioCircle}>
            {selectedOption === "office" && <View style={styles.selectedRb} />}
          </View>
          <Typography style={styles.radioText}>No Luggage</Typography>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Header
          titleText={from === "Book A\nBus" ? "Trip Details" : "Ride Details"}
        />
        <View padding-20>
          {from === "Book A\nBus" && (
            <InputText
              style={{ borderRadius: 50 }}
              placeholder="Number of Passengers"
              leftImage={IMAGES.userIcon}
            />
          )}
          <InputText
            style={{ borderRadius: 50 }}
            placeholder="Stop Location"
            placeholderTextColor="#B8B8B8"
            leftImage={IMAGES.mapIcon}
            rightImage={true}
            rightIconType="dropdown"
            secureTextEntry={false}
          />
          <InputText
            style={{ borderRadius: 50 }} 
            placeholder="Enter Dropoff Location"
            placeholderTextColor="#B8B8B8"
            leftImage={IMAGES.mapIcon}
          />
          {_radioBtn()}

          {selectedOption === "home" && (
            <View gap-20>
              <DropDown data={BAG_TYPES} placeholder={"Type of bags"} style={{borderWidth:0.1}} onChange={(e:string)=>setBag(e)}/>
              <DropDown data={NUM_BAGS} placeholder={"Number of bags"} style={{borderWidth:0.1}} onChange={(e:string)=>setNoofBags(e)}/>
            </View>
          )}

          <InputDateTime
            mode={"date"}
            value={date}
            onChange={setDate}
            onConfirm={(selectedDate) => setDate(selectedDate)}
            visible={datePickerVisible}
          />
          <InputDateTime
            placeholder="Select Time"
            mode={"time"}
            value={time}
            rightIcon={IMAGES.watchIcon}
            onChange={setTime}
            onConfirm={(selectedTime) => setTime(selectedTime)}
            visible={datePickerVisible}
          />

          <View
            style={[
              commonStyles.cardWithShadow,
              { backgroundColor: theme.color.black },
            ]}
          >
            <View row spread padding-10 style={{ alignItems: "center" }}>
              <View flex>
                <Typography color={theme.color.white}>
                  Estimated Delivery Cost
                </Typography>
                <Typography
                  color={theme.color.white}
                  size={theme.fontSize.extraSmall}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing
                </Typography>
              </View>
              <Typography color={theme.color.white} textType="bold" size={26}>
                $50
              </Typography>
            </View>
          </View>
          <Button
            label={"Submit"}
            backgroundColor={theme.color.secondry}
            borderRadius={10}
            style={{ paddingVertical: 15 }}
            onPress={() => setBottomSheetVisible(true)}
          />
        </View>
      </ScrollView>
      {isBottomSheetVisible && (
        <BottomSheet showButton={false}>
          <LottieView
            ref={animationRef}
            source={require("../../../components/Animation/QuerySubmit.json")}
            autoPlay
            style={{ height: 150, width: 150, alignSelf: "center" }}
          />
          <View center marginV-10>
            <Typography
              textType="bold"
              size={theme.fontSize.large20}
              style={{ marginVertical: 20 }}
            >
              Ride Confirmation
            </Typography>
            <Typography color={theme.color.tgray} size={theme.fontSize.small}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
            <View row gap-20 marginV-20>
              <Button
                label="No"
                backgroundColor={"#B8B8B8"}
                style={{ borderRadius: 10, width: 100 }}
                onPress={() => setBottomSheetVisible(false)}
              />
              <Button
                label="Yes"
                backgroundColor={theme.color.primary}
                style={{ borderRadius: 10, width: 100 }}
                onPress={() => {
                  setBottomSheetVisible(false);
                  navigate(SCREENS.PAYMENT_METHOD, {
                    isFrom: from,
                  });
                }}
              />
            </View>
          </View>
        </BottomSheet>
      )}
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
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
});

export default BookRide;
