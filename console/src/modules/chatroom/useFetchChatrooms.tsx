import { useState } from "react";

import { api } from "~src/modules/utils/api";

export type FetchChatroomsOptions = {
  resolved?: boolean;
};

export type UseFetchChatroomsHookResult = {
  loading: boolean;
  fetchChatrooms: (options?: FetchChatroomsOptions) => Promise<Chatroom[]>;
};

export function useFetchChatrooms(): UseFetchChatroomsHookResult {
  const [loading, setLoading] = useState(true);

  const fetchChatrooms = async (options?: FetchChatroomsOptions) => {
    const resolved = options?.resolved ?? false;

    setLoading(true);
    const response = await api.get<Chatroom[]>("/chatrooms", {
      params: { resolved },
    });
    setLoading(false);

    return response.data;
  };

  return { loading, fetchChatrooms };
}
