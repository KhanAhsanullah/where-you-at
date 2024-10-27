import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Typography } from "../../components/atoms/Typography";
import { Header } from "../../components/atoms/Header";
import { navigate } from "../../navigation/RootNavigation";
import { IMAGES, SCREENS, theme } from "../../constants";
import { CustomBtn } from "../../components/atoms/CustomBtn";
import { InputText } from "../../components/atoms/InputText";
import { DropDown } from "../../components/atoms/DropDown";
import { View } from "react-native-ui-lib";
import { InputDateTime } from "../../components/atoms/InputDateTime";

const DriverSignUp = () => {
  const dispatch = useDispatch();
  const inputRef = useRef([]);
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [password, setPassword] = useState(true);
  const [userType, setUserType] = useState(USER_TYPE[0].value);
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [date, setDate] = useState(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  // Validation function
  const isFormValid = () => {
    return (
      fname &&
      email &&
      phone &&
      passwordVal &&
      (userType !== "2" || yearsOfExperience)
    );
  };

  const handleUserTypeChange = (value:any) => {
    setUserType(value);
    if (value === "1") {
      setYearsOfExperience(""); // Reset years of experience if switching to freelancer
    }
  };
  const TermsAndConditions = () => {
    return (
      <View style={{ marginTop: 20 }}>
        <Typography>
          By signing up, you agree to our{" "}
          <TouchableOpacity>
            <Typography textType="semiBold" color={theme.color.primary} style={{ textDecorationLine: "underline"}}>Terms</Typography>
          </TouchableOpacity>
          ,{" "}
          <TouchableOpacity>
            <Typography textType="semiBold" color={theme.color.primary} style={{ textDecorationLine: "underline"}}>
              Privacy Policy
            </Typography>
          </TouchableOpacity>
          , and{" "}
          <TouchableOpacity>
            <Typography textType="semiBold" color={theme.color.primary}  style={{ textDecorationLine: "underline"}}>
              Cookie use</Typography>
          </TouchableOpacity>
        </Typography>
      </View>
    );
  };

  const SignInText = () => {
    return (
      <View style={{ marginTop: 20 }}>
        <Typography>
          Already have an account?{" "}
          <TouchableOpacity onPress={() => navigate(SCREENS.LOGIN)}>
            <Typography textType="semiBold" color={theme.color.primary}>
              Sign In
            </Typography>
          </TouchableOpacity>
        </Typography>
      </View>
    );
  };

  return (
    <SafeAreaContainer mode={"dark"} safeArea={false}>
      <Header titleText="Sign Up" />
      <Typography
        style={{ paddingHorizontal: 20 }}
        color={theme.color.tgray}
        size={theme.fontSize.small}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut
      </Typography>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ margin: 20 }}>
          <View style={{ marginVertical: 20 }}>
            <View marginV-20>
              <View row spread style={{ top: -10 }}>
                <Typography color={theme.color.black}>Sign Up As a</Typography>
                <TouchableOpacity>
                  <Image
                    source={IMAGES.infoIcon}
                    style={{ width: 25, height: 25 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <DropDown
                data={USER_TYPE}
                placeholder={"As a freelancer"}
                style={{
                  borderRadius: 10,
                  borderWidth: 0.5,
                  borderColor: "gray",
                }}
                value={userType} // Pass the selected value
                onChange={handleUserTypeChange} // Handle user type change
              />
            </View>

            {/* Existing Input Fields */}
            <InputText
              label="Full Name"
              placeholder={"Simon Lewis"}
              onChangeText={setFname}
              value={fname}
              leftImage={IMAGES.userIcon}
              autoCapitalize={"none"}
              returnKeyType={"next"}
              inputRef={inputRef}
              style={{ marginVertical: 10, borderWidth: 0.3 }}
            />

            <InputText
              label={"Email Address"}
              placeholder={"simon.lewis@gmail.com"}
              onChangeText={setEmail}
              value={email}
              leftImage={IMAGES.user}
              returnKeyType={"next"}
              style={{ marginVertical: 10, borderWidth: 0.3 }}
            />
            <InputText
              label={"Phone Number"}
              placeholder={"+1 (908) 1234 567"}
              onChangeText={setPhone}
              value={phone}
              returnKeyType={"next"}
              leftImage={IMAGES.phone}
              keyboardType="number-pad"
              style={{ marginVertical: 10, borderWidth: 0.3 }}
            />
            <View marginB-20>
              <Typography>Date of Birth</Typography>
              <InputDateTime
                mode={"date"}
                value={date}
                onChange={setDate}
                onConfirm={(selectedDate) => setDate(selectedDate)}
                visible={datePickerVisible}
                style={{ borderWidth: 0.5, borderRadius: 10 }}
              />
            </View>
            <InputText
              label="Password"
              leftImage={IMAGES.pass}
              value={passwordVal}
              onPressRight={() => setPassword(!password)}
              secureTextEntry={password}
              rightImage={!password ? IMAGES.eyeOn : IMAGES.eyeOff}
              placeholder="Enter your password"
              onChangeText={setPasswordVal}
              style={{ borderWidth: 0.3 }}
            />

            {/* Conditionally render Years of Experience field */}
            {userType === "2" && (
              <InputText
                label="Years of Experience"
                placeholder={"5+ Years Experience"}
                onChangeText={setYearsOfExperience}
                value={yearsOfExperience}
                keyboardType="numeric"
                leftIcon={false}
                style={{ marginVertical: 10, borderWidth: 0.3 }}
              />
            )}

            <InputText
              label="Postal Address"
              placeholder={"Abc Street."}
              onChangeText={setYearsOfExperience}
              value={yearsOfExperience}
              leftIcon={false}
              style={{ marginVertical: 10, borderWidth: 0.3 }}
            />

            <View marginV-20>
              <CustomBtn
                label={"Sign Up"}
                onPress={() => navigate(SCREENS.REGISTRATION)}
                disabled={!isFormValid()}
              />
            </View>

            <View center marginB-20>
              {TermsAndConditions()}
              {SignInText()}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
};

const USER_TYPE = [
  { label: "As a freelancer", value: "1" },
  { label: "As a Professional Driver", value: "2" },
];

export default DriverSignUp;
