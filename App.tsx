import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { LogBox, View } from "react-native";
import { QueryClientProvider } from "@tanstack/react-query";

import { Navigation } from "./src/components";
import { queryClient } from "./src/utils/query";

export default function App() {
  LogBox.ignoreLogs([
    "Require cycle:",
    "Non-serializable values were found in the navigation state"
  ]);

  const [fontsLoaded, fontError] = useFonts({
    "Outfit-Regular": require("./assets/fonts/Outfit/Outfit-Regular.ttf"),
    "Outfit-Medium": require("./assets/fonts/Outfit/Outfit-Medium.ttf"),
    "Outfit-SemiBold": require("./assets/fonts/Outfit/Outfit-SemiBold.ttf"),
    "Outfit-Bold": require("./assets/fonts/Outfit/Outfit-Bold.ttf"),
    "PT-Mono": require("./assets/fonts/JetBrainsMono/JetBrainsMono-Bold.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) await SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style="dark" />
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </View>
  );
}
