// import React, { useState } from "react";
// import { StyleSheet, Platform } from "react-native";
// import { Dropdown } from "react-native-element-dropdown";
// import { theme } from "../../constants";

// export const DropDown = (props) => {
//   const { data, height, width, placeholder = "Select item", style } = props;

//   const [value, setValue] = useState(null);
//   const [isFocus, setIsFocus] = useState(false);

//   return (
//     <Dropdown
//       style={[styles.dropdown, { height: 60, width: width }, style]} // Allow custom style from props
//       selectedTextStyle={styles.selectedTextStyle}
//       inputSearchStyle={styles.inputSearchStyle}
//       iconStyle={styles.iconStyle}
//       data={data}
//       search
//       maxHeight={300}
//       labelField="label"
//       valueField="value"
//       placeholder={placeholder}
//       placeholderStyle={styles.placeholderStyle}
//       searchPlaceholder="Search..."
//       value={value}
//       onFocus={() => setIsFocus(true)}
//       onBlur={() => setIsFocus(false)}
//       onChange={(item) => {
//         setValue(item?.value);
//         setIsFocus(false);
//       }}
//       itemContainerStyle={styles.itemContainer}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   dropdown: {
//     borderRadius: 30,
//     paddingLeft: 20,
//     paddingRight: 10,
//     backgroundColor: theme.color.lightGray,
//     borderColor: theme.color.black,
//     borderWidth: 1,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//     color: theme.color.black,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//     color: theme.color.black,
//   },
//   iconStyle: {
//     width: 30,
//     height: 30,
//     tintColor: theme.color.black,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//     color: theme.color.black,
//     backgroundColor: theme.color.white, // Set background color for search input
//   },
//   itemContainer: {
//     backgroundColor: theme.color.white, // Set background color for dropdown items
//     padding: 10,
//   },
// });



import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { theme } from "../../constants";

export const DropDown = ({ data, placeholder = "Select item", style, value, onChange }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[styles.dropdown, style]} 
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      data={data}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      value={value} // Use value from props
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        onChange(item.value); // Call the passed onChange function
        setIsFocus(false);
      }}
      itemContainerStyle={styles.itemContainer}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: theme.color.lightGray,
    borderColor: theme.color.black,
    borderWidth: 1,
    padding:20
  },
  placeholderStyle: {
    fontSize: 16,
    color: theme.color.black,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: theme.color.black,
  },
  itemContainer: {
    backgroundColor: theme.color.white,
    padding: 10,
  },
});

