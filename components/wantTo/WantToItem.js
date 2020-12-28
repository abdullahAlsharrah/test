import React, { Component, useReducer } from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Spinner,
} from "native-base";
import { Image } from "react-native";
import { observer } from "mobx-react";
import { TouchableOpacity } from "react-native-gesture-handler";
import profileStore from "../../stores/profileStore";
import { TripCardItem, TripImage, TripItemCard, TripTitle } from "../../styles";
const WantToItem = ({ item, navigation }) => {
  if (profileStore.loading) return <Spinner />;
  const profile = profileStore.getProfileByUserId(item.userId);
  console.log(item);
  return (
    <Container>
      <Content>
        <TripItemCard>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProfilePage", { profile: profile })
            }
          >
            <CardItem style={{ backgroundColor: "transparent" }}>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
                  }}
                />
                <Body>
                  <Text>{item.title}</Text>
                  <Text note>{item.createdAt}</Text>
                </Body>
              </Left>
            </CardItem>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("TripDetail", { trip: item })}
          >
            <TripCardItem>
              <Body>
                <TripTitle>{item.title}</TripTitle>
                <TripImage
                  source={{
                    uri: item.image,
                  }}
                />
              </Body>
            </TripCardItem>
          </TouchableOpacity>
        </TripItemCard>
      </Content>
    </Container>
  );
};
export default observer(WantToItem);
