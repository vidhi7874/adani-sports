// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Box,
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   Button,
//   Container,
//   Grid,
//   Image,
//   Input,
//   Text,
//   Wrap,
//   WrapItem,
// } from "@chakra-ui/react";
// import Select from "react-select";
// import Slider from "react-slick";
// import dayjs from "dayjs";
// import "dayjs/locale/en";
// import {
//   useAddToCartApiMutation,
//   useCalendarApiMutation,
//   useGetAllSportsMutation,
//   useGetAllVenuesMutation,
//   useSlotAvailabilityMutation,
//   useUpdateBookingApiMutation,
// } from "@/redux/features/auth/auth.slice";
// import { useDispatch, useSelector } from "react-redux";

// import { cardDAta } from "@/redux/features/bookingSlice";
// import { localStorageService } from "@/services/localStorge.service";
// import toast from "react-hot-toast";
// import { ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import { setBookingData } from "@/redux/features/bookingSlice";
// import { unauthorizedUser } from "@/services/logout.service";
// import { totalCartItems } from "@/redux/features/bookingSlice";
// // Enable the English locale for formatting
// dayjs.locale("en");

// interface SlideItem {
//   id: number;
//   date: string;
//   name: string;
// }
// const customStyles = {
//   control: (provided: any) => ({
//     ...provided,
//     backgroundColor: "#D1E9FF",
//     padding: "2px",
//     zIndex: 11,
//   }),

//   option: (provided: any, state: any) => ({
//     ...provided,
//     zIndex: 19,
//     backgroundColor: state.isSelected
//       ? "#007BFF"
//       : state.isFocused
//       ? "#F0F0F0"
//       : "white",
//     color: state.isSelected ? "#FFF" : "#000",
//   }),

//   menu: (provided: any) => ({
//     ...provided,
//     zIndex: 50,
//     // backgroundColor: "pink",
//   }),

//   singleValue: (provided: any) => ({
//     ...provided,
//     color: "#000", // Change color of the selected option
//   }),
// };

// export default function BookingNowPage() {
//   const router = useRouter();
//   const [calenderData, setCalenderData] = useState([]);
//   const [allSlots, setAllSlots] = useState([]);
//   const [isSearchable, setIsSearchable] = useState(true);
//   const [display, setDisplay] = useState<boolean>(true);
//   const [width, setWidth] = useState<number>(770);
//   const [state, setState] = useState({
//     sports: [],
//     complex: [],
//   });

//   const [isClearAll, setIsClearAll] = useState(false);
//   const [selectedSliderDateIndex, setSelectedSliderDateIndex] = useState(0);

//   const reducerState = useSelector((state): any => state);

//   const selectedCardData = reducerState?.bookingSliceReducer?.bookingData;

//   console.log("reducerState --> ", selectedCardData);

//   const dispatch = useDispatch();
//   const [selectedDate, setSelectedDate]: any = useState("");

//   const [selectedSlots, setSelectedSlots]: any = useState([]);

//   const [selectedOpt, setSelectedOpt] = useState({
//     selectedSport: {},
//     selectedComplex: {},
//   });

//   const [getAllSports, { isLoading: getAllSportsApiIsLoading }] =
//     useGetAllSportsMutation();

//   const [getAllVenues, { isLoading: getAllVenuesApiIsLoading }] =
//     useGetAllVenuesMutation();

//   const [calendarApi, { isLoading: calendarApiIsLoading }] =
//     useCalendarApiMutation();

//   const [slotAvailability, { isLoading: slotAvailabilityApiIsLoading }] =
//     useSlotAvailabilityMutation();

//   const [addToCartApi, { isLoading: addToCartApiIsLoading }] =
//     useAddToCartApiMutation();

//   const [updateBookingApi, { isLoading: updateBookingApiIsLoading }] =
//     useUpdateBookingApiMutation();

//   const handleNavigate = (path: any) => {
//     router.push(path);
//   };

//   const fetchAllSports = async (id: any) => {
//     console.log(id);
//     try {
//       const res = await getAllSports(id).unwrap();
//       console.log("fetchAllSports", res);
//       if (res.result.statusCode === 200) {
//         setState((prev) => ({
//           ...prev,
//           sports: res?.result?.sports?.map((item: any) => ({
//             label: item?.sport_name,
//             value: item?.sport_id,
//           })),
//         }));

//         // handleChangeSport

//         if (selectedCardData?.type === "sport") {
//           let preSelect = res?.result?.sports?.filter(
//             (el: any) => el?.sport_name === selectedCardData?.name
//           )[0];

//           console.log("preSelect -->", preSelect);

//           setSelectedOpt((prev) => ({
//             ...prev,
//             selectedSport: {
//               label: preSelect?.sport_name,
//               value: preSelect?.sport_id,
//             },
//           }));
//           fetchAllVenues(preSelect?.sport_id);

//           //  handleChangeComplex(preSelect?.id);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchAllVenues = async (id: any) => {
//     console.log(id);
//     try {
//       const res = await getAllVenues(id).unwrap();
//       console.log("getAllVenues", res);
//       if (res.result.statusCode === 200) {
//         console.log(res.result.complex);
//         setState((prev) => ({
//           ...prev,
//           complex: res?.result?.complex?.map((item: any) => ({
//             label: item?.complex_name,
//             value: item?.complex_id,
//           })),
//         }));

//         if (selectedCardData?.type === "venue") {
//           let preSelect = res?.result?.complex?.filter(
//             (el: any) => el?.complex_name === selectedCardData?.name
//           )[0];

//           console.log("preSelect -->", preSelect);

//           setSelectedOpt((prev) => ({
//             ...prev,
//             selectedComplex: {
//               label: preSelect?.complex_name,
//               value: preSelect?.complex_id,
//             },
//           }));
//           fetchAllSports(preSelect?.complex_id);

