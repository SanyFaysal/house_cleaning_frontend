
//@ts-nocheck
import { getBaseUrl } from '@/helpers/config/envConfig'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: () => ({}),
    tagTypes: ['USER', "SERVICES", "SERVICE", "CATEGORY", 'BOOKING', 'COMMENT', 'CART']
})
