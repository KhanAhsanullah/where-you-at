import React from "react";
import { View, Text } from "react-native-ui-lib";
import { theme } from "../constants/Constants";
import { navigate } from "./RootNavigation";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { IMAGES, SCREENS } from "../constants";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const BottomTabs = (props: any) => {
  const {userType:userRole ,isOnline}  = useSelector((state:RootState) => state.user)
  
  const BOTTOMTABS = [
    {
      key:0,
      image:IMAGES.homeIcon,
      navigateTo : userRole === "user" ?  SCREENS.HOME : SCREENS.HOME_DRIVER,
    },
    {
      key:1,
      image:IMAGES.activityIcon,
      navigateTo : userRole === "user" ?  SCREENS.My_ACTIVITY : SCREENS.POST_HISTORY,
    },
    {
      key:2,
      image:IMAGES.notification,
      navigateTo : SCREENS.NOTIFICATION,
    },
    {
      key:3,
      image:IMAGES.profileIcon,
      navigateTo : SCREENS.PROFILE,
    },
  ]
  return (
    <View style={[styles.tabContainer]}>
      {BOTTOMTABS.map((i, index) => {
        const isActive = i.key == props.state.index;
        return (
          <TouchableOpacity
            style={styles.tabView}
            onPress={() => 
              // (userRole === "driver" && isOnline)  &&  
              // navigate(i.navigateTo)
              userRole == "user" ?   navigate(i.navigateTo) : isOnline && navigate(i.navigateTo)
             
            }
          >
            <Image
              source={i.image}
              style={{
                marginVertical: 5,
                width: 26,
                height: 25,
                tintColor: isActive ? theme.color.primary : theme.color.tgray,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    backgroundColor: theme.color.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },
  activeTabView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.primary,
  },
  tabText: {
    fontSize: 12,
    marginTop: 6,
  },
});

export default BottomTabs;