//           //  handleChangeComplex(preSelect?.id);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   // ClenderApi calling
//   const calenderValues = async () => {
//     try {
//       const res = await calendarApi(null).unwrap();
//       console.log("getCalenderDate", res);
//       if (res.result.statusCode === 200) {
//         console.log(res.result.calendar);
//         setCalenderData(res?.result?.calendar);
//         setSelectedDate({
//           Date: res?.result?.calendar?.[0]?.Date,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const formatDate = (dateStr: any): any => {
//     const formattedDate = dayjs(dateStr, "DD/MM/YYYY").format("MMM D ddd");
//     //console.log(formatDate);
//     return formattedDate;
//   };

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     variableWidth: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: false,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const checkIsAuthUser = () => {
//     let token = localStorageService.get("ADANI_SPORTS_LINE");
//     return token ? true : false;
//   };

//   const handleChangeSport = (obj: any) => {
//     console.log(obj);
//     setSelectedSlots([]);
//     if (obj) {
//       setSelectedOpt((prev) => ({
//         ...prev,
//         selectedSport: obj,
//       }));
//       fetchAllVenues(obj?.value);
//       const fetch_slot_obj: any = {
//         complex_id: selectedOpt?.selectedComplex?.value,
//         sport_id: obj?.value,
//         date: dayjs(selectedDate?.Date).format("YYYY-MM-DD"),
//       };
//       if (
//         fetch_slot_obj?.complex_id &&
//         fetch_slot_obj?.sport_id &&
//         fetch_slot_obj?.date
//       ) {
//         fetchSlotAvailability(fetch_slot_obj);
//       }
//     } else {
//       setSelectedOpt((prev) => ({
//         ...prev,
//         selectedSport: {},
//       }));
//       fetchAllVenues(null);
//       fetchAllSports(null);
//     }
//   };

//   const handleChangeComplex = (obj: any) => {
//     console.log(obj);
//     setSelectedSlots([]);
//     if (obj) {
//       setSelectedOpt((prev) => ({
//         ...prev,
//         selectedComplex: obj,
//       }));
//       fetchAllSports(obj.value);
//       const fetch_slot_obj: any = {
//         complex_id: obj?.value,
//         sport_id: selectedOpt?.selectedSport?.value,
//         date: dayjs(selectedDate?.Date).format("YYYY-MM-DD"),
//       };
//       if (
//         fetch_slot_obj?.complex_id &&
//         fetch_slot_obj?.sport_id &&
//         fetch_slot_obj?.date
//       ) {
//         fetchSlotAvailability(fetch_slot_obj);
//       }
//     } else {
//       setSelectedOpt((prev) => ({
//         ...prev,
//         selectedComplex: {},
//       }));
//       fetchAllVenues(null);
//       fetchAllSports(null);
//     }
//   };

//   const fetchSlotAvailability = async (obj: any) => {
//     setAllSlots([]);

//     // const obj = {
//     //   complex_id: selectedOpt?.selectedComplex?.value,
//     //   sport_id: selectedOpt?.selectedSport?.value,
//     //   date: dayjs(date.Date).format("YYYY-MM-DD"),
//     // };

//     try {
//       const res = await slotAvailability(obj).unwrap();
//       console.log("slotAvailability --> ", res);

//       if (res.result.statusCode === 200) {
//         if (res?.result?.slot_availability) {
//           setAllSlots(res.result.slot_availability);
//         } else {
//           setSelectedSlots([]);
//           setAllSlots([]);
//         }
//       } else {
//         setSelectedSlots([]);
//         setAllSlots([]);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleCalenderClick = (date: any, i: any) => {
//     console.log(date);
//     setSelectedSliderDateIndex(i);
//     setSelectedDate(date);
//     const obj = {
//       complex_id: selectedOpt?.selectedComplex?.value,
//       sport_id: selectedOpt?.selectedSport?.value,
//       date: dayjs(date.Date).format("YYYY-MM-DD"),
//     };

//     fetchSlotAvailability(obj);

//     console.log(obj);
//   };

//   // ===================================================

//   const handleSlotToggle = (
//     ground_id: any,
//     slot_id: any,
//     slot_booking_limit: any,
//     ground_name: any
//   ): any => {
//     const selectedSlot = { ground_id, slot_id };
//     const isSlotSelected = selectedSlots.some(
//       (slot: any) => slot.ground_id === ground_id && slot.slot_id === slot_id
//     );

//     if (isSlotSelected) {
//       setSelectedSlots(
//         selectedSlots.filter(
//           (slot) => !(slot.ground_id === ground_id && slot.slot_id === slot_id)
//         )
//       );
//     } else {
//       const groupSelectedSlots: any = selectedSlots.filter(
//         (slot) => slot.ground_id === ground_id
//       );
//       if (groupSelectedSlots.length < slot_booking_limit) {
//         setSelectedSlots([...selectedSlots, selectedSlot]);
//       } else {
//         toast.error(
//           `Maximum slot booking limit is ${slot_booking_limit} for ${ground_name}`
//         );
//       }
//     }
//   };

//   const isSlotSelected = (ground_id, slot_id) => {
//     return selectedSlots.some(
//       (slot) => slot.ground_id === ground_id && slot.slot_id === slot_id
//     );
//   };

//   const clearAll = () => {
//     // setIsClearAll(true);
//     dispatch(
//       setBookingData({
//         type: "",
//         id: "",
//         name: "",
//       })
//     );
//     setSelectedOpt({
//       selectedSport: {},
//       selectedComplex: {},
//     });
//     setAllSlots([]);
//     setSelectedSlots([]);
//     setSelectedSliderDateIndex(0);
//     // setSelectedDate(0)
//     fetchAllVenues(null);
//     fetchAllSports(null);
//   };

//   const handleDateChange = (event: any) => {
//     setSelectedDate({
//       Date: event.target.value,
//     });
//     handleCalenderClick(
//       {
//         Date: event.target.value,
//       },
//       null
//     );
//   };

//   const today = new Date().toISOString().split("T")[0];

//   type Slot = {
//     ground_id: number;
//     slot_id: number;
//   };

//   type SelectedOpt = {
//     selectedComplex?: {
//       value: number;
//     };
//     selectedSport?: {
//       value: number;
//     };
//   };

//   const addToCart = async (
//     selectedSlots: Slot[],
//     selectedOpt?: SelectedOpt
//   ) => {
//     let isLogged = checkIsAuthUser();
//     let obj: any = {};

//     obj = {
//       booking_lines: [] as {
//         ground_id: number;
//         slot_ids: number[];
//         complex_id?: number;
//         slot_booking_date: string;
//         sport_id?: number;
//       }[],
//       isFreshLogin: false,
//     };

//     const groups: { [groundId: number]: number[] } = {};
//     selectedSlots.forEach((item) => {
//       if (!groups[item.ground_id]) {
//         groups[item.ground_id] = [];
//       }
//       groups[item.ground_id].push(item.slot_id);
//     });
//     console.log("selectedDate !!!!!!!!!!!!!!!", selectedDate);
//     Object.keys(groups).forEach((groundId) => {
//       obj?.booking_lines.push({
//         ground_id: parseInt(groundId),
//         slot_booking_date: dayjs(selectedDate?.Date || selectedDate).format(
//           "YYYY-MM-DD"
//         ),
//         slot_ids: groups[parseInt(groundId)],
//         complex_id: selectedOpt?.selectedComplex?.value,
//         sport_id: selectedOpt?.selectedSport?.value,
//       });
//     });

//     console.log("add card obj ---> ", obj);

//     console.log("card data obj --> ", obj);

//     // router.push("/bookig-cart");

//     if (isLogged) {
//       const isFreshLogin =
//         reducerState?.bookingSliceReducer?.cartData?.isFreshLogin;

//       let details: any = localStorageService.get("ADANI_MY_CART_DETAILS");

//       if (details?.order_id === "") {
//         try {
//           const res = await addToCartApi(obj).unwrap();
//           console.log("getCalenderDate", res);
//           if (res?.result?.statusCode === 200) {
//             toast.success(
//               "Your court booking has been successfully added to the cart"
//             );
//             // Generate a random two-digit number between 10 and 99
//             let randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;
//             dispatch(totalCartItems(randomTwoDigitNumber));
//             localStorageService.set("ADANI_MY_CART_DETAILS", {
//               order_id: res?.result?.order_id,
//               isFreshLogin: false,
//             });
//             dispatch(
//               cardDAta({
//                 booking_lines: obj?.booking_lines,
//                 isFreshLogin: false,
//                 order_id: res?.result?.order_id,
//               })
//             );

//             clearAll();
//             /// router.push("/booking-cart");
//           } else if (res?.result?.statusCode === 400) {
//             toast.error(res?.result?.message);
//           } else if (res?.result?.statusCode === 401) {
//             unauthorizedUser.logout();
//           } else {
//             toast.error("Internal server error !");
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       } else {
//         updateBooking(obj);
//       }
//     } else {
//       localStorageService.set("ADANI_MY_CART_DETAILS", {
//         order_id: "",
//         isFreshLogin: true,
//       });
//       dispatch(
//         cardDAta({
//           booking_lines: obj?.booking_lines,
//           isFreshLogin: true,
//         })
//       );
//       router.push("/signin");
//     }
//   };

//   const updateBooking = async (objData: any) => {
//     try {
//       let details: any = localStorageService.get("ADANI_MY_CART_DETAILS");
//       const id =
//         reducerState?.bookingSliceReducer?.cartData?.order_id ||
//         details?.order_id;
//       const res = await updateBookingApi({
//         ...objData,
//         order_id: id,
//       }).unwrap();

//       console.log("objData in update ", objData);
//       console.log("getCalenderDate", res);
//       if (res?.result?.statusCode === 200) {
//         let randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;
//         dispatch(totalCartItems(randomTwoDigitNumber));

//         toast.success(
//           "Your court booking has been successfully added to the cart"
//         );
//         localStorageService.set("ADANI_MY_CART_DETAILS", {
//           order_id: res?.result?.order_id,
//           isFreshLogin: false,
//         });
//         clearAll();
//         dispatch(
//           cardDAta({
//             booking_lines: objData?.booking_lines,
//             isFreshLogin: false,
//             order_id: res?.result?.order_id,
//           })
//         );
//         /// router.push("/booking-cart");
//       } else if (res?.result?.statusCode === 400) {
//         toast.error(res?.result?.message);
//       } else if (res?.result?.statusCode === 403) {
//         /** if Order is Confirm or order is Payed */
//         const res = await addToCartApi(objData).unwrap();
//         console.log("getCalenderDate", res);
//         if (res?.result?.statusCode === 200) {
//           toast.success(
//             "Your court booking has been successfully added to the cart"
//           );
//           // Generate a random two-digit number between 10 and 99
//           let randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;
//           dispatch(totalCartItems(randomTwoDigitNumber));
//           localStorageService.set("ADANI_MY_CART_DETAILS", {
//             order_id: res?.result?.order_id,
//             isFreshLogin: false,
//           });
//           dispatch(
//             cardDAta({
//               booking_lines: obj?.booking_lines,
//               isFreshLogin: false,
//               order_id: res?.result?.order_id,
//             })
//           );

//           clearAll();
//           /// router.push("/booking-cart");
//         } else if (res?.result?.statusCode === 400) {
//           toast.error(res?.result?.message);
//         } else if (res?.result?.statusCode === 401) {
//           unauthorizedUser.logout();
//         } else {
//           toast.error("Internal server error !");
//         }
//       } else if (res?.result?.statusCode === 401) {
//         toast.error("Session Timed Out !");
//         unauthorizedUser.logout();
//       } else {
//         toast.error("Internal server error !");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const isFreshLoginUserOnly = async () => {
//     let details: any = localStorageService.get("ADANI_MY_CART_DETAILS");
//     let token: any = localStorageService.get("ADANI_SPORTS_LINE");

//     const order_id = details?.order_id;
//     // const isFreshLogin =
//     //   reducerState?.bookingSliceReducer?.cartData?.isFreshLogin;

//     const booking_lines =
//       reducerState?.bookingSliceReducer?.cartData?.booking_lines;
//     if (order_id === "" || (order_id === null && token)) {
//       try {
//         const res = await addToCartApi({
//           booking_lines: booking_lines,
//         }).unwrap();
//         console.log("getCalenderDate", res);
//         if (res?.result?.statusCode === 200) {
//           localStorageService.set("ADANI_MY_CART_DETAILS", {
//             order_id: res?.result?.order_id,
//             isFreshLogin: false,
//           });
//           dispatch(totalCartItems(booking_lines?.length));
//           dispatch(
//             cardDAta({
//               booking_lines: booking_lines,
//               isFreshLogin: false,
//               order_id: res?.result?.order_id,
//             })
//           );
//           /// router.push("/booking-cart");
//         } else if (res?.result?.statusCode === 401) {
//           unauthorizedUser.logout();
//         } else {
//           toast.error("Internal server error !");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };
//   const handleLinkClick = () => {
//     router.push("/");
//   };
//   const handleLinkPageClick = () => {
//     router.push("/booking-now");
//   };

//   // const getCartLength = async () => {
//   //   let cart_details: any = localStorageService?.get("ADANI_MY_CART_DETAILS");
//   //   let order_id = cart_details?.order_id || cartData?.order_id;
//   //   if (order_id) {
//   //     try {
//   //       const res = await fetBookingSlot(order_id).unwrap();
//   //       console.log("fetchCart", res);
//   //       if (res?.result?.statusCode === 200) {
//   //         console.log("res", res);

//   //         setTotalCourt(
//   //           res?.result?.sports_booking?.[0]?.booking_lines?.length
//   //         );
//   //       } else {
//   //       }
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   }
//   // };

