import React from "react";
import { Container, Footer, FooterTab, Button, Icon } from "native-base";
import Signin from "../authentication/Signin";
import { useNavigation } from "@react-navigation/native";
import { NavigationIconStyled } from "../../styles";
const NavigationFooter = () => {
  const navigation = useNavigation();

  return (
    <Footer style={{ position: "absolute", bottom: 7 }}>
      <FooterTab>
        <Button onPress={() => navigation.navigate("Home")}>
          <NavigationIconStyled name="home" />
        </Button>
        {/* <Button>
          <Icon name="group"  />
        </Button> */}
        <Button onPress={() => navigation.navigate("WantTo")}>
          <NavigationIconStyled name="favorite" type="MaterialIcons" />
        </Button>
        <Button onPress={() => navigation.navigate("Profiles")}>
          <NavigationIconStyled name="search" type="FontAwesome" />
        </Button>
        <Button onPress={() => navigation.navigate("MyProfile")}>
          <NavigationIconStyled name="person" />
        </Button>
      </FooterTab>
    </Footer>
  );
};
export default NavigationFooter;
