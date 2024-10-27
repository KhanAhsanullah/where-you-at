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
import BottomSheet from "../../components/atoms/CustomModal";
import { InputText } from "../../components/atoms/InputText";

const DriverMailDetail = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Header titleText="Mail Delivery Detail" />

        <View padding-20>
          <View style={styles.viewStyle}>
            <Image
              source={IMAGES.Shipment}
              style={{
                width: "100%",
                height: 150,
                borderWidth: 3,
                borderRadius: 10,
                borderColor: "#ECECEC",
              }}
              resizeMode="cover"
            />

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
            <View flex marginH-10>
              <Typography color={theme.color.tgray}>
                Mail Description
              </Typography>
              <Typography textType="semiBold" size={theme.fontSize.small}>
                $Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur
              </Typography>
            </View>

            <View marginV-20 row gap-20>
              <TouchableOpacity
                onPress={() => navigate(SCREENS.ACCEPT_MAIL_RIDE)}
              >
                <ImageBackground
                  source={IMAGES.acceptImg}
                  style={{
                    width: 150,
                    height: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: 30,
                  }}
                  resizeMode="contain"
                >
                  <Typography color={"#00950A"} size={10}>
                    Accept Request
                  </Typography>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setBottomSheetVisible(true)}>
                <Image
                  source={IMAGES.rejectImg}
                  style={{ width: 150, height: 80 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {isBottomSheetVisible && (
        <BottomSheet
          buttonText="Submit"
          onClose={() => {
            setBottomSheetVisible(false);
          }}
        >
          <View marginV-10>
            <Typography
              textType="bold"
              align={"center"}
              size={theme.fontSize.large20}
              style={{ marginVertical: 20 }}
            >
              Reason For Decline
            </Typography>
            <Typography
              color={theme.color.tgray}
              size={theme.fontSize.extraSmall12}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the dummy text ever since the
              1500s,
            </Typography>
            <Typography>Reason for Decline</Typography>
            <View>
              <InputText
                placeholder="Enter reason for decline here..."
                placeholderTextColor={theme.color.primary}
                leftIcon={false}
                multiline
                style={{ padding: 20, height: 300, borderRadius: 20 }}
              />
            </View>
          </View>
        </BottomSheet>
      )}
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

export default DriverMailDetail;
