import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Box, IconButton, Text } from "@app/components";
import { ArrowBack } from "@app/components/Icons";
import { Sizes } from "@app/theme";

interface Props {
  title?: string;
  showGoBack?: boolean;
  iconRight?: React.ReactNode;
  additional?: React.ReactNode;
}

const Header = ({ title, showGoBack = true, additional, iconRight }: Props) => {
  const navigation = useNavigation<any>();

  const handleBackPress = () => {
    if (navigation.canGoBack()) return navigation.goBack();
  };

  return (
    <Box
      width="100%"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box flexDirection="row" alignItems="center" height={50}>
        {showGoBack && (
          <IconButton
            icon={<ArrowBack />}
            onPress={handleBackPress}
            variant="ghost"
            marginLeft={-Sizes[3]}
          />
        )}
        {title && <Text fontSize={24}>{title}</Text>}
      </Box>
      {iconRight && iconRight}
      {additional && additional}
    </Box>
  );
};

export { Header };
