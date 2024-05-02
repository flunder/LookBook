import React from "react";
import { KeyboardAvoidingView, Platform, ViewStyle } from "react-native";

import { Grid, Sizes } from "@app/theme";
import { Box } from "@app/components";
import { isAndroid, viewPort, pickViewStyleProps } from "@app/utils";

interface Props extends ViewStyle {
  gutter?: boolean;
  safe?: boolean;
  header?: React.ReactNode;
  children?: React.ReactNode;
  as?: React.ComponentType;
}

const Page = ({
  gutter = true,
  safe = true,
  header,
  as,
  children,
  ...props
}: Props): JSX.Element => {
  const style = pickViewStyleProps(props);
  const paddingTop = safe ? viewPort.statusBar + 10 : 0;
  const paddingBottom = safe ? Sizes[8] : 0;
  const paddingHorizontal = gutter ? Grid.gutter_width : 0;
  const Component = as || Box;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={isAndroid ? "height" : "padding"}
    >
      {header && (
        <Box
          paddingTop={paddingTop}
          paddingHorizontal={paddingHorizontal}
          position="absolute"
          zIndex={1}
        >
          {header}
        </Box>
      )}
      <Component
        paddingTop={header ? paddingTop + 70 : 0}
        paddingBottom={paddingBottom}
        paddingHorizontal={paddingHorizontal}
        {...style}
      >
        {children}
      </Component>
    </KeyboardAvoidingView>
  );
};

export { Page };
