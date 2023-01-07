import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const hideshiApi = createApi({
    reducerPath:'hideshi',

    baseQuery:fetchBaseQuery({
        baseUrl:process.env.HIDESHI_API_URL,
    }),

    endpoints: (builder) => ({

        registerUser:builder.query({
            query: () => '/auth/sign-up',
            method:'POST',
            body:data,
        }),

        loginUser:builder.query({
            query: () => '/auth/login',
            method:'POST',
            body:data
        }),


    })
})

export const {  useRegisterUserQuery, useLoginUserQuery} = hideshiApi;