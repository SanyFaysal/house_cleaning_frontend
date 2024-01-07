import { baseApi } from "./baseApi"


const CATEGORY_URL = "/category";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createCategory: build.mutation({
            query: ({ token, data }) => ({
                url: `${CATEGORY_URL}`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data
            }),
            invalidatesTags: ["CATEGORY"]
        }),
        getAllCategories: build.query({
            query: () => ({
                url: `${CATEGORY_URL}/all`,
                method: "GET",

            }),
            providesTags: ["CATEGORY"]
        }),

    }),

})

export const {
    useCreateCategoryMutation,
    useGetAllCategoriesQuery
} = categoryApi