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
import { Image } from "react-native";
import tripStore from "../stores/tripStore";

const UpdateTrip = ({ route }) => {
  const { trip } = route.params;
  const [newTrip, setNewTrip] = useState(trip);

  const handleSubmit = async () => {
    await tripStore.updateTrip(newTrip);
  };
  return (
    <Container>
      <Content>
        <Form>
          <Item>
            <Image
              style={{ height: 200, width: 200 }}
              source={
                newTrip.image
                  ? { uri: newTrip.image }
                  : {
                      uri:
                        "https://thumbs.dreamstime.com/b/default-avatar-trip-icon-vector-social-media-user-image-182145777.jpg",
                    }
              }
            />
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
