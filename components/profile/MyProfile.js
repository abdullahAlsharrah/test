import React from "react";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import ProfilePage from "./ProfilePage";

const MyProfile = ({ navigation }) => {
  const profile = profileStore.getProfileByUserId(authStore.user.id);
  return (
    <>
      {authStore.user ? (
        <ProfilePage Myprofile={profile} navigation={navigation} />
      ) : (
        navigation.navigate("Signin")
      )}
    </>
  );
};

export default MyProfile;
