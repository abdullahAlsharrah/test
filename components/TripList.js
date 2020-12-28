import { Container, Content, List, Spinner, View } from "native-base";
import React from "react";
import TripItem from "./TripItem";
import tripStore from "../stores/tripStore";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
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
    <>
      <Content style={{ backgroundColor: "white" }}>
        <List>{tripList}</List>
      </Content>
    </>
  );
};
export default observer(TripList);
