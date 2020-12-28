import React from "react";
import { Container, Footer, FooterTab, Button, Icon } from "native-base";
import Signin from "../authentication/Signin";
import { useNavigation } from "@react-navigation/native";
const NavigationFooter = () => {
  const navigation = useNavigation();

  return (
    <Footer style={{ position: "absolute", bottom: 7 }}>
      <FooterTab>
        <Button onPress={() => navigation.navigate("Home")}>
          <Icon name="home" />
        </Button>
        {/* <Button>
          <Icon name="group"  />
        </Button> */}
        <Button onPress={() => navigation.navigate("WantTo")}>
          <Icon name="favorite" type="MaterialIcons" />
        </Button>
        <Button onPress={() => navigation.navigate("Profiles")}>
          <Icon name="search" type="FontAwesome" />
        </Button>
        <Button onPress={() => navigation.navigate("MyProfile")}>
          <Icon name="person" />
        </Button>
      </FooterTab>
    </Footer>
  );
};
export default NavigationFooter;
