import { Button, Text } from "native-base";
import React from "react";
const UpdateButton = ({ profile, navigation, trip }) => {
  return (
    <>
      <Button
        onPress={() =>
          profile
            ? navigation.navigate("UpdateProfile", { profile: profile })
            : navigation.navigate("UpdateTrip", { trip: trip })
        }
        bordered
        dark
        style={{
          marginLeft: 50,
          borderColor: "gray",
          width: 300,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {profile ? <Text>Edit Your Profile</Text> : <Text>Edit Your Trip</Text>}
      </Button>
    </>
  );
};

export default UpdateButton;
