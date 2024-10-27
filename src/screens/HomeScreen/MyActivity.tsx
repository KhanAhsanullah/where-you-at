import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  ImageBackground,
} from "react-native";
import { Button, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, SCREENS, theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import { useNavigation } from "@react-navigation/native";
import { navigate } from "../../navigation/RootNavigation";

const MyActivity = () => {
  const [selectedService, setSelectedService] = useState("Carpool"); // Tracks selected service
  const [selectedTab, setSelectedTab] = useState("Active"); // Tracks selected tab

  const navigation = useNavigation();
  // Example data for services and tabs
  const data = {
    Carpool: {
      Active: [
        { from: "Toronto", to: "Montreal" },
        { from: "Toronto", to: "Montreal" },
        { from: "Toronto", to: "Montreal" },
      ],
      Completed: [
        { from: "Toronto", to: "Vancouver" },
        { from: "Toronto", to: "Vancouver" },
        { from: "Toronto", to: "Vancouver" },
      ],
      Cancelled: [
        { from: "Toronto", to: "Calgary" },
        { from: "Toronto", to: "Calgary" },
        { from: "Toronto", to: "Calgary" },
      ],
    },
    "Mail Delivery": {
      Active: [
        { from: "New York", to: "Boston" },
        { from: "New York", to: "Boston" },
        { from: "New York", to: "Boston" },
      ],
      Completed: [
        { from: "New York", to: "Boston" },
        { from: "New York", to: "Boston" },
        { from: "New York", to: "Boston" },
      ],
      Cancelled: [
        { from: "New York", to: "Boston" },
        { from: "New York", to: "Boston" },
        { from: "New York", to: "Boston" },
      ],
    },
    "Bus Service": {
      Active: [
        { from: "Chicago", to: "Dallas" },
        { from: "Chicago", to: "Dallas" },
      ],
      Completed: [
        { from: "Chicago", to: "Houston" },
        { from: "Chicago", to: "Houston" },
      ],
      Cancelled: [
        { from: "Chicago", to: "Austin" },
        { from: "Chicago", to: "Austin" },
      ],
    },
  };

  // Service buttons
  const renderServiceButtons = () => {
    const services = ["Carpool", "Mail Delivery", "Bus Service"];
    return (
      <View style={styles.mainBorder}>
        <View row spread>
          {services.map((service) => (
            <TouchableOpacity
              key={service}
              style={[
                styles.serviceButton,
                selectedService === service && styles.selectedServiceButton,
              ]}
              onPress={() => setSelectedService(service)}
            >
              <Typography
                textType="bold"
                color={
                  selectedService === service
                    ? theme.color.white
                    : theme.color.primary
                }
              >
                {service}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  // Tab buttons
  const renderTabButtons = () => {
    const tabs = ["Active", "Completed", "Cancelled"];
    return (
      <View style={[styles.mainBorder]}>
        <View row spread>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                selectedTab === tab && styles.selectedTabButton,
              ]}
              onPress={() => setSelectedTab(tab)}
            >
              <Typography
                textType="bold"
                color={
                  selectedTab === tab ? theme.color.white : theme.color.primary
                }
              >
                {tab}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
  // Render dynamic data based on service and tab selection
  const renderServiceData = () => {
    const selectedData = data[selectedService][selectedTab];
    return (
      <FlatList
        data={selectedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              if (selectedService == "Carpool") {
                navigate(SCREENS.ACTIVITY_DETAILS, {
                  header: "Carpool Details",
                });
              } else if (selectedService == "Mail Delivery") {
                navigate(SCREENS.ACTIVITY_DETAILS, {
                  header: "Mail Delivery Details",
                  text:'Mail Description',
                  title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur",
                });
              } else {
                navigate(SCREENS.BUS_DETAIL2, {
                  header: "Bus Ride Detail",
                });
              }
            }}
          >
            <View row gap-10 style={styles.itemContainer}>
              <ImageBackground
                source={IMAGES.Shipment}
                style={{
                  width: 70,
                  height: 70,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                resizeMode="contain"
              >
                <Image
                  source={IMAGES.mapIcon}
                  style={{ width: 30, height: 30 }}
                  resizeMode="contain"
                />
              </ImageBackground>
              <View>
                <Typography color={theme.color.white}>From</Typography>
                <Typography
                  textType="bold"
                  size={theme.fontSize.medium}
                  color={theme.color.white}
                >
                  {item.from}
                </Typography>
              </View>
              <Image
                source={IMAGES.lineSS}
                style={{ width: 100, height: 40 }}
                resizeMode="contain"
              />
              <View>
                <Typography color={theme.color.white}>To</Typography>
                <Typography
                  textType="bold"
                  size={theme.fontSize.medium}
                  color={theme.color.white}
                >
                  {item.to}
                </Typography>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Header
          titleText="My Activity"
          leftIcon={IMAGES.menu}
          onPressLeft={() => navigation?.openDrawer()}
          leftWidth={25}
          leftHeight={25}
        />

        {/* Main Content */}
        <View padding-15>
          <View style={styles.mainContainer}>
            {/* Top service buttons */}
            {renderServiceButtons()}

            {/* Bottom status tabs */}
            {renderTabButtons()}

            {/* Data based on selected service and tab */}
            {renderServiceData()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainBorder: {
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginVertical: 20,
    justifyContent: "center",
    borderColor: theme.color.primary,
  },

  serviceButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    // borderWidth: 1,
    borderColor: "#1c2955",
  },
  selectedServiceButton: {
    backgroundColor: "#1c2955",
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: "#1c2955",
  },
  selectedTabButton: {
    backgroundColor: "#1c2955",
  },
  tabButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  itemContainer: {
    padding: 5,
    backgroundColor: "#A7A7A7",
    marginVertical: 5,
    borderRadius: 20,
    alignItems: "center",
  },
});

export default MyActivity;
