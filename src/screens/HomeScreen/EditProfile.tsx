import React, { useState, useRef, useEffect } from "react";
import {
  View,
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
import { useDispatch, useSelector } from "react-redux";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Typography } from "../../components/atoms/Typography";
import { Header } from "../../components/atoms/Header";
import { onBack } from "../../navigation/RootNavigation";
import { IMAGES, SCREEN_WIDTH, theme } from "../../constants";
import { Button } from "react-native-ui-lib";
import { CustomBtn } from "../../components/atoms/CustomBtn";
import { InputText } from "../../components/atoms/InputText";
import { InputPhone } from "../../components/atoms/InputPhone";

const EditProfile = (props: any) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const inputRef = useRef([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [selectImg, setSelectImg] = useState("");
  const [visible, setVisible] = useState(false);

  const FnameInput = React.createRef();
  const LnameInput = React.createRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   setName(user.full_name);
  //   setPhone(user.phone);
  // }, []);

  const _navigateTo = () => {
    // let validateData = { fname,
    //   lname, phone };
    // Validator.validate(validateData).then((err) => {
    //   setErrors(err);
    //   onBack();
    // });
  };
  const takePhotoFromCamera = () => {
    console.log("image", selectImg);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((images) => {
        console.log("img", images);
        setSelectImg({
          name: images.filename || `image_${new Date().getDate()}`,
          type: images.mime,
          uri: images.path,
        });
        setVisible(false);
      })
      .catch((error) => {
        console.log("error", error);
        setVisible(false);
      });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    })
      .then((images) => {
        console.log("gal", images);
        setSelectImg({
          name: images.filename || `image_${new Date().getDate()}`,
          type: images.mime,
          uri: images.path,
        });
        setVisible(false);
      })
      .catch((error) => {
        console.log("error", error);
        setVisible(false);
      });
  };
  return (
    <SafeAreaContainer mode={"dark"} safeArea={false}>
      <Header titleText="Edit Profile" />

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
          <View style={{ marginTop: 20 }}>
            <InputText
              label="Full Name"
              cardStyle={styles.cardStyle}
              placeholder={"Simon Lewis"}
              onChangeText={(text: any) => setFname(text)}
              value={fname}
              leftIcon={false}
              autoCapitalize={"none"}
              keyboardType={"email-address"}
              returnKeyType={"next"}
              inputRef={FnameInput}
              onSubmitEditing={() =>
                LnameInput.current && LnameInput?.current?.focus()
              }
              allowSpacing={false}
              style={{ marginVertical: 10, borderWidth: 0.3 }}
            />

            <InputText
              label={"Email Address"}
              placeholder={"simon.lewis@gmail.com"}
              onChangeText={(text: any) => setEmail(text)}
              value={"abc@gmail.com"}
              returnKeyType={"next"}
              leftIcon={false}
              leftIconVisibility={true}
              leftIconName={"email"}
              style={{ marginVertical: 10, borderWidth: 0.3 }}
            />
            <InputText
              label={"Phone Number"}
              placeholder={"+1 (908) 1234 567"}
              onChangeText={(text: any) => setEmail(text)}
              value={"abc@gmail.com"}
              returnKeyType={"next"}
              keyboardType="number-pad"
              leftIcon={false}
              leftIconVisibility={true}
              leftIconName={"email"}
              style={{ marginVertical: 10, borderWidth: 0.3 }}
            />
            {/* <InputPhone
              title={"Phone"}
              // inputRef={(e) => (inputRef["phone"] = e)}
              placeholder={"Enter your phone number"}
              returnKeyType={"done"}
              value={phone}
              onChangeFormattedText={(text:any) => {
                setFormattedText(text);
                console.log(text);
              }}
              onChangeText={(text:any) => setPhone(text)}
              onSubmitEditing={() => {
                Keyboard.dismiss()
              }}
              style={{ marginVertical:  10,borderWidth:1 }}
            /> */}
            <View marginV-20>
              <CustomBtn label={"Update Profile"} onPress={() => onBack()} />
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
    // fontFamily: FONTS.PoppinsRegular,
    paddingVertical: 2,
    color: theme.color.black,
  },
  cardStyle: {
    borderWidth: 1,
    backgroundColor: "red",
  },
  inputField: {
    borderWidth: 1,
    borderColor: theme.color.white,
    paddingHorizontal: 10,
    borderRadius: 5,
    // backgroundColor: COLORS.lightBlack,
    marginVertical: 10,
  },
  // Modal Styling
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
});

export default EditProfile;
