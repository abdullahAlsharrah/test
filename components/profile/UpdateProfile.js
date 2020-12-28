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
import profileStore from "../../stores/profileStore";
import React, { useState, useEffect } from "react";
import { Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

const UpdateProfile = ({ route, navigation }) => {
  const { profile } = route.params;
  const [newProfile, setNewProfile] = useState(profile);

  const handleSubmit = async () => {
    await profileStore.updateProfile(newProfile);
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      setNewProfile({
        ...newProfile,
        image: { uri: localUri, name: filename, type },
      });
    }
  };
  return (
    <Container>
      <Content>
        <Form>
          <Item>
            <Item>
              <Button onPress={pickImage}>
                <Text>Pick an image from camera roll</Text>
              </Button>
              {newProfile.image && (
                <Image
                  source={{ uri: newProfile.image.uri }}
                  style={{ width: 200, height: 200 }}
                />
              )}
              <Text note style={{ fontSize: 17 }}>
                Edit Your Picture
              </Text>
            </Item>
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
