import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, View } from "react-native-ui-lib";
import { Typography } from "../../../components/atoms/Typography";
import { IMAGES, SCREENS, SCREEN_WIDTH, theme } from "../../../constants";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { Header } from "../../../components/atoms/Header";
import { navigate } from "../../../navigation/RootNavigation";
import { CustomBtn } from "../../../components/atoms/CustomBtn";

const Home = () => {
  const navigation = useNavigation();
  const renderItem = ({ image, title, subTitle }: any) => {
    return (
      <View row gap-20>
        <View>
          <Typography size={theme.fontSize.small} color="#A6A6A6">
            {title}
          </Typography>
          <Typography textType="bold">{subTitle}</Typography>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Header titleText="Assigned Bus" rightIcon={false} />
        <View padding-20 >
          <View style={{ borderWidth: 1, borderStyle: "dashed", borderRadius: 20 }}>
            <ImageBackground
              source={IMAGES.ShipmentTracking}
              style={{ width: '100%', height: 300 }}
              resizeMode="contain"
            >
              <Image
                source={IMAGES.mapLine}
                style={{ width: 350, height: 300 }}
                resizeMode="contain"
              />
            </ImageBackground>

            <View row paddingH-20 gap-20 marginV-10>
              <View gap-20 flex>
                {renderItem({
                  title: "Bus Registration No",
                  subTitle: "Abc-123",
                })}
                {renderItem({
                  title: "Pickup Location",
                  subTitle: "Abc Street",
                })}

                {renderItem({
                  title: "Departure Date",
                  subTitle: "26-Sep-2024",
                })}
              </View>
              <View gap-20 flex>
                {renderItem({
                  title: "Sitting Capacity",
                  subTitle: "50 Seats",
                })}
                {renderItem({
                  title: "Dropoff Location",
                  subTitle: "Abc Street",
                })}
                {renderItem({
                  title: "Departure Time",
                  subTitle: "03:00 PM",
                })}
              </View>
            </View>
            <View paddingH-20 row gap-30 marginV-20>
              <View flex>
                <Typography size={theme.fontSize.small} color="#A6A6A6">
                  Passengers
                </Typography>
                <View row>
                  <Typography textType="bold">30 Persons</Typography>
                  <TouchableOpacity onPress={() => navigate(SCREENS.PASSENGER)}>
                    <Typography textType="bold">(Details)</Typography>
                  </TouchableOpacity>
                </View>
              </View>

              <View flex>
                <Typography size={theme.fontSize.small} color="#A6A6A6">
                  Estimated TIme
                </Typography>
                <Typography textType="bold">2:45 PM</Typography>
              </View>
            </View>
            <CustomBtn
              label={"Arrived"}
              style={{ margin: 20 }}
              onPress={() => {
                navigate(SCREENS.NAV_DRAVER_SCREEN);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default Home;
