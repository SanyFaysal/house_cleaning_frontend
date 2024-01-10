import { baseApi } from "./baseApi"


const BOOKING_URL = "/booking";

export const bookingApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addBooking: build.mutation({
            query: ({ token, data }) => ({
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
            query: (token) => ({
                url: `${BOOKING_URL}/`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }),
            providesTags: ["BOOKING"]
        }),
        cancelBooking: build.mutation({
            query: ({ id, token, data }) => ({
                url: `${BOOKING_URL}/${id}`,
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data
            }),
            invalidatesTags: ["BOOKING", "USER"]
        }),

    }),

})

export const {
    useAddBookingMutation,
    useGetAllBookingQuery,
    useCancelBookingMutation
} = bookingApi