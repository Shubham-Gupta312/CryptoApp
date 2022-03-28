import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../service/cryptoApi";
import { cryptoNewsApi } from "../service/CryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
});

