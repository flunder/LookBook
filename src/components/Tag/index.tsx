import React, { useRef, useState, useEffect } from "react";
import { ViewStyle } from "react-native";
import { Box, Text } from "@app/components";
import { Colors, Fonts, Grid, Sizes } from "@app/theme";
import { pickViewStyleProps } from "@app/utils";

interface Props extends ViewStyle {
  children: string;
}

const Tag = ({ children, ...props }: Props): JSX.Element => {
  const style = pickViewStyleProps(props);

  return (
    <Box
      {...style}
      backgroundColor={Colors.primary}
      borderRadius={100}
      paddingHorizontal={Sizes[3]}
      paddingVertical={Sizes[1]}
    >
      <Text
        color={Colors.white}
        textTransform="uppercase"
        fontFamily={Fonts.Medium}
      >
        {children}
      </Text>
    </Box>
  );
};

export { Tag };
