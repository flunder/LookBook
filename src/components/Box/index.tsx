import React, { ReactNode } from "react";
import { Animated, View, ViewProps, ViewStyle } from "react-native";
import { pickViewStyleProps } from "@app/utils";

export interface BoxProps extends ViewStyle, ViewProps {
  children?: ReactNode;
  as?: React.ComponentType;
}

export interface AnimatedProps {
  children?: ReactNode;
  as?: typeof Animated.View;
  pointerEvents?: "box-none" | "none" | "box-only" | "auto";
  [key: string]: any;
}

export const Box = ({
  children,
  as,
  onLayout,
  pointerEvents = "auto",
  ...props
}: BoxProps | AnimatedProps): JSX.Element => {
  const style = pickViewStyleProps(props);
  const Component = as ?? View;

  return (
    <Component style={style} {...props} pointerEvents={pointerEvents}>
      {children}
    </Component>
  );
};
