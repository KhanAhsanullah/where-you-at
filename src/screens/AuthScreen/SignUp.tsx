import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import ImagePicker from "react-native-image-crop-picker";
import { useDispatch } from "react-redux";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Typography } from "../../components/atoms/Typography";
import { Header } from "../../components/atoms/Header";
import { navigate } from "../../navigation/RootNavigation";
import { IMAGES, SCREENS, SCREEN_WIDTH, theme } from "../../constants";
import { Button, View } from "react-native-ui-lib";
import { CustomBtn } from "../../components/atoms/CustomBtn";
import { InputText } from "../../components/atoms/InputText";
import { setLoggedIn } from "../../redux/slice/user";

const SignUp = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const inputRef = useRef([]);
  const [fname, setFname] = useState("");
  const [selectImg, setSelectImg] = useState("");
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [password, setPassword] = useState(true);

  // Validation function
  const isFormValid = () => {
    return fname && email && phone && passwordVal && selectImg;
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((images) => {
        setSelectImg({
          name: images.filename || `image_${new Date().getDate()}`,
          type: images.mime,
          uri: images.path,
        });
        setVisible(false);
      })
      .catch((error) => {
        setVisible(false);
      });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    })
      .then((images) => {
        setSelectImg({
          name: images.filename || `image_${new Date().getDate()}`,
          type: images.mime,
          uri: images.path,
        });
        setVisible(false);
      })
      .catch((error) => {
        setVisible(false);
      });
  };

  const TermsAndConditions = () => {
    return (
      <View style={{ marginTop: 20 }}>
        <Typography>
          By signing up, you agree to our{" "}
          <TouchableOpacity>
            <Typography textType="semiBold" color={theme.color.primary} style={styles.underlinedText}>Terms</Typography>
          </TouchableOpacity>
          ,{" "}
          <TouchableOpacity>
            <Typography textType="semiBold" color={theme.color.primary}  style={styles.underlinedText}>
              Privacy Policy
            </Typography>
          </TouchableOpacity>
          , and{" "}
          <TouchableOpacity>
            <Typography textType="semiBold" color={theme.color.primary}  style={styles.underlinedText}>Cookie use</Typography>
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
      <Header titleText="" rightIcon={false} />
      <Typography textType="bold" size={theme.fontSize.extraLarge} style={{marginLeft:20}}>Sign Up</Typography>
      <Typography style={{marginLeft:20}} color={theme.color.tgray}>
        Sign Up with your email and password
      </Typography>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ margin: 20 }}>
          <View style={styles.profileImg}>
            <Image
              source={selectImg || IMAGES.avatar}
              style={{ width: 120, height: 120, borderRadius: 60 }}
              resizeMode="cover"
            />
            <TouchableOpacity
              style={styles.cameraIcon}
              onPress={() => {
                setVisible(true);
              }}
            >
              <Icon name="camera" size={24} color={theme.color.primary} />
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 20 }}>
            <InputText
              label="Full Name"
              cardStyle={styles.cardStyle}
              placeholder={"Simon Lewis"}
              onChangeText={(text: any) => setFname(text)}
              value={fname}
              leftImage={IMAGES.userIcon}
              autoCapitalize={"none"}
              keyboardType={"email-address"}
              returnKeyType={"next"}
              inputRef={inputRef}
              style={{ marginVertical: 10, borderWidth: 0.3 }}
            />

            <InputText
              label={"Email Address"}
              placeholder={"simon.lewis@gmail.com"}
              onChangeText={(text: any) => setEmail(text)}
              value={email}
              leftImage={IMAGES.user}
              returnKeyType={"next"}
              leftIconVisibility={true}
              leftIconName={"email"}
              style={{ marginVertical: 10, borderWidth: 0.3 }}
            />
            <InputText
              label={"Phone Number"}
              placeholder={"+1 (908) 1234 567"}
              onChangeText={(text: any) => setPhone(text)}
              value={phone}
              returnKeyType={"next"}
              leftImage={IMAGES.phone}
              keyboardType="number-pad"
              style={{ marginVertical: 10, borderWidth: 0.3 }}
            />
            <InputText
              label="Location"
              cardStyle={styles.cardStyle}
              placeholder={"Abc Locations"}
              onChangeText={(text: any) => setFname(text)}
              value={fname}
              leftImage={IMAGES.mapIcon2}
              autoCapitalize={"none"}
              keyboardType={"email-address"}
              returnKeyType={"next"}
              onSubmitEditing={() => Keyboard.dismiss()}
              allowSpacing={false}
              style={{ marginVertical: 10, borderWidth: 0.3 }}
            />

            <InputText
              label="Password"
              leftImage={IMAGES.pass}
              value={passwordVal}
              onPressRight={() => setPassword(!password)}
              secureTextEntry={password}
              rightImage={!password ? IMAGES.eyeOn : IMAGES.eyeOff}
              placeholder="Enter your password"
              onChangeText={(text: string) => setPasswordVal(text)}
              style={{ borderWidth: 0.3 }}
            />

            <InputText
              label="Postal Address"
              cardStyle={styles.cardStyle}
              placeholder={"Abc Street."}
              onChangeText={(text: any) => setFname(text)}
              value={fname}
              leftImage={IMAGES.mapIcon2}
              autoCapitalize={"none"}
              keyboardType={"email-address"}
              returnKeyType={"done"}
              onSubmitEditing={() => Keyboard.dismiss()}
              allowSpacing={false}
              style={{ marginVertical: 10, borderWidth: 0.3 }}
            />

            <View marginV-20>
              <CustomBtn
                label={"Sign Up"}
                onPress={() => dispatch(setLoggedIn(true))}
                disabled={!isFormValid()} 
                style={{
                  backgroundColor: isFormValid()
                    ? theme.color.secondry
                    : "#999B9F",
                }} 
              />
            </View>
            <View center marginB-20>
              {TermsAndConditions()}
              {SignInText()}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <TouchableOpacity
          onPress={() => {
            setVisible(!visible);
          }}
          style={styles.centerView}
        />

        <View style={{ position: "absolute", bottom: 20 }}>
          <View style={styles.modalStyle}>
            <TouchableOpacity
              style={styles.profileStyle}
              onPress={takePhotoFromCamera}
            >
              <Typography style={styles.textStyle}>Take Photos</Typography>
            </TouchableOpacity>
            <View style={styles.lineBar} />
            <TouchableOpacity
              style={styles.profileStyle}
              onPress={choosePhotoFromLibrary}
            >
              <Typography style={styles.textStyle}>
                Choose from Gallery
              </Typography>
            </TouchableOpacity>
          </View>
          <View style={[styles.cancelStyle, { marginTop: 10 }]}>
            <TouchableOpacity
              onPress={() => {
                setVisible(!visible);
              }}
            >
              <Typography style={{ color: "#007bff" }}>Cancel</Typography>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderWidth: 2,
    borderColor: theme.color.white,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.color.black,
    alignSelf: "center",
  },
  inputType: {
    fontSize: 15,
    paddingVertical: 2,
    color: theme.color.black,
  },
  cardStyle: {
    borderWidth: 1,
  },
  inputField: {
    borderWidth: 1,
    borderColor: theme.color.white,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  centerView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalStyle: {
    borderRadius: 10,
    backgroundColor: theme.color.white,
    width: SCREEN_WIDTH,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  profileStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  cancelStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    backgroundColor: theme.color.white,
    paddingVertical: 0,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  lineBar: {
    width: "100%",
    borderBottomWidth: 0.5,
  },
  cameraIcon: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    right: 0,
  },
  textStyle: {
    color: "#007bff",
    marginVertical: 10,
    fontSize: 16,
  },
  underlinedText: {
    textDecorationLine: "underline",
  },
});

export default SignUp;
