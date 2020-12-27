import React from "react";
import { View, Text } from "react-native";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import NavigationFooter from "../Navigation/NavigationFooter";
import ProfilePage from "./ProfilePage";

const MyProfile = () => {
  const profile = profileStore.getProfileByUserId(authStore.user.id);
  return (
    <>
      <ProfilePage Myprofile={profile} />
      {/* <NavigationFooter /> */}
    </>
  );
};

export default MyProfile;
