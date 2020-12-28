import React from "react";
import { Content, Thumbnail, Text, Left, Body, Spinner } from "native-base";
import { observer } from "mobx-react";
import profileStore from "../stores/profileStore";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  ProfileCArdItem,
  TripCardItem,
  TripImage,
  TripItemCard,
  TripTitle,
} from "../styles";
import profileImg from "../img/profileImage.jpg";
const TripItem = ({ trip, navigation }) => {
  if (profileStore.loading) return <Spinner />;
  const profile = profileStore.getProfileByUserId(trip.userId);

  return (
    // <Container>
    <Content>
      <TripItemCard>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProfilePage", { profile: profile })
          }
        >
          <ProfileCArdItem>
            <Left>
              <Thumbnail
                source={profile.image ? { uri: profile.image } : profileImg}
              />
              <Body>
                <Text>{trip.user.username}</Text>
                <Text note>{trip.createdAt}</Text>
              </Body>
            </Left>
          </ProfileCArdItem>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("TripDetail", { trip: trip })}
        >
          <TripCardItem>
            <Body>
              <TripTitle>{trip.title}</TripTitle>

              <TripImage
                source={{
                  uri: trip.image,
                }}
              />
            </Body>
          </TripCardItem>
        </TouchableOpacity>
      </TripItemCard>
    </Content>
    // </Container>
  );
};
export default observer(TripItem);
