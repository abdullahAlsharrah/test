// Components
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Profile from "../Profile";
// ReactStuff
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
// import CartButton from "../buttons/CartButton";

const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#272727",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
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
        name="Profile"
        component={Profile}
        options={{ headerShown: true }}
      />
    </Navigator>
  );
};

export default RootNavigator;
