import { Observer } from "mobx-react";
import { Button, Text } from "native-base";
import React from "react";
import ProfilePage from "../profile/ProfilePage";
import TripList from "../TripList";
const MyFavoriteTripButton = ({ trips, navigation }) => {
  const Favorite = trips.filter((trip) => trip.favorite === true);
  const FavoriteLength = Favorite.length;

  return (
    <>
      <Button
        onPress={() => Favorite}
        bordered
        dark
        style={{
          marginLeft: 0,
          borderColor: "gray",
          width: 400,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text>{`Take A look At My Favorites ${FavoriteLength}`}</Text>
      </Button>
    </>
  );
};

export default MyFavoriteTripButton;
