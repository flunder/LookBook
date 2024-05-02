import React, { ReactNode } from "react";
import {
  ActivityIndicator,
  ViewStyle,
  TouchableOpacityProps,
  StyleSheet
} from "react-native";
import { Touchable } from "@app/components";
import { Colors, Corners, Sizes } from "@app/theme";

interface Props extends ViewStyle, TouchableOpacityProps {
  icon: ReactNode;
  as?: React.ComponentType;
  variant?: "default" | "dark" | "ghost";
  isLoading?: boolean;
  children?: ReactNode;
}

const IconButton = ({
  icon,
  padding = Sizes[2],
  variant = "default",
  isLoading,
  children,
  ...props
}: Props): JSX.Element => {
  const backgroundColor = {
    default: "white",
    dark: Colors.black,
    ghost: "transparent"
  }[variant];

  const borderColor = {
    default: Colors.gray200,
    dark: Colors.black,
    ghost: "transparent"
  }[variant];

  const borderWidth = variant === "default" ? 1 : 0;

  return (
    <Touchable
      padding={padding}
      flexDirection="row"
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderRadius={Corners.regular}
      backgroundColor={backgroundColor}
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      {isLoading ? <ActivityIndicator style={styles.scaleDown} /> : icon}
    </Touchable>
  );
};

const styles = StyleSheet.create({
  scaleDown: {
    transform: [{ scale: 0.75 }]
  }
});

export { IconButton };
