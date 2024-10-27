import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Appearance, Image } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Typography } from './Typography';
import { IMAGES, theme } from '../../constants';

export const InputDateTime = ({
  placeholder = "Select Date" ,
  value,
  onChange,
  mode = "date",
  is24Hour = false,
  style = {},
  inputStyle = {},
  cardStyle = {},
  rightIcon = IMAGES.calender,
  maximumDate = new Date(),
}) => {
  const [visible, setVisible] = useState(false);
  const colorScheme = Appearance.getColorScheme();

  return (
    <View style={{ marginVertical: 10, ...style }}>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={[styles.fieldStyle,{
          ...inputStyle
        }]}
      >
        <Typography color={theme.color.tgray}>
          {value ? value : placeholder}
        </Typography>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
            {rightIcon && (
                <Image
                  source={rightIcon}
                  style={{ width: 25, height: 25 }}
                  resizeMode="contain"
                />
    
            )}
          </View>
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isDarkModeEnabled={colorScheme === "dark"}
        isVisible={visible}
        mode={mode}
        is24Hour={is24Hour}
        maximumDate={maximumDate}
        onConfirm={(e) => {
          onChange(moment(e).format(mode === "date" ? "DD-MM-YYYY" : "hh:mm A"));
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldStyle: {
    backgroundColor: theme.color.lightGray,
    borderRadius:30,
    justifyContent:'center',
    flexDirection:'row',
    padding:20,
    alignItems:'center'
  },
});
