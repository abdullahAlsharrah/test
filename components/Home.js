import React, { Component } from "react";
import { Container, Footer, FooterTab, Button, Icon } from "native-base";
import TripsList from "./TripsList";
export default class Home extends Component {
  render() {
    return (
      <>
        <TripsList />
        {/* <Container>
          <Footer>
            <FooterTab>
              <Button active>
                <Icon active name="home" />
              </Button>
              <Button>
                <Icon name="favorite" />
              </Button>
              <Button>
                <Icon name="search" />
              </Button>
              <Button>
                <Icon name="person" />
              </Button>
            </FooterTab>
          </Footer>
        </Container> */}
      </>
    );
  }
}
