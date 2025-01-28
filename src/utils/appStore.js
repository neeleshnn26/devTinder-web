// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice"
// import feedReducer from "./feedSlice"
// import  connectionReducer from "./connectionSlice"
// import requestReducer from "./requestSlice"
// const appStore=configureStore({
//     reducer:{
//         user:userReducer,
//         feed:feedReducer,
//         connection:connectionReducer,
//         request:requestReducer
//     }
// })
// export default appStore;
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";
import requestReducer from "./requestSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default to localStorage for web

// Persist Configurations
const persistConfig = {
  key: "root",
  storage,
};

// Persist Reducers
const persistedUserReducer = persistReducer(persistConfig, userReducer);

// Configure Store
const appStore = configureStore({
  reducer: {
    user: persistedUserReducer, // Persist only the user slice
    feed: feedReducer,
    connection: connectionReducer,
    request: requestReducer,
  },
});

// Persistor for the store
export const persistor = persistStore(appStore);
export default appStore;
