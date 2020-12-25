import { Container, Content, List, Spinner, View } from "native-base";
import React from "react";
import TripItem from "./TripItem";
import tripStore from "../stores/tripStore";
import { observer } from "mobx-react";
// import FooterNavigator from "./Navigation/Footer";
const TripList = ({ trips, navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const tripList = trips
    ? trips.map((trip) => (
        <TripItem trip={trip} key={trip.id} navigation={navigation} />
      ))
    : tripStore.trips.map((trip) => (
        <TripItem trip={trip} key={trip.id} navigation={navigation} />
      ));
  return (
    <Container>
      <Content>
        <List>{tripList}</List>
        {/* <FooterNavigator /> */}
      </Content>
    </Container>
  );
};
export default observer(TripList);
