import { DefaultTheme } from "@react-navigation/native";

import { Colors } from "@app/theme";

export const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white
  }
};
