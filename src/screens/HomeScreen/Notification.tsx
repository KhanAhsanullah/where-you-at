import React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, SCREENS, SCREEN_WIDTH, theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import { useNavigation } from "@react-navigation/native";

const Notification = () => {
  // Array of notifications with 10 items
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
          titleText="Notifications"
          leftIcon={IMAGES.menu}
          leftWidth={25}
          leftHeight={25}
          onPressLeft={()=> navigation.openDrawer()} 
        />

        <View padding-20>
          {/* Mapping over the notifications array to display multiple cards */}
          {notifications.map((notification) => (
            <View
              key={notification.id}
              row
              style={{
                borderWidth: 1,
                borderColor: theme.color.tgray,
                padding: 10,
                gap: 10,
                borderRadius: 10,
                paddingVertical: 20,
                marginBottom: 15, // Add some space between cards
              }}
            >
              <Image
                source={{ uri: notification.image }} // Using the dummy images from randomuser.me
                style={{ width: 55, height: 55, borderRadius: 55 / 2 }}
                resizeMode="contain"
              />
              <View flex>
                <Typography>{notification.message}</Typography>
                <Typography
                  color={"#B0B3BA"}
                  style={{ paddingRight: 20 }}
                  align="right"
                >
                  {notification.date}
                </Typography>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default Notification;
