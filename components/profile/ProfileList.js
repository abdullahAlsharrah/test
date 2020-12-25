import React from "react";
import { Container, Content, List, Spinner } from "native-base";
import profileStore from "../../stores/profileStore";
import ProfileItem from "./ProfileItem";
import { observer } from "mobx-react";

const ProfileList = () => {
  if (profileStore.loading) return <Spinner />;
  const profileList = profileStore.profiles.map((profile) => (
    <ProfileItem profile={profile} key={profile.id} />
  ));
  return (
    <Content>
      <List>{profileList}</List>
    </Content>
  );
};
export default observer(ProfileList);
