import React from "react";
import {
  NavigationContainer,
  useNavigationContainerRef
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { navTheme } from "./navUtils";
import { SCREENS } from "@app/constants";

import { Topic } from "@app/screens/Topic";
import { Topics } from "@app/screens/Topics";

const Navigation = () => {
  const navigationRef = useNavigationContainerRef();
  const Stack = createStackNavigator();
  const initialRouteName = SCREENS.Topics;

  const { Navigator, Group, Screen } = Stack;

  return (
    <NavigationContainer ref={navigationRef} theme={navTheme}>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initialRouteName}
      >
        <Screen name={SCREENS.Topics} component={Topics} />
        <Screen name={SCREENS.Topic} component={Topic} />
      </Navigator>
    </NavigationContainer>
  );
};

export * from "./navUtils";
export { Navigation };
