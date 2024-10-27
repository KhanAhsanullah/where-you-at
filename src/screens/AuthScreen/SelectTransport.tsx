import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Typography } from "../../components/atoms/Typography";
import { Header } from "../../components/atoms/Header";
import { navigate, onBack } from "../../navigation/RootNavigation";
import { IMAGES, SCREENS, SCREEN_HEIGHT, theme } from "../../constants";
import { View } from "react-native-ui-lib";
import { CustomBtn } from "../../components/atoms/CustomBtn";
import Icon from "react-native-vector-icons/AntDesign";

const SelectTransport = () => {
  const DATA = [
    { id: "1", title: "Sedan", description: "up to 5t-fits large appliances, furniture and boxes", image: IMAGES.car },
    { id: "2", title: "SUV", description: "Spacious for families and larger items", image: IMAGES.car },
    { id: "3", title: "Truck", description: "Perfect for heavy lifting and transport", image: IMAGES.car },
    // Add more transport options as needed
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const renderItem = ({ item }) => {
    const isSelected = selectedOption === item.id;

    return (
      <TouchableOpacity
        onPress={() => setSelectedOption(item.id)}
        style={[
          styles.optionContainer,
          isSelected && styles.selectedOption,
        ]}
      >
        <Image
          source={item.image}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
        />
        <View flex>
          <Typography textType="semiBold" size={theme.fontSize.large}>
            {item.title}
          </Typography>
          <Typography color={theme.color.tgray}>
            {item.description}
          </Typography>
        </View>
        {isSelected && (
          <View style={styles.checkIcon}>
            <Icon name="checkcircle" size={20} color={theme.color.primary} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaContainer mode={"dark"} safeArea={false}>
      <Header titleText="" rightIcon={false} />
      <Typography
        textType="bold"
        size={theme.fontSize.extraLarge}
        style={{ paddingHorizontal: 20 }}
      >
        Select Transport
      </Typography>
      <Typography
        style={{ paddingHorizontal: 20 }}
        color={theme.color.tgray}
        size={theme.fontSize.extraSmall12}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut
      </Typography>
      <View padding-20>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />

        <View marginV-20>
          <CustomBtn
            label={"Continue"}
            onPress={() => onBack()}
          />
        </View>
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    borderColor: theme.color.fieldColor, // Default border color
  },
  selectedOption: {
    borderColor: theme.color.primary, // Border color for selected option
  },
  checkIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default SelectTransport;
