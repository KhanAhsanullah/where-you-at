import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { View } from "react-native-ui-lib";
import { Typography } from "../../components/atoms/Typography";
import { navigate, onBack } from "../../navigation/RootNavigation";
import SignatureView from "react-native-signature-canvas";
import { theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { CustomBtn } from "../../components/atoms/CustomBtn";

const LegalConsent = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [isSigned, setIsSigned] = useState(false);

  const handleSignature = (signature: any) => {
    setIsSigned(true);
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <View style={styles.container}>
        <Header titleText="Legal Consent" rightIcon={false} />
      </View>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View padding-20>
          <Typography color={theme.color.descColor} size={theme.fontSize.small}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit{"\n"}
          </Typography>
        </View>
      </ScrollView>

      <View style={styles.fixedBottomContainer}>
        <ScrollView scrollEnabled={scrollEnabled}>
          <View style={{ height: 250 }}>
            <SignatureView
              // onOK={handleSignature}
              onBegin={() => setScrollEnabled(false)}
              onEnd={() => {
                setScrollEnabled(true);
                handleSignature();
              }}
              descriptionText="Sign"
              clearText="Clear"
              confirmText="Save"
              imageType="image/jpeg"
            />
          </View>
        </ScrollView>

        {/* Acknowledged Button */}
        <CustomBtn
          label="Continue"
          disabled={!isSigned}
          onPress={() => onBack()}
          style={{ marginVertical: 20 }}
        />
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
  scrollContainer: {
    flex: 1,
  },
  fixedBottomContainer: {
    padding: 20,
    backgroundColor: theme.color.white,
  },
  button: {
    height: 50,
    width: "50%",
    alignSelf: "center",
    marginTop: 20,
  },
});

export default LegalConsent;
