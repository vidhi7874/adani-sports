import { instamojoPaymentApi } from "../redux-services/instamojoApi";

interface PaymentDetails {
  purpose: string;
  amount: number;
  buyer_name: string;
  email: string;
}

export const paymentApiSlice = instamojoPaymentApi.injectEndpoints({
  endpoints: (builder) => ({
    generateToken: builder.mutation<string, PaymentDetails>({
      query: (data: any) => ({
        url: "/oauth2/token/",
        method: "POST",
        mode: "cors",
        body: data,
      }),
    }),
    paymentRequest: builder.mutation<string, any>({
      query: (credentials: any) => ({
        url: "/oauth2/token/",
        method: "POST",
        body: {},
      }),
    }),
  }),
});

export const { useGenerateTokenMutation, usePaymentRequestMutation } =
  paymentApiSlice;
