import React, { ReactNode, useRef } from "react";
import { AppStore, store } from "../../redux/store";
import { Provider } from "react-redux";

export default function ReduxProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = store;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
