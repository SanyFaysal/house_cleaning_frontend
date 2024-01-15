import { baseApi } from "./baseApi"
const REVIEW_URL = "/review";

export const reviewApi = baseApi.injectEndpoints({
    endpoints: (build: any) => ({
        getAllReviews: build.query({
            query: () => ({
                url: `${REVIEW_URL}/all`,
                method: "GET",
            }),
        }),
    }),

})

export const {
    useGetAllReviewsQuery
} = reviewApi