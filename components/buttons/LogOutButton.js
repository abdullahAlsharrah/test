import { Icon } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import authStore from "../../stores/authStore";

const LogOutButton = () => {
  return (
    <Icon
      onPress={authStore.signout}
      name="logout"
      type="AntDesign"
      style={{ marginLeft: 10, color: "red" }}
    />
  );
};

export default LogOutButton;
