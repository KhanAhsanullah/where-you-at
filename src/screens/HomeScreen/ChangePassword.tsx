import React, { useState } from "react";
import { View } from "react-native-ui-lib";
import { InputText } from "../../components/atoms/InputText";
import { IMAGES } from "../../constants";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header } from "../../components/atoms/Header";
import { CustomBtn } from "../../components/atoms/CustomBtn";
import { onBack } from "../../navigation/RootNavigation";

const ChangePassword = (props: any) => {
  const [hasValidated, setValidated] = useState(new Array(2).fill(false));
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisible2, setPasswordVisible2] = useState(true);
  const [passwordVisible3, setPasswordVisible3] = useState(true);

  return (
    <SafeAreaContainer safeArea={false}>
      <Header titleText="Change Password" />

      <View padding-20>
        <InputText
          label={"Current password"}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[1] = isValid;
              return copy;
            });
          }}
          leftImage={IMAGES.pass}
          onPressRight={() => setPasswordVisible(!passwordVisible)}
          secureTextEntry={passwordVisible}
          rightImage={!passwordVisible ? IMAGES.eyeOn : IMAGES.eyeOff}
          validate={[
            (v) =>
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(v),
          ]}
          validationMessage={[
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
          ]}
          placeholder="Current password"
          style={{ marginVertical: 10, borderWidth: 0.3 }}
        />

        <InputText
          label={"New Password"}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[1] = isValid;
              return copy;
            });
          }}
          leftImage={IMAGES.pass}
          style={{ marginVertical: 10, borderWidth: 0.3 }}
          onPressRight={() => setPasswordVisible2(!passwordVisible2)}
          secureTextEntry={passwordVisible2}
          rightImage={!passwordVisible2 ? IMAGES.eyeOn : IMAGES.eyeOff}
          validate={[
            (v) =>
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(v),
          ]}
          validationMessage={[
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
          ]}
          placeholder="New password"
        />
        <InputText
          label={"Confirm Password"}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[1] = isValid;
              return copy;
            });
          }}
          leftImage={IMAGES.pass}
          style={{ marginVertical: 10, borderWidth: 0.3 }}
          onPressRight={() => setPasswordVisible3(!passwordVisible3)}
          secureTextEntry={passwordVisible3}
          rightImage={!passwordVisible3 ? IMAGES.eyeOn : IMAGES.eyeOff}
          validate={[
            (v) =>
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(v),
          ]}
          validationMessage={[
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
          ]}
          placeholder="Confirm password"
        />
        <View marginV-20>
          <CustomBtn label={"Update Password"} onPress={() => onBack()} />
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default ChangePassword;
