import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, SCREENS, SCREEN_WIDTH, theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import { useNavigation } from "@react-navigation/native";

const History = () => {
  const notifications = [
    {
      id: 1,
      message: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do.",
      date: "7 March 2018",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      message: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
      date: "10 March 2018",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      message:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
      date: "12 March 2018",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      message: "Nulla gravida orci a odio. Curabitur pretium tincidunt lacus.",
      date: "15 March 2018",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      message: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do.",
      date: "18 March 2018",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      message: "Nulla gravida orci a odio. Curabitur pretium tincidunt lacus.",
      date: "20 March 2018",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 7,
      message:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
      date: "22 March 2018",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 8,
      message: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
      date: "24 March 2018",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      id: 9,
      message: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do.",
      date: "26 March 2018",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 10,
      message: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
      date: "28 March 2018",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];
  const navigation = useNavigation();

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Header
          titleText="Tracking History"
          leftIcon={IMAGES.menu}
          leftWidth={25}
          leftHeight={25}
          onPressLeft={() => navigation.openDrawer()}
        />

        <View padding-20>
          {notifications.map((notification) => (
            <View style={styles.viewStyle}>
              <View row gap-10>
                <Image
                  source={IMAGES.Shipment}
                  style={{
                    width: 100,
                    height: 150,
                    borderWidth: 3,
                    borderRadius: 10,
                    borderColor: "#ECECEC",
                  }}
                  resizeMode="cover"
                />
                <View flex>
                  <View row spread>
                    <Typography
                      color="#00950A"
                      size={theme.fontSize.extraSmall}
                      textType="bold"
                    >
                      Completed
                    </Typography>
                    <View
                      style={{
                        left: 10,
                        borderWidth: 1,
                        padding: 5,
                        backgroundColor: theme.color.primary,
                        borderRadius: 10,
                      }}
                    >
                      <Typography
                        textType="bold"
                        size={theme.fontSize.small}
                        color="#fff"
                      >
                        Carpool Ride
                      </Typography>
                    </View>
                  </View>

                  <View row spread gap-20 marginT-20>
                    <Typography
                      style={{ width: Platform.OS == "ios" ? 0 : "30%" }}
                      color="#A6A6A6"
                      size={theme.fontSize.extraSmall}
                    >
                      Pickup Location
                    </Typography>
                    <Typography
                      style={{ width: Platform.OS == "ios" ? 0 : "30%" }}
                      color="#A6A6A6"
                      size={theme.fontSize.extraSmall}
                    >
                      Dropoff Location
                    </Typography>
                  </View>

                  <View row spread>
                    <Typography
                      textType="bold"
                      size={theme.fontSize.extraSmall}
                    >
                      Abc Street
                    </Typography>
                    <Typography
                      textType="bold"
                      size={theme.fontSize.extraSmall}
                    >
                      Abc Street
                    </Typography>
                  </View>

                  <View row spread marginT-20>
                    <Typography
                      color="#A6A6A6"
                      size={theme.fontSize.extraSmall}
                    >
                      Passengers
                    </Typography>
                    <Typography
                      color="#A6A6A6"
                      size={theme.fontSize.extraSmall}
                    >
                      Estimated Cost
                    </Typography>
                  </View>

                  <View row spread>
                    <Typography
                      textType="bold"
                      size={theme.fontSize.extraSmall}
                    >
                      2 Persons
                    </Typography>
                    <Typography
                      textType="bold"
                      size={theme.fontSize.extraSmall}
                    >
                      $30
                    </Typography>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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

  carpolRideView: {
    backgroundColor: theme.color.primary,
    width: "auto",
    height: "auto",
    paddingVertical: 10,
    position: "absolute",
    paddingHorizontal: 10,
    right: 0,
    top: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

export default History;
