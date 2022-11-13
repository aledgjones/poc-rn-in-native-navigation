import React from "react";
import { AppRegistry, Button, StyleSheet, Text, View } from "react-native";

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>I am React!</Text>
      <Button onPress={() => true}>Back</Button>
    </View>
  );
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  hello: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

AppRegistry.registerComponent("Navigation", () => HelloWorld);
