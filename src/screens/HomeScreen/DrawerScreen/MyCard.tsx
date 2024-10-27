import React, { useRef, useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { Header } from "../../../components/atoms/Header";
import { Typography } from "../../../components/atoms/Typography";
import { IMAGES, SCREENS, theme } from "../../../constants";
import { InputText } from "../../../components/atoms/InputText";
import { InputDateTime } from "../../../components/atoms/InputDateTime";
import { navigate } from "../../../navigation/RootNavigation";
import BottomSheet from "../../../components/atoms/CustomModal";
import LottieView from "lottie-react-native";

const MyCard = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const renderRadioButton = (option, imgSource, cardType, cardNumber) => (
    <View row spread style={{alignItems:'center'}}>
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
        <Header titleText="My Cards" />
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
          <Button
            label={"Add Card"}
            backgroundColor={theme.color.primary}
            borderRadius={10}
            style={{ paddingVertical: 15,marginTop:80 }}
            onPress={() => navigate(SCREENS.ADD_CARD)}
          />
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flex:1,
    flexDirection: "row",
    padding: 20,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    marginRight:20
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
    backgroundColor: theme.color.primary

  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: theme.color.primary,
    marginHorizontal: 10,
  },
});

export default MyCard;
