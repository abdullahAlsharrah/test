import { observer } from "mobx-react";
import {
  Body,
  Card,
  CardItem,
  Content,
  Left,
  ListItem,
  Text,
  Thumbnail,
} from "native-base";
import React from "react";
import HasanImage from "../../img/hasanlogo.png";

const ProfileItem = ({ profile }) => {
  return (
    <ListItem>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={HasanImage} />
              <Body>
                <Text>{profile.user.username}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  );
};
export default observer(ProfileItem);
