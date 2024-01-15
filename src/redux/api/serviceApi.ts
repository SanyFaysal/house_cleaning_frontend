import { objectToQueryString } from "@/helpers/objectToQueryString";
import { baseApi } from "./baseApi"


const SERVICE_URL = "/service";

export const serviceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createService: build.mutation({
            query: ({ token, formData }) => ({
                url: `${SERVICE_URL}`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: formData
            }),
            invalidatesTags: ["SERVICES"]
        }),
        updateService: build.mutation({
            query: ({ id, token, formData }) => ({
                url: `${SERVICE_URL}/${id}`,
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: formData
            }),
            invalidatesTags: ["SERVICES", "SERVICE"]
        }),
        getAllService: build.query({
            query: (query) => {
                const queryString = objectToQueryString(query)
                console.log(queryString)
                return ({
                    url: `${SERVICE_URL}/all?${queryString}`,
                    method: "GET",

                })
            },
            providesTags: ["SERVICES"]
        }),
        getServiceById: build.query({
            query: (id) => ({
                url: `${SERVICE_URL}/${id}`,
                method: "GET",

            }),
            providesTags: ["SERVICE"]
        }),
        getAvailableServiceForReview: build.query({
            query: (token) => ({
                url: `${SERVICE_URL}/availableForReview`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }),
            providesTags: ["SERVICE"]
        }),
        deleteService: build.mutation({
            query: ({ id, token }) => ({
                url: `${SERVICE_URL}/${id}`,
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ["SERVICES", "SERVICE"]
        }),
        addSchedule: build.mutation({
            query: ({ token, data }) => ({
                url: `/schedule`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data
            }),
            invalidatesTags: ["SERVICES", "SERVICE"]
        }),


        addReview: build.mutation({
            query: ({ token, data }) => ({
                url: `/review`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data
            }),
            invalidatesTags: ["SERVICES", "SERVICE"]
        }),
        addComment: build.mutation({
            query: ({ token, data }) => ({
                url: `/service/comment`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data
            }),
            invalidatesTags: ["COMMENT"]
        }),
        getServiceComments: build.query({
            query: (serviceId) => ({
                url: `/service/comment/${serviceId}`,
                method: "GET",
            }),
            providesTags: ["COMMENT"]
        }),

        makeReply: build.mutation({
            query: ({ token, data }) => ({
                url: `/service/reply`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data
            }),
            invalidatesTags: ["COMMENT"]
        }),
    }),

})

export const {
    useGetAllServiceQuery,
    useCreateServiceMutation,
    useGetServiceByIdQuery,
    useDeleteServiceMutation,
    useUpdateServiceMutation,
    useGetAvailableServiceForReviewQuery,
    useAddReviewMutation,
    useAddScheduleMutation,
    useAddCommentMutation,
    useGetServiceCommentsQuery,
    useMakeReplyMutation
} = serviceApi