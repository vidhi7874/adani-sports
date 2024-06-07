import { localStorageService } from "@/services/localStorge.service";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//const API_BASE_URL = "https://api.instamojo.com/v2/gateway";
const API_BASE_URL = "https://test.instamojo.com/";

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  mode: "cors",
  prepareHeaders: (headers, { getState }) => {
    // Your authentication header logic here

    // headers.set("X-Api-Key", "bd7718faadfcddabe8ab800f5f68eba8");
    // headers.set("X-Auth-Token", "615858ced0b3c6a100b05102186bc185");
    let instamojoToken = localStorageService.get("instamojo_token");
    headers.set(
      "Content-Type",
      "multipart/form-data; boundary=<calculated when request is sent>"
    );
    headers.set("Authorization", `Bearer ${instamojoToken}`);
    headers.set("Access-Control-Allow-Origin", `http://127.0.0.1:3000`);
    headers.set("Accept", `*/*`);
    // headers.set("Cookie", "csrftoken=X0CF3OMeDXYjjytOlK7rLQdS88gEkoPHViJGJiS3JLYf90U6WNjzpB37jWCtzZhS");
    // headers.set("Cookie", "csrftoken=X0CF3OMeDXYjjytOlK7rLQdS88gEkoPHViJGJiS3JLYf90U6WNjzpB37jWCtzZhS");

    return headers;
  },
});

// headers: {
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Headers':
//     'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
//   'Access-Control-Allow-Methods': 'OPTIONS,POST',
//   'Access-Control-Allow-Credentials': true,
//   'Access-Control-Allow-Origin': '*',
//   'X-Requested-With': '*',
// },

export const instamojoPaymentApi = createApi({
  reducerPath: "instamojoPaymentApi",
  refetchOnFocus: true,
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});

// Use createApi if you want to define more endpoints
// Otherwise, you can just use the async thunk as shown above
// const baseQuery = fetchBaseQuery({ baseUrl: API_BASE_URL });

// Usage example:
// dispatch(fetchAccessToken({ clientId: 'YOUR_CLIENT_ID', clientSecret: 'YOUR_CLIENT_SECRET', contentType: 'application/json' }));
// or
// dispatch(fetchAccessToken({ clientId: 'YOUR_CLIENT_ID', clientSecret: 'YOUR_CLIENT_SECRET', contentType: 'multipart/form-data' }));
