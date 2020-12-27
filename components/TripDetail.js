import { observer } from "mobx-react";
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Left,
  Right,
  Text,
  Thumbnail,
} from "native-base";
import React, { useState } from "react";
import { Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";
import tripStore from "../stores/tripStore";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
import NavigationFooter from "./Navigation/NavigationFooter";

const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;
  //   const [newTrip, setNewTrip] = useState(trip);
  const profile = profileStore.getProfileByUserId(trip.userId);
  const handleFavorite = () => {
    tripStore.updateTripfavorite(trip.id);
  };
  console.log(trip);
  return (
    <>
      <ScrollView>
        <Container>
          <Content style={{ backgroundColor: "white" }}>
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
              {authStore.user.id === profile.userId ? (
                <CardItem
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <DeleteButton tripId={trip.id} navigation={navigation} />
                  <UpdateButton trip={trip} navigation={navigation} />
                </CardItem>
              ) : null}
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
                  <CardItem>
                    <Left>
                      <Text
                        style={{
                          fontSize: "20px",
                          marginLeft: 10,
                          marginBottom: 10,
                        }}
                      >
                        {trip.title}
                      </Text>
                    </Left>
                    {authStore.user.id === trip.userId ? (
                      <Right>
                        <TouchableOpacity onPress={handleFavorite}>
                          {trip.favorite === true ? (
                            <Text>Add to Favorite</Text>
                          ) : (
                            <Text>Remove from Favorite</Text>
                          )}
                        </TouchableOpacity>
                      </Right>
                    ) : null}
                  </CardItem>

                  <Image
                    source={{
                      uri: trip.image,
                    }}
                    style={{
                      height: 100,
                      width: "100%",
                      flex: 1,
                    }}
                  />
                </Body>
              </CardItem>
              <CardItem>
                <Text style={{ marginTop: 10, fontSize: 20 }}>
                  {" "}
                  {"      "}
                  {trip.description}
                </Text>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </ScrollView>
      <NavigationFooter />
    </>
  );
};
export default observer(TripDetail);
