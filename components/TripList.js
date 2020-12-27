import { Container, Content, List, Spinner, View } from "native-base";
import React from "react";
import TripItem from "./TripItem";
import tripStore from "../stores/tripStore";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
import NavigationFooter from "./Navigation/NavigationFooter";
import { ScrollView } from "react-native-gesture-handler";
const TripList = ({ trips, navigation }) => {
  if (!authStore.user) navigation.replace("Signin");
  if (tripStore.loading) return <Spinner />;
  const tripList = trips
    ? trips.map((trip) => (
        <TripItem trip={trip} key={trip.id} navigation={navigation} />
      ))
    : tripStore.trips.map((trip) => (
        <TripItem trip={trip} key={trip.id} navigation={navigation} />
      ));

  return (
    <Container style={{ backgroundColor: "white" }}>
      <ScrollView>{tripList}</ScrollView>
    </Container>
  );
};
export default observer(TripList);
