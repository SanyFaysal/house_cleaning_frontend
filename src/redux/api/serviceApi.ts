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
            invalidatesTags: ["SERVICES"]
        }),
        getAllService: build.query({
            query: () => ({
                url: `${SERVICE_URL}/all`,
                method: "GET",

            }),
            providesTags: ["SERVICES"]
        }),
        getServiceById: build.query({
            query: (id) => ({
                url: `${SERVICE_URL}/${id}`,
                method: "GET",

            }),
            providesTags: ["SERVICE"]
        }),

    }),

})

export const {
    useGetAllServiceQuery,
    useCreateServiceMutation,
    useGetServiceByIdQuery
} = serviceApi