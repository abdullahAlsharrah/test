// Components
import Footer from "./Footer";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
// ReactStuff
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TripList from "../TripList";
import ProfileList from "../profile/ProfileList";
import ProfilePage from "../profile/ProfilePage";
import TripDetail from "../TripDetail";
// import FooterNavigator from "./Footer";

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
      <Screen name="TripList" component={TripList} />
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
        options={{ headerShown: true }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ route }) => {
          const { trip } = route.params;
          return {
            title: trip.title,
          };
        }}
      />
      {/* <Screen name="Footer" component={FooterNavigator} /> */}
    </Navigator>
  );
};

export default RootNavigator;
