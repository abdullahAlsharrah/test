import { observer } from "mobx-react";
import {
  Body,
  CardItem,
  Container,
  Content,
  Left,
  Right,
  Text,
  Thumbnail,
} from "native-base";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";
import tripStore from "../stores/tripStore";
import {
  ProfileCArdItem,
  TripDescription,
  TripDetailCardItem,
  TripDetailImage,
  TripDetailTitle,
  TripItemCard,
} from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
import NavigationFooter from "./Navigation/NavigationFooter";
import profileImg from "../img/profileImage.jpg";
import wantToStore from "../stores/wantToStore";

const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;
  //   const [newTrip, setNewTrip] = useState(trip);
  const profile = profileStore.getProfileByUserId(trip.userId);
  const handleFavorite = () => {
    tripStore.updateTripfavorite(trip.id);
  };
  const newItem = { tripId: trip.id, owner: authStore.user.id };
  const handleAdd = () => {
    wantToStore.addItemToWantTo(newItem);
  };
  return (
    <>
      {/* <Button onPress={handleAdd}>
        <Text>Add</Text>
      </Button> */}
      <ScrollView>
        <Container>
          <Content style={{ backgroundColor: "white" }}>
            <TripItemCard>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProfilePage", { profile: profile })
                }
              >
                <ProfileCArdItem>
                  <Left>
                    <Thumbnail
                      source={
                        profile.image ? { uri: profile.image } : profileImg
                      }
                    />
                    <Body>
                      <Text>{trip.user.username}</Text>
                      <Text note>{trip.createdAt}</Text>
                    </Body>
                  </Left>
                </ProfileCArdItem>
              </TouchableOpacity>
              {authStore.user.id === profile.userId ? (
                <ProfileCArdItem>
                  <DeleteButton tripId={trip.id} navigation={navigation} />
                  <UpdateButton trip={trip} navigation={navigation} />
                </ProfileCArdItem>
              ) : null}
              <TripDetailCardItem>
                <Body>
                  <CardItem>
                    <Left>
                      <TripDetailTitle>{trip.title}</TripDetailTitle>
                    </Left>
                    {authStore.user.id === trip.userId ? (
                      <Right>
                        <TouchableOpacity onPress={handleFavorite}>
                          {trip.favorite !== true ? (
                            <Text>Add to Favorite</Text>
                          ) : (
                            <Text>Remove from Favorite</Text>
                          )}
                        </TouchableOpacity>
                      </Right>
                    ) : (
                      <Right>
                        <TouchableOpacity onPress={handleAdd}>
                          <Text>Add to Want to visit</Text>
                        </TouchableOpacity>
                      </Right>
                    )}
                  </CardItem>

                  <TripDetailImage
                    source={{
                      uri: trip.image,
                    }}
                  />
                </Body>
              </TripDetailCardItem>
              <CardItem>
                <TripDescription>
                  {"      "}
                  {trip.description}
                </TripDescription>
              </CardItem>
            </TripItemCard>
          </Content>
        </Container>
      </ScrollView>
      <NavigationFooter />
    </>
  );
};
export default observer(TripDetail);
