import { QueryClient } from "@tanstack/react-query";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { persistQueryClient } from "@tanstack/react-query-persist-client";

const FIVE_MINUTES = 1000 * 60 * 5;
const TWENTY_FOUR_HOURS = 1000 * 60 * 60 * 24;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: FIVE_MINUTES,
      gcTime: TWENTY_FOUR_HOURS,
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

const canUseStorage =
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

if (canUseStorage) {
  const storage = {
    getItem: async (key) => {
      return window.localStorage.getItem(key);
    },
    setItem: async (key, value) => {
      window.localStorage.setItem(key, value);
    },
    removeItem: async (key) => {
      window.localStorage.removeItem(key);
    },
  };

  const persister = createAsyncStoragePersister({
    storage,
    key: "react-query-cache",
  });

  persistQueryClient({
    queryClient,
    persister,
    maxAge: TWENTY_FOUR_HOURS,
  });
}