//   useEffect(() => {
//     // getCartLength();
//     fetchAllSports(null);
//     fetchAllVenues(null);
//     calenderValues();
//     isFreshLoginUserOnly();
//   }, []);

//   useEffect(() => {
//     console.log("selectedSlots --> ", selectedSlots);
//   }, [selectedSlots]);

//   return (
//     <>
//       <Container
//         bg="white"
//         maxW={{ base: "80%" }}
//         px="0"
//         py="6"
//         mt={20}
//         position="relative"
//       >
//         <Box my={"2"}>
//           <Breadcrumb
//             spacing="10px"
//             separator={<ArrowRightIcon color="gray.500" boxSize={3} />}
//           >
//             <BreadcrumbItem fontWeight={"bold"}>
//               <BreadcrumbLink onClick={handleLinkClick}>Home</BreadcrumbLink>
//             </BreadcrumbItem>

//             <BreadcrumbItem>
//               <BreadcrumbLink onClick={handleLinkPageClick}>
//                 Booking Slot
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//           </Breadcrumb>
//         </Box>
//         <Box position="sticky" border="0px" width="full">
//           <Box
//             display={{ base: "column", md: "flex" }}
//             gap="4"
//             alignItems="center"
//           >
//             <Box>
//               <Text fontSize={24} fontWeight="bold">
//                 You searched for
//               </Text>
//             </Box>
//             <Box w={{ base: "100%", lg: "24%" }}>
//               <Select
//                 className="basic-single"
//                 classNamePrefix="select"
//                 defaultValue={state?.sports?.[0]}
//                 isSearchable={isSearchable}
//                 value={selectedOpt?.selectedSport}
//                 styles={customStyles}
//                 //  isClearable
//                 options={state?.sports}
//                 onChange={(obj) => handleChangeSport(obj)}
//               />
//             </Box>
//             <Text fontSize={24} fontWeight="boldcustomStyles">
//               at
//             </Text>
//             <Box w={{ base: "100%", lg: "24%" }}>
//               <Select
//                 className="basic-single"
//                 classNamePrefix="select"
//                 defaultValue={state?.complex?.[0]}
//                 value={selectedOpt?.selectedComplex}
//                 isSearchable={isSearchable}
//                 //  isClearable
//                 styles={customStyles}
//                 options={state?.complex}
//                 onChange={(obj) => handleChangeComplex(obj)}
//               />
//             </Box>
//             {selectedOpt?.selectedSport || selectedOpt?.selectedComplex ? (
//               <Button mt={{ base: "4", md: "0" }} onClick={() => clearAll()}>
//                 Clear All
//               </Button>
//             ) : null}
//           </Box>

