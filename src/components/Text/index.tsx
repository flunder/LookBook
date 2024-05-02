import React from "react";
import { TextStyle, Text as BaseText, TextProps } from "react-native";
import { pickTextStyleProps } from "@app/utils";
import { Fonts } from "@app/theme";

interface Props extends TextStyle, TextProps {}

export const Text = ({ children, ...props }: Props): JSX.Element => {
  const style = pickTextStyleProps(props);

  return (
    <BaseText style={{ fontFamily: Fonts.Regular, ...style }} {...props}>
      {children}
    </BaseText>
  );
};
