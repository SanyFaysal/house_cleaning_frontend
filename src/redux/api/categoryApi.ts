import { baseApi } from "./baseApi"


const CATEGORY_URL = "/category";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (build: any) => ({
        createCategory: build.mutation({
            query: ({ token, data }: { token: string, data: any }) => ({
                url: `${CATEGORY_URL}`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data
            }),
            invalidatesTags: ["CATEGORY"]
        }),
        updateCategory: build.mutation({
            query: ({ token, data, id }: any) => ({
                url: `${CATEGORY_URL}/${id}`,
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data
            }),
            invalidatesTags: ["CATEGORY"]
        }),
        getAllCategories: build.query({
            query: (token: string) => ({
                url: `${CATEGORY_URL}/all`,
                method: "GET",

            }),
            providesTags: ["CATEGORY"]
        }),
        getCategoryById: build.query({
            query: (id: string) => ({
                url: `${CATEGORY_URL}/${id}`,
                method: "GET",
            }),
            providesTags: ["CATEGORY"]
        }),
        deleteCategory: build.mutation({
            query: ({ id, token }: any) => ({
                url: `${CATEGORY_URL}/${id}`,
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ["CATEGORY"]
        }),

    }),

})

export const {
    useCreateCategoryMutation,
    useGetAllCategoriesQuery,
    useGetCategoryByIdQuery,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation
} = categoryApi