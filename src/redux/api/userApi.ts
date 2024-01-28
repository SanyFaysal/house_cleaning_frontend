import { baseApi } from "./baseApi"


const USER_URL = "/user";

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        signin: build.mutation({
            query: (data) => ({
                url: `/user/signin`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["USER"]
        }),
        signup: build.mutation({
            query: (signupData) => ({
                url: `${USER_URL}/signup`,
                method: "POST",
                body: signupData
            }),
            invalidatesTags: ["USER"]
        }),
        getMe: build.query({
            query: (token) => ({
                url: `${USER_URL}/me`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }),
            providesTags: ["USER"]
        }),
        getAllUser: build.query({
            query: (token) => ({
                url: `${USER_URL}/all`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }),
            providesTags: ["USER"]
        }),

    }),

})

export const {
    useSigninMutation,
    useSignupMutation,
    useGetMeQuery,
    useGetAllUserQuery
} = authApi