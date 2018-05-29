import {
  Body,
  List,
  ListItem,
  Thumbnail,
  Text,
} from "native-base";
import * as React from "react";

class ListComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      threads: []
    }
  }

  componentWillMount() {
    // fetch("http://jojosoku.com/feed")
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   let threads = responseJson.data.children
    //   threads = threads.map(i => {
    //     console.log(i.data.url)
    //     // i.key = i.data.url
    //     // state = { threads_url: i.data.url }
    //     return i
    //   })
    //   this.setState({
    //     threads: threads
    //   });
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
    // Feed.load('http://jojosoku.com/feed', (err: any, rss: any) => {
    //   console.log(rss);
    // });
  }

  render() {
    return (
      <List dataArray={this.state.threads}
        renderRow={(thread) =>
          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
            <Body>
              // <Text>{thread.data.url}</Text>
              <Text>hoge</Text>
                // <Text note>{this.state.threads[0].data.url}</Text>
                // console.log(this.state.threads[0])
              }
            </Body>
          </ListItem>
        }>
      </List>
    );
  }
}

export default ListComponent;
