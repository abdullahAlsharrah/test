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
import tripStore from "../stores/tripStore";
import React, { useState, useEffect } from "react";
import { Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

const UpdateTrip = ({ route, navigation }) => {
  const { trip } = route.params;
  const [newTrip, setNewTrip] = useState(trip);

  const handleSubmit = async () => {
    await tripStore.updateTrip(newTrip);
    navigation.navigate("TripList");
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

      setNewTrip({
        ...newTrip,
        image: { uri: localUri, name: filename, type },
      });
    }
  };
  return (
    <Container>
      <Content>
        <Form>
          <Item>
            <Button onPress={pickImage}>
              <Text>Pick an image from camera roll</Text>
            </Button>
            {trip.image && (
              <Image
                source={{ uri: newTrip.image.uri }}
                style={{ width: 200, height: 200 }}
              />
            )}
            <Text note style={{ fontSize: 17 }}>
              {" "}
              Edit Your Picture
            </Text>
          </Item>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input
              value={newTrip.title}
              onChangeText={(title) => setNewTrip({ ...newTrip, title })}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Description</Label>
            <Input
              value={newTrip.description}
              onChangeText={(description) =>
                setNewTrip({ ...newTrip, description })
              }
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
export default observer(UpdateTrip);
