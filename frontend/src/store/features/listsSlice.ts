import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ListType } from "../../types/List";

export const listsApi = createApi({
  reducerPath: "list",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  tagTypes: ["Lists"],
  endpoints: (builder) => ({
    getLists: builder.query<ListType[], void>({
      query: () => "/list",
      providesTags: ["Lists"],
    }),
    addList: builder.mutation({
      query: (title: string) => ({
        url: "/list",
        method: "POST",
        body: { title },
      }),
      invalidatesTags: ["Lists"],
    }),
    updateList: builder.mutation({
      query: (list: ListType) => ({
        url: "/list",
        method: "PUT",
        body: list,
      }),
      invalidatesTags: ["Lists"],
    }),
  }),
});

export const { useGetListsQuery, useAddListMutation, useUpdateListMutation } =
  listsApi;
