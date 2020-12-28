// Components
import NavigationFooter from "./NavigationFooter";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
// ReactStuff
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TripList from "../TripList";
import ProfileList from "../profile/ProfileList";
import ProfilePage from "../profile/ProfilePage";
import TripDetail from "../TripDetail";
import UpdateProfile from "../profile/UpdateProfile";
import FooterNavigator from "./NavigationFooter";
import AddTrip from "../AddTrip";
import AddButton from "../buttons/AddButton";
import UpdateTrip from "../UpdateTrip";
import LogOutButton from "../buttons/LogOutButton";
import MyProfile from "../profile/MyProfile";
import WantTo from "../wantTo/WantTo";
import Home from "../Home";
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
// import profile from "../Picker";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => <AddButton />,
          headerLeft: null,
        }}
      />
      <Screen
        name="TripList"
        component={TripList}
        options={{
          headerRight: () => <AddButton />,
        }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="Profiles"
        component={ProfileList}
        options={{ headerShown: true }}
      />
      <Screen
        name="ProfilePage"
        component={ProfilePage}
        options={({ route }) => {
          const { profile } = route.params;

          return {
            title: profile.user.username,
            headerRight: () => <AddButton />,
          };
        }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ route }) => {
          const { trip } = route.params;
          return {
            title: trip.title,
            headerRight: () => <AddButton />,
          };
        }}
      />
      <Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={({ route }) => {
          const { profile } = route.params;
          return {
            title: profile.user.username,
            headerRight: () => <AddButton />,
          };
        }}
      />
      <Screen
        name="UpdateTrip"
        component={UpdateTrip}
        options={({ route }) => {
          const { trip } = route.params;
          return {
            title: trip.title,
            headerRight: () => <AddButton />,
          };
        }}
      />
      <Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerRight: () => <AddButton />,
          headerLeft: () => <LogOutButton />,
        }}
      />
      <Screen name="AddTrip" component={AddTrip} />
      <Screen name="Footer" component={FooterNavigator} />
      <Screen name="WantTo" component={WantTo} />
    </Navigator>
  );
};

export default RootNavigator;
