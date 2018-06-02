import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 32,
    color: 'rgb(95, 177, 237)',
  },
});

const ArticleScreen = () => (
  <View style={styles.container}>
    <Text>ArticleScreen</Text>
  </View>
);
export default ArticleScreen;
