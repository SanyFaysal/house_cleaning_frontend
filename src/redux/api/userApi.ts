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
            invalidatesTags: ["user"]
        }),
        signup: build.mutation({
            query: (signupData) => ({
                url: `${USER_URL}/signup`,
                method: "POST",
                body: signupData
            }),
            invalidatesTags: ["user"]
        }),
    }),

})

export const {
    useSigninMutation,
    useSignupMutation
} = authApi