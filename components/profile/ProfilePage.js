import { observer } from "mobx-react";
import {
  Body,
  Button,
  Card,
  CardItem,
  Content,
  Left,
  ListItem,
  Text,
  Thumbnail,
  View,
} from "native-base";
import React from "react";
import HasanImage from "../../img/hasanlogo.png";
import tripStore from "../../stores/tripStore";
import TripList from "../TripList";

const ProfilePage = ({ route, navigation }) => {
  const { profile } = route.params;
  console.log(profile);
  const trips = tripStore.trips.filter(
    (trip) => trip.userId === profile.userId
  );

  return (
    <>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text style={{ fontSize: 25, marginBottom: -10 }}>
                {profile.user.username}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Thumbnail
                large
                source={profile.image ? { uri: profile.image } : HasanImage}
              />

              <Text style={{ textAlign: "center", fontSize: 20 }}>
                {trips.length}
                {"\n"}Trips
              </Text>
            </Left>
          </CardItem>
          <CardItem>
            <Text>
              {profile.firstName}
              {profile.lastName}
              {"\n"}
              {profile.bio}
            </Text>
            <Button
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
              <Text>Edit Your Profile</Text>
            </Button>
          </CardItem>
        </Card>
        <TripList trips={trips} navigation={navigation} />
      </Content>
    </>
  );
};
export default observer(ProfilePage);
