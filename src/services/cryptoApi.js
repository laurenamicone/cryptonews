import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': ''
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const getCoins = createApi({
    reducerPath: 'getCoins',
    baseQuery: fetchBaseQuery({baseUrl }),
    endpoints: (builder) => ({
        getCoins: builder.query({
            query: () => createRequest('/coins')
        })
    })
});