//           <Box mt="8">
//             <Slider {...settings}>
//               {calenderData.map((date, i) => (
//                 <Box
//                   cursor="pointer"
//                   className="card"
//                   // width={50}
//                   // height={50}
//                   p="2"
//                   key={i}
//                   onClick={() => handleCalenderClick(date, i)}
//                 >
//                   <Box
//                     p="2"
//                     // height={38}
//                     width={45}
//                     height={"65px"}
//                     //bg="#F1F5F9"
//                     sx={{
//                       backgroundColor:
//                         selectedSliderDateIndex === i ? "#0C82EE" : "#F1F5F9",
//                       color: selectedSliderDateIndex === i ? "#fff" : "",
//                     }}
//                     _hover={{
//                       bg: "#0C82EE",
//                       color: "white",
//                     }}
//                   >
//                     <Text
//                       textAlign="center"
//                       fontWeight="bold"
//                       //width={20}
//                       fontSize={12}
//                     >
//                       {formatDate(date?.Date)}
//                     </Text>
//                   </Box>
//                 </Box>
//               ))}
//               <Box
//                 cursor="pointer"
//                 className="card"
//                 width="200"
//                 p="2"
//                 onClick={() => console.log("dfd")}
//               >
//                 <Box
//                   // p="2"
//                   // height={38}
//                   bg="#F1F5F9"
//                   _hover={{
//                     bg: "#0C82EE",
//                     color: "white",
//                   }}
//                 >
//                   <Box position="relative">
//                     <Text
//                       textAlign="center"
//                       fontWeight="bold"
//                       width={45}
//                       height={"65px"}
//                       fontSize={24}
//                       pt="4"
//                     >
//                       +
//                     </Text>
//                     <Box
//                       width={45}
//                       height={"65px"}
//                       position="absolute"
//                       top="26%"
//                       right="3%"
//                     >
//                       <Input
//                         type="date"
//                         value={selectedDate?.Date}
//                         onChange={(e) => handleDateChange(e)}
//                         opacity={0}
//                         min={today}
//                       />
//                     </Box>
//                   </Box>
//                 </Box>
//               </Box>
//             </Slider>
//           </Box>
//         </Box>

//         <Box
//           mt="8"
//           px={{ base: "1", md: "2" }}
//           height="450"
//           zIndex={-9}
//           //  border="1px"
//           width="full"
//           overflowY="scroll"
//         >
//           <Box>
//             {allSlots.length > 0 ? (
//               allSlots.map((ground, ind) => (
//                 <Box
//                   key={ground.ground_id}
//                   p={{ base: 1, md: 2 }}
//                   width="100%"
//                   display={{ base: "column", md: "flex" }}
//                   justifyContent="space-between"
//                   mt={ind !== 0 ? 6 : 2}
//                   borderBottom={ind > 0 || ind === 0 ? "1px" : ""}
//                   borderBottomColor={ind > 0 || ind === 0 ? " #dfdfdf" : ""}
//                 >
//                   <Box
//                     width={{ base: "full", md: "250px" }}
//                     mt={{ base: "2", md: "10" }}
//                   >
//                     <Text fontWeight="bold">{ground.ground_name}</Text>
//                   </Box>
//                   <Wrap spacing="3" w="100%">
//                     {ground.slots.length > 0 ? (
//                       ground.slots.map((slot: any) => (
//                         <WrapItem key={slot.slot_id}>
//                           <Box
//                             key={slot.slot_id}
//                             mx={{ base: "1", md: "3" }}
//                             w={{ base: "100px", md: "110px", lg: "120px" }}
//                           >
//                             <Button
//                               key={slot.slot_id}
//                               borderColor="#999999"
//                               borderRadius="0"
//                               variant={
//                                 isSlotSelected(ground.ground_id, slot.slot_id)
//                                   ? "solid"
//                                   : "outline"
//                               }
//                               colorScheme={
//                                 isSlotSelected(ground.ground_id, slot.slot_id)
//                                   ? "blue"
//                                   : "green"
//                               }
//                               onClick={() =>
//                                 handleSlotToggle(
//                                   ground?.ground_id,
//                                   slot?.slot_id,
//                                   ground?.slot_booking_limit,
//                                   ground?.ground_name
//                                 )
//                               }
//                               width={{ base: "100%", md: "140px" }}
//                               cursor="pointer"
//                               p="2"
//                               height="16"
//                               _hover={{
//                                 color: "white",
//                                 backgroundColor: "#006DB7",
//                               }}
//                             >
//                               {slot.slot_name}
//                             </Button>
//                           </Box>
//                         </WrapItem>
//                       ))
//                     ) : (
//                       <WrapItem>
//                         <Box
//                           width={{ base: "full", md: "250px" }}
//                           mt={{ base: "2", md: "10" }}
//                           textAlign="center"
//                         >
//                           <Text textAlign={"center"}>No slots available </Text>
//                         </Box>
//                       </WrapItem>
//                     )}
//                   </Wrap>
//                 </Box>
//               ))
//             ) : (
//               // <Text mt={"2"} color={"#0C82EE"} textAlign={"center"}>
//               //   No slots available
//               // </Text>
//               <Box
//                 mt={{ base: 0, md: 0 }}
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   height: "100%",
//                 }}
//               >
//                 <Image
//                   w={{ base: "100%", md: "55%" }}
//                   src="/images/noslot.svg"
//                   h={{ base: "100%", md: "80%" }}
//                 />
//                 {/* <Text>Cart is empty</Text> */}
//               </Box>
//             )}
//           </Box>
//         </Box>

//         <Box py="10">
//           <Button
//             bgGradient="linear(to-l, #0C82EE, #00B16B)"
//             type="submit"
//             w="full"
//             color="white"
//             borderRadius="0"
//             isDisabled={selectedSlots?.length === 0}
//             isLoading={addToCartApiIsLoading || updateBookingApiIsLoading}
//             p="6"
//             // onClick={() => router.push("/booking-cart")}
//             onClick={() => addToCart(selectedSlots, selectedOpt)}
//             _hover={{}}
//           >
//             Add to cart
//           </Button>
//         </Box>
//       </Container>
//     </>
//   );
// }

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Grid,
  HStack,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Flex,
} from "@chakra-ui/react";
import Select from "react-select";
import Slider from "react-slick";
import dayjs from "dayjs";
import "dayjs/locale/en";
import {
  useAddToCartApiMutation,
  useCalendarApiMutation,
  useGetAllSportsMutation,
  useGetAllVenuesMutation,
  useSlotAvailabilityMutation,
  useUpdateBookingApiMutation,
} from "@/redux/features/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";

import {
  cardDAta,
  seCartItemForceFullyZero,
} from "@/redux/features/bookingSlice";
import { localStorageService } from "@/services/localStorge.service";
import toast from "react-hot-toast";
import { ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { setBookingData } from "@/redux/features/bookingSlice";
import { unauthorizedUser } from "@/services/logout.service";
import { totalCartItems } from "@/redux/features/bookingSlice";
// Enable the English locale for formatting
dayjs.locale("en");

import translate from "../../lib/translate";
import Translation from "@/components/Translation";
import { selectedMySlots } from "@/redux/features/bookingSlice";
import Loader from "@/components/Loader";

interface SlideItem {
  id: number;
  date: string;
  name: string;
}
const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "#D1E9FF",
    padding: "2px",
    zIndex: 11,
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    // zIndex: 19,
    backgroundColor: state.isSelected
      ? "#007BFF"
      : state.isFocused
      ? "#F0F0F0"
      : "white",
    color: state.isSelected ? "#FFF" : "#000",
  }),

  menu: (provided: any) => ({
    ...provided,
    // zIndex: 50,
    //backgroundColor: "red",
  }),

  singleValue: (provided: any) => ({
    ...provided,
    color: "#000", // Change color of the selected option
  }),
};

