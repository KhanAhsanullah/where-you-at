import React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, SCREENS, SCREEN_WIDTH, theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import BusRouteMap from "../../components/atoms/BusRouteMap";
import { commonStyles } from "../../globalStyle";
import { navigate } from "../../navigation/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import { CustomBtn } from "../../components/atoms/CustomBtn";

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
        <Header
          leftIcon={IMAGES.menu}
          titleText="Assigned Bus"
          onPressLeft={() => navigation.openDrawer()}
          leftWidth={25}
          leftHeight={25}
          rightIcon={false}
        />
        <View padding-20 center>
          <View
            style={{ borderWidth: 1, borderStyle: "dashed", borderRadius: 20 }}
          >
            <Image
              source={IMAGES.bus}
              style={{ width: 350, height: 300 }}
              resizeMode="contain"
            />

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
              <View row >
              <Typography textType="bold">30 Persons</Typography>
              <TouchableOpacity onPress={()=>navigate(SCREENS.PASSENGER)}>
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
              label={"Start Ride"}
              style={{ margin: 20 }}
              onPress={()=>{navigate(SCREENS.BUS_DETAIL)}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default Home;
