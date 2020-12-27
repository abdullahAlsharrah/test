import { observer } from "mobx-react";
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Left,
  Tab,
  Tabs,
  Text,
  Thumbnail,
} from "native-base";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import UpdateButton from "../buttons/UpdateButton";
import TripList from "../TripList";

const ProfilePage = ({ route, navigation, Myprofile }) => {
  const profile = Myprofile ? Myprofile : route.params.profile;
  const trips = tripStore.trips.filter(
    (trip) => trip.userId === profile.userId
  );
  const filterTrips = trips.filter((trip) => trip.favorite === true);
  console.log("userId", profile.userId);
  console.log(authStore.user.id);

  return (
    <Content style={{ backgroundColor: "white" }}>
      <Card
        style={{
          flex: 1,
          backgroundColor: "transparent",
          width: "100.32%",
          marginLeft: -0.75,
        }}
      >
        <CardItem style={{ backgroundColor: "transparent" }}>
          <Body>
            <Text style={{ fontSize: 25, marginBottom: -10 }}>
              {profile.user.username}
            </Text>
          </Body>
        </CardItem>
        <CardItem style={{ backgroundColor: "transparent" }}>
          <Left>
            <Thumbnail
              large
              source={
                profile.image
                  ? { uri: profile.image }
                  : {
                      uri:
                        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
                    }
              }
            />
            <Text style={{ fontSize: 20 }}>{profile.user.firstName}</Text>
            <Text style={{ marginLeft: 4, fontSize: 20 }}>
              {profile.user.lastName}
            </Text>
          </Left>
          {trips.length === 1 ? (
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                marginRight: 40,
                color: "gray",
              }}
            >
              {trips.length}
              {"\n"}Trip
            </Text>
          ) : (
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                marginRight: 40,
                color: "gray",
              }}
            >
              {trips.length}
              {"\n"}Trips
            </Text>
          )}
        </CardItem>
        {profile.bio ? (
          <CardItem style={{ backgroundColor: "transparent" }}>
            <Text style={{ fontSize: 17 }}>{profile.bio}</Text>
          </CardItem>
        ) : null}
        {authStore.user.id === profile.userId ? (
          <CardItem style={{ backgroundColor: "transparent" }}>
            <UpdateButton profile={profile} navigation={navigation} />
          </CardItem>
        ) : null}
        {/* </View> */}
      </Card>
      <View style={{ width: "112%", marginLeft: -33, flex: 1 }}>
        <Header hasTabs />
        <Tabs>
          <Tab heading={`${trips.length} Trips`} style={{ width: "100%" }}>
            <TripList trips={trips} navigation={navigation} />
          </Tab>
          <Tab heading={`${filterTrips.length} Favorite Trips`}>
            <TripList trips={filterTrips} navigation={navigation} />
          </Tab>
        </Tabs>
      </View>
    </Content>
  );
};
export default observer(ProfilePage);
