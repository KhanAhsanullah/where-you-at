import React, { useEffect, useRef, useState } from "react";
import { View, ScrollView, Platform, KeyboardAvoidingView } from "react-native";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { SCREENS, theme } from "../../../constants";
import { navigate, onBack } from "../../../navigation/RootNavigation";
import { Header } from "../../../components/atoms/Header";
import { InputText } from "../../../components/atoms/InputText";
import { CustomBtn } from "../../../components/atoms/CustomBtn";

const ContactUs = (props: any) => {

  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [query, setQuery] = useState("");


  return (
    <SafeAreaContainer mode={"dark"} safeArea={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <Header titleText="Contact Us" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ padding: 20 }}
        >
          <InputText
            label={"Username"}
            placeholder={"Enter Username"}
            placeholderTextColor={theme.color.tgray}
            onChangeText={(text: any) => setName(text)}
            value={name}
            maxLength={100}
            returnKeyType={"next"}
            style={{borderWidth:0.3,height:50}}
            leftIcon={false}
          />
          <InputText
            label={"Subject"}
            placeholder={"Enter Subject"}
            placeholderTextColor={theme.color.tgray}
            onChangeText={(text: any) =>setSub(text)}
            value={sub}
            returnKeyType={"next"}
            keyboardType="number-pad"
            maxLength={15}
            style={{borderWidth:0.3,height:50}}
            leftIcon={false}
          />
          <InputText
            label={"Message"}
            placeholder={"Enter Message..."}
            placeholderTextColor={theme.color.tgray}
            onChangeText={(text: any) => setQuery(text)}
            value={query}
            returnKeyType={"done"}
            style={{borderWidth:0.3,paddingTop:20,height:200}}
            leftIcon={false}
            maxLength={255}
            multiline
          />
          <View style={{ marginTop: 40 }}>
            <CustomBtn
              label={"Submit"}
              onPress={() => onBack()}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
};

export default ContactUs;
