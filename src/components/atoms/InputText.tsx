import { Image, TextField, TouchableOpacity } from "react-native-ui-lib";
import { useState } from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Platform } from "react-native";
import { IMAGES, theme } from "../../constants";

export const InputText = (props: any) => {
  const {
    placeholder = "",
    placeholderTextColor = theme.color.tgray,
    maxLength = 30,
    onChangeText = () => {},
    validationMessage = "Field is required",
    validate = "email",
    leftIcon = true,
    rightText = false,
    rightTitle = 'AED',
    leftImage,
    rightImage = false,
    rightIconType = 'eye', // New prop to determine the right icon type
    showCharCounter = false,
    keyboardType = "default",
    onValidationFailed = () => {},
    secureTextEntry = false,
    style = {},
    label = false,
    multiline = false,
    onPressRight = () => {},
    containerStyle
  } = props;

  return (
    <TextField
      small
      allowFontScaling={false}
      // label={label ? placeholder : 'sadas'} 
      label={label}
      labelStyle={{
        fontSize: moderateScale(14),
      }}
      labelColor={theme.color.black}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      secureTextInput={secureTextEntry}
      enableErrors
      validate={[(value: any) => value?.length > 6, ...validate]}
      validationMessage={["", ...validationMessage]}
      showCharCounter={showCharCounter}
      validateOnChange
      onChangeValidity={onValidationFailed}
      maxLength={maxLength}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      keyboardType={keyboardType}
      containerStyle={containerStyle}
      fieldStyle={{
        height: verticalScale(50),
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: theme.color.lightGray,
        ...style,
      }}
      {...(leftIcon
        ? {
            leadingAccessory: (
              <Image
                source={leftImage}
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 10,
                  resizeMode: "contain",
                  tintColor: theme.color.tgray,

                }}
              />
            ),
          }
        : null)}
      {...(rightImage
        ? {
            trailingAccessory: (
              <TouchableOpacity onPress={onPressRight}>
                <Image
                  source={rightIconType === 'dropdown' 
                    ? IMAGES.dropdownIcon 
                    : secureTextEntry 
                      ? IMAGES.eyeOn 
                      : IMAGES.eyeOff}
                  style={{
                    width: 15,
                    height: 15,
                    resizeMode: "contain",
                    tintColor: theme.color.tgray,
                  }}
                />
              </TouchableOpacity>
            ),
          }
        : null)}
    />
  );
};
