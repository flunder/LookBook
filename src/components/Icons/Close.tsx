import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  scale?: number;
  [key: string]: any;
}

const Close = ({ scale = 1, ...props }: Props) => {
  return (
    <Svg
      width={24 * scale}
      height={24 * scale}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M18 6L6 18M6 6l12 12" />
    </Svg>
  );
};

export { Close };
