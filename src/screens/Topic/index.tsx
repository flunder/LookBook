import React from "react";
import { FlatList, Image } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import {
  ArrowBack,
  Box,
  Close,
  Spinner,
  Tag,
  Text,
  Touchable
} from "@app/components";
import { useMyTopics } from "@app/utils/query";
import { Colors, Grid, Sizes } from "@app/theme";
import { viewPort } from "@app/utils";
import { Entry } from "@app/types";

const Topic = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProp<any>>();
  const topicId = route.params?.id;

  const { data: topics, isLoading } = useMyTopics();

  if (isLoading) return <Spinner />;

  const currentTopic = topics?.filter((t) => t.id === topicId)?.[0];

  const renderItem = ({ item, index }: { item: Entry; index: number }) => {
    return (
      <Box width={viewPort.width} height={viewPort.height}>
        <Box flex={1}>
          <Box flex={1}>
            <Image
              style={{
                width: "100%",
                height: "100%"
              }}
              source={{ uri: item.image }}
            />
          </Box>
          <Box
            paddingHorizontal={Grid.gutter_width}
            paddingTop={Sizes[7]}
            paddingBottom={Sizes[9]}
            justifyContent="space-between"
            flex={0.25}
          >
            <Text fontSize={Sizes[5]}>{item.description}</Text>
            <Box flexDirection="row" alignItems="center">
              <Box flexDirection="row" flex={1}>
                {item.tags?.map((t: string, index: number) => (
                  <Tag key={index} marginRight={Sizes[1]}>
                    {t}
                  </Tag>
                ))}
              </Box>
              <Text>{index + 1}/12</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  if (!currentTopic?.entries) return <Text>No Entries</Text>;

  return (
    <>
      <Box position="absolute" zIndex={1} top={50} flexDirection="row">
        <Touchable
          backgroundColor={Colors.white}
          padding={Sizes[2]}
          onPress={navigation.goBack}
          marginRight={Sizes[1]}
        >
          <ArrowBack scale={1.2} top={2} />
        </Touchable>
        <Box backgroundColor={Colors.white} padding={Sizes[2]}>
          <Text fontSize={Sizes[6]}>{currentTopic.title}</Text>
        </Box>
      </Box>
      <FlatList
        data={currentTopic.entries}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        snapToAlignment="center"
        snapToInterval={viewPort.width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        // onViewableItemsChanged={this.handleViewableItemsChanged}
        // viewabilityConfig={this.viewabilityConfig}
      />
    </>
  );
};

export { Topic };
