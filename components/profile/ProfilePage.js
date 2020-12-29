import { observer } from "mobx-react";
import { Body, Content, Header, Left, Tab, Tabs, Thumbnail } from "native-base";
import React from "react";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import UpdateButton from "../buttons/UpdateButton";
import TripList from "../TripList";
import profileImg from "../../img/profileImage.jpg";
import {
  ProfileBio,
  ProfileCard,
  ProfileCArdItem,
  ProfileFirstName,
  ProfileLastName,
  ProfileTrips,
  ProfileUserName,
  ProfileTripList,
} from "../../styles";
import NavigationFooter from "../Navigation/NavigationFooter";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";

const ProfilePage = ({ route, navigation, Myprofile }) => {
  const profile = Myprofile ? Myprofile : route.params.profile;
  const trips = tripStore.trips.filter(
    (trip) => trip.userId === profile.userId
  );
  const filterTrips = trips.filter((trip) => trip.favorite === true);
  return (
    <>
      {authStore.user ? (
        <>
          <Content style={{ backgroundColor: "white" }}>
            <ProfileCard>
              <ProfileCArdItem>
                <Body>
                  <ProfileUserName>{profile.user.username}</ProfileUserName>
                </Body>
              </ProfileCArdItem>
              <ProfileCArdItem>
                <Left>
                  <Thumbnail
                    large
                    source={profile.image ? { uri: profile.image } : profileImg}
                  />
                  <ProfileFirstName>{profile.user.firstName}</ProfileFirstName>
                  <ProfileLastName>{profile.user.lastName}</ProfileLastName>
                </Left>
                {trips.length === 1 ? (
                  <ProfileTrips>
                    {trips.length}
                    {"\n"}Trip
                  </ProfileTrips>
                ) : (
                  <ProfileTrips>
                    {trips.length}
                    {"\n"}Trips
                  </ProfileTrips>
                )}
              </ProfileCArdItem>
              {profile.bio ? (
                <ProfileCArdItem>
                  <ProfileBio>{profile.bio}</ProfileBio>
                </ProfileCArdItem>
              ) : null}
              {authStore.user.id === profile.userId ? (
                <ProfileCArdItem>
                  <UpdateButton profile={profile} navigation={navigation} />
                </ProfileCArdItem>
              ) : null}
              {/* </View> */}

              <ProfileTripList>
                <Header hasTabs />
                <Tabs>
                  <Tab heading={`${trips.length} Trips`}>
                    <TripList trips={trips} navigation={navigation} />
                  </Tab>
                  <Tab heading={`${filterTrips.length} Favorite Trips`}>
                    <TripList trips={filterTrips} navigation={navigation} />
                  </Tab>
                </Tabs>
              </ProfileTripList>
            </ProfileCard>
          </Content>

          <NavigationFooter />
        </>
      ) : (
        navigation.navigate("Signin")
      )}
    </>
  );
};
export default observer(ProfilePage);
