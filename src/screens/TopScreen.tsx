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
import HeaderComponent from "../components/HeaderComponent";
import ListComponent from "../components/ListComponent";

export default class TopScreen extends React.Component {
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
