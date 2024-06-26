import React from "react";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import userSlice from "./features/userSlice";
import { userApi } from "./api/userAPI";
import { invitationsApi } from "./api/invitationAPI";
import invitationSlice from "./features/invitationSlice";

const persistAuthConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [invitationsApi.reducerPath, invitationSlice.reducerPath],
};

const rootReducer = combineSlices(
  userSlice,
  invitationSlice,
  userApi,
  invitationsApi
);

const appReducer = (state: any, action: any) => {
  if (action.type === "RESET") {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistAuthConfig, appReducer);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(userApi.middleware, invitationsApi.middleware),
  });
  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
  // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
  setupListeners(store.dispatch);

  return store;
};

export const store = makeStore();

export type AppStore = typeof store;

export type AppDispatch = AppStore["dispatch"];
