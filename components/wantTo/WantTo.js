import React from "react";
import { Container, Content, List, Spinner } from "native-base";
import WantToItem from "./WantToItem";
import { observer } from "mobx-react";
import tripStore from "../../stores/tripStore";
import wantToStore from "../../stores/wantToStore";
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";

const WantTo = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const wantTo = wantToStore.items
    .filter((item) => authStore.user.id === item.ownerId)
    .map((item) => (
      <WantToItem item={item} key={item.id} navigation={navigation} />
    ));
  //   console.log(wantToStore.items);
  return <Content>{wantTo}</Content>;
};

export default observer(WantTo);
