import React from "react";
import {
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { IMAGES, SCREENS, SCREEN_WIDTH, theme } from "../constants";
import { Typography } from "../components/atoms/Typography";
import { setLoggedIn } from "../redux/slice/user";
import { useDispatch, useSelector } from "react-redux";
import { navigate, onBack } from "./RootNavigation";
import { AppNavigator } from "./AppNavigator";
import { View } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Entypo";
import { RootState } from "../redux/store";

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  const dispatch = useDispatch();
  const userRole = useSelector((state:RootState) => state.user.userType)

  const DRAWERTABS = [
    { key: 0, 
      title: "Home", 
      navigateTo: SCREENS.HOME  
    },
    {
      key: 1,
      title: "Settings",
      navigateTo: SCREENS.SETTING,
      image: IMAGES.setting,
    },
   
    {
      key: 3,
      title: "Contact Us",
      navigateTo: SCREENS.CONTACT_US,
      image: IMAGES.call,
    },
    {
      key: 4,
      title: "About Us",
      navigateTo: SCREENS.ABOUT,
      image: IMAGES.homeUser,
    },
  ].filter(Boolean);

  const CustomDrawerItem = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => navigate(item.navigateTo)}
      style={styles.drawerItem}
    >
      <Image
        source={item.image}
        style={{ width: 20, height: 20 }}
        resizeMode="contain"
      />
      <Typography color={theme.color.white} style={styles.drawerItemText}>
        {item.title}
      </Typography>
    </TouchableOpacity>
  );

  const CustomDrawerContent = () => (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContent}>
    <TouchableOpacity style={{position:'absolute',top:30}} onPress={()=>onBack()}>
      <Icon name="cross" size={30} color={theme.color.black} />
      </TouchableOpacity>
  
      <View gap-10 style={styles.profileContainer}>
        <Image
          source={IMAGES.avatar}
          style={styles.avatar}
          resizeMode="contain"
        />
        <Typography color={theme.color.white} textType="bold">
          Simon_lewis123
        </Typography>
      </View>
      <FlatList
        data={DRAWERTABS}
        renderItem={({ item }) => <CustomDrawerItem item={item} />}
        keyExtractor={(item) => item.key.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <TouchableOpacity onPress={customAlert} style={styles.logoutButton}>
        <Typography color={theme.color.white} style={styles.logoutText}>
          Logout
        </Typography>
        <Image
          source={IMAGES.logout}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </DrawerContentScrollView>
  );

  const customAlert = () => {
    Alert.alert("Logout", "Do you want to logout?", [
      { text: "Cancel", onPress: null },
      { text: "OK", onPress: () => dispatch(setLoggedIn(false)) },
    ]);
  };

  return (
    <View style={styles.container}>
      <Drawer.Navigator
        drawerType="front"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyle}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: theme.color.primary,
            width: SCREEN_WIDTH * 0.7,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            padding: 10,
          },
          drawerActiveBackgroundColor:"red",
          sceneContainerStyle:{backgroundColor:"green"}
        }}
        // sceneContainerStyle={{ backgroundColor: "" }}
        drawerContent={(props) => <CustomDrawerContent />}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home"  component={AppNavigator} />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerStyle: {
    flex: 1,
    paddingRight: 20,
    backgroundColor: "red",
  },
  drawerContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileContainer: {
    marginVertical: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  drawerItemText: {
    alignSelf: "center",
    marginLeft: 10,
  },
  logoutButton: {
    marginBottom: 60,
    marginLeft: 20,
    flexDirection: "row",
  },
  logoutText: {
    alignSelf: "center",
    marginRight: 10,
  },
});

export default DrawerScreen;
