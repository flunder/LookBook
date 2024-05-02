import React from "react";
import { ViewProps, ViewStyle } from "react-native";

import { pickViewStyleProps } from "@app/utils";
import { Box, Spinner, Text, Touchable } from "@app/components";
import { Borders, Colors, Corners, Fonts, Sizes } from "@app/theme";

export interface ButtonProps extends ViewStyle, ViewProps {
  onPress: () => void;
  variant?: "primary" | "outline";
  isSelected?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button = ({
  onPress,
  variant = "primary",
  isSelected,
  isLoading,
  isDisabled,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  const style = pickViewStyleProps(props);

  let backgroundColor = {
    primary: Colors.primary,
    outline: Colors.white
  }[variant];

  let textColor = {
    primary: Colors.white,
    outline: Colors.primary
  }[variant];

  if (isSelected) {
    backgroundColor = Colors.primary;
    textColor = Colors.white;
  }

  // Hide the text secretly when loading - spinner will show in same space
  if (isLoading) {
    textColor = "transparent";
  }

  return (
    <Touchable
      disabled={isLoading || isDisabled}
      onPress={onPress}
      alignItems="center"
      paddingHorizontal={Sizes[5]}
      paddingVertical={Sizes[3]}
      borderRadius={Corners.regular}
      backgroundColor={backgroundColor}
      borderColor={Colors.primary}
      borderWidth={Borders.regular}
      {...style}
    >
      <Text fontFamily={Fonts.Medium} fontSize={16} color={textColor}>
        {children}
      </Text>
      {isLoading && (
        <Box
          position="absolute"
          left={0}
          right={0}
          top={0}
          bottom={0}
          justifyContent="center"
          alignItems="center"
        >
          <Spinner color="white" scale={0.9} />
        </Box>
      )}
    </Touchable>
  );
};

export { Button };
