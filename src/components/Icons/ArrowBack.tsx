import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  scale?: number;
  [key: string]: any;
}

const ArrowBack = ({ scale = 1, ...props }: Props) => {
  return (
    <Svg
      width={24 * scale}
      height={24 * scale}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { ArrowBack };
