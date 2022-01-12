import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const baseUrl = 'https://earthspacon.free.mockoapp.net'

export const dataAPI = createApi({
  reducerPath: 'dataAPI',
  baseQuery: fetchBaseQuery({
    baseUrl,
    // prepareHeaders: (headers) => {
    //   headers.set('X-API-Key', 'd414cd40')
    //   return headers
    // },
  }),
  tagTypes: ['data', 'posts'],
  endpoints: (build) => ({
    getData: build.query({
      query: ({ url }) => `${url}`,
      providesTags: (result) => ['data'],
    }),
    getPosts: build.query({
      query: ({ url, _limit, _page }) => ({
        url: `${url}`,
        params: { _limit, _page },
      }),
      transformResponse: (posts, meta) => ({
        posts,
        totalCount: Number(meta.response.headers.get('X-Total-Count')),
      }),
      providesTags: (result) => ['posts'],
    }),
    addData: build.mutation({
      query: ({ url, payload }) => ({
        url: `${url}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['data', 'posts'],
    }),
    editData: build.mutation({
      query: ({ url, id, payload }) => ({
        url: `${url}/${id}`,
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: ['data', 'posts'],
    }),
    deleteData: build.mutation({
      query: ({ url, id }) => ({
        url: `${url}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['data', 'posts'],
    }),
  }),
})
