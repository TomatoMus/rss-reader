import {
  // Card,
  // CardItem,
  Container,
  Content,
  // DeckSwiper,
  // Footer,
  // FooterTab,
  Tab,
  // TabHeading,
  Tabs,
  // Text,
  // Thumbnail,
  // ScrollableTab,
  // View,
} from "native-base";
import * as React from "react";
// import { Image } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import ListComponent from "../components/ListComponent";

// const cards: Array<{image: any, name: string, text: string}> = [
//   {
//     image: require("../public/img/mazesoba.png"),
//     name: "One",
//     text: "Card One",
//   },
// ];

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <HeaderComponent />
        <Content>
          <Tabs initialPage={1}>
            <Tab heading="SS">
            </Tab>
            <Tab heading="総合">
              <ListComponent />
            </Tab>
            <Tab heading="DR">
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