export default function BookingNowPage() {
  const router = useRouter();
  const [calenderData, setCalenderData] = useState([]);

  const [alreadyAvailableInYourCart, setAlreadyAvailableInYourCart] = useState(
    []
  );
  const [newBooking, setNewBooking] = useState([]);
  const [allSlots, setAllSlots] = useState([]);
  const [isSearchable, setIsSearchable] = useState(true);
  const [display, setDisplay] = useState<boolean>(true);
  const [width, setWidth] = useState<number>(770);
  const [state, setState] = useState({
    sports: [],
    complex: [],
  });

  const [isClearAll, setIsClearAll] = useState(false);
  const [selectedSliderDateIndex, setSelectedSliderDateIndex] = useState(0);

  const reducerState = useSelector((state): any => state);

  const selectedCardData = reducerState?.bookingSliceReducer?.bookingData;

  console.log("reducerState --> ", selectedCardData);

  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate]: any = useState("");
  const [addToCartDisabled, setAddToCartDisabled] = useState(true);

  const [selectedSlots, setSelectedSlots]: any = useState([]);

  const [selectedOpt, setSelectedOpt]: any = useState({
    selectedSport: {},
    selectedComplex: {},
  });

  const [getAllSports, { isLoading: getAllSportsApiIsLoading }] =
    useGetAllSportsMutation();

  const [getAllVenues, { isLoading: getAllVenuesApiIsLoading }] =
    useGetAllVenuesMutation();

  const [calendarApi, { isLoading: calendarApiIsLoading }] =
    useCalendarApiMutation();

  const [slotAvailability, { isLoading: slotAvailabilityApiIsLoading }] =
    useSlotAvailabilityMutation();

  const [addToCartApi, { isLoading: addToCartApiIsLoading }] =
    useAddToCartApiMutation();

  const [updateBookingApi, { isLoading: updateBookingApiIsLoading }] =
    useUpdateBookingApiMutation();

  const handleNavigate = (path: any) => {
    router.push(path);
  };

  const fetchAllSports = async (id: any) => {
    console.log(id);
    try {
      const res = await getAllSports(id).unwrap();
      console.log("fetchAllSports", res);
      if (res.result.statusCode === 200) {
        setState((prev) => ({
          ...prev,
          sports: res?.result?.sports?.map((item: any) => ({
            label: item?.sport_name,
            value: item?.sport_id,
          })),
        }));

        // handleChangeSport

        if (selectedCardData?.type === "sport") {
          let preSelect = res?.result?.sports?.filter(
            (el: any) => el?.sport_name === selectedCardData?.name
          )[0];

          console.log("preSelect -->", preSelect);

          setSelectedOpt((prev: any) => ({
            ...prev,
            selectedSport: {
              label: preSelect?.sport_name,
              value: preSelect?.sport_id,
            },
          }));
          fetchAllVenues(preSelect?.sport_id);

          //  handleChangeComplex(preSelect?.id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllVenues = async (id: any) => {
    console.log(id);
    try {
      const res = await getAllVenues(id).unwrap();
      console.log("getAllVenues", res);
      if (res.result.statusCode === 200) {
        console.log(res.result.complex);
        setState((prev) => ({
          ...prev,
          complex: res?.result?.complex?.map((item: any) => ({
            label: item?.complex_name,
            value: item?.complex_id,
          })),
        }));

        if (selectedCardData?.type === "venue") {
          let preSelect = res?.result?.complex?.filter(
            (el: any) => el?.complex_name === selectedCardData?.name
          )[0];

          console.log("preSelect -->", preSelect);

          setSelectedOpt((prev: any) => ({
            ...prev,
            selectedComplex: {
              label: preSelect?.complex_name,
              value: preSelect?.complex_id,
            },
          }));
          fetchAllSports(preSelect?.complex_id);

          //  handleChangeComplex(preSelect?.id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  // ClenderApi calling
  const calenderValues = async () => {
    try {
      const res = await calendarApi(null).unwrap();
      console.log("getCalenderDate", res);
      if (res.result.statusCode === 200) {
        console.log(res.result.calendar);
        setCalenderData(res?.result?.calendar);
        setSelectedDate({
          Date: res?.result?.calendar?.[0]?.Date,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (dateStr: any): any => {
    const formattedDate = dayjs(dateStr, "DD/MM/YYYY").format("MMM DD ddd");
    //console.log(formatDate);
    return formattedDate;
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const checkIsAuthUser = () => {
    let token = localStorageService.get("ADANI_SPORTS_LINE");
    return token ? true : false;
  };

  const handleChangeSport = (obj: any) => {
    console.log(obj);
    setSelectedSlots([]);
    if (obj) {
      setSelectedOpt((prev: any) => ({
        ...prev,
        selectedSport: obj,
      }));
      fetchAllVenues(obj?.value);
      const fetch_slot_obj: any = {
        complex_id: selectedOpt?.selectedComplex?.value,
        sport_id: obj?.value,
        date: dayjs(selectedDate?.Date).format("YYYY-MM-DD"),
      };
      if (
        fetch_slot_obj?.complex_id &&
        fetch_slot_obj?.sport_id &&
        fetch_slot_obj?.date
      ) {
        fetchSlotAvailability(fetch_slot_obj);
      }
    } else {
      setSelectedOpt((prev: any) => ({
        ...prev,
        selectedSport: {},
      }));
      fetchAllVenues(null);
      fetchAllSports(null);
    }
  };

  const handleChangeComplex = (obj: any) => {
    console.log(obj);
    setSelectedSlots([]);
    if (obj) {
      setSelectedOpt((prev: any) => ({
        ...prev,
        selectedComplex: obj,
      }));
      fetchAllSports(obj.value);
      const fetch_slot_obj: any = {
        complex_id: obj?.value,
        sport_id: selectedOpt?.selectedSport?.value,
        date: dayjs(selectedDate?.Date).format("YYYY-MM-DD"),
      };
      if (
        fetch_slot_obj?.complex_id &&
        fetch_slot_obj?.sport_id &&
        fetch_slot_obj?.date
      ) {
        fetchSlotAvailability(fetch_slot_obj);
      }
    } else {
      setSelectedOpt((prev: any) => ({
        ...prev,
        selectedComplex: {},
      }));
      fetchAllVenues(null);
      fetchAllSports(null);
    }
  };

  const fetchSlotAvailability = async (obj: any) => {
    setSelectedSlots([]);
    setAllSlots([]);
    setAddToCartDisabled(false);

    // const obj = {
    //   complex_id: selectedOpt?.selectedComplex?.value,
    //   sport_id: selectedOpt?.selectedSport?.value,
    //   date: dayjs(date.Date).format("YYYY-MM-DD"),
    // };

    try {
      const res = await slotAvailability(obj).unwrap();
      console.log("slotAvailability --> ", res);

      if (res.result.statusCode === 200) {
        if (res?.result?.slot_availability) {
          console.log("all slot list --> ", res.result.slot_availability);
          let originalData = res.result.slot_availability;
          let alreadySelectedSlot = reducerState?.bookingSliceReducer?.mySlots;

          console.log("originalData --> ", originalData);
          console.log("alreadySelectedSlot --> ", alreadySelectedSlot);

          // console.log(object);

          let data = filterAndFlagData(originalData, alreadySelectedSlot);

          data?.map((main: any) => {
            main?.slots.map((slot: any) => {
              if (slot?.isAlreadySelected) {
                // setAddToCartDisabled(true);
                setSelectedSlots((prev: any) => {
                  return [
                    ...prev,
                    {
                      ground_id: main.ground_id,
                      slot_id: slot.slot_id,
                      isAlreadySelected: true,
                    },
                  ];
                });
              }
            });
          });

          console.log("filterAndFlagData --> ", data);

          setAllSlots(data);
        } else {
          setSelectedSlots([]);
          setAllSlots([]);
        }
      } else {
        setSelectedSlots([]);
        setAllSlots([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCalenderClick = (date: any, i: any) => {
    console.log(date);
    setSelectedSliderDateIndex(i);
    setSelectedDate(date);
    const obj = {
      complex_id: selectedOpt?.selectedComplex?.value,
      sport_id: selectedOpt?.selectedSport?.value,
      date: dayjs(date.Date).format("YYYY-MM-DD"),
    };

    fetchSlotAvailability(obj);

    console.log(obj);
  };

  // ===================================================

  const handleSlotToggle = (
    ground_id: any,
    slot_id: any,
    date: any,
    slot_booking_limit: any,
    ground_name: any
  ): any => {
    console.log(date);
    const selectedSlot = { ground_id, slot_id };
    const isSlotSelected = selectedSlots.some(
      (slot: any) => slot.ground_id === ground_id && slot.slot_id === slot_id
    );

    if (isSlotSelected) {
      setSelectedSlots(
        selectedSlots.filter(
          (slot: any) =>
            !(slot.ground_id === ground_id && slot.slot_id === slot_id)
        )
      );
      setAddToCartDisabled(false);
    } else {
      const groupSelectedSlots: any = selectedSlots.filter(
        (slot: any) => slot.ground_id === ground_id
      );
      if (groupSelectedSlots.length < slot_booking_limit) {
        setSelectedSlots([...selectedSlots, selectedSlot]);
        // setAddToCartDisabled(true);
      } else {
        //  setAddToCartDisabled(true);
        toast.error(
          `${translate(
            "maximum_slot_booking_limit_label"
          )}${slot_booking_limit} ${translate("for_label")} ${ground_name}`
        );
      }
    }
  };

  const isSlotSelected = (ground_id: any, slot_id: any) => {
    return selectedSlots.some(
      (slot: any) => slot.ground_id === ground_id && slot.slot_id === slot_id
    );
  };

  useEffect(() => {
    let newSelectedSlots = selectedSlots?.filter(
      (el: any) => !el?.isAlreadySelected
    );
    setAddToCartDisabled(newSelectedSlots?.length === 0);
    console.log("prev selected slots: " + selectedSlots);
  }, [selectedSlots]);

  const clearAll = () => {
    // setIsClearAll(true);
    dispatch(
      setBookingData({
        type: "",
        id: "",
        name: "",
      })
    );
    setSelectedOpt({
      selectedSport: {},
      selectedComplex: {},
    });
    setAllSlots([]);
    setSelectedSlots([]);
    setSelectedSliderDateIndex(0);
    // setSelectedDate(0)
    fetchAllVenues(null);
    fetchAllSports(null);
  };

  const handleDateChange = (event: any) => {
    setSelectedDate({
      Date: event.target.value,
    });
    handleCalenderClick(
      {
        Date: event.target.value,
      },
      null
    );
  };

  const today = new Date().toISOString().split("T")[0];

  type Slot = {
    ground_id: number;
    slot_id: number;
  };

  type SelectedOpt = {
    selectedComplex?: {
      value: number;
    };
    selectedSport?: {
      value: number;
    };
  };

  const addToCart = async (
    selectedSlots: Slot[],
    selectedOpt?: SelectedOpt
  ) => {
    let isLogged = checkIsAuthUser();
    let obj: any = {};

    obj = {
      booking_lines: [] as {
        ground_id: number;
        slot_ids: number[];
        complex_id?: number;
        slot_booking_date: string;
        sport_id?: number;
      }[],
      isFreshLogin: false,
    };

    const groups: { [groundId: number]: number[] } = {};
    console.log("selectedSlots in add to cart func -->", selectedSlots);
    const onlyNewlyAddedSlots = selectedSlots?.filter(
      (el: any) => !el?.isAlreadySelected
    );
    console.log(
      "onlyNewlyAddedSlots in add to cart func -->",
      onlyNewlyAddedSlots
    );
    onlyNewlyAddedSlots.forEach((item) => {
      if (!groups[item.ground_id]) {
        groups[item.ground_id] = [];
      }
      groups[item.ground_id].push(item.slot_id);
    });
    console.log("selectedDate !!!!!!!!!!!!!!!", selectedDate);
    Object.keys(groups).forEach((groundId) => {
      obj?.booking_lines.push({
        ground_id: parseInt(groundId),
        slot_booking_date: dayjs(selectedDate?.Date || selectedDate).format(
          "YYYY-MM-DD"
        ),
        slot_ids: groups[parseInt(groundId)],
        complex_id: selectedOpt?.selectedComplex?.value,
        sport_id: selectedOpt?.selectedSport?.value,
      });
    });

    console.log("add card obj ---> ", obj);

    console.log("card data obj --> ", obj);

    // router.push("/bookig-cart");

    if (isLogged) {
      const isFreshLogin =
        reducerState?.bookingSliceReducer?.cartData?.isFreshLogin;

      let details: any = localStorageService.get("ADANI_MY_CART_DETAILS");

      if (details?.order_id === "") {
        try {
          const res = await addToCartApi(obj).unwrap();
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
            });
            dispatch(
              cardDAta({
                booking_lines: obj?.booking_lines,
                isFreshLogin: false,
                order_id: res?.result?.order_id,
              })
            );

            clearAll();
            /// router.push("/booking-cart");
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
        updateBooking(obj);
      }
    } else {
      localStorageService.set("ADANI_MY_CART_DETAILS", {
        order_id: "",
        isFreshLogin: false,
        // isFreshLogin: true,
      });
      dispatch(
        cardDAta({
          booking_lines: obj?.booking_lines,
          isFreshLogin: false,
          //   isFreshLogin: true,
        })
      );
      router.push("/signin");
    }
  };

  const updateBooking = async (objData: any) => {
    try {
      let details: any = localStorageService.get("ADANI_MY_CART_DETAILS");
      const id =
        reducerState?.bookingSliceReducer?.cartData?.order_id ||
        details?.order_id;
      const res = await updateBookingApi({
        ...objData,
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
        clearAll();
        dispatch(
          cardDAta({
            booking_lines: objData?.booking_lines,
            isFreshLogin: false,
            order_id: res?.result?.order_id,
          })
        );
        /// router.push("/booking-cart");
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
          });
          dispatch(
            cardDAta({
              // booking_lines: obj?.booking_lines,
              booking_lines: objData?.booking_lines,
              isFreshLogin: false,
              order_id: res?.result?.order_id,
            })
          );

          clearAll();
          /// router.push("/booking-cart");
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

  const isFreshLoginUserOnly = async () => {
    let details: any = localStorageService.get("ADANI_MY_CART_DETAILS");
    let token: any = localStorageService.get("ADANI_SPORTS_LINE");

    const order_id = details?.order_id;
    // const isFreshLogin =
    //   reducerState?.bookingSliceReducer?.cartData?.isFreshLogin;

    const booking_lines =
      reducerState?.bookingSliceReducer?.cartData?.booking_lines;
    if (order_id === "" || (order_id === null && token)) {
      try {
        const res = await addToCartApi({
          booking_lines: booking_lines,
        }).unwrap();
        console.log("getCalenderDate", res);
        if (res?.result?.statusCode === 200) {
          localStorageService.set("ADANI_MY_CART_DETAILS", {
            order_id: res?.result?.order_id,
            isFreshLogin: false,
          });
          dispatch(totalCartItems(booking_lines?.length));
          dispatch(
            cardDAta({
              booking_lines: booking_lines,
              isFreshLogin: false,
              order_id: res?.result?.order_id,
            })
          );
          /// router.push("/booking-cart");
        } else if (res?.result?.statusCode === 401) {
          unauthorizedUser.logout();
        } else {
          toast.error(translate("internal_server_label"));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleLinkClick = () => {
    router.push("/");
  };
  const handleLinkPageClick = () => {
    router.push("/booking-now");
  };

  // const getCartLength = async () => {
  //   let cart_details: any = localStorageService?.get("ADANI_MY_CART_DETAILS");
  //   let order_id = cart_details?.order_id || cartData?.order_id;
  //   if (order_id) {
  //     try {
  //       const res = await fetBookingSlot(order_id).unwrap();
  //       console.log("fetchCart", res);
  //       if (res?.result?.statusCode === 200) {
  //         console.log("res", res);

  //         setTotalCourt(
  //           res?.result?.sports_booking?.[0]?.booking_lines?.length
  //         );
  //       } else {
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  useEffect(() => {
    // getCartLength();
    console.log("selectedSlots useEffect --> ", selectedOpt);
    dispatch(seCartItemForceFullyZero(false));
    fetchAllSports(null);
    fetchAllVenues(null);
    calenderValues();
    isFreshLoginUserOnly();
  }, []);

  useEffect(() => {
    console.log("selectedSlots on change --> ", selectedSlots);
  }, [selectedSlots]);

  return (
    <>
      <Container
        bg="white"
        maxW={{ base: "80%" }}
        px="0"
        py="6"
        mt={20}
        position="relative"
      >
        <Box my={"2"}>
          <Breadcrumb
            spacing="10px"
            separator={<ArrowRightIcon color="gray.500" boxSize={3} />}
          >
            <BreadcrumbItem fontWeight={"bold"}>
              <BreadcrumbLink onClick={handleLinkClick}>
                {translate("home_label")}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink onClick={handleLinkPageClick}>
                {translate("booking_slot_label")}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box position="sticky" zIndex="1" border="0px" width="full">
          <Box
            display={{ base: "column", md: "flex" }}
            gap="4"
            alignItems="center"
          >
            <Box>
              <Text fontSize={24} fontWeight="bold">
                {translate("you_searched_for_label")}
              </Text>
            </Box>
            <Box w={{ base: "100%", lg: "24%" }}>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={state?.sports?.[0]}
                isSearchable={isSearchable}
                value={selectedOpt?.selectedSport}
                styles={customStyles}
                //  isClearable
                options={state?.sports}
                onChange={(obj) => handleChangeSport(obj)}
              />
            </Box>
            <Text fontSize={24} fontWeight="bold">
              {translate("at_label")}
            </Text>
            <Box w={{ base: "100%", lg: "24%" }}>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={state?.complex?.[0]}
                value={selectedOpt?.selectedComplex}
                isSearchable={isSearchable}
                //  isClearable
                styles={customStyles}
                options={state?.complex}
                onChange={(obj) => handleChangeComplex(obj)}
              />
            </Box>
            {selectedOpt?.selectedSport || selectedOpt?.selectedComplex ? (
              <Button mt={{ base: "4", md: "0" }} onClick={() => clearAll()}>
                {translate("clear_all_label")}
              </Button>
            ) : null}
          </Box>

          <Box mt="8">
            <Slider {...settings}>
              {calenderData.map((date: any, i) => (
                <Box
                  cursor="pointer"
                  className="card"
                  // width={50}
                  // height={50}
                  p="2"
                  key={i}
                  onClick={() => handleCalenderClick(date, i)}
                >
                  <Box
                    p="2"
                    // height={38}
                    width={45}
                    height={"65px"}
                    //bg="#F1F5F9"
                    sx={{
                      backgroundColor:
                        selectedSliderDateIndex === i ? "#0C82EE" : "#F1F5F9",
                      color: selectedSliderDateIndex === i ? "#fff" : "",
                    }}
                    _hover={{
                      bg: "#0C82EE",
                      color: "white",
                    }}
                  >
                    <Text
                      textAlign="center"
                      fontWeight="bold"
                      //width={20}
                      fontSize={12}
                    >
                      {formatDate(date?.Date)}
                    </Text>
                  </Box>
                </Box>
              ))}
              {/* <Box
                cursor="pointer"
                className="card"
                width="200"
                p="2"
                onClick={() => console.log("dfd")}
              >
                <Box
                  // p="2"
                  // height={38}
                  bg="#F1F5F9"
                  _hover={{
                    bg: "#0C82EE",
                    color: "white",
                  }}
                >
                  <Box position="relative">
                    <Text
                      textAlign="center"
                      fontWeight="bold"
                      width={45}
                      height={"65px"}
                      fontSize={24}
                      pt="4"
                    >
                      +
                    </Text>
                    <Box
                      width={45}
                      height={"65px"}
                      position="absolute"
                      top="26%"
                      right="3%"
                    >
                      <Input
                        type="date"
                        value={selectedDate?.Date}
                        onChange={(e) => handleDateChange(e)}
                        opacity={0}
                        min={today}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box> */}
            </Slider>
          </Box>
        </Box>
        <Box
          p="3"
          my="4"
          bgColor="#E2F4FF"
          // height={50}
          display="flex"
          alignItems="center"
        >
          <Flex direction="column">
            <Text textAlign="left" fontWeight="bold">
              {translate("slot_available_only_50_min_2")}
            </Text>
            <Text textAlign="left" fontWeight="bold">
              {translate("slot_available_only_50_min_3")}
            </Text>
          </Flex>
        </Box>
        <Box
          mt="8"
          px={{ base: "1", md: "2" }}
          height="450"
          zIndex={-9}
          //  border="1px"
          width="full"
          overflowY="scroll"
        >
          {slotAvailabilityApiIsLoading && allSlots.length === 0 && (
            <Box textAlign="center" my="4">
              <Loader />
            </Box>
          )}
          <Box>
            {!slotAvailabilityApiIsLoading && allSlots.length > 0 ? (
              allSlots?.map((ground: any, ind: any) => (
                <Box
                  key={ground?.ground_id}
                  p={{ base: 1, md: 2 }}
                  width="100%"
                  display={{ base: "column", md: "flex" }}
                  justifyContent="space-between"
                  alignItems="top"
                  mt={ind !== 0 ? 6 : 2}
                  borderBottom={ind > 0 || ind === 0 ? "1px" : ""}
                  borderBottomColor={ind > 0 || ind === 0 ? " #dfdfdf" : ""}
                >
                  <Box
                    width={{ base: "full", md: "250px" }}
                    //  mt={{ base: "2", md: "10" }}
                    alignContent="left"
                    textAlign="left"
                  >
                    <VStack>
                      <Box mb="4" textAlign="left" width="100%">
                        <Text textAlign="left" fontWeight="bold">
                          {ground?.ground_name}
                        </Text>
                        <MyComponent data={ground} />
                      </Box>
                    </VStack>
                  </Box>
                  <Wrap spacing="3" w="100%">
                    {ground?.slots.length > 0 ? (
                      ground?.slots.map((slot: any) => (
                        <WrapItem key={slot.slot_id}>
                          <Box
                            key={slot.slot_id}
                            mx={{ base: "1", md: "3" }}
                            w={{ base: "100px", md: "110px", lg: "120px" }}
                          >
                            <Button
                              key={slot.slot_id}
                              borderColor="#999999"
                              borderRadius="0"
                              isDisabled={slot?.isAlreadySelected}
                              variant={
                                isSlotSelected(ground.ground_id, slot.slot_id)
                                  ? "solid"
                                  : "outline"
                              }
                              colorScheme={
                                isSlotSelected(ground.ground_id, slot.slot_id)
                                  ? "blue"
                                  : slot?.isAlreadySelected
                                  ? "gray"
                                  : "green"
                              }
                              onClick={() =>
                                handleSlotToggle(
                                  ground?.ground_id,
                                  slot?.slot_id,
                                  slot?.date,
                                  ground?.slot_booking_limit,
                                  ground?.ground_name
                                )
                              }
                              width={{ base: "100%", md: "140px" }}
                              cursor="pointer"
                              p="2"
                              height="16"
                              _hover={{
                                color: "white",
                                backgroundColor: slot?.isAlreadySelected
                                  ? "gray"
                                  : "#006DB7",
                              }}
                            >
                              {slot.slot_name}
                            </Button>
                          </Box>
                        </WrapItem>
                      ))
                    ) : (
                      <WrapItem>
                        <Box
                          width={{ base: "full", md: "250px" }}
                          mt={{ base: "2", md: "10" }}
                          textAlign="center"
                        >
                          <Text textAlign={"center"}>
                            {translate("no_slot_available_label")}{" "}
                          </Text>
                        </Box>
                      </WrapItem>
                    )}
                  </Wrap>
                </Box>
              ))
            ) : !slotAvailabilityApiIsLoading &&
              allSlots.length === 0 &&
              JSON.stringify(selectedOpt?.selectedSport) === "{}" &&
              JSON.stringify(selectedOpt?.selectedComplex) !== "{}" ? (
              <Box
                mt={{ base: 0, md: 0 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Image
                  w={{ base: "100%", md: "55%" }}
                  src="/images/plz_select_sport.svg"
                  h={{ base: "100%", md: "80%" }}
                />
              </Box>
            ) : !slotAvailabilityApiIsLoading &&
              allSlots.length === 0 &&
              JSON.stringify(selectedOpt?.selectedSport) !== "{}" &&
              JSON.stringify(selectedOpt?.selectedComplex) === "{}" ? (
              <Box
                mt={{ base: 0, md: 0 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Image
                  w={{ base: "100%", md: "55%" }}
                  src="/images/plz_select_complex.svg"
                  h={{ base: "100%", md: "80%" }}
                />
              </Box>
            ) : (
              !slotAvailabilityApiIsLoading && (
                <Box
                  mt={{ base: 0, md: 0 }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Image
                    w={{ base: "100%", md: "55%" }}
                    src="/images/noslot.svg"
                    h={{ base: "100%", md: "80%" }}
                  />
                </Box>
              )
            )}
          </Box>
        </Box>

        {/* <Box
                mt={{ base: 0, md: 0 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Image
                  w={{ base: "100%", md: "55%" }}
                  src="/images/noslot.svg"
                  h={{ base: "100%", md: "80%" }}
                />
                
              </Box> */}

        <Box pt="10">
          <Button
            bgGradient="linear(to-l, #0C82EE, #00B16B)"
            type="submit"
            w="full"
            color="white"
            borderRadius="0"
            isDisabled={addToCartDisabled || selectedSlots?.length === 0}
            // isDisabled={selectedSlots?.length === 0 && setAddToCartDisabled}
            isLoading={addToCartApiIsLoading || updateBookingApiIsLoading}
            p="6"
            // onClick={() => router.push("/booking-cart")}
            onClick={() => addToCart(selectedSlots, selectedOpt)}
            _hover={{}}
          >
            {translate("add_to_cart_label")}
          </Button>
        </Box>
        <Box
          p="3"
          my="4"
          bgColor="#E2F4FF"
          // height={50}
          display="flex"
          alignItems="center"
        >
          <Text textAlign="left" fontWeight="bold">
            {translate("cart_term_condition")}
          </Text>
        </Box>
      </Container>
    </>
  );
}

function MyComponent(props: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const detailsData = [
    {
      src: "images/game_one.svg",
      description: "Description for image 1",
    },
    {
      src: "images/game_one.svg",
      description: "Description for image 1",
    },
    {
      src: "images/game_one.svg",
      description: "Description for image 1",
    },
    {
      src: "images/game_two.svg",
      description:
        "Description for image 2 Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2Description for image 2",
    },
    // Add more objects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Link onClick={openModal} color="#007EA8">
        {translate("see_facility_label")}
      </Link>
      <Modal
        // sx={{
        //   backgroundColor: "white",
        // }}
        size={"6xl"}
        isOpen={isModalOpen}
        onClose={closeModal}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent
          sx={{
            backgroundColor: "white",
          }}
        >
          <ModalHeader>Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            sx={{
              backgroundColor: "white",
            }}
          >
            <Box mx={5}>
              <Slider {...settings}>
                {props?.data.ground_images?.map(
                  (details: any, index: any): any => (
                    <Box key={`slider_img_${index}`}>
                      {/* <Box border={'1px'} w={'full'} h={'full'} overflow="hidden"> */}
                      <Image
                        src={details}
                        alt="img"
                        objectFit="cover"
                        width="100%"
                        height="60vh"
                      />{" "}
                      {/* Corrected the src attribute */}
                      {/* </Box> */}
                    </Box>
                  )
                )}
              </Slider>
              <Box my={5}>
                <div id="demo">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props.data.ground_description,
                    }}
                  />
                </div>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
// setAddToCartDisabled
const filterAndFlagData = (originalData: any[], dataToMatch: any[]) => {
  console.log("originalData", originalData);
  const updatedData = JSON.parse(JSON.stringify(originalData)); // Create a deep copy

  for (const match of dataToMatch) {
    for (const item of updatedData) {
      if (
        item?.ground_id === match?.ground_id &&
        item?.slots.some((slot: any) => slot?.slot_id === match?.slot_id)
      ) {
        item.slots = item?.slots.map((slot: any) => {
          if (slot?.slot_id === match.slot_id && slot?.date === match?.date) {
            return {
              ...slot,
              isAlreadySelected: true,
            };
          }
          return slot;
        });
      }
    }
  }

  return updatedData;
};
