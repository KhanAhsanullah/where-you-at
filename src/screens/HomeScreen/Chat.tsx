import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TextInput,
  FlatList,
} from "react-native";
import { Text, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, SCREEN_HEIGHT, SCREEN_WIDTH, theme } from "../../constants";
import { Header } from "../../components/atoms/Header";
import { Typography } from "../../components/atoms/Typography";
import { commonStyles } from "../../globalStyle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Chat = () => {
  const [messages, setMessages] = useState([
    "Hello! Castro",
    "I am doing great! How are you today?",
    "Hmm, everything is fine",
    "when an unknown printer took a galley of type and scrambled",
    "WOW! Amazing country",
    "I have also interested on the nice green country,  And I am really excited",
  ]);
  const msgListRef = useRef();

  useEffect(() => {
    _scrollToBottom();
  }, [messages]);

  const _scrollToBottom = () => {
    setTimeout(() => {
      msgListRef.current?.scrollToEnd({ animating: true });
    }, 250);
  };

  const chatBubble = ({ item, index }: any) => {
    const received = [0, 3, 4].includes(index);
    const msgAlign = !received
      ? {
          borderBottomRightRadius: 0,
          alignSelf: "flex-end",
          backgroundColor: theme.color.black,
          borderColor: "#E9E8E9",
        }
      : {
          borderBottomLeftRadius: 0,
          alignSelf: "flex-start",
          borderColor: theme.color.primary,
          backgroundColor: "#E9E8E9",
        };

    return (
      <>
        <View
          key={index}
          style={{
            flexDirection: received ? "row" : "row-reverse",
            marginTop: 10,
            marginHorizontal: 10,
          }}
        >
          <Image
            source={IMAGES.avatar}
            style={{ width: 30, height: 30 }}
            resizeMode="cover"
          />
          <View
            style={{
              ...msgAlign,
              margin: 10,
              padding: 10,
              borderRadius: 20,
              marginTop: 0,
              maxWidth: "80%",
              borderWidth: 1,
            }}
          >
            <Typography
              style={{
                justifyContent: "flex-end",
                color: !received ? theme.color.white : theme.color.black,
              }}
            >
              {item}
            </Typography>
            <View
              style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
            >
              {/* <Typography
                color={!received ? theme.color.white : theme.color.black}
                size={10}
              >
                14:02
              </Typography> */}
            </View>
          </View>
        </View>
      </>
    );
  };
  const ChatConsole = (props: any) => {
    const [value, setValue] = useState("");
    const { onSubmit = () => {} } = props;

    const onSend = () => {
      if (value.length != 0) {
        setValue("");
        onSubmit(value);
      }
    };
    return (
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : null}>
        <View style={styles.chatKeyboard}>
          <View style={styles.input}>
            <TextInput
              style={{
                color: theme.color.black,
              }}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              autoCapitalize="sentences"
              placeholderTextColor={theme.color.tgray}
              underlineColorAndroid="transparent"
              blurOnSubmit={true}
              value={value}
              onChangeText={(text: any) => setValue(text)}
              returnKeyType="done"
              multiline={true}
              placeholder="Write a message...."

              // autoFocus={true}
            />
          </View>

          <TouchableOpacity onPress={onSend} activeOpacity={0.8}>
            <Icon name="send" size={30} color={theme.color.black} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <Header titleText="Chat" />
      <View marginT-20 style={[commonStyles.footerContainer]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={messages}
          renderItem={chatBubble}
          ref={msgListRef}
        />
        <ChatConsole
          onSubmit={(e) => {
            setMessages([...messages, e]);
            msgListRef?.current?.scrollToEnd({ animating: true });
          }}
        />
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  chatKeyboard: {
    width: SCREEN_WIDTH / 1,
    height: SCREEN_HEIGHT / 9,
    paddingRight: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    color: theme.color.black,
    width: SCREEN_WIDTH / 1.2,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: theme.color.fieldColor,
    paddingTop: 10,
  },
});

export default Chat;
