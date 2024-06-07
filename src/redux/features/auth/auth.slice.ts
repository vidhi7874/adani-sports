// import { apiSlice, ApiEndpointBuilder } from "../../app/api/apiSlice";

import { API } from "@/constants/api.constants";
import { userApi } from "../../redux-services/userApi";
import { localStorageService } from "@/services/localStorge.service";

const lang = localStorageService.get("ADANI_LANG") || "en_US";
console.log("ADANI_LANG lang", lang);

interface LoginCredentials {
  country_code: string;
  mobile_no: string;
}

interface signup {
  phoneNumber: string;
  email: string;
  fullName: string;
}
interface profile {
  address: string;
  country: string;
  state: string;
  district: string;
  city: string;
  dob: string;
  emergencyContactName: number;
  emergencyContactNo: string;
}

interface termsandconditions {}

export const authApiSlice = userApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<string, LoginCredentials>({
      query: (credentials: any) => ({
        url: API.LOGIN,
        method: "POST",
        body: credentials,
      }),
    }),
    resendOTP: builder.mutation<string, LoginCredentials>({
      query: (credentials: any) => ({
        url: API.RESEND_OTP,
        method: "POST",
        body: credentials,
      }),
    }),
    verifyOtp: builder.mutation<string, LoginCredentials>({
      query: (credentials: any) => ({
        url: API.OTP_VERIFY,
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation<string, signup>({
      query: (data: any) => ({
        url: API.SIGNUP,
        method: "POST",
        body: data,
      }),
    }),
    profileComplete: builder.mutation<string, profile>({
      query: (data: any) => ({
        url: API.PROFILE_COMPLETE,
        method: "POST",
        body: data,
      }),
    }),
    termsandconditions: builder.mutation<string, termsandconditions>({
      query: (data: any) => ({
        url: `${API.TERMS_AND_CONDITIONS}?lang=${lang}`,
        method: "POST",
        body: data,
      }),
    }),
    // This is for country get
    getCountry: builder.mutation({
      query: (data: any) => ({
        url: `${API.COUNTRY}?lang=${lang}`,
        method: "POST",
        body: data,
      }),
    }),
    getTitle: builder.mutation({
      query: (data: any) => ({
        url: `${API.TITLE_LIST}?lang=${lang}`,
        method: "POST",
        body: data,
      }),
    }),
    getState: builder.mutation({
      query: (countryId: any) => ({
        url: `${API.STATE}${countryId}?lang=${lang}`,
        method: "POST",
        body: {},
      }),
    }),

    getAllSports: builder.mutation({
      query: (id: any) => ({
        url: id
          ? `${API.SPORT_D}/${id}?lang=${lang}`
          : `${API.SPORT_D}?lang=${lang}`,
        method: "POST",
        body: {},
      }),
    }),

    getAllSportsList: builder.mutation({
      query: (id: any) => ({
        url: id
          ? `${API.SPORT}/${id}?lang=${lang}`
          : `${API.SPORT}?lang=${lang}`,
        method: "POST",
        body: {},
      }),
    }),

    getAllVenues: builder.mutation({
      query: (id: any) => ({
        url: id
          ? `${API.GROUND_D}/${id}?lang=${lang}`
          : `${API.GROUND_D}?lang=${lang}`,
        method: "POST",
        body: {},
      }),
    }),

    getAllVenuesList: builder.mutation({
      query: (id: any) => ({
        url: id
          ? `${API.GROUND}/${id}?lang=${lang}`
          : `${API.GROUND}?lang=${lang}`,
        method: "POST",
        body: {},
      }),
    }),

    calendarApi: builder.mutation({
      query: () => ({
        url: `${API.CALENDER}?lang=${lang}`,
        method: "POST",
        body: {},
      }),
    }),

    slotAvailability: builder.mutation({
      query: (data: any) => ({
        url: `${API.SLOT_AVAILABILITY}?lang=${lang}`,
        method: "POST",
        body: data,
      }),
    }),
    addToCartApi: builder.mutation({
      query: (data: any) => ({
        url: `${API.ADD_TO_CART}?lang=${lang}`,
        method: "POST",
        body: data,
      }),
    }),
    fetBookingSlot: builder.mutation({
      query: (id: any) => ({
        url: `${API.API_CART_LIST}/${id}?lang=${lang}`,
        method: "POST",
        body: {},
      }),
    }),
    confirmApi: builder.mutation({
      query: (id: any) => ({
        url: `${API.CONFIRM_API}/${id}`,
        method: "POST",
        body: {},
      }),
    }),
    paymentApi: builder.mutation({
      query: (id: any) => ({
        url: `${API.PAYMENT_NOW}/${id}`,
        method: "POST",
        body: {},
      }),
    }),
    testApi: builder.mutation({
      query: (data: any) => ({
        url: API.TEST,
        method: "POST",
        body: data,
      }),
    }),
    deleteBooking: builder.mutation({
      query: (id: any) => ({
        url: `${API.DELETE_BOOKING}/${id}`,
        method: "POST",
        body: {},
      }),
    }),
    deleteCourtBooking: builder.mutation({
      query: (data: any) => ({
        url: `${API.DELETE_COURTBOOKING}/${data.lineID}/${data.slotID}`,
        method: "POST",
        body: {},
      }),
    }),
    getPrintSlot: builder.mutation({
      query: (id: any) => ({
        url: `${API.PRINT_SLOT}${id}?lang=${lang}`,
        method: "POST",
      }),
    }),
    getPrintBooking: builder.mutation({
      query: (id: any) => ({
        url: `${API.PRINT_BOOKING}${id}?lang=${lang}`,
        method: "POST",
      }),
    }),
    getBookingHistory: builder.mutation({
      query: () => {
        return {
          url: `${API.BOOKING_HISTORY}?lang=${lang}`,
          method: "POST",
          body: {},
        };
      },
    }),
    searchSports: builder.mutation({
      query: (name: any) => ({
        url: `${API.SEARCH_SPORTS}/${name}?lang=${lang}`,
        method: "POST",
        body: {},
      }),
    }),
    searchComplex: builder.mutation({
      query: (name: any) => ({
        url: `${API.SEARCH_COMPLEX}/${name}?lang=${lang}`,
        method: "POST",
        body: {},
      }),
    }),
    checkProfile: builder.mutation({
      query: () => ({
        url: `${API.CHECK_PROFILE}?lang=${lang}`,
        method: "POST",
        body: {},
      }),
    }),
    updateBookingApi: builder.mutation({
      query: (data: any) => ({
        url: `${API.UPDATE_BOOKING}/${data.order_id}`,
        method: "POST",
        body: data,
      }),
    }),
    allLanguages: builder.mutation({
      query: () => ({
        url: `${API.LANGUAGES}`,
        method: "POST",
        body: {},
      }),
    }),
    cartExpire: builder.mutation({
      query: (id) => ({
        url: `${API.CART_EXPIRE}${id}`,
        method: "POST",
        body: {},
      }),
    }),
    instamojoPaymentStatus: builder.mutation({
      query: (data: any) => ({
        url: `${API.PAYMENT}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllSportsMutation,
  useGetAllVenuesMutation,
  useLoginMutation,
  useVerifyOtpMutation,
  useSignupMutation,
  useProfileCompleteMutation,
  useGetCountryMutation,
  useTestApiMutation,
  useGetStateMutation,
  useCalendarApiMutation,
  useSlotAvailabilityMutation,
  useAddToCartApiMutation,
  useFetBookingSlotMutation,
  useConfirmApiMutation,
  usePaymentApiMutation,
  useDeleteBookingMutation,
  useDeleteCourtBookingMutation,
  useGetPrintSlotMutation,
  useGetPrintBookingMutation,
  useGetBookingHistoryMutation,
  useTermsandconditionsMutation,
  useSearchSportsMutation,
  useSearchComplexMutation,
  useCheckProfileMutation,
  useUpdateBookingApiMutation,
  useGetTitleMutation,

  useGetAllVenuesListMutation,
  useGetAllSportsListMutation,
  useAllLanguagesMutation,
  useCartExpireMutation,
  useResendOTPMutation,
  useInstamojoPaymentStatusMutation,
} = authApiSlice;
