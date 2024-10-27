import React, { useState, useRef } from "react";
import { TouchableOpacity } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Typography } from "../../components/atoms/Typography";
import { Header } from "../../components/atoms/Header";
import { navigate, onBack } from "../../navigation/RootNavigation";
import { IMAGES, SCREENS, theme } from "../../constants";
import { View } from "react-native-ui-lib";
import { CustomBtn } from "../../components/atoms/CustomBtn";
import Icon from "react-native-vector-icons/AntDesign";
import BottomSheet from "../../components/atoms/CustomModal";
import LottieView from "lottie-react-native";

const VechileInfo = () => {
  const DATA = [
    { title: "Select transport", navigateTo: SCREENS.SELECT_TRANSPORT },
    { title: "Number PLate", navigateTo: SCREENS.NUMBER_PLATE },
    {
      title: "Confirmaton of Vehicle registraton",
      navigateTo: SCREENS.CERTIFICATE,
    },
    { title: "Vehicle production year", navigateTo: SCREENS.VECHILE_YEAR },
  ];
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const animationRef = useRef(null);

  return (
    <SafeAreaContainer mode={"dark"} safeArea={false}>
      <Header titleText="" rightIcon={false} />
      <Typography
        textType="bold"
        size={theme.fontSize.extraLarge}
        style={{ paddingHorizontal: 20 }}
      >
        Vehicle Info
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
          <CustomBtn label={"Continue"} onPress={() => onBack()} />
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default VechileInfo;
