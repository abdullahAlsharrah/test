import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
import React from "react";
import { View, Text } from "react-native";

const AddButton = () => {
  const navigation = useNavigation();
  return (
    <>
      <Icon
        onPress={() => navigation.navigate("AddTrip")}
        name="add-circle"
        style={{ marginRight: 10 }}
      />
    </>
  );
};

export default AddButton;
