import { baseApi } from "./api/baseApi";
import userSlice from "./slices/userSlice";

export const reducer = {
    [baseApi.reducerPath]: baseApi.reducer,
    user: userSlice
}