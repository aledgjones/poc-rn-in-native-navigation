import React from "react";
import {
  NativeBaseProvider,
  Button,
  Text,
  View,
  ArrowBackIcon,
  Row,
} from "native-base";
import { AppRegistry, NativeModules } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const back = () => {
  const { NavigationModule } = NativeModules;
  NavigationModule.goHome();
};

function Switcher({ title }) {
  const { goBack, canGoBack } = useNavigation();
  return (
    <Row
      paddingX={5}
      paddingY={3}
      alignItems="center"
      backgroundColor="#ffffff"
    >
      {canGoBack() && (
        <ArrowBackIcon mr={5} size="lg" onPress={() => goBack()} />
      )}
      <Text flex={1} fontSize={18}>
        {title}
      </Text>
      <Button onPress={back} variant="ghost">
        SWITCH
      </Button>
    </Row>
  );
}

function HomeScreen() {
  const { push } = useNavigation();
  return (
    <>
      <Switcher title="home" />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => push("TV")} mb={5}>
          TV
        </Button>
        <Button onPress={() => push("Broadband")}>BROADBAND</Button>
      </View>
    </>
  );
}

function TVScreen() {
  const { push } = useNavigation();
  return (
    <>
      <Switcher title="TV" />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => push("Home")} mb={5}>
          HOME
        </Button>
        <Button onPress={() => push("Broadband")}>BROADBAND</Button>
      </View>
    </>
  );
}

function BroadbandScreen() {
  const { push } = useNavigation();
  return (
    <>
      <Switcher title="Broadband" />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => push("Home")} mb={5}>
          HOME
        </Button>
        <Button onPress={() => push("TV")}>TV</Button>
      </View>
    </>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TV" component={TVScreen} />
          <Stack.Screen name="Broadband" component={BroadbandScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

AppRegistry.registerComponent("Navigation", () => App);
