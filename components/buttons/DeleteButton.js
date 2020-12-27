import { Icon } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import tripStore from "../../stores/tripStore";

const DeleteButton = ({ tripId, navigation }) => {
  const handleDelete = () => {
    tripStore.deleteTrip(tripId);
    navigation.replace("TripList");
  };

  return <Icon onPress={handleDelete} name="trash" color="red" />;
};

export default DeleteButton;
