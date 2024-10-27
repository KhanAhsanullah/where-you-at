import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { commonStyles } from "../../globalStyle";
import { IMAGES, SCREENS, SCREEN_HEIGHT, theme } from "../../constants";
import { InputText } from "../../components/atoms/InputText";
import { useDispatch } from "react-redux";
import { CustomBtn } from "../../components/atoms/CustomBtn";
import { Typography } from "../../components/atoms/Typography";
import { setLoggedIn, setUserType } from "../../redux/slice/user";
import { navigate, onBack } from "../../navigation/RootNavigation";
import BottomSheet from "../../components/atoms/CustomModal";
import Icon from "react-native-vector-icons/AntDesign";
import OTPTextView from "react-native-otp-textinput";

const Login = () => {
  const dispatch = useDispatch();
  const [hasValidated, setValidated] = useState(new Array(2).fill(false));
  const [email, setEmail] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [password, setPassword] = useState(true);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("user");
  const [forgotPassModal, setForgotPassModal] = useState(false);
  const [OtpModal, setOtpModal] = useState(false);
  const [resetModal, setResetModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(36);
  const [intervalId, setIntervalId] = useState(null);
  const [passwordVisible2, setPasswordVisible2] = useState(true);
  const [passwordVisible3, setPasswordVisible3] = useState(true);

  useEffect(() => {
    if (OtpModal && seconds > 0) {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(id); // Stop the countdown when it reaches zero
            return 0;
          }
          return prevSeconds - 1; // Decrement seconds
        });
      }, 1000); // Update every second

      setIntervalId(id); // Store the interval ID so it can be cleared later

      return () => clearInterval(id); // Cleanup the interval when the modal closes or the component unmounts
    }
  }, [OtpModal, seconds]);

  const handleResendOtp = () => {
    setSeconds(36); // Reset the timer to 36 seconds
    setOtp(""); // Optionally clear OTP input field
    setOtpModal(true); // Ensure OTP Modal is visible
  };
  // Function to validate the form
  const isFormValid = () => {
    // Check if email and password are valid
    const emailValid = /\S+@\S+\.\S+/.test(email); // Simple email validation
    const passwordValid =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
        passwordVal
      ); // Password validation

    return emailValid && passwordValid;
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.containerHeader} />
        <View style={[commonStyles.footerContainer, { top: -200, margin: 20,height:SCREEN_HEIGHT * 0.7 }]}>
          <Image
            source={IMAGES.SplashLogo}
            style={{ width: 260, height: 160, alignSelf: "center" }}
            resizeMode="contain"
          />
          <Typography textType="semiBold" fontSize={theme.fontSize.large}>
            Sign In
          </Typography>
          <InputText
            leftImage={IMAGES.user}
            value={email}
            onValidationFailed={(isValid: boolean) => {
              setValidated((prev) => {
                let copy = [...prev];
                copy[0] = isValid;
                return copy;
              });
            }}
            placeholder="Enter your email"
            validate={["email"]}
            validationMessage={["Email is invalid"]}
            onChangeText={(text: string) => setEmail(text)}
          />

          <InputText
            leftImage={IMAGES.pass}
            value={passwordVal}
            onValidationFailed={(isValid: boolean) => {
              setValidated((prev) => {
                let copy = [...prev];
                copy[1] = isValid;
                return copy;
              });
            }}
            onPressRight={() => setPassword(!password)}
            secureTextEntry={password}
            rightImage={!password ? IMAGES.eyeOn : IMAGES.eyeOff}
            placeholder="Enter your password"
            validate={[
              (v) =>
                /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
                  v
                ),
            ]}
            validationMessage={[
              "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            ]}
            onChangeText={(text: string) => setPasswordVal(text)}
          />
          <TouchableOpacity onPress={() => setForgotPassModal(true)}>
            <View right>
              <Text semibold>Forget Password?</Text>
            </View>
          </TouchableOpacity>
          <View marginV-20>
            <CustomBtn
              label={"Login"}
              onPress={() => {
                if (isFormValid()) {
                  dispatch(setLoggedIn(true));
                  dispatch(setUserType("user"));
                }
              }}
              disabled={!isFormValid()} // Disable the button if the form is invalid
              style={{
                backgroundColor: isFormValid()
                  ? theme.color.secondry
                  : "#999B9F", // Change color based on validity
              }} // Optional: Change background color when disabled
            />
          </View>
        
        </View>
      </ScrollView>

      {isBottomSheetVisible && (
        <BottomSheet
          onClose={() => {
            setBottomSheetVisible(false);
            selectedOption === "user"
              ? navigate(SCREENS.SIGN_UP)
              : navigate(SCREENS.DRIVER_SIGNUP);
          }}
        >
          {/* User Option */}
          <TouchableOpacity
            onPress={() => {
              setSelectedOption("user");
            }}
            style={[
              styles.optionContainer,
              selectedOption === "user" && styles.selectedOption,
            ]}
          >
            <Image
              source={
                selectedOption === "user" ? IMAGES.userSign : IMAGES.userSign2
              }
              style={{
                width: 80,
                height: 80,
                // tintColor:
                //   selectedOption === "user"
                //     ? theme.color.primary
                //     : theme.color.tgray,
              }}
              resizeMode="contain"
            />
            <View flex>
              <Typography textType="semiBold" size={theme.fontSize.large}>
                Are you a User?
              </Typography>
              <Typography color={theme.color.tgray}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </Typography>
            </View>
            <View style={{ position: "absolute", right: 0, top: -10 }}>
              {selectedOption === "user" && (
                <Icon name="checkcircle" size={30} color={theme.color.black} />
              )}
            </View>
          </TouchableOpacity>

          {/* Driver Option */}
          <TouchableOpacity
            onPress={() => {
              setSelectedOption("driver");
              // Reset the icon colors here if necessary
            }}
            style={[
              styles.optionContainer,
              selectedOption === "driver" && styles.selectedOption,
            ]}
          >
            <Image
              source={
                selectedOption === "user" ? IMAGES.driver : IMAGES.driver2
              }
              style={{
                width: 80,
                height: 80,
                // tintColor:
                //   selectedOption === "driver"
                //     ? theme.color.primary
                //     : theme.color.tgray,
              }}
              resizeMode="contain"
            />
            <View flex>
              <Typography textType="semiBold" size={theme.fontSize.large}>
                Are you a Driver?
              </Typography>
              <Typography color={theme.color.tgray}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </Typography>
            </View>
            <View style={{ position: "absolute", right: 0, top: -10 }}>
              {selectedOption === "driver" && (
                <Icon name="checkcircle" size={30} color={theme.color.black} />
              )}
            </View>
          </TouchableOpacity>
        </BottomSheet>
      )}

      {forgotPassModal && (
        <BottomSheet showButton={false}>
          <Typography textType="semiBold" size={theme.fontSize.extraLarge}>
            Enter Email
          </Typography>
          <Typography size={theme.fontSize.medium}>
            Enter your email for the verification process, we will send 4 digits
            code to your email.
          </Typography>

          <InputText
            label={"Email Address"}
            placeholder={"Email"}
            onChangeText={(text: any) => setEmail(text)}
            value={email}
            leftImage={IMAGES.user}
            returnKeyType={"next"}
            leftIconVisibility={true}
            leftIconName={"email"}
            style={{ marginVertical: 10, borderWidth: 0.3 }}
          />
          <View row spread marginT-80 marginB-10>
            <TouchableOpacity
              onPress={() => {
                setForgotPassModal(false);
              }}
            >
              <Typography>Back</Typography>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setForgotPassModal(false);
                setOtpModal(true);
              }}
            >
              <Image
                source={IMAGES.rightIcon}
                style={{ width: 50, height: 50 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </BottomSheet>
      )}

      {OtpModal && (
        <BottomSheet showButton={false} onClose={() => setOtpModal(false)}>
          <View style={styles.container}>
            <Typography textType="semiBold" size={theme.fontSize.extraLarge}>
              Enter 4 Digits Code
            </Typography>
            <Typography size={theme.fontSize.medium}>
              Enter the 4 digits code you received on your email.
            </Typography>

            <OTPTextView
              inputCount={4}
              tintColor={theme.color.black}
              autoFocus={true}
              textInputStyle={{
                marginTop: 40,
                borderRadius: 10,
                borderWidth: 1,
                margin: 10,
                width: 50,
              }}
              handleTextChange={(text) => setOtp(text)}
            />
            <Typography align="center">{`00:${
              seconds < 10 ? "0" : ""
            }${seconds} Seconds`}</Typography>

            <View
              row
              spread
              marginT-80
              marginB-10
              style={{ alignItems: "center" }}
            >
              {/* Resend OTP Button */}

              <View row>
                <Typography>Didn't Receive The OTP?</Typography>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: 1,
                    borderColor: theme.color.primary,
                  }}
                  onPress={handleResendOtp}
                >
                  <Typography color={theme.color.primary} textType="bold">
                    {" "}
                    Resend
                  </Typography>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setOtpModal(false);
                  setResetModal(true);
                }}
              >
                <Image
                  source={IMAGES.rightIcon}
                  style={{ width: 50, height: 50 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
      )}

      {resetModal && (
        <BottomSheet
          buttonText="Update Password"
          onClose={() => {
            setResetModal(false);
            navigate(SCREENS.LOGIN);
          }}
        >
          <Typography textType="semiBold" size={theme.fontSize.extraLarge}>
            Reset Password
          </Typography>
          <Typography size={theme.fontSize.medium}>
            Set the new password for your account so you can login and access
            all the features.
          </Typography>
          <View marginV-20 />
          <InputText
            // label={"New Password"}
            onValidationFailed={(isValid: boolean) => {
              setValidated((prev) => {
                let copy = [...prev];
                copy[1] = isValid;
                return copy;
              });
            }}
            // leftImage={IMAGES.pass}
            leftIcon={false}
            style={{ borderWidth: 0.3 }}
            onPressRight={() => setPasswordVisible2(!passwordVisible2)}
            secureTextEntry={passwordVisible2}
            rightImage={!passwordVisible2 ? IMAGES.eyeOn : IMAGES.eyeOff}
            validate={[
              (v) =>
                /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
                  v
                ),
            ]}
            validationMessage={[
              "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            ]}
            placeholder="New Password"
          />
          <InputText
            // label={"Confirm Password"}
            onValidationFailed={(isValid: boolean) => {
              setValidated((prev) => {
                let copy = [...prev];
                copy[1] = isValid;
                return copy;
              });
            }}
            leftIcon={false}
            style={{ borderWidth: 0.3 }}
            onPressRight={() => setPasswordVisible3(!passwordVisible3)}
            secureTextEntry={passwordVisible3}
            rightImage={!passwordVisible3 ? IMAGES.eyeOn : IMAGES.eyeOff}
            validate={[
              (v) =>
                /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
                  v
                ),
            ]}
            validationMessage={[
              "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            ]}
            placeholder="Re-enter Password"
          />
        </BottomSheet>
      )}
    </SafeAreaContainer>
  );
};

const SOCIAL_LOGIN = [
  { id: 1, image: IMAGES.google },
  { id: 1, image: IMAGES.facebook },
  { id: 1, image: IMAGES.apple },
];

const styles = StyleSheet.create({
  containerHeader: {
    height: SCREEN_HEIGHT * 0.4,
    backgroundColor: theme.color.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  optionContainer: {
    flexDirection: "row",
    gap: 10,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
  },
  selectedOption: {
    borderColor: theme.color.primary,
  },
  checkIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
  },
  resendButton: {
    marginTop: 20,
    textDecorationLine: "underline",
    color: theme.color.primary,
  },
});

export default Login;
