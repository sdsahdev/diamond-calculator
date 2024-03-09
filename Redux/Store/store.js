import { configureStore } from "@reduxjs/toolkit";
import reportSlice from "../Slice/reportSlice";
import CurrentdataSlice from "../Slice/CurrentdataSlice";



const store = configureStore({
    reducer: {
    reports : reportSlice,
    currentData : CurrentdataSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check
    }),
})

export default store;