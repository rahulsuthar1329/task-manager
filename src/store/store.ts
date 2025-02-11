import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import authReducer from "./features/authSlice";
import taskReducer from "./features/taskSlice";

import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: { auth: persistedAuthReducer, tasks: taskReducer },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
