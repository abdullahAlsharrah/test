import React, { Component, useReducer } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Spinner,
} from "native-base";
import { Image } from "react-native";
import HasanImage from "../img/hasanlogo.png";
import { observer } from "mobx-react";
import profileStore from "../stores/profileStore";
import { TouchableOpacity } from "react-native-gesture-handler";
const TripItem = ({ trip, navigation }) => {
  if (profileStore.loading) return <Spinner />;
  const profile = profileStore.getProfileByUserId(trip.userId);
  console.log(profile);
  return (
    // <Container>
    <Content>
      <Card
        style={{
          flex: 0,
          backgroundColor: "transparent",
          borderColor: "transparent",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProfilePage", { profile: profile })
          }
        >
          <CardItem style={{ backgroundColor: "transparent" }}>
            <Left>
              <Thumbnail
                source={
                  profile.image
                    ? { uri: profile.image }
                    : {
                        uri:
                          "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
                      }
                }
              />
              <Body>
                <Text>
                  {trip.user.username}
                  {/* {"\n"}
                {trip.title} */}
                </Text>
                <Text note>{trip.createdAt}</Text>
              </Body>
            </Left>
          </CardItem>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("TripDetail", { trip: trip })}
        >
          <CardItem
            style={{
              width: "108%",
              height: "100%",
              backgroundColor: "transparent",
              marginTop: -10,
              marginLeft: -17,
              marginBottom: 50,
            }}
          >
            <Body>
              <Text style={{ fontSize: "20px", marginLeft: 10 }}>
                {trip.title}
              </Text>
              <Image
                source={{
                  uri: trip.image,
                }}
                style={{
                  height: 300,
                  width: "100%",
                  flex: 1,
                }}
              />
            </Body>
          </CardItem>
        </TouchableOpacity>
      </Card>
    </Content>
    // </Container>
  );
};
export default observer(TripItem);
