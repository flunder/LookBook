import axios from "axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { API_URL } from "@app/constants/Config";
import { cacheKeys } from "@app/constants";

import { Topic } from "@app/types";

const fetchTopics = async () => {
  const response = await axios.get(`${API_URL}/topics`);
  return response.data;
};

export const useMyTopics = (): UseQueryResult<Topic[]> => {
  return useQuery({
    queryKey: cacheKeys.topics,
    queryFn: fetchTopics,
    enabled: true,
    refetchInterval: 1000 * 60,
    staleTime: 1000 * 60
  });
};
