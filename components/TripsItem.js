import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
} from "native-base";
import { Image } from "react-native";
import HasanImage from "../img/hasanlogo.png";
import { observer } from "mobx-react";
const TripsItem = ({ trip }) => {
  return (
    <Container>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={HasanImage} />
              <Body>
                <Text>{trip.title}</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{
                  uri:
                    "https://media-cdn.tripadvisor.com/media/photo-s/0d/fe/43/83/from-the-street-credit.jpg",
                }}
                style={{ height: 200, width: 380, flex: 1 }}
              />
              <Text style={{ marginBottom: 20 }}>{trip.description}</Text>
              <Button rounded>
                <Text>Show More</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
export default observer(TripsItem);
