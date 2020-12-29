import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { NavigationIconStyled } from "../../styles";

const AddButton = () => {
  const navigation = useNavigation();
  return (
    <>
      <NavigationIconStyled
        onPress={() => navigation.navigate("AddTrip")}
        name="add-circle"
        style={{ marginRight: 10 }}
      />
    </>
  );
};

export default AddButton;
