import { useState } from "react";

import { api } from "~src/modules/utils/api";

export type UseFetchNatureCodesHookResult = {
  loading: boolean;
  fetchNatureCodes: () => Promise<NatureCode[]>;
};

export function useFetchNatureCodes(): UseFetchNatureCodesHookResult {
  const [loading, setLoading] = useState(true);

  const fetchNatureCodes = async () => {
    setLoading(true);
    const response = await api.get<NatureCode[]>("/nature_codes");
    setLoading(false);

    return response.data;
  };

  return { loading, fetchNatureCodes };
}
