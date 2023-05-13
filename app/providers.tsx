'use client';

import { store } from "@/data-access/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode}) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        { children }
      </QueryClientProvider>
    </ReduxProvider>
  )
}
