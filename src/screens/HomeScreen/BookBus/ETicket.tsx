import React, { useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { Header } from "../../../components/atoms/Header";
import { Typography } from "../../../components/atoms/Typography";
import { IMAGES, SCREENS, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";
import { navigate, onBack } from "../../../navigation/RootNavigation";
import BottomSheet from "../../../components/atoms/CustomModal";
import LottieView from "lottie-react-native";

const ETicket = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [visible, setVisible] = useState(true);
  const animationRef = useRef(null);
  const renderItem = ({ image, title, subTitle }: any) => {
    return (
      <View row gap-20 marginH-10>
        <View>
          <Typography color={theme.color.white} size={theme.fontSize.small}>
            {title}
          </Typography>
          <Typography
            color={theme.color.white}
            textType="semiBold"
            size={theme.fontSize.medium}
          >
            {subTitle}
          </Typography>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <Header titleText="E-Ticket" />
      <View padding-20>
        <View
          style={[
            commonStyles.cardWithShadow,
            { backgroundColor: theme.color.primary },
          ]}
        >
          <View row gap-10 center marginV-20>
            <View
              style={[
                commonStyles.lineBar,
                { borderStyle: "dashed", borderWidth: 1, borderColor: "#fff" },
              ]}
            />
            <Typography color={theme.color.white}>Ticket No:</Typography>
            <Typography textType="bold" color={theme.color.white}>
              1234567890
            </Typography>
            <View
              style={[
                commonStyles.lineBar,
                { borderStyle: "dashed", borderWidth: 1, borderColor: "#fff" },
              ]}
            />
          </View>
          <View row spread marginV-20 gap-20>
            <View gap-20 flex>
              {renderItem({
                title: "Pickup Location",
                subTitle: "Abc Street",
              })}
              {renderItem({
                title: "Departure Time",
                subTitle: "03:00 PM",
              })}
              {renderItem({
                title: "Bus Registration",
                subTitle: "Abc-123",
              })}
            </View>

            <View
              style={[
                commonStyles.verticleLine,
                { borderStyle: "dashed", borderWidth: 1, borderColor: "#fff" },
              ]}
            />
            <View gap-20 flex>
              {renderItem({
                title: "Dropoff Location",
                subTitle: "Abc Street",
              })}
              {renderItem({
                title: "Estimated TIme",
                subTitle: "2:45 PM",
              })}
              {renderItem({
                title: "Seat No",
                subTitle: "22",
              })}
            </View>
          </View>
      
        </View>
        <Button
              label={"Scan QR Code"}
              backgroundColor={theme.color.secondry}
              borderRadius={10}
              style={{ paddingVertical: 15, marginVertical: 40 }}
              onPress={() => navigate(SCREENS.SCAN_QR)}
            />
            {
              visible  && 
              <TouchableOpacity onPress={() => setBottomSheetVisible(true)}>
              <Typography align="center" textType="bold" color={"#566EF1"}>Save Ticket</Typography>
              </TouchableOpacity>
            }
          
      </View>

      {isBottomSheetVisible && (
        <BottomSheet
          onClose={() => {navigate(SCREENS.HOME)}}
        >
          <LottieView
            ref={animationRef}
            source={require("../../../components/Animation/TicketLottie.json")}
            autoPlay
            style={{ height: 150, width: 150, alignSelf: "center" }}
          />
          <View center marginV-10>
            <Typography
              textType="bold"
              size={theme.fontSize.large20}
              style={{ marginVertical: 20 }}
            >
              Ticket Saved
            </Typography>
            <Typography color={theme.color.tgray} size={theme.fontSize.small} align="center"> 
            Your ticket has been saved. You can see your E-Ticket in My Activity section.
            </Typography>
          </View>
        </BottomSheet>
      )}

    </SafeAreaContainer>
  );
};

export default ETicket;
