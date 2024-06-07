import { localStorageService } from "@/services/localStorge.service";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: number;
  name: string;
  email: string; // Change `number` to `string` for the email property
};

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.API_URL}/api`,
  //baseUrl: "http://192.168.0.158:8020/api",

  mode: "cors",

  prepareHeaders: (headers, { getState }) => {
    const token = localStorageService.get("ADANI_SPORTS_LINE");

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  console.log("api error ---> ", result?.error);

  if (result?.error?.status === 403) {
    // api.dispatch(logOut());

    console.log("unauthorized user ---> ", result?.error);
  }

  return result;
};

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
