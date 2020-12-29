import React from "react";
import {
  Container,
  Content,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Spinner,
  Right,
} from "native-base";
import { observer } from "mobx-react";
import { TouchableOpacity } from "react-native-gesture-handler";
import profileStore from "../../stores/profileStore";
import { TripCardItem, TripImage, TripItemCard, TripTitle } from "../../styles";
import wantToStore from "../../stores/wantToStore";
const WantToItem = ({ item, navigation }) => {
  if (profileStore.loading) return <Spinner />;
  const profile = profileStore.getProfileByUserId(item.userId);
  const handleRemove = () => {
    wantToStore.removeItemFromWantTo(item.id);
  };
  console.log(item);
  return (
    <Content style={{ backgroundColor: "white" }}>
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
                <Text>{item.user.username}</Text>
                <Text note>{item.createdAt}</Text>
              </Body>
            </Left>
          </CardItem>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("TripDetail", { trip: item })}
        >
          <CardItem>
            <Left>
              <TripTitle>{item.title}</TripTitle>
            </Left>
            <TouchableOpacity onPress={handleRemove}>
              <Right>
                <Text>Remove from the list</Text>
              </Right>
            </TouchableOpacity>
          </CardItem>
          <TripCardItem>
            <Body>
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
  );
};
export default observer(WantToItem);
