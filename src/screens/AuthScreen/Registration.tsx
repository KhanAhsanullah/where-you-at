import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Typography } from "../../components/atoms/Typography";
import { Header } from "../../components/atoms/Header";
import { navigate } from "../../navigation/RootNavigation";
import { IMAGES, SCREENS, theme } from "../../constants";
import { View } from "react-native-ui-lib";
import { CustomBtn } from "../../components/atoms/CustomBtn";
import Icon from "react-native-vector-icons/AntDesign";
import BottomSheet from "../../components/atoms/CustomModal";
import LottieView from "lottie-react-native";
import { setLoggedIn, setUserType } from "../../redux/slice/user";

const Registration = () => {
  const DATA = [
    { title: "Vehicle Info", navigateTo: SCREENS.VECHILE_INFO },
    { title: "ID Card", navigateTo: SCREENS.ID_CARD },
    { title: "ID Confirmaton", navigateTo: SCREENS.ID_CONFIRMATION },
    { title: "Driver License", navigateTo: SCREENS.DRIVER_LICENSE },
    { title: "Legal Consent", navigateTo: SCREENS.LEGAL_CONSENT },
  ];
  
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const animationRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <SafeAreaContainer mode={"dark"} safeArea={false}>
      <Header titleText="" rightIcon={false} />
      <Typography
        textType="bold"
        size={theme.fontSize.extraLarge}
        style={{ paddingHorizontal: 20 }}
      >
        Registration
      </Typography>
      <Typography
        style={{ paddingHorizontal: 20 }}
        color={theme.color.tgray}
        size={theme.fontSize.extraSmall12}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut
      </Typography>
      <View padding-20>
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Image
            source={IMAGES.infoIcon}
            style={{ width: 25, height: 25 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 0.4,
            padding: 10,
            borderRadius: 10,
            marginVertical: 20,
          }}
        >
          {DATA.map((item, index) => {
            const hasBorder = index < DATA.length - 1;
            return (
              <TouchableOpacity
                key={item.title}
                onPress={() => navigate(item.navigateTo)}
              >
                <View
                  row
                  spread
                  marginV-10
                  paddingB-20
                  style={{ borderBottomWidth: hasBorder ? 0.2 : 0 }}
                >
                  <Typography>{item.title}</Typography>
                  <Icon name="right" size={22} color={theme.color.black} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View marginV-20>
          <CustomBtn
            label={"Continue"}
            onPress={() => setBottomSheetVisible(true)}
          />
        </View>
      </View>

      {isBottomSheetVisible && (
        <BottomSheet
          onClose={() => {
            setBottomSheetVisible(false);
            dispatch(setLoggedIn(true));
            dispatch(setUserType("driver"))
            navigate(SCREENS.HOME_DRIVER)
          }}
        >
          <LottieView
            ref={animationRef}
            source={require("../../components/Animation/checkLottie.json")}
            autoPlay
            style={{ height: 200, width: 250, alignSelf: "center" }}
          />
          <View center marginV-10>
            <Typography
              textType="bold"
              size={theme.fontSize.large20}
              style={{ marginVertical: 20 }}
            >
              Applicantion Sent
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

export default Registration;
