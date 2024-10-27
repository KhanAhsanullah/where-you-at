import React from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { theme } from "../../constants";
import { Button } from "react-native-ui-lib";

const BottomSheet = ({
  visible,
  onClose,
  children,
  buttonText = "Continue",
  showButton = true,
}: any) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : null}
        style={{ flex: 1 }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {children}
            {showButton && ( // Conditionally render the button
              <Button
                label={buttonText}
                backgroundColor={theme.color.secondry}
                borderRadius={10}
                style={{ paddingVertical: 15 }}
                onPress={onClose}
              />
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default BottomSheet;
