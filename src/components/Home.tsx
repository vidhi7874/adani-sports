"use client";
import {
  Box,
  Center,
  Flex,
  Grid,
  Icon,
  Image,
  Input,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Wrap,
  WrapItem,
  useMediaQuery,
} from "@chakra-ui/react";
import Hero from "@/components/HeroSection";
import { useEffect, useState } from "react";

import {
  useGenerateTokenMutation,
  usePaymentRequestMutation,
} from "../redux/features/instamojo-payment.slice";
import {
  useGetAllSportsMutation,
  useTestApiMutation,
  useGetAllVenuesMutation,
  useSearchSportsMutation,
  useSearchComplexMutation,
  useGetAllVenuesListMutation,
  useAddToCartApiMutation,
  useUpdateBookingApiMutation,
  useInstamojoPaymentStatusMutation,
} from "@/redux/features/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "next-i18next";
import {
  cardDAta,
  countDownTimer,
  seCartItemForceFullyZero,
  setBookingData,
  totalCartItems,
} from "@/redux/features/bookingSlice";
import useDebounce from "@/hooks/useDebounce";
import Loader from "./Loader";
import { useGetAllSportsListMutation } from "../redux/features/auth/auth.slice";
import Translation from "../components/Translation";
import translate from "@/lib/translate";
import useAuthState from "@/hooks/useAuthState";
import { toast } from "react-hot-toast";
import confetti from "canvas-confetti";
import { localStorageService } from "@/services/localStorge.service";
import { unauthorizedUser } from "@/services/logout.service";
import { useRouter } from "next/navigation";

