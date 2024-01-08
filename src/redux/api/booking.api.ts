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
            query: () => ({
                url: `${BOOKING_URL}/all`,
                method: "GET",

            }),
            providesTags: ["BOOKING"]
        }),

    }),

})

export const {
    useAddBookingMutation,
    useGetAllBookingQuery
} = bookingApi