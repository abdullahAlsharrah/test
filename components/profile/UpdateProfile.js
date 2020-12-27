import { observer } from "mobx-react";
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  Text,
  Thumbnail,
} from "native-base";
import React, { useState } from "react";
import profileStore from "../../stores/profileStore";

const UpdateProfile = ({ route, navigation }) => {
  const { profile } = route.params;
  const [newProfile, setNewProfile] = useState(profile);

  const handleSubmit = async () => {
    await profileStore.updateProfile(newProfile);
  };
  return (
    <Container>
      <Content>
        <Form>
          <Item>
            <Thumbnail
              large
              style={{ height: 200, width: 200 }}
              source={
                newProfile.image
                  ? { uri: newProfile.image }
                  : {
                      uri:
                        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
                    }
              }
            />
            <Text note style={{ fontSize: 17 }}>
              {" "}
              Edit Your Picture
            </Text>
          </Item>
          <Item floatingLabel>
            <Label>First Name</Label>
            <Input
              value={newProfile.user.firstName}
              onChangeText={(firstName) =>
                setNewProfile({ ...newProfile.user, firstName })
              }
            />
          </Item>
          <Item floatingLabel last>
            <Label>Last Name</Label>
            <Input
              value={newProfile.user.lastName}
              onChangeText={(lastName) =>
                setNewProfile({ ...newProfile.user, lastName })
              }
            />
          </Item>
          <Item floatingLabel last>
            <Label>Bio</Label>
            <Input
              onChangeText={(bio) => setNewProfile({ ...newProfile, bio })}
              value={newProfile.bio}
            />
          </Item>
        </Form>
        <Button
          bordered
          dark
          style={{ marginLeft: 190, marginTop: 50 }}
          onPress={handleSubmit}
        >
          <Text>Submit</Text>
        </Button>
      </Content>
    </Container>
  );
};
export default observer(UpdateProfile);
