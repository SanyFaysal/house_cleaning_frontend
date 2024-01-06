import { baseApi } from "./baseApi"


const SERVICE_URL = "/service";

export const serviceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createService: build.mutation({
            query: ({ token, data }) => ({
                url: `${SERVICE_URL}`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data
            }),
            invalidatesTags: ["SERVICE"]
        }),
        getAllService: build.query({
            query: () => ({
                url: `${SERVICE_URL}/all`,
                method: "GET",

            }),
            providesTags: ["SERVICE"]
        }),

    }),

})

export const {
    useGetAllServiceQuery,
    useCreateServiceMutation
} = serviceApi