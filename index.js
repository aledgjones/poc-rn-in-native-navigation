import React from "react";
import { NativeBaseProvider, Button, Text } from "native-base";
import { AppRegistry, StyleSheet, View, NativeModules } from "react-native";

const { NavigationModule } = NativeModules;

const HelloWorld = () => {
  const back = () => {
    NavigationModule.goHome();
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.hello}>I am React!</Text>
        <Button onPress={back} uppercase>
          BACK
        </Button>
      </View>
    </NativeBaseProvider>
  );
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  hello: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

AppRegistry.registerComponent("Navigation", () => HelloWorld);
