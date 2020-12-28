import React from "react";
import { View, Text } from "react-native";
import NavigationFooter from "./Navigation/NavigationFooter";
import TripList from "./TripList";

const Home = ({ navigation }) => {
  return (
    <>
      <TripList navigation={navigation} />
      <NavigationFooter />
    </>
  );
};

export default Home;
