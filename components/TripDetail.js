import { observer } from "mobx-react";
import {
  Body,
  Card,
  CardItem,
  Content,
  Left,
  Text,
  Thumbnail,
} from "native-base";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import profileStore from "../stores/profileStore";

const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;
  const profile = profileStore.getProfileByUserId(trip.userId);
  return (
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
            <Text style={{ marginTop: 10 }}>
              {" "}
              {"      "}
              {trip.description}
            </Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  );
};
export default observer(TripDetail);