export default function Home() {
  const [state, setState] = useState({
    sports: [],
    venues: [],
  });

  const isLoggedIn = useAuthState();
  const router = useRouter();
  const reducerState = useSelector((state): any => state);

  const dispatch = useDispatch();
  const [generateToken, { isLoading: generateTokenApiIsLoading }] =
    useGenerateTokenMutation();
  const [paymentRequest, { isLoading: paymentRequestApiIsLoading }] =
    usePaymentRequestMutation();

  const [getAllSportsList, { isLoading: getAllSportsApiIsLoading }] =
    useGetAllSportsListMutation();

  const [getAllVenuesList, { isLoading: getAllVenuesApiIsLoading }] =
    useGetAllVenuesListMutation();

  const [addToCartApi, { isLoading: addToCartApiIsLoading }] =
    useAddToCartApiMutation();

  const [updateBookingApi, { isLoading: updateBookingApiIsLoading }] =
    useUpdateBookingApiMutation();

  const [
    instamojoPaymentStatus,
    { isLoading: instamojoPaymentStatusApiIsLoading },
  ] = useInstamojoPaymentStatusMutation();

  const fetchAllSports = async () => {
    try {
      const res = await getAllSportsList(null).unwrap();
      console.log("fetchAllSports", res);
      if (res.result.statusCode === 200) {
        setState((prev) => ({
          ...prev,
          sports: res.result.sports,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllVenues = async () => {
    try {
      const res = await getAllVenuesList(null).unwrap();
      console.log("getAllVenues", res);
      if (res.result.statusCode === 200) {
        console.log(res.result.complex);
        setState((prev) => ({
          ...prev,
          venues: res.result.complex,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // http://192.168.0.155:3000/?payment_id=MOJO3818M05A18782571&payment_status=Credit&payment_request_id=05bb1c05c42b41578e59377f75182221

  const paymentDone = async () => {
    const config = {
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    };
  
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const queryParams = new URLSearchParams(url.search);
    const paymentId = queryParams.get("payment_id");
    const paymentStatus = queryParams.get("payment_status");
    const paymentRequestId = queryParams.get("payment_request_id");
    let details: any = localStorageService.get("ADANI_MY_CART_DETAILS");

    if (paymentId && paymentStatus && paymentRequestId) {
     
      confetti(config);
      toast.success(translate("Payment Successful Done"));

      dispatch(seCartItemForceFullyZero(true));
      dispatch(countDownTimer(false));

      // Create a URL object from the current URL
      const url = new URL(currentUrl);

      // Define the query parameters you want to remove
      const paramsToRemove = [
        "payment_id",
        "payment_status",
        "payment_request_id",
      ];

      // Check if the parameter exists in the URL and remove it
      for (const param of paramsToRemove) {
        if (url.searchParams.has(param)) {
          url.searchParams.delete(param);
        }
      }

      const obj = {
        paymentId,
        paymentStatus,
        paymentRequestId,
        order_id: details?.order_id,
      };

      try {
        const res = await instamojoPaymentStatus(obj).unwrap();
        console.log("instamojoPaymentStatus res --> ", res);
      } catch (err) {
        console.log(err);
      }
      // dispatch(countDownTimer(false));
    }
  };

  const addToCart = async () => {
    // let isLogged = checkIsAuthUser();
    let cart_data: any = [];
    cart_data = reducerState?.bookingSliceReducer?.cartData?.booking_lines;

    let details: any = localStorageService.get("ADANI_MY_CART_DETAILS");

    if (details?.order_id === "") {
      try {
        const res = await addToCartApi({
          booking_lines: cart_data,
        }).unwrap();
        console.log("getCalenderDate", res);
        if (res?.result?.statusCode === 200) {
          toast.success(
            translate("your_court_booking_has_been_add_to_cart_label")
          );
          // Generate a random two-digit number between 10 and 99
          let randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;
          dispatch(totalCartItems(randomTwoDigitNumber));
          localStorageService.set("ADANI_MY_CART_DETAILS", {
            order_id: res?.result?.order_id,
            isFreshLogin: false,
            isCallAddToCart: false,
          });
          dispatch(
            cardDAta({
              booking_lines: [],
              isFreshLogin: false,
              order_id: res?.result?.order_id,
            })
          );

          // clearAll();
          router.push("/booking-cart");
        } else if (res?.result?.statusCode === 400) {
          toast.error(res?.result?.message);
        } else if (res?.result?.statusCode === 401) {
          unauthorizedUser.logout();
        } else {
          toast.error(translate("internal_server_label"));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      updateBooking(cart_data);
    }
  };

  const updateBooking = async (objData: any) => {
    try {
      let details: any = localStorageService.get("ADANI_MY_CART_DETAILS");
      const id =
        reducerState?.bookingSliceReducer?.cartData?.order_id ||
        details?.order_id;
      const res = await updateBookingApi({
        booking_lines: objData,
        order_id: id,
      }).unwrap();

      console.log("objData in update ", objData);
      console.log("getCalenderDate", res);
      if (res?.result?.statusCode === 200) {
        let randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;
        dispatch(totalCartItems(randomTwoDigitNumber));

        toast.success(
          translate("your_court_booking_has_been_add_to_cart_label")
        );
        localStorageService.set("ADANI_MY_CART_DETAILS", {
          order_id: res?.result?.order_id,
          isFreshLogin: false,
        });
        // clearAll();
        dispatch(
          cardDAta({
            booking_lines: [],
            isFreshLogin: false,
            order_id: res?.result?.order_id,
          })
        );
        router.push("/booking-cart");
      } else if (res?.result?.statusCode === 400) {
        toast.error(res?.result?.message);
      } else if (res?.result?.statusCode === 403) {
        /** if Order is Confirm or order is Payed */
        const res = await addToCartApi(objData).unwrap();
        console.log("getCalenderDate", res);
        if (res?.result?.statusCode === 200) {
          toast.success(
            translate("your_court_booking_has_been_add_to_cart_label")
          );
          // Generate a random two-digit number between 10 and 99
          let randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;
          dispatch(totalCartItems(randomTwoDigitNumber));
          localStorageService.set("ADANI_MY_CART_DETAILS", {
            order_id: res?.result?.order_id,
            isFreshLogin: false,
            isCallAddToCart: false,
          });
          dispatch(
            cardDAta({
              booking_lines: [],
              isFreshLogin: false,
              order_id: res?.result?.order_id,
            })
          );

          //clearAll();
          router.push("/booking-cart");
        } else if (res?.result?.statusCode === 400) {
          toast.error(res?.result?.message);
        } else if (res?.result?.statusCode === 401) {
          unauthorizedUser.logout();
        } else {
          toast.error(translate("internal_server_label"));
        }
      } else if (res?.result?.statusCode === 401) {
        toast.error(translate("session_timed_out_label"));
        unauthorizedUser.logout();
      } else {
        toast.error(translate("internal_server_label"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToCartCall = () => {
    let cart_status: any = localStorageService.get("ADANI_MY_CART_DETAILS");
    let user_details: any = localStorageService.get(
      "ADANI_SPORTS_LINE_USER_DETAILS"
    );

    let cart_data: any = [];
    cart_data = reducerState?.bookingSliceReducer?.cartData?.booking_lines;

    if (
      cart_status?.isCallAddToCart &&
      cart_status?.isFreshLogin === false &&
      user_details &&
      cart_data?.length > 0
    ) {
      addToCart();
    }
  };

  useEffect(() => {
    addToCartCall();
    paymentDone();
    fetchAllSports();
    fetchAllVenues();
  }, []);

  useEffect(() => {
    console.log("isLoggedIn hook call ======>", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Box bgGradient="linear-gradient(90deg, #1AA193 0%, #316BB4 100%);">
      <Hero />
      <Box p="8">
        <Box mx={{ base: "0", md: "6" }}>
          <Tabs variant="unstyled">
            <TabList gap="0">
              <Tab
                border="1px"
                borderColor="white"
                background="transprent"
                color="white"
                fontWeight="bold"
                px={{ base: "4", md: "10" }}
                _selected={{ color: "#2683A5", bg: "white" }}
              >
                {translate("search_by_sport")}
              </Tab>
              <Tab
                border="1px"
                borderColor="white"
                fontWeight="bold"
                background="transprent"
                color="white"
                px={{ base: "4", md: "10" }}
                _selected={{ color: "#2683A5", bg: "white" }}
              >
                {translate("search_by_venue")}
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SearchBySport
                  state={state}
                  setState={setState}
                  loading={getAllSportsApiIsLoading}
                  placeholder={translate("search_here")}
                />
              </TabPanel>
              <TabPanel>
                <SearchByVenue
                  state={state}
                  setState={setState}
                  loading={getAllVenuesApiIsLoading}
                  placeholder={translate("search_here")}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

const SearchBySport = ({ state, setState, loading, placeholder }: any) => {
  const [searchSports, { isLoading: searchSportsApiIsLoading }] =
    useSearchSportsMutation();
  const [sportName, setSportName] = useState("");
  // setState

  const sportOnChange = (name: any) => {
    console.log("dfdfd", name);
    setSportName(name);
  };

  const searchSportByName = async (name: any) => {
    console.log("++++++++++", name);
    try {
      const res = await searchSports(name.trim()).unwrap();
      console.log("fetchAllSports", res);
      if (res.result.statusCode === 200) {
        setState((prev: any) => ({
          ...prev,
          sports: res.result.sports,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedSearch = useDebounce(sportName, 500);

  useEffect(() => {
    searchSportByName(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="start" mt={2}>
        <Box w={{ base: "90%", md: "25%" }} mt="4">
          <Input
            borderColor="#D8D8D8"
            height="14"
            placeholder={placeholder}
            onChange={(e) => sportOnChange(e.target.value)}
            borderRadius="0"
            bgColor="white"
          />
        </Box>
      </Box>

      <Box mt="10">
        {(searchSportsApiIsLoading || loading) && <Loader />}
        {!searchSportsApiIsLoading && !loading && (
          <Wrap spacing="2">
            {state?.sports?.map((sport: any) => (
              <WrapItem
                key={sport.id}
                w={{ base: "100%", md: "290px", lg: "250px", xl: "260px" }}
              >
                <SportCard sport={sport} />
              </WrapItem>
            ))}
          </Wrap>
        )}
      </Box>
    </Box>
  );
};

const SearchByVenue = ({ state, setState, loading, placeholder }: any) => {
  const [searchComplex, { isLoading: searchComplexApiIsLoading }] =
    useSearchComplexMutation();
  const [venueName, setVenueName] = useState("");

  const venueOnChange = (name: any) => {
    setVenueName(name);
  };

  const searchVenueByName = async (name: any) => {
    try {
      const res = await searchComplex(name.trim()).unwrap();
      if (res.result.statusCode === 200) {
        setState((prev: any) => ({
          ...prev,
          venues: res.result.complex,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedSearch = useDebounce(venueName, 500);

  useEffect(() => {
    searchVenueByName(debouncedSearch);
  }, [debouncedSearch]);
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="start" mt={2}>
        <Box w={{ base: "90%", md: "25%" }} mt="4">
          <Input
            borderColor="#D8D8D8"
            height="14"
            bgColor="white"
            placeholder={placeholder}
            onChange={(e) => venueOnChange(e.target.value)}
            borderRadius="0"
          />
        </Box>
      </Box>

      <Box mt="10">
        {(searchComplexApiIsLoading || loading) && <Loader />}

        {!searchComplexApiIsLoading && !loading && (
          <Wrap spacing="2">
            {state?.venues?.map((item: any) => (
              <WrapItem
                key={item.id}
                w={{ base: "100%", md: "290px", lg: "400px", xl: "370px" }}
              >
                <GroundCard item={item} />
              </WrapItem>
            ))}
          </Wrap>
        )}
      </Box>
    </Box>
  );
};

const SportCard = ({ sport }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isMobileView, setMobileView] = useMediaQuery("(max-width: 768px)");

  const handleClick = (obj: any) => {
    console.log(obj);
    dispatch(
      setBookingData({
        type: "sport",
        ...obj,
      })
    );
    router.push("/booking-now");
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      p="4"
      cursor="pointer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      height={170}
      //bg="#d6eaff"
      onClick={() => handleClick(sport)}
      onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
      transition="transform 0.3s ease-in-out" // Add transition property
      _hover={{
        backgroundColor: !isMobileView && "#fff",
        transform: !isMobileView && "scale(1.05)", // Apply scale transformation on hover
      }}
      // er={!isMobileView && {
      //   backgroundColor: "#fff",
      //   transform: "scale(1.05)", // Apply scale transformation on hover
      // }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Image
          // width="24"
          boxSize="75%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          src={`${process.env.API_URL}/web/image/sport.sport/${sport?.id}/img`}
          alt="cricket"
          style={{
            zIndex: 1,
            opacity: isHovered ? 0 : 1,
          }}
        />
        <Image
          // width="24"
          boxSize="80%"
          src={`${process.env.API_URL}/web/image/sport.sport/${sport?.id}/active_img`}
          alt="cricket"
          style={{
            position: "absolute",
            // top: 0,
            //  left: 0,
            opacity: isHovered ? 1 : 0, // Fade in when hovered
            // transition: "opacity 0.3s ease-in-zoom",
            //  transition: "opacity 0.3s ease-in-out",
            transform: isHovered ? "scale(1.3)" : "scale(1)",
            // Add the transition effect
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
};

const GroundCard = ({ item }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleClick = (obj: any) => {
    console.log(obj);
    dispatch(
      setBookingData({
        type: "venue",
        ...obj,
      })
    );
    router.push("/booking-now");
  };
  const [isHovered, setIsHovered] = useState(true);
  return (
    <Box
      // w="full"
      mb={{ base: 4, lg: 0 }}
      // backgroundImage={`radial-gradient(circle, #000000c2, #00000087), url(/images/game_poster.svg)`}
      backgroundSize="cover"
      backgroundPosition="center center"
      border="1px"
      pt="4"
      px="4"
      cursor="pointer"
      onClick={() => handleClick(item)}
      h="100%"
      maxHeight={{ base: "none", md: "300px", lg: "330px", xl: "370px" }} // Set the desired max height for different breakpoints
      overflow="hidden"
      w={"100%"}
      maxW={"400px"}
      display="flex"
      bgColor="white"
      flexDirection="column"
      justifyContent="space-between"
    >
      {isHovered === true && (
        <Box>
          <Box>
            <Flex>
              <Text
                color="#2683A5"
                fontWeight="bold"
                fontSize={{ base: "16", md: "22", lg: "22", xl: "22" }}
              >
                {item?.name}
              </Text>
              <Spacer />
              <Box display={"flex"} justifyContent={"end"}>
                <Image src="images/activeLocation.svg" />
              </Box>
            </Flex>

            <Text
              lineHeight={10}
              mb="2"
              color="#2683A5"
              fontSize={20}
              fontWeight="bold"
            >
              {item?.street}
            </Text>

            <Text lineHeight={6} color="#2683A5">
              {item?.phone}
            </Text>
          </Box>

          <Box display={"flex"} justifyContent={"end"}>
            <Image src="images/stadium.svg" />
          </Box>
        </Box>
      )}
    </Box>
  );
};
