import { baseApi } from "./baseApi"


const CART_URL = "/user/cart";

export const cartApi = baseApi.injectEndpoints({
    endpoints: (build: any) => ({
        addToCart: build.mutation({
            query: ({ token, data }: { token: string, data: any }) => ({
                url: `${CART_URL}`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: data
            }),
            invalidatesTags: ["CART"]
        }),


        getCart: build.query({
            query: (token: string) => ({
                url: `${CART_URL}/all`,
                headers: {
                    authorization: `Bearer ${token}`,
                },
                method: "GET",
            }),
            providesTags: ["CART"]
        }),
        deleteCartService: build.mutation({
            query: ({ id, token }: any) => ({
                url: `${CART_URL}/${id}`,
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ["CART"]
        }),

    }),

})

export const {
    useAddToCartMutation,
    useGetCartQuery,
    useDeleteCartServiceMutation
} = cartApi