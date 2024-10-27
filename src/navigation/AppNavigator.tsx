import React, { useState } from "react";
import { SCREENS } from "../constants";
import Home from "../screens/HomeScreen/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationScreen from "../screens/HomeScreen/NavigationScreen";
import MyActivity from "../screens/HomeScreen/MyActivity";
import Notification from "../screens/HomeScreen/Notification";
import Profile from "../screens/HomeScreen/Profile";
import DeliveryDetails from "../screens/HomeScreen/DeliveryDetails";
import PaymentMethod from "../screens/HomeScreen/PaymentMethod";
import MailDelivered from "../screens/HomeScreen/MailDelivered";
import Chat from "../screens/HomeScreen/Chat";
import RideDetails from "../screens/HomeScreen/BookRides/RideDetails";
import BookRide from "../screens/HomeScreen/BookRides/BookRide";
import ETicket from "../screens/HomeScreen/BookBus/ETicket";
import ScanQR from "../screens/HomeScreen/BookBus/ScanQR";
import BusDetails from "../screens/HomeScreen/BookBus/BusDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabs from "./BottomTabs";
import Login from "../screens/AuthScreen/Login";
import Setting from "../screens/HomeScreen/DrawerScreen/Setting";
import Terms from "../screens/HomeScreen/DrawerScreen/Terms";
import MyCard from "../screens/HomeScreen/DrawerScreen/MyCard";
import Privacy from "../screens/HomeScreen/DrawerScreen/Privacy";
import AddNewCard from "../screens/HomeScreen/DrawerScreen/AddNewCard";
import ContactUs from "../screens/HomeScreen/DrawerScreen/ContactUs";
import About from "../screens/HomeScreen/DrawerScreen/About";
import EditProfile from "../screens/HomeScreen/EditProfile";
import ChangePassword from "../screens/HomeScreen/ChangePassword";
import SignUp from "../screens/AuthScreen/SignUp";
import History from "../screens/HomeScreen/History";
import DriverSignUp from "../screens/AuthScreen/DriverSignUp";
import { useSelector } from "react-redux";
import HomeDriver from "../screens/HomeScreen/HomeDriver";
import Registration from "../screens/AuthScreen/Registration";
import VechileInfo from "../screens/AuthScreen/VechileInfo";
import IDCard from "../screens/AuthScreen/IDCard";
import IDConfirmation from "../screens/AuthScreen/IDConfirmation";
import DriverLicence from "../screens/AuthScreen/DriverLicence";
import LegalConsent from "../screens/AuthScreen/LegalConsent";
import { RootState } from "../redux/store";
import PostHistory from "../screens/HomeScreen/PostHistory";
import HistoryDetail from "../screens/HomeScreen/HistoryDetail";
import DriverRideDetail from "../screens/HomeScreen/DriverRideDetail";
import AcceptRide from "../screens/HomeScreen/AcceptRide";
import SelectTransport from "../screens/AuthScreen/SelectTransport";
import NumberPlate from "../screens/AuthScreen/NumberPlate";
import Certificate from "../screens/AuthScreen/Certificate";
import VechileYear from "../screens/AuthScreen/VechileYear";
import NavigationDriverScreen from "../screens/HomeScreen/NavigationDriverScreen";
import ActivityDetail from "../screens/HomeScreen/ActivityDetail";
import MyWallet from "../screens/HomeScreen/DrawerScreen/MyWallet";
import AddAccount from "../screens/HomeScreen/DrawerScreen/AddAccount";
import MyDocuments from "../screens/HomeScreen/DrawerScreen/MyDocuments";
import IDCardDocs from "../screens/HomeScreen/DrawerScreen/IDCardDocs";
import IDConfirmationDocs from "../screens/AuthScreen/IDConfirmationDocs";
import DriverLicenseDocs from "../screens/HomeScreen/DrawerScreen/DriverLicenseDocs";
import VechileInfoDocs from "../screens/HomeScreen/DrawerScreen/VechileInfoDocs";
import BusDetails2 from "../screens/HomeScreen/BookBus/BusDetails2";
import ETicket2 from "../screens/HomeScreen/BookBus/ETicket2";
import DriverMailDetail from "../screens/HomeScreen/DriverMailDetail";
import NavigationDriverMailScreen from "../screens/HomeScreen/NavigationDriverMailScreen";
import AcceptMailRide from "../screens/HomeScreen/AcceptMailRide";
import Passengers from "../screens/HomeScreen/Passengers";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: false,
  animation: "fade",
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={SCREENS.LOGIN} component={Login} />


      <Stack.Screen name={SCREENS.SIGN_UP} component={SignUp} />
      <Stack.Screen name={SCREENS.DRIVER_SIGNUP} component={DriverSignUp} />
      <Stack.Screen name={SCREENS.REGISTRATION} component={Registration} />
      <Stack.Screen name={SCREENS.VECHILE_INFO} component={VechileInfo} />
      <Stack.Screen name={SCREENS.ID_CARD} component={IDCard} />
      <Stack.Screen name={SCREENS.ID_CONFIRMATION} component={IDConfirmation} />
      <Stack.Screen name={SCREENS.DRIVER_LICENSE} component={DriverLicence} />
      <Stack.Screen name={SCREENS.LEGAL_CONSENT} component={LegalConsent} />
      <Stack.Screen name={SCREENS.HOME_DRIVER} component={HomeDriver} />
      <Stack.Screen name={SCREENS.SELECT_TRANSPORT} component={SelectTransport} />
      <Stack.Screen name={SCREENS.NUMBER_PLATE} component={NumberPlate} />
      <Stack.Screen name={SCREENS.CERTIFICATE} component={Certificate} />
      <Stack.Screen name={SCREENS.VECHILE_YEAR} component={VechileYear} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.HOME} component={BottomTabNavigation} />
      <Stack.Screen name={SCREENS.PASSENGER} component={Passengers} />


      
      <Stack.Screen name={SCREENS.NAV_SCREEN} component={NavigationScreen} />
      <Stack.Screen name={SCREENS.NOTIFICATION} component={Notification} />
      <Stack.Screen name={SCREENS.PROFILE} component={Profile} />
      <Stack.Screen name={SCREENS.DELIVERY_DETAILS} component={DeliveryDetails} />
      <Stack.Screen name={SCREENS.PAYMENT_METHOD} component={PaymentMethod} />
      <Stack.Screen name={SCREENS.MAIL_DELIVERED} component={MailDelivered} />
      <Stack.Screen name={SCREENS.CHAT} component={Chat} />
      <Stack.Screen name={SCREENS.RIDE_DETAILS} component={RideDetails} />
      <Stack.Screen name={SCREENS.BOOK_RIDE} component={BookRide} />
      <Stack.Screen name={SCREENS.E_TICKET} component={ETicket} />
      <Stack.Screen name={SCREENS.SCAN_QR} component={ScanQR} />
      <Stack.Screen name={SCREENS.BUS_DETAIL} component={BusDetails} />

      <Stack.Screen name={SCREENS.SETTING} component={Setting} />
      <Stack.Screen name={SCREENS.PRIVACY} component={Privacy} />
      <Stack.Screen name={SCREENS.TERMS} component={Terms} />
      <Stack.Screen name={SCREENS.ABOUT} component={About} />
      <Stack.Screen name={SCREENS.MY_CARD} component={MyCard} />
      <Stack.Screen name={SCREENS.ADD_CARD} component={AddNewCard} />
      <Stack.Screen name={SCREENS.CONTACT_US} component={ContactUs} />
      <Stack.Screen name={SCREENS.EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen name={SCREENS.CHANGE_PASSWORD} component={ChangePassword} />
      <Stack.Screen name={SCREENS.HISTORY} component={History} />
      <Stack.Screen name={SCREENS.HISTORY_DETAIL} component={HistoryDetail} />
      <Stack.Screen name={SCREENS.DRIVER_RIDE_DETAIL} component={DriverRideDetail} />
      <Stack.Screen name={SCREENS.ACCEPT_RIDE} component={AcceptRide} />
      <Stack.Screen name={SCREENS.NAV_DRAVER_SCREEN} component={NavigationDriverScreen} />
      <Stack.Screen name={SCREENS.ACTIVITY_DETAILS} component={ActivityDetail} />
      <Stack.Screen name={SCREENS.My_WALLET} component={MyWallet} />
      <Stack.Screen name={SCREENS.ADD_ACCOUNT} component={AddAccount} />
      <Stack.Screen name={SCREENS.MY_DOCUMENTS} component={MyDocuments} />
      <Stack.Screen name={SCREENS.ID_CARD_DOCS} component={IDCardDocs} />
      <Stack.Screen name={SCREENS.ID_CONFIRM_DOCS} component={IDConfirmationDocs} />
      <Stack.Screen name={SCREENS.DRIVER_LICENSE_DOCS} component={DriverLicenseDocs} />
      <Stack.Screen name={SCREENS.VECHILE_INFO_DOCS} component={VechileInfoDocs} />
      <Stack.Screen name={SCREENS.BUS_DETAIL2} component={BusDetails2} />
      <Stack.Screen name={SCREENS.E_TICKET2} component={ETicket2} />
      <Stack.Screen name={SCREENS.DRIVER_MAIL_DETAIL} component={DriverMailDetail} />
      <Stack.Screen name={SCREENS.ACCEPT_MAIL_RIDE} component={AcceptMailRide} />
      <Stack.Screen name={SCREENS.NAV_DRAVER_MAIL_SCREEN} component={NavigationDriverMailScreen} />



    </Stack.Navigator>
  )
}

const BottomTabNavigation = (props: any) => {
  const userRole = useSelector((state:RootState) => state.user.userType)
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(e) => <BottomTabs {...e} {...props} />}
      screenOptions={{ headerShown: false }}
    >
      {userRole === "user" ?
      <Tab.Screen name={SCREENS.HOME} component={Home} />
      :
      <Tab.Screen name={SCREENS.HOME_DRIVER} component={HomeDriver} />
    }
     {userRole === "user" ?
      <Tab.Screen name={SCREENS.My_ACTIVITY} component={MyActivity} />
      :
      <Tab.Screen name={SCREENS.POST_HISTORY} component={PostHistory} />
     }
      <Tab.Screen name={SCREENS.NOTIFICATION} component={Notification} />
      <Tab.Screen name={SCREENS.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export { AppNavigator, AuthStackNavigator };




