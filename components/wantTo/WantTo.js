import React from "react";
import { Container, Content, List, Spinner } from "native-base";
import WantToItem from "./WantToItem";
import { observer } from "mobx-react";
import tripStore from "../../stores/tripStore";
import wantToStore from "../../stores/wantToStore";
import profileStore from "../../stores/profileStore";

const WantTo = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const wantTo = wantToStore.items
    .map((item) => tripStore.getTripById(item.tripId))
    .map((item) => (
      <WantToItem item={item} key={item.id} navigation={navigation} />
    ));
  //   console.log(wantToStore.items);
  return (
    <Content>
      <List>{wantTo}</List>
    </Content>
  );
};

export default observer(WantTo);
