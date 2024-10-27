import React, { useRef, useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import { InputText } from "../../components/atoms/InputText";
import { IMAGES, SCREENS, theme } from "../../constants";
import ImageUploader from "../../components/atoms/ImageUploader";
import { InputDateTime } from "../../components/atoms/InputDateTime";
import { commonStyles } from "../../globalStyle";
import BottomSheet from "../../components/atoms/CustomModal";
import LottieView from "lottie-react-native";
import { navigate } from "../../navigation/RootNavigation";

const DeliveryDetails = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [date, setDate] = useState(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const animationRef = useRef(null);
  const _radioBtn = () => {
    return (
      <View row gap-20>
        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => setSelectedOption("home")}
        >
          <View style={styles.radioCircle}>
            {selectedOption === "home" && <View style={styles.selectedRb} />}
          </View>
          <Typography style={styles.radioText}>From Home</Typography>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => setSelectedOption("office")}
        >
          <View style={styles.radioCircle}>
            {selectedOption === "office" && <View style={styles.selectedRb} />}
          </View>
          <Typography style={styles.radioText}>From Office</Typography>
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
        <Header titleText="Delivery Details" />
        <View padding-20>
          {_radioBtn()}

          {selectedOption === "home" ? (
            <InputText
              style={{ borderRadius: 50 }}
              placeholder="Enter Pickup Location"
              leftImage={IMAGES.mapIcon}
            />
          ) : (
            <InputText
              style={{ borderRadius: 50 }}
              placeholder="Office Location"
              leftImage={IMAGES.mapIcon}
              rightImage={true}
              rightIconType="dropdown"
              secureTextEntry={false}
            />
          )}
          <InputText
            style={{ borderRadius: 50 }}
            placeholder="Enter Dropoff Location"
            leftImage={IMAGES.mapIcon}
          />
          <InputText
            leftIcon={false}
            label="Mail Description"
            style={{ padding: 20, height: 250 }}
            maxLength={255}
            multiline
            placeholder="Enter Description"
          />
          <ImageUploader />

          <InputDateTime
            mode={"date"}
            value={date}
            onChange={setDate}
            onConfirm={(selectedDate) => {
              console.log("Selected Date:", selectedDate);
              setDate(selectedDate);
            }}
            visible={datePickerVisible}
          />
          <View marginV-20>
            <Typography textType="bold" size={theme.fontSize.large20}>
              Shipping instuctions
            </Typography>
            <Typography color={theme.color.tgray} size={theme.fontSize.medium}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero
            </Typography>
          </View>
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
                  style={{ width: "100%" }}
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
        <BottomSheet
          onClose={() => {
            setBottomSheetVisible(!isBottomSheetVisible);
            navigate(SCREENS.PAYMENT_METHOD, {
              isFrom: "Where To\nDeliver",
            });
          }}
        >
          <LottieView
            ref={animationRef}
            source={require("../../components/Animation/QuerySubmit.json")}
            autoPlay
            style={{ height: 150, width: 150, alignSelf: "center" }}
          />
          <View center marginV-10>
            <Typography
              textType="bold"
              size={theme.fontSize.large20}
              style={{ marginVertical: 20 }}
            >
              Query Submitted
            </Typography>
            <Typography color={theme.color.tgray} size={theme.fontSize.medium}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Typography>
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

export default DeliveryDetails;
