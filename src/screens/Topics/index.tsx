import React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button, Header, Page, Spinner, Text } from "@app/components";
import { useMyTopics } from "@app/utils/query";
import { Sizes } from "@app/theme";
import { SCREENS } from "@app/constants";

const Topics = () => {
  const navigation = useNavigation<any>();
  const { data: topics, isLoading } = useMyTopics();

  if (isLoading) return <Spinner />;

  return (
    <Page as={ScrollView} header={<Header title="Topics" showGoBack={false} />}>
      {topics?.map(({ id, title }) => (
        <Button
          key={id}
          marginBottom={Sizes[2]}
          alignItems="flex-start"
          onPress={() => navigation.navigate(SCREENS.Topic, { id })}
        >
          <Text>{title}</Text>
        </Button>
      ))}
    </Page>
  );
};

export { Topics };
