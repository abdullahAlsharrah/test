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
import React, { useState } from "react";
import { Text, Image } from "react-native";
import authStore from "../stores/authStore";
import tripStore from "../stores/tripStore";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
const AddTrip = (navigation) => {
  const [trip, setTrip] = useState({
    image:
      "https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty-300x240.jpg",
    title: "",
    description: "",
  });
  const handleSubmit = async () => {
    await tripStore.createTrip(trip);
    // navigation.navigate("TripList");
  };

  return (
    <>
      <Container>
        <Content>
          <Form>
            <Item>
              <Image
                style={{ height: 200, width: 200 }}
                source={
                  trip.image
                    ? { uri: trip.image }
                    : {
                        uri:
                          "https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty-300x240.jpg",
                      }
                }
              />
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
