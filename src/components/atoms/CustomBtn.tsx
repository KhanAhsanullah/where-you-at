import React from "react";
import { Button, Text, View } from "react-native-ui-lib";
import { IMAGES, theme } from "../../constants";

export const CustomBtn = (props: any) => {
  const {onPress = ()=>{},label,backgroundColor =theme.color.secondry,style,width,height,iconOnRight= true,
  disabled=false,
  iconSource=IMAGES.eyeOn
} = props;
  return (
      <Button
        label={label}
        backgroundColor={backgroundColor}
        onPress={onPress}
        width={width}
        height={height}
        disabled={disabled}
        // iconOnRight={iconOnRight} 
        // iconSource={iconSource}
        // iconStyle={{width:30,height:30,resizeMode:"contain"}} 
        size={Button.sizes.medium} 
        style={[style,{
          paddingVertical:20,
          borderRadius:10
        }]}
      />
  );
};
