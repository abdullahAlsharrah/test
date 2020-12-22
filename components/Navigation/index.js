// Components
import VendorList from "../VendorList";
import VendorDetail from "../VendorDetail";
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

// ReactStuff
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
// import CartButton from "../buttons/CartButton";

const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="VendorList"
        component={VendorList}
        options={{
          title: "Choose a Vendor",
          headerRight: () => <CartButton />,
        }}
      />
      <Screen
        name="VendorDetail"
        component={VendorDetail}
        options={({ route }) => {
          const { vendor } = route.params;
          return {
            title: vendor.name,
            headerRight: () => <CartButton />,
          };
        }}
      /> */}
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
    </Navigator>
  );
};

export default RootNavigator;
