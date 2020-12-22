import { Content, List } from "native-base";
import React from "react";
import TripsItem from "./TripsItem";
import { observer } from "mobx-react";
const TripList = ({ trips }) => {
  const tripList = trips.map((trip) => <TripsItem trip={trip} key={trip.id} />);

  return (
    <Content>
      <List>{tripList}</List>
    </Content>
  );
};
export default observer(TripList);
