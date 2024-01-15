import { objectToQueryString } from "@/helpers/objectToQueryString";
import { baseApi } from "./baseApi"


const BOOKING_URL = "/booking";

export const bookingApi = baseApi.injectEndpoints({
    endpoints: (build: any) => ({
        addBooking: build.mutation({
            query: ({ token, data }: { token: string, data: any }) => ({
                url: `${BOOKING_URL}`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data
            }),
            invalidatesTags: ["BOOKING", "SERVICE"]
        }),
        getAllBooking: build.query({
            query: ({ token, query }: any) => {
                const queryString = objectToQueryString(query);
                return ({
                    url: `${BOOKING_URL}?${queryString}`,
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                })
            },
            providesTags: ["BOOKING"]
        }),
        updateBookingStatus: build.mutation({
            query: ({ id, token, data }: any) => ({
                url: `${BOOKING_URL}/${id}`,
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data
            }),
            invalidatesTags: ["BOOKING", "USER"]
        }),
        cancelBooking: build.mutation({
            query: ({ id, token }: any) => ({
                url: `${BOOKING_URL}/${id}`,
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${token}`,
                },

            }),
            invalidatesTags: ["BOOKING", "USER"]
        }),

    }),

})

export const {
    useAddBookingMutation,
    useGetAllBookingQuery,
    useUpdateBookingStatusMutation,
    useCancelBookingMutation
} = bookingApi