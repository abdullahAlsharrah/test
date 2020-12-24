import { Content, List, Spinner } from "native-base";
import React from "react";
import TripsItem from "./TripsItem";
import tripStore from "../stores/tripStore";
import { observer } from "mobx-react";
const TripList = () => {
  if (tripStore.loading) return <Spinner />;
  const tripList = tripStore.trips.map((trip) => (
    <TripsItem trip={trip} key={trip.id} />
  ));
  return (
    <Content>
      <List>{tripList}</List>
    </Content>
  );
};
export default observer(TripList);
