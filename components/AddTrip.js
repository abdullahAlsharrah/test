import { observer } from "mobx-react";
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
} from "native-base";
import authStore from "../stores/authStore";
import tripStore from "../stores/tripStore";
import React, { useState, useEffect } from "react";
import { Image, View, Platform, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
const AddTrip = ({ navigation }) => {
  const [trip, setTrip] = useState({
    image:
      "https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty-300x240.jpg",

    title: "",
    description: "",
  });
  const handleSubmit = async () => {
    await tripStore.createTrip(trip);
    navigation.navigate("TripList");
  };
  const imageSize = (image) => {
    console.log(image);
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

      setTrip({ ...trip, image: { uri: localUri, name: filename, type } });
    }
  };

  return (
    <>
      <Container>
        <Content>
          <Form>
            <Item>
              <Button onPress={pickImage}>
                <Text>Pick an image from camera roll</Text>
              </Button>
              {trip.image && (
                <Image
                  source={{ uri: trip.image.uri }}
                  style={{ width: 200, height: 200 }}
                />
              )}
              <Text note style={{ fontSize: 17 }}>
                Edit Your Picture
              </Text>
            </Item>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input
                value={trip.title}
                onChangeText={(title) => setTrip({ ...trip, title })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Description</Label>
              <Input
                value={trip.description}
                onChangeText={(description) =>
                  setTrip({ ...trip, description })
                }
              />
            </Item>
          </Form>
          <Button
            bordered
            dark
            style={{
              marginLeft: 190,
              marginTop: 50,
              width: 100,
              justifyContent: "center",
            }}
            onPress={handleSubmit}
          >
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default observer(AddTrip);
