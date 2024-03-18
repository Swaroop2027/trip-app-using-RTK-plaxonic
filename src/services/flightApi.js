import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const flightApi = createApi({
  reducerPath: "flightApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),

  tagTypes: ["Flight"],

  endpoints: (builder) => ({
    getFlights: builder.query({
      query: () => `flights`,
      providesTags: ["Flight"],
    }),

    addPassenger: builder.mutation({
      query: (passenger) => ({
        url: `signup`,
        method: "POST",
        body: passenger,
      }),
      invalidatesTags: ["Flight"],
    }),

    getPassenger: builder.query({
      query: () => `signup`,
      providesTags: ["Flight"],
    }),
  }),
});

export const { useGetFlightsQuery, useAddPassengerMutation, useGetPassengerQuery } = flightApi;
