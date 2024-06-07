// "use client";
// import {
//   Box,
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   Button,
//   Card,
//   Checkbox,
//   Flex,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Image,
//   Input,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   Table,
//   TableContainer,
//   Tbody,
//   Td,
//   Text,
//   Th,
//   Thead,
//   Tr,
//   useDisclosure,
// } from "@chakra-ui/react";
// import React, { useState, useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import Select from "react-select";
// import {
//   useAddToCartApiMutation,
//   useConfirmApiMutation,
//   useFetBookingSlotMutation,
//   useDeleteBookingMutation,
//   useGetCountryMutation,
//   useGetStateMutation,
//   usePaymentApiMutation,
//   useProfileCompleteMutation,
//   useCheckProfileMutation,
// } from "@/redux/features/auth/auth.slice";
// import { toast } from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { useSelector, useDispatch } from "react-redux";
// import dayjs from "dayjs";
// import { localStorageService } from "@/services/localStorge.service";
// import { ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import { totalCartItems } from "@/redux/features/bookingSlice";

// interface SportData {
//   sportName: string;
//   Time: string;
//   Date: string;
//   venue: string;
//   price: string;
//   court: string;
//   subtotal: string;
// }

// let orderInstance: any = "";

// export default function BookingCartPage() {
//   const sportsData = [
//     {
//       sportName: "Cricket",
//       Time: " 1:10 to 2:30",
//       Date: "  Jun 10, 2022",
//       venue: "Motera Stadium, Chandkheda, Ahmedabad 364003",
//       price: "$11,70",
//       court: "3",
//       subtotal: "$11,70",
//     },
//     {
//       sportName: "Hockey",
//       Time: " 1:10 to 2:30",
//       Date: "  Jun 10, 2022",
//       venue: "Motera Stadium, Chandkheda, Ahmedabad 364003",
//       price: "$11,70",
//       court: "3",
//       subtotal: "$11,70",
//     },
//     // Add more sports data here if needed
//   ];

//   const router = useRouter();
//   const dispatch = useDispatch();
//   const [isCheckTermsAndCondition, setIsCheckTermsAndCondition] =
//     useState(true);
//   const [isConfirm, setIsConfirm]: any = useState({
//     status: false,
//   });
//   const reducer_State = useSelector((state: any) => state);
//   const [addToCartApi, { isLoading: addToCartApiIsLoading }] =
//     useAddToCartApiMutation();

//   const [fetBookingSlot, { isLoading: fetBookingSlotIsLoading }] =
//     useFetBookingSlotMutation();

//   const [confirmApi, { isLoading: confirmApiIsLoading }] =
//     useConfirmApiMutation();

//   const [paymentApi, { isLoading: paymentApiIsLoading }] =
//     usePaymentApiMutation();

//   const [orderId, setOrderId]: any = useState(null);
//   const [slotList, setSlotList]: any = useState({});
//   const [deleteBooking, { isLoading: deleteBookingIsLoading }] =
//     useDeleteBookingMutation();

//   const [checkProfile, { isLoading: checkProfileIsLoading }] =
//     useCheckProfileMutation();

//   const [selectedSports, setSelectedSports] = useState(sportsData);
//   let order_id: any = null;

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const handleRemoveItem = (id: any) => {
//     console.log("line_id", id);

//     bookingDelete(id);

//     // setSelectedSports((prevSelectedSports) => {
//     //   const updatedSports = prevSelectedSports.filter(
//     //     (sport) => sport.sportName !== sportName
//     //   );
//     //   console.log("Item removed:", sportName);
//     //   // alert("Item removed: " + sportName);
//     //   return updatedSports;
//     // });
//   };

//   const handleProfileButtonClick = () => {
//     onOpen();
//   };

//   const addToCart = async () => {
//     console.log(1);
//     let generated_order_id = null;
//     console.log(2);
//     console.log("reducer_State", reducer_State);
//     const isFreshLogin =
//       reducer_State?.bookingSliceReducer?.cartData?.isFreshLogin;
//     console.log(3);
//     if (isFreshLogin) {
//       console.log(4);
//       const obj = reducer_State?.bookingSliceReducer?.cartData?.booking_lines;
//       console.log(5);
//       try {
//         const res = await addToCartApi({ booking_lines: obj }).unwrap();
//         console.log("getCalenderDate", res);
//         if (res?.result?.statusCode === 200) {
//           console.log("res", res);
//           dispatch(totalCartItems(objData?.booking_lines?.length));
//           setOrderId(res?.result?.order_id);
//           order_id = res?.result?.order_id;
//           generated_order_id = res?.result?.order_id;
//           return generated_order_id;
//         } else {
//           toast.error("Internal server error !");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     if (!isFreshLogin) {
//       let id = reducer_State?.bookingSliceReducer?.cartData?.order_id;
//       if (id) {
//         order_id = id;
//         setOrderId(reducer_State?.bookingSliceReducer?.cartData?.order_id);
//       }
//       if (!id) {
//         // router.push("/");
//       }
//     }
//   };

//   const fetchCart = async (id: any) => {
//     try {
//       let details: any = localStorageService.get("ADANI_MY_CART_DETAILS");
//       // let d = details?.order_id || id || order_id || orderId;
//       let d = details?.order_id;
//       const res = await fetBookingSlot(d).unwrap();
//       console.log("fetchCart", res);
//       if (res?.result?.statusCode === 200) {
//         console.log("res", res);
//         console.log("============== 1-1-1-1-11--1--1");

//         setIsConfirm({
//           status: res?.result?.is_confirm,
//         });

//         let obj = {
//           amount_total: res?.result?.sports_booking?.[0].amount_total,
//           amount_untaxed: res?.result?.sports_booking?.[0].amount_untaxed,
//           booking_date: res?.result?.sports_booking?.[0].booking_date,
//           booking_id: res?.result?.sports_booking?.[0].booking_id,
//           booking_lines: res?.result?.sports_booking[0]?.booking_lines || null,
//           taxes: res?.result?.sports_booking[0]?.taxes,
//         };

//         console.log("==============", obj);
//         dispatch(totalCartItems(obj?.booking_lines?.length));
//         setSlotList(obj || {});
//       } else {
//         toast.error("Internal server error !");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const confirm = async () => {
//     let isProfilePending: any = await checkUserProfile();
//     console.log("1-1-1-1-1-1", isProfilePending);
//     if (isProfilePending === true) {
//       // alert(1);
//       // let is_complete_profile = localStorageService.get("is_complete_profile");
//       // if (is_complete_profile) {
//       let cart_details: any = localStorageService.get("ADANI_MY_CART_DETAILS");
//       try {
//         let cart_order_id = cart_details?.order_id;
//         const res = await confirmApi(cart_order_id).unwrap();
//         console.log("confirmApi", res);
//         if (res?.result?.statusCode === 200) {
//           console.log("res", res);
//           setIsConfirm((prev: any) => ({ ...prev, status: true }));
//           toast.success("Your court booking has been successfully confirmed");
//         } else if (res?.result?.statusCode === 400) {
//           toast.error(res?.result.message);
//         } else {
//           toast.error("Internal server error !");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     // }
//     if (isProfilePending === false) {
//       // alert(2);
//       handleProfileButtonClick();
//     }
//   };

//   const paymentNow = async () => {
//     try {
//       let cart_details: any = localStorageService.get("ADANI_MY_CART_DETAILS");
//       const res = await paymentApi(
//         slotList.booking_id || cart_details?.order_id
//       ).unwrap();
//       console.log("paymentApi", res);
//       if (res?.result?.longurl) {
//         console.log("res", res);
//         window.open(res?.result?.longurl, "_self");
//         //setIsConfirm((prev: any) => ({ ...prev, status: true }));
//       } else {
//         toast.error("Internal server error !");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const bookingDelete = async (id: any) => {
//     try {
//       const res = await deleteBooking(id).unwrap();

//       console.log("deleteBookingf", res);
//       if (res?.result?.statusCode === 200) {
//         fetchCart(null);
//         toast.success(
//           "Court booking cancellation has been successfully processed"
//         );
//       } else {
//         toast.error("Internal server error !");
//       }

//       //  setStateOptions(transformedStateOptions);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const checkUserProfile = async () => {
//     let is_complete_profile = false;
//     try {
//       const res = await checkProfile(null).unwrap();

//       console.log("checkUserProfile ", res);
//       if (res?.result?.statusCode === 200) {
//         // toast.success(res?.result?.message);
//         is_complete_profile = res?.result?.is_complete_profile;
//         return is_complete_profile;
//       } else {
//         toast.error("Internal server error !");
//       }

//       return is_complete_profile;

//       //  setStateOptions(transformedStateOptions);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   const handleLinkClick = () => {
//     router.push("/");
//   };

//   const handleLinkPageClick = () => {
//     router.push("/booking-cart");
//   };

//   const [isLogin, setLogin] = useState(false);
//   const [orderID, setOrderID] = useState("");

//   useEffect(() => {
//     // const fetchingCart = async () => {
//     //   let id = await addToCart();
//     //   fetchCart(id);
//     // };

//     let details: any = localStorageService.get("ADANI_MY_CART_DETAILS");
//     if (details?.order_id) {
//       orderInstance = details?.order_id;

//       setOrderID(details?.order_id);
//       setLogin(true);
//       fetchCart(details?.order_id);
//     } else {
//       setLogin(false);
//       //router.push("/");
//     }
//   }, []);

//   return (
//     <>
//       <Box height={"80vh"} overflowY="scroll">
//         <Box mt={20}>
//           <Box mx={{ base: 12, md: 32 }}>
//             <Breadcrumb
//               spacing="10px"
//               separator={<ArrowRightIcon color="gray.500" boxSize={3} />}
//             >
//               <BreadcrumbItem fontWeight={"bold"}>
//                 <BreadcrumbLink onClick={handleLinkClick}>Home</BreadcrumbLink>
//               </BreadcrumbItem>

//               <BreadcrumbItem>
//                 <BreadcrumbLink onClick={handleLinkPageClick}>
//                   Add To Cart
//                 </BreadcrumbLink>
//               </BreadcrumbItem>
//             </Breadcrumb>
//           </Box>

//           {slotList?.booking_lines?.length === 0 && (
//             <Box
//               mt={20}
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "80vh",
//               }}
//             >
//               <Image
//                 w={{ base: "100%", md: "80%" }}
//                 h={{ base: "100%", md: "80%" }}
//                 src="/images/emptycart.svg"
//               />
//               {/* <Text>Cart is empty</Text> */}
//             </Box>
//           )}

//           {isLogin === false && (
//             <Box textAlign="center" p="2">
//               <Text>Your cart is empty</Text>
//             </Box>
//           )}

//           {slotList?.booking_lines?.length > 0 && (
//             <Flex
//               m={10}
//               gap={8}
//               flexDirection={{ base: "column", md: "column", lg: "row" }}
//             >
//               <Box
//                 w={{ base: "100%", md: "90%", lg: "70%" }}
//                 ml={{ base: "2", md: "16" }}
//                 overflowY="scroll"
//                 // height="60vh"
//               >
//                 <Box>
//                   <TableContainer p={5} backgroundColor={"#ffffff"}>
//                     <Table variant="simple">
//                       <Thead bgColor="#E2F4FF">
//                         <Tr>
//                           <Th color={"primary.100"}>Sport Name</Th>
//                           <Th color={"primary.100"}>Venue</Th>
//                           <Th color={"primary.100"}>Price</Th>
//                           <Th color={"primary.100"}>Slot Count</Th>
//                           <Th color={"primary.100"}>Subtotal</Th>
//                         </Tr>
//                       </Thead>
//                       <Tbody>
//                         {slotList?.booking_lines?.length === 0 && (
//                           <Box textAlign="center" p="2">
//                             <Text>No Data Found</Text>
//                           </Box>
//                         )}

//                         {slotList?.booking_lines?.map((data: any) => (
//                           <Tr key={data?.sport_name}>
//                             <Td>
//                               <Box>
//                                 <Text color={"third.100"}>
//                                   {data?.sport_name}
//                                 </Text>
//                                 <Box>
//                                   {data.slot.map((el: any) => (
//                                     <Text key={el.slot_id} my={2}>
//                                       Time : {el.slot_name}
//                                     </Text>
//                                   ))}
//                                 </Box>
//                                 <Text>
//                                   Date :{" "}
//                                   {dayjs(data?.slot_booking_date).format(
//                                     "MMM-DD-YYYY"
//                                   )}
//                                 </Text>
//                               </Box>
//                             </Td>
//                             <Td whiteSpace="pre-line">
//                               <Text color={"third.100"} mb="2">
//                                 {data?.sports_complex_name}
//                               </Text>
//                               {data?.sports_complex_address}
//                             </Td>
//                             <Td>{data?.sale_price}</Td>
//                             <Td>{data?.slot?.length}</Td>
//                             <Td>{data?.sale_price * data?.slot?.length}</Td>
//                             <Td>
//                               {!isConfirm?.status && (
//                                 <Button
//                                   variant="unstyled"
//                                   isDisabled={fetBookingSlotIsLoading}
//                                   onClick={() =>
//                                     handleRemoveItem(data?.line_id)
//                                   }
//                                 >
//                                   <Image src="/images/close.svg" />
//                                 </Button>
//                               )}
//                             </Td>
//                           </Tr>
//                         ))}
//                       </Tbody>
//                     </Table>
//                   </TableContainer>
//                 </Box>
//               </Box>
//               <Box
//                 w={{ base: "100%", md: "90%", lg: "30%" }}
//                 ml={{ base: "2", sm: "16", md: "16", lg: "2" }}
//               >
//                 <Box
//                   borderWidth="1px"
//                   borderRadius="md"
//                   p="4"
//                   bgColor={"white"}
//                 >
//                   <Text
//                     fontWeight="bold"
//                     textAlign={"center"}
//                     bgColor={"#E2F4FF"}
//                     py={4}
//                     color={"primary.100"}
//                   >
//                     Cart Total
//                   </Text>
//                   <Box borderBottom={"1px dotted #949494"}>
//                     <Flex justify="space-between" mt="2">
//                       <Text color={"secondary.100"}>Untaxed Amount</Text>
//                       <Text color={"secondary.100"}>
//                         {slotList?.amount_untaxed}
//                       </Text>
//                     </Flex>
//                     {slotList?.taxes?.map((tax: any, tax_ind: any): any => (
//                       <Flex
//                         key={`Tax_${tax_ind}`}
//                         justify="space-between"
//                         mt="1"
//                       >
//                         <Text
//                           color={"secondary.100"}
//                         >{`Tax (${tax?.tax_name})`}</Text>
//                         <Text
//                           color={"secondary.100"}
//                         >{`₹ ${tax?.tax_amount}`}</Text>
//                       </Flex>
//                     ))}
//                   </Box>
//                   <Flex justify="space-between" mt="1">
//                     <Text color={"#3B53A4"} fontWeight={"bold"}>
//                       Grant Total
//                     </Text>
//                     <Text color={"#3B53A4"} fontWeight={"bold"}>
//                       {slotList?.amount_total?.toFixed(2)}
//                     </Text>
//                   </Flex>
//                   <Checkbox
//                     colorScheme="CheckBoxPrimary"
//                     borderColor="#0C82EE"
//                     onChange={(e) => {
//                       console.log("is : ", e.target.checked);
//                       setIsCheckTermsAndCondition(!e.target.checked);
//                     }}
//                   >
//                     <Text>
//                       <Text as="span" color="secondary.100">
//                         I have read and agree to the
//                       </Text>{" "}
//                       {/* router.push("/terms-and-conditions") */}
//                       <Text fontWeight={"bold"} as="span" color="third.100">
//                         <a
//                           onClick={() =>
//                             window.open("/terms-and-conditions", "_blank")
//                           }
//                         >
//                           Terms and Conditions
//                         </a>
//                       </Text>
//                     </Text>
//                   </Checkbox>
//                   <Box mt="4">
//                     {/* Replace 'Continue' with the actual label you want */}
//                     {isConfirm?.status ? (
//                       <Button
//                         bgGradient="linear(to-l, #0C82EE, #00B16B)"
//                         type="submit"
//                         w="full"
//                         color="white"
//                         isLoading={paymentApiIsLoading}
//                         isDisabled={isCheckTermsAndCondition}
//                         borderRadius="0"
//                         p="6"
//                         _hover={{}}
//                         // onClick={() => handleProfileButtonClick()}
//                         onClick={() => paymentNow()}
//                       >
//                         Pay now
//                       </Button>
//                     ) : (
//                       <Button
//                         bgGradient="linear(to-l, #0C82EE, #00B16B)"
//                         type="submit"
//                         w="full"
//                         color="white"
//                         isLoading={confirmApiIsLoading}
//                         isDisabled={isCheckTermsAndCondition}
//                         borderRadius="0"
//                         p="6"
//                         _hover={{}}
//                         onClick={() => confirm()}
//                       >
//                         Confirm
//                       </Button>
//                     )}
//                   </Box>
//                 </Box>
//               </Box>
//             </Flex>
//           )}
//         </Box>

//         {isOpen && (
//           <ProfileModal
//             isOpen={isOpen}
//             onOpen={onOpen}
//             onClose={onClose}
//             slotList={slotList}
//             setIsConfirm={setIsConfirm}
//           />
//         )}
//       </Box>
//     </>
//   );
// }

// // Model component code start
// const phoneRegExp = /^\d{1,10}$/;

// const schema = yup.object().shape({
//   email: yup.string().email().required("Invalid email address"),
//   street: yup.string().trim().required("Address is required"),
//   country: yup.string().required("Country is required"),
//   state: yup.string().required("State is required"),
//   district: yup.string().trim().required("District is required"),
//   city: yup.string().trim().required("City is required"),
//   date_of_birth: yup
//     .date()
//     .required("Date of birth is required")
//     .typeError("Date is required"),
//   emergency_person_name: yup
//     .string()
//     .trim()
//     .required("Emergency contact person name is required"),
//   emergency_phone_no: yup
//     .string()
//     .required("Phone number is required")
//     .min(10, "Phone number must be exactly 10 digits")
//     .max(10, "Phone number must be exactly 10 digits")
//     .matches(
//       /^[6-9]\d{9}$/,
//       "Phone number should be start with (6,7,8,9) digit"
//     ),
//   // zip: yup
//   //   .number()
//   //   .min(6, "Pincode muut be 6 digits")
//   //   .max(6, "Pincode muut be 6 digits")
//   //   .required("Pincode is required"),

//   zip: yup
//     .string()
//     .matches(/^\d{6}$/, "Pin code must be 6 digits")
//     .required("Pin code is required"),
// });

// interface State {
//   id: number;
//   name: string;
//   // Add other properties if needed
// }
// interface Profile {
//   address: string;
//   country: string;
//   state: string;
//   district: string;
//   city: string;
//   date_of_birth: string;
//   emergency_person_name: string;
//   emergency_phone_no: string;

//   // ... other properties
// }
// interface ProfileCompleteResponse {
//   result?: {
//     statusCode: number;
//     message: string;
//     // Other properties if there are any
//   };
//   // Other properties if there are any
// }
// interface Message {
//   text: string;
//   type: "success" | "error";
// }
// function ProfileModal({
//   isOpen,
//   onOpen,
//   onClose,
//   setIsConfirm,
//   slotList,
// }: any) {
//   const [countryOptions, setCountryOptions] = useState<
//     { value: any; label: string }[]
//   >([]);
//   const [stateOptions, setStateOptions] = useState([]);

//   ///  const { isOpen, onOpen, onClose } = useDisclosure();
//   const {
//     control,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   // APi calling start
//   const [profileComplete, { isLoading: profileCompleteIsLoading }] =
//     useProfileCompleteMutation();
//   const [getCountry] = useGetCountryMutation();
//   const [getState] = useGetStateMutation();

//   const [state, setState] = useState({
//     selectedCountry: {},
//     selectedState: {},
//   });
//   // const stateOptions = [
//   //   { value: "state1", label: "State 1" },
//   //   { value: "state2", label: "State 2" },
//   //   // Add more state options as needed
//   // ];
//   // const countryOptions = [
//   //   { value: "country", label: "Country" },
//   //   { value: "country2", label: "Country" },
//   // ];
//   const customStyles = {
//     control: (provided: any) => ({
//       ...provided,
//       borderColor: "#7E7E7E",
//       borderRadius: "0",
//       // borderColor: state.selectProps?.error ? "red" : "#7E7E7E",
//       // Adjust padding as needed
//     }),
//     option: (provided: any, state: any) => ({
//       ...provided,
//       backgroundColor: state.isSelected
//         ? "#007BFF"
//         : state.isFocused
//         ? "#F0F0F0"
//         : "transparent",
//       color: state.isSelected ? "#FFF" : "#000",
//     }),
//     singleValue: (provided: any) => ({
//       ...provided,
//       color: "#000", // Change color of the selected option
//     }),
//   };

//   const onSubmit = (values: any) => {
//     console.log(values);
//     // let obj = {
//     //   ...obj,
//     //   date_of_birth :
//     // }
//     addData(values);
//     // Add your logic to handle the form submission here
//   };
//   // 1998-11-19T18:30:00.000Z
//   //  2000-07-29

//   const [confirmApi, { isLoading: confirmApiIsLoading }] =
//     useConfirmApiMutation();

//   const confirm = async () => {
//     {
//       console.log("2-2-2-2-2-2 Confirm API 2-2-2-2-2-2");
//       try {
//         const res = await confirmApi(
//           slotList.booking_id || orderInstance
//         ).unwrap();
//         console.log("confirmApi", res);
//         if (res?.result?.statusCode === 200) {
//           console.log("res", res);
//           setIsConfirm((prev: any) => ({ ...prev, status: true }));
//         } else {
//           toast.error("Internal server error !");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   const addData = async (data: any) => {
//     try {
//       const response = (await profileComplete(
//         data
//       ).unwrap()) as ProfileCompleteResponse;
//       console.log(response, "Updated profile code data");
//       if (response.result?.statusCode === 200) {
//         confirm();
//         setIsConfirm((prev: any) => ({ ...prev, status: true }));
//         toast.success(<div>Profile created successfully</div>);
//         onClose();
//       } else {
//         toast.error(<div>{response?.result?.message}</div>);
//       }
//     } catch (error) {
//       console.log(error, "Error");
//     }
//   };

//   const getCountryList = async () => {
//     try {
//       const response = await getCountry({}).unwrap();
//       console.log("response ", response);

//       let transformedOptions: { value: any; label: string }[] = [];

//       if (response.result.statusCode === 200) {
//         transformedOptions = response.result.countries.map((country: any) => ({
//           value: country.id,
//           label: country.name,
//         }));
//       }

//       setCountryOptions(transformedOptions);
//     } catch (error) {
//       console.error("Error fetching country list:", error);
//     }
//   };
//   const getStateList = async (id: any) => {
//     try {
//       const response = await getState(id).unwrap();

//       console.log(response);

//       if (response.result.statusCode === 200) {
//         const transformedOptions = response?.result?.states.map((ste: any) => ({
//           value: ste.id,
//           label: ste.name,
//         }));
//         setStateOptions(transformedOptions);
//       }

//       //  setStateOptions(transformedStateOptions);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   const currentDate = new Date().toISOString().split("T")[0];

//   const stateOnchange = (obj: any) => {
//     setValue("state", obj?.value, {
//       shouldValidate: true,
//     });
//     setState((prev) => ({ ...prev, selectedState: obj }));
//   };
//   const countryOnchange = (obj: any) => {
//     setStateOptions([]);
//     setValue("country", obj?.value, {
//       shouldValidate: true,
//     });

//     setValue("state", "", {
//       shouldValidate: true,
//     });

//     setState((prev) => ({ ...prev, selectedState: {}, selectedCountry: obj }));
//     getStateList(obj?.value);
//   };
//   useEffect(() => {
//     getCountryList();
//     ///  getStateList();
//   }, []);

//   return (
//     <>
//       <Modal
//         size={"xl"}
//         //  blockScrollOnMount={false}
//         isOpen={isOpen}
//         onClose={onClose}
//       >
//         <ModalOverlay />
//         <ModalContent
//           sx={{
//             backgroundColor: "white",
//           }}
//         >
//           <ModalHeader color={"primary.100"} textAlign={"center"}>
//             Complete Your Profile
//           </ModalHeader>
//           {/* <ModalCloseButton /> */}
//           <ModalBody>
//             <Box maxW="xl" mx="auto" p={4}>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <FormControl my="4" isInvalid={!!errors.email}>
//                   <FormLabel htmlFor="email">Enter your email</FormLabel>
//                   <Controller
//                     name="email"
//                     control={control}
//                     defaultValue=""
//                     render={({ field }) => (
//                       <Input
//                         {...field}
//                         borderColor="secondary.100"
//                         borderRadius="0"
//                       />
//                     )}
//                   />
//                   <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
//                 </FormControl>
//                 <FormControl isInvalid={!!errors.street}>
//                   <FormLabel color={"primary.100"}>Address line - 1</FormLabel>
//                   <Controller
//                     name="street"
//                     control={control}
//                     defaultValue=""
//                     render={({ field }) => (
//                       <Input
//                         {...field}
//                         borderColor="secondary.100"
//                         borderRadius={0}
//                       />
//                     )}
//                   />
//                   <FormErrorMessage>
//                     {errors.street && errors.street.message}
//                   </FormErrorMessage>
//                 </FormControl>
//                 <Flex gap={4}>
//                   <FormControl mt={4} isInvalid={!!errors.country}>
//                     <FormLabel color={"primary.100"}>Country</FormLabel>
//                     <Controller
//                       name="country"
//                       control={control}
//                       render={({ field }) => (
//                         <Select
//                           {...field}
//                           placeholder="select a country"
//                           options={countryOptions}
//                           value={state?.selectedCountry || "ankit"}
//                           //isClearable
//                           isSearchable
//                           onChange={(e) => countryOnchange(e)}
//                           styles={customStyles}
//                         />
//                       )}
//                     />

//                     <FormErrorMessage>
//                       {errors.country && errors.country.message}
//                     </FormErrorMessage>
//                   </FormControl>

//                   <FormControl mt={4} isInvalid={!!errors.state}>
//                     <FormLabel color={"primary.100"}>State</FormLabel>
//                     <Controller
//                       name="state"
//                       control={control}
//                       render={({ field }) => (
//                         <Select
//                           {...field}
//                           options={stateOptions}
//                           value={state.selectedState}
//                           // isClearable
//                           //  defaultValue={stateOptions[0]}
//                           isSearchable
//                           placeholder="Select a state"
//                           onChange={(e) => stateOnchange(e)}
//                           styles={customStyles}
//                         />
//                       )}
//                     />
//                     <FormErrorMessage>
//                       {errors.state && errors.state.message}
//                     </FormErrorMessage>
//                   </FormControl>
//                 </Flex>
//                 <Flex gap={4}>
//                   <FormControl mt={4} isInvalid={!!errors.district}>
//                     <FormLabel color={"primary.100"}>District</FormLabel>
//                     <Controller
//                       name="district"
//                       control={control}
//                       defaultValue=""
//                       render={({ field }) => (
//                         <Input
//                           {...field}
//                           borderColor="secondary.100"
//                           borderRadius={0}
//                         />
//                       )}
//                     />
//                     <FormErrorMessage>
//                       {errors.district && errors.district.message}
//                     </FormErrorMessage>
//                   </FormControl>

//                   <FormControl mt={4} isInvalid={!!errors.city}>
//                     <FormLabel color={"primary.100"}>City</FormLabel>
//                     <Controller
//                       name="city"
//                       control={control}
//                       defaultValue=""
//                       render={({ field }) => (
//                         <Input
//                           {...field}
//                           borderColor="secondary.100"
//                           borderRadius={0}
//                         />
//                       )}
//                     />
//                     <FormErrorMessage>
//                       {errors.city && errors.city.message}
//                     </FormErrorMessage>
//                   </FormControl>
//                 </Flex>

//                 <FormControl mt={4} isInvalid={!!errors.date_of_birth}>
//                   <FormLabel color={"primary.100"}>Date of birth</FormLabel>
//                   <Controller
//                     name="date_of_birth"
//                     control={control}
//                     render={({ field }) => (
//                       <Input
//                         type="date"
//                         {...field}
//                         borderColor="secondary.100"
//                         max={currentDate} // Set max attribute to disable future dates
//                         borderRadius={0}
//                         value={
//                           field.value instanceof Date
//                             ? field.value.toISOString().split("T")[0]
//                             : field.value
//                         }
//                       />
//                     )}
//                   />
//                   <FormErrorMessage>
//                     {errors.date_of_birth && errors.date_of_birth.message}
//                   </FormErrorMessage>
//                 </FormControl>

//                 <FormControl mt={4} isInvalid={!!errors.emergency_person_name}>
//                   <FormLabel color={"primary.100"}>
//                     Emergency contact person name
//                   </FormLabel>
//                   <Controller
//                     name="emergency_person_name"
//                     control={control}
//                     defaultValue=""
//                     render={({ field }) => (
//                       <Input
//                         {...field}
//                         borderColor="secondary.100"
//                         borderRadius={0}
//                       />
//                     )}
//                   />
//                   <FormErrorMessage>
//                     {errors.emergency_person_name &&
//                       errors.emergency_person_name.message}
//                   </FormErrorMessage>
//                 </FormControl>

//                 <FormControl mt={4} isInvalid={!!errors.emergency_phone_no}>
//                   <FormLabel color={"primary.100"}>
//                     Emergency contact number
//                   </FormLabel>
//                   <Controller
//                     name="emergency_phone_no"
//                     control={control}
//                     defaultValue=""
//                     render={({ field }) => (
//                       <Input
//                         {...field}
//                         borderColor="secondary.100"
//                         borderRadius={0}
//                       />
//                     )}
//                   />
//                   <FormErrorMessage>
//                     {errors.emergency_phone_no &&
//                       errors.emergency_phone_no.message}
//                   </FormErrorMessage>
//                 </FormControl>

//                 <FormControl mt={4} isInvalid={!!errors?.zip}>
//                   <FormLabel color={"primary.100"}>Pincode</FormLabel>
//                   <Controller
//                     name="zip"
//                     control={control}
//                     render={({ field }) => (
//                       <Input
//                         {...field}
//                         type="number"
//                         borderColor="secondary.100"
//                         borderRadius={0}
//                       />
//                     )}
//                   />
//                   <FormErrorMessage>
//                     {errors.zip && errors.zip.message}
//                   </FormErrorMessage>
//                 </FormControl>

//                 <Button
//                   my={8}
//                   bgGradient="linear(to-l, #0C82EE, #00B16B)"
//                   type="submit"
//                   w="full"
//                   color="white"
//                   p="4"
//                   _hover={{}}
//                   borderRadius={0}
//                 >
//                   Complete Your Profile
//                 </Button>
//               </form>
//             </Box>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import {
  useAddToCartApiMutation,
  useConfirmApiMutation,
  useFetBookingSlotMutation,
  useDeleteBookingMutation,
  useDeleteCourtBookingMutation,
  useGetCountryMutation,
  useGetStateMutation,
  usePaymentApiMutation,
  useProfileCompleteMutation,
  useCheckProfileMutation,
} from "@/redux/features/auth/auth.slice";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import { localStorageService } from "@/services/localStorge.service";
import { ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  totalCartItems,
  countDownTimer,
  detectedDeletedSlot,
  seCartItemForceFullyZero,
} from "@/redux/features/bookingSlice";
// import Translation from "../components/Translation";
import translate from "@/lib/translate";

interface SportData {
  sportName: string;
  Time: string;
  Date: string;
  venue: string;
  price: string;
  court: string;
  subtotal: string;
}

let orderInstance: any = "";

export default function BookingCartPage() {
  const sportsData = [
    {
      sportName: "Cricket",
      Time: " 1:10 to 2:30",
      Date: "  Jun 10, 2022",
      venue: "Motera Stadium, Chandkheda, Ahmedabad 364003",
      price: "$11,70",
      court: "3",
      subtotal: "$11,70",
    },
    {
      sportName: "Hockey",
      Time: " 1:10 to 2:30",
      Date: "  Jun 10, 2022",
      venue: "Motera Stadium, Chandkheda, Ahmedabad 364003",
      price: "$11,70",
      court: "3",
      subtotal: "$11,70",
    },
    // Add more sports data here if needed
  ];

  const router = useRouter();
  const dispatch = useDispatch();
  const [isCheckTermsAndCondition, setIsCheckTermsAndCondition] =
    useState(true);
  const [isConfirm, setIsConfirm]: any = useState({
    status: false,
  });
  const reducer_State = useSelector((state: any) => state);
  const [addToCartApi, { isLoading: addToCartApiIsLoading }] =
    useAddToCartApiMutation();

  const [fetBookingSlot, { isLoading: fetBookingSlotIsLoading }] =
    useFetBookingSlotMutation();

  const [confirmApi, { isLoading: confirmApiIsLoading }] =
    useConfirmApiMutation();

  const [paymentApi, { isLoading: paymentApiIsLoading }] =
    usePaymentApiMutation();

  const [orderId, setOrderId]: any = useState(null);
  const [slotList, setSlotList]: any = useState({
    booking_lines: [],
  });
  const [deleteBooking, { isLoading: deleteBookingIsLoading }] =
    useDeleteBookingMutation();

  const [deleteCourtBooking, { isLoading: deleteCourtBookingIsLoading }] =
    useDeleteCourtBookingMutation();

  const [checkProfile, { isLoading: checkProfileIsLoading }] =
    useCheckProfileMutation();

  const [selectedSports, setSelectedSports] = useState(sportsData);
  let order_id: any = null;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRemoveItem = (id: any) => {
    console.log("line_id", id);
    let num = Math.floor(Math.random() * 10000 + 1);
    bookingDelete(id);

    // setSelectedSports((prevSelectedSports) => {
    //   const updatedSports = prevSelectedSports.filter(
    //     (sport) => sport.sportName !== sportName
    //   );
    //   console.log("Item removed:", sportName);
    //   // alert("Item removed: " + sportName);
    //   return updatedSports;
    // });
  };

  // Remove Slot From Court
  const removeSlotFromCourt = (lineId: any, slotId: any) => {
    console.log("Line ID ::: ", lineId);
    console.log("Slot ID ::: ", slotId);
    selectedCourtDelete(lineId, slotId);
    let num = Math.floor(Math.random() * 1000 + 1);
    dispatch(detectedDeletedSlot(num)); // just handle deletion
  };

  const handleProfileButtonClick = () => {
    onOpen();
  };

  const addToCart = async () => {
    console.log(1);
    let generated_order_id = null;
    console.log(2);
    console.log("reducer_State", reducer_State);
    const isFreshLogin =
      reducer_State?.bookingSliceReducer?.cartData?.isFreshLogin;
    console.log(3);
    if (isFreshLogin) {
      console.log(4);
      const obj = reducer_State?.bookingSliceReducer?.cartData?.booking_lines;
      console.log(5);
      try {
        const res = await addToCartApi({ booking_lines: obj }).unwrap();
        console.log("getCalenderDate", res);
        if (res?.result?.statusCode === 200) {
          console.log("res", res);
          //dispatch(totalCartItems(objData?.booking_lines?.length));
          setOrderId(res?.result?.order_id);
          order_id = res?.result?.order_id;
          generated_order_id = res?.result?.order_id;
          return generated_order_id;
        } else {
          toast.error(translate("internal_server_label"));
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (!isFreshLogin) {
      let id = reducer_State?.bookingSliceReducer?.cartData?.order_id;
      if (id) {
        order_id = id;
        setOrderId(reducer_State?.bookingSliceReducer?.cartData?.order_id);
      }
      if (!id) {
        // router.push("/");
      }
    }
  };

  const fetchCart = async (id: any) => {
    try {
      let details: any = localStorageService.get("ADANI_MY_CART_DETAILS");
      // let d = details?.order_id || id || order_id || orderId;
      let d = details?.order_id;
      const res = await fetBookingSlot(d).unwrap();
      console.log("fetchCart", res);
      if (res?.result?.statusCode === 200) {
        console.log("res", res);
        console.log("============== 1-1-1-1-11--1--1");

        setIsConfirm({
          status: res?.result?.is_confirm,
        });

        let obj = {
          amount_total: res?.result?.sports_booking?.[0].amount_total,
          amount_untaxed: res?.result?.sports_booking?.[0].amount_untaxed,
          booking_date: res?.result?.sports_booking?.[0].booking_date,
          booking_id: res?.result?.sports_booking?.[0].booking_id,
          booking_lines: res?.result?.sports_booking[0]?.booking_lines || [],
          taxes: res?.result?.sports_booking[0]?.taxes,
        };

        console.log("==============", obj);
        dispatch(totalCartItems(obj?.booking_lines?.length));
        let num: any = Math.floor(Math.random() * 1000 + 1);
        dispatch(detectedDeletedSlot(num)); // just handle deletion
        setSlotList(obj || {});
      } else {
        toast.error(translate("internal_server_label"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const confirm = async () => {
    let isProfilePending: any = await checkUserProfile();
    console.log("1-1-1-1-1-1", isProfilePending);
    if (isProfilePending === true) {
      // alert(1);
      // let is_complete_profile = localStorageService.get("is_complete_profile");
      // if (is_complete_profile) {
      let cart_details: any = localStorageService.get("ADANI_MY_CART_DETAILS");
      try {
        let cart_order_id = cart_details?.order_id;
        const res = await confirmApi(cart_order_id).unwrap();
        console.log("confirmApi", res);
        if (res?.result?.statusCode === 200) {
          console.log("res", res);
          setIsConfirm((prev: any) => ({ ...prev, status: true }));
          dispatch(countDownTimer(true));
          toast.success(
            translate("your_court_booking_has_been_successfully_label")
          );
        } else if (res?.result?.statusCode === 400) {
          toast.error(res?.result.message);
        } else {
          toast.error(translate("internal_server_label"));
        }
      } catch (error) {
        console.log(error);
      }
    }
    // }
    if (isProfilePending === false) {
      // alert(2);
      handleProfileButtonClick();
    }
  };

  const paymentNow = async () => {
    try {
      let cart_details: any = localStorageService.get("ADANI_MY_CART_DETAILS");
      const res = await paymentApi(
        slotList.booking_id || cart_details?.order_id
      ).unwrap();
      console.log("paymentApi", res);
      if (res?.result?.longurl) {
        console.log("res", res);
        window.open(res?.result?.longurl, "_self");
        //setIsConfirm((prev: any) => ({ ...prev, status: true }));
      } else {
        toast.error(translate("internal_server_label"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const bookingDelete = async (id: any) => {
    try {
      const res = await deleteBooking(id).unwrap();

      console.log("deleteBookingf", res);
      if (res?.result?.statusCode === 200) {
        fetchCart(null);
        toast.success(translate("court_booking_cancellation_delete_label"));
      } else {
        toast.error(translate("internal_server_label"));
      }

      //  setStateOptions(transformedStateOptions);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Remove the court from slot
  const selectedCourtDelete = async (line_id: any, slot_id: any) => {
    console.log("1-1-1-1-1-1-1 selectedCourtDelete ::->>>", slot_id);
    console.log("1-1-1-1-1-1-1 selectedCourtDelete ::->>>", line_id);
    try {
      let Datum = { lineID: line_id, slotID: slot_id };

      const res = await deleteCourtBooking(Datum).unwrap();

      console.log("selectedCourtDelete", res);
      if (res?.result?.statusCode === 200) {
        fetchCart(null);
        toast.success(translate("court_booking_cancellation_delete_label"));
      } else {
        toast.error(translate("internal_server_label"));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const checkUserProfile = async () => {
    let is_complete_profile = false;
    try {
      const res = await checkProfile(null).unwrap();

      console.log("checkUserProfile ", res);
      if (res?.result?.statusCode === 200) {
        // toast.success(res?.result?.message);
        is_complete_profile = res?.result?.is_complete_profile;
        return is_complete_profile;
      } else {
        toast.error(translate("internal_server_label"));
      }

      return is_complete_profile;

      //  setStateOptions(transformedStateOptions);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleLinkClick = () => {
    router.push("/");
  };

  const handleLinkPageClick = () => {
    router.push("/booking-cart");
  };

  const [isLogin, setLogin] = useState(false);
  const [orderID, setOrderID] = useState("");

  useEffect(() => {
    // const fetchingCart = async () => {
    //   let id = await addToCart();
    //   fetchCart(id);
    // };

    dispatch(seCartItemForceFullyZero(false));
    let details: any = localStorageService.get("ADANI_MY_CART_DETAILS");
    if (details?.order_id) {
      orderInstance = details?.order_id;

      setOrderID(details?.order_id);
      setLogin(true);
      fetchCart(details?.order_id);
    } else {
      setLogin(false);
      //router.push("/");
    }
  }, []);

  return (
    <>
      <Box height={"80vh"} overflowY="scroll">
        <Box mt={20}>
          <Box mx={{ base: 4, md: 32 }}>
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
                  {translate("add_to_cart_label")}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

          {slotList?.booking_lines?.length === 0 && (
            <Box
              mt={20}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
              }}
            >
              <Image
                w={{ base: "100%", md: "80%" }}
                h={{ base: "100%", md: "80%" }}
                src="/images/emptycart.svg"
              />
              {/* <Text>Cart is empty</Text> */}
            </Box>
          )}

          {/* {isLogin === false && (
            <Box textAlign="center" p="2">
              <Text>{translate("your_cart_empty")}</Text>
            </Box>
          )} */}

          {slotList?.booking_lines?.length > 0 && (
            <Flex
              m={{ base: 2, sm: 6, md: 10 }}
              gap={8}
              flexDirection={{ base: "column", md: "column", lg: "row" }}
            >
              <Box
                w={{ base: "100%", md: "90%", lg: "70%" }}
                ml={{ base: "0", md: "16" }}
                overflowY="scroll"
                // height="60vh"
              >
                <Box>
                  <TableContainer
                    p={{ base: 2, md: 5 }}
                    backgroundColor={"#ffffff"}
                  >
                    <Table variant="simple">
                      <Thead bgColor="#E2F4FF">
                        <Tr>
                          <Th color={"primary.100"}>
                            {translate("sport_name_label")}
                          </Th>
                          <Th color={"primary.100"}>
                            {translate("venue_label")}
                          </Th>
                          <Th color={"primary.100"}>
                            {translate("price_label")}
                          </Th>
                          <Th color={"primary.100"}>
                            {translate("slot_count_label")}
                          </Th>
                          <Th color={"primary.100"}>
                            {translate("subtotal_label")}
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {slotList?.booking_lines?.length === 0 && (
                          <Box textAlign="center" p="2">
                            <Text>{translate("no_data_found_label")}</Text>
                          </Box>
                        )}

                        {slotList?.booking_lines?.map((data: any) => (
                          <Tr key={data?.sport_name}>
                            <Td>
                              <Box mt={1}>
                                <Text color={"third.100"} mt={1}>
                                  {data?.sport_name}
                                </Text>
                                <Text color={"third.100"} mt={1}>
                                  {data?.ground_name}
                                </Text>

                                <Text mt={1}>
                                  Date :{" "}
                                  {dayjs(data?.slot_booking_date).format(
                                    "MMM-DD-YYYY"
                                  )}
                                </Text>

                                {isConfirm?.status && (
                                  <Box>
                                    {data.slot.map((el: any) => (
                                      <Text key={el.slot_id} my={2}>
                                        Time : {el.slot_name}
                                      </Text>
                                    ))}
                                  </Box>
                                )}

                                {!isConfirm?.status && (
                                  <Box
                                    display="grid"
                                    gridTemplateColumns="repeat(2, 1fr)"
                                    gap={2}
                                  >
                                    {data.slot.map((el: any) => (
                                      <Box
                                        key={el.slot_id}
                                        border="1px solid #ccc"
                                        px={2}
                                        pr={12}
                                        py={2}
                                        mt={1}
                                        position="relative"
                                      >
                                        <Text> {el.slot_name}</Text>
                                        <Button
                                          onClick={() =>
                                            removeSlotFromCourt(
                                              data.line_id,
                                              el.slot_id
                                            )
                                          }
                                          position="absolute"
                                          top="-3px"
                                          right="-5px"
                                          bg={"transparent"}
                                          _hover={{
                                            backgroundColor: "transparent",
                                          }}
                                        >
                                          <Image src="/images/close.svg" />
                                        </Button>
                                      </Box>
                                    ))}
                                  </Box>
                                )}
                              </Box>
                            </Td>
                            <Td whiteSpace="pre-line">
                              <Text color={"third.100"} mb="2">
                                {data?.sports_complex_name}
                              </Text>
                              {data?.sports_complex_address}
                            </Td>
                            <Td>{data?.sale_price}</Td>
                            <Td>{data?.slot?.length}</Td>
                            <Td>{data?.sale_price * data?.slot?.length}</Td>
                            <Td>
                              {!isConfirm?.status && (
                                <Button
                                  variant="unstyled"
                                  isDisabled={fetBookingSlotIsLoading}
                                  onClick={() =>
                                    handleRemoveItem(data?.line_id)
                                  }
                                >
                                  <Image src="/images/close.svg" />
                                </Button>
                              )}
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
              <Box
                w={{ base: "100%", md: "90%", lg: "30%" }}
                ml={{ base: "2", sm: "16", md: "16", lg: "2" }}
              >
                <Box
                  borderWidth="1px"
                  borderRadius="md"
                  p="4"
                  bgColor={"white"}
                >
                  <Text
                    fontWeight="bold"
                    textAlign={"center"}
                    bgColor={"#E2F4FF"}
                    py={4}
                    color={"primary.100"}
                  >
                    {translate("slot_total_label")}
                  </Text>
                  <Box borderBottom={"1px dotted #949494"}>
                    <Flex justify="space-between" mt="2">
                      <Text color={"secondary.100"}>
                        {translate("untaxed_amount_label")}
                      </Text>
                      <Text color={"secondary.100"}>
                        {` ₹ ${slotList?.amount_untaxed}`}
                      </Text>
                    </Flex>
                    {slotList?.taxes?.map((tax: any, tax_ind: any): any => (
                      <Flex
                        key={`Tax_${tax_ind}`}
                        justify="space-between"
                        mt="1"
                      >
                        <Text
                          color={"secondary.100"}
                        >{`Tax (${tax?.tax_name})`}</Text>
                        <Text
                          color={"secondary.100"}
                        >{`₹ ${tax?.tax_amount}`}</Text>
                      </Flex>
                    ))}
                  </Box>
                  <Flex justify="space-between" mt="1">
                    <Text color={"#3B53A4"} fontWeight={"bold"}>
                      {translate("grant_total_label")}
                    </Text>
                    <Text color={"#3B53A4"} fontWeight={"bold"}>
                      {`₹ ${slotList?.amount_total?.toFixed(2)} `}
                    </Text>
                  </Flex>
                  <Checkbox
                    colorScheme="CheckBoxPrimary"
                    borderColor="#0C82EE"
                    onChange={(e) => {
                      console.log("is : ", e.target.checked);
                      setIsCheckTermsAndCondition(!e.target.checked);
                    }}
                  >
                    <Text>
                      <Text as="span" color="secondary.100">
                        {translate("i_have_read_and_agree_label")}
                      </Text>{" "}
                      {/* router.push("/terms-and-conditions") */}
                      <Text fontWeight={"bold"} as="span" color="third.100">
                        <a
                          onClick={() =>
                            window.open("/terms-and-conditions", "_blank")
                          }
                        >
                          {translate("terms_and_condition_lable")}
                        </a>
                      </Text>
                    </Text>
                  </Checkbox>
                  <Box mt="4">
                    {/* Replace 'Continue' with the actual label you want */}
                    {isConfirm?.status ? (
                      <Button
                        bgGradient="linear(to-l, #0C82EE, #00B16B)"
                        type="submit"
                        w="full"
                        color="white"
                        isLoading={paymentApiIsLoading}
                        isDisabled={isCheckTermsAndCondition}
                        borderRadius="0"
                        p="6"
                        _hover={{}}
                        // onClick={() => handleProfileButtonClick()}
                        onClick={() => paymentNow()}
                      >
                        {translate("pay_now_label")}
                      </Button>
                    ) : (
                      <Button
                        bgGradient="linear(to-l, #0C82EE, #00B16B)"
                        type="submit"
                        w="full"
                        color="white"
                        isLoading={checkProfileIsLoading || confirmApiIsLoading}
                        isDisabled={isCheckTermsAndCondition}
                        borderRadius="0"
                        p="6"
                        _hover={{}}
                        onClick={() => confirm()}
                      >
                        {translate("confirm_label")}
                      </Button>
                    )}
                  </Box>
                </Box>
              </Box>
            </Flex>
          )}
        </Box>

        {isOpen && (
          <ProfileModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            slotList={slotList}
            setIsConfirm={setIsConfirm}
          />
        )}
      </Box>
    </>
  );
}

// Model component code start
const phoneRegExp = /^\d{1,10}$/;

const schema = yup.object().shape({
  email: yup.string().email().required("Invalid email address"),
  street: yup.string().trim().required("Address is required"),
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  district: yup.string().trim().required("District is required"),
  city: yup.string().trim().required("City is required"),
  date_of_birth: yup
    .date()
    .required("Date of birth is required")
    .typeError("Date is required"),
  emergency_person_name: yup
    .string()
    .trim()
    .required("Emergency contact person name is required"),
  emergency_phone_no: yup
    .string()
    .required("Phone number is required")
    .min(10, "Phone number must be exactly 10 digits")
    .max(10, "Phone number must be exactly 10 digits")
    .matches(
      /^[6-9]\d{9}$/,
      "Phone number should be start with (6,7,8,9) digit"
    ),
  // zip: yup
  //   .number()
  //   .min(6, "Pincode muut be 6 digits")
  //   .max(6, "Pincode muut be 6 digits")
  //   .required("Pincode is required"),

  zip: yup
    .string()
    .matches(/^\d{6}$/, "Pin code must be 6 digits")
    .required("Pin code is required"),
});

interface State {
  id: number;
  name: string;
  // Add other properties if needed
}
interface Profile {
  address: string;
  country: string;
  state: string;
  district: string;
  city: string;
  date_of_birth: string;
  emergency_person_name: string;
  emergency_phone_no: string;

  // ... other properties
}
interface ProfileCompleteResponse {
  result?: {
    statusCode: number;
    message: string;
    // Other properties if there are any
  };
  // Other properties if there are any
}
interface Message {
  text: string;
  type: "success" | "error";
}
function ProfileModal({
  isOpen,
  onOpen,
  onClose,
  setIsConfirm,
  slotList,
}: any) {
  const [countryOptions, setCountryOptions] = useState<
    { value: any; label: string }[]
  >([]);
  const [stateOptions, setStateOptions] = useState([]);

  ///  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // APi calling start
  const [profileComplete, { isLoading: profileCompleteIsLoading }] =
    useProfileCompleteMutation();
  const [getCountry] = useGetCountryMutation();
  const [getState] = useGetStateMutation();

  const [state, setState] = useState({
    selectedCountry: {},
    selectedState: {},
  });
  // const stateOptions = [
  //   { value: "state1", label: "State 1" },
  //   { value: "state2", label: "State 2" },
  //   // Add more state options as needed
  // ];
  // const countryOptions = [
  //   { value: "country", label: "Country" },
  //   { value: "country2", label: "Country" },
  // ];
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderColor: "#7E7E7E",
      borderRadius: "0",
      // borderColor: state.selectProps?.error ? "red" : "#7E7E7E",
      // Adjust padding as needed
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#007BFF"
        : state.isFocused
        ? "#F0F0F0"
        : "transparent",
      color: state.isSelected ? "#FFF" : "#000",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#000", // Change color of the selected option
    }),
  };

  const onSubmit = (values: any) => {
    console.log(values);
    // let obj = {
    //   ...obj,
    //   date_of_birth :
    // }
    addData(values);
    // Add your logic to handle the form submission here
  };
  // 1998-11-19T18:30:00.000Z
  //  2000-07-29

  const [confirmApi, { isLoading: confirmApiIsLoading }] =
    useConfirmApiMutation();

  const confirm = async () => {
    {
      console.log("2-2-2-2-2-2 Confirm API 2-2-2-2-2-2");
      try {
        const res = await confirmApi(
          slotList.booking_id || orderInstance
        ).unwrap();
        console.log("confirmApi", res);
        if (res?.result?.statusCode === 200) {
          console.log("res", res);
          setIsConfirm((prev: any) => ({ ...prev, status: true }));
        } else {
          toast.error(translate("internal_server_label"));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addData = async (data: any) => {
    try {
      const response = (await profileComplete(
        data
      ).unwrap()) as ProfileCompleteResponse;
      console.log(response, "Updated profile code data");
      if (response.result?.statusCode === 200) {
        confirm();
        setIsConfirm((prev: any) => ({ ...prev, status: true }));
        toast.success(
          <div>{translate("profile_created_successfully_label")}</div>
        );
        onClose();
      } else {
        toast.error(<div>{response?.result?.message}</div>);
      }
    } catch (error) {
      console.log(error, "Error");
    }
  };

  const getCountryList = async () => {
    try {
      const response = await getCountry({}).unwrap();
      console.log("response ", response);

      let transformedOptions: { value: any; label: string }[] = [];

      if (response.result.statusCode === 200) {
        transformedOptions = response.result.countries.map((country: any) => ({
          value: country.id,
          label: country.name,
        }));
      }

      setCountryOptions(transformedOptions);
    } catch (error) {
      console.error("Error fetching country list:", error);
    }
  };
  const getStateList = async (id: any) => {
    try {
      const response = await getState(id).unwrap();

      console.log(response);

      if (response.result.statusCode === 200) {
        const transformedOptions = response?.result?.states.map((ste: any) => ({
          value: ste.id,
          label: ste.name,
        }));
        setStateOptions(transformedOptions);
      }

      //  setStateOptions(transformedStateOptions);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const currentDate = new Date().toISOString().split("T")[0];

  const stateOnchange = (obj: any) => {
    setValue("state", obj?.value, {
      shouldValidate: true,
    });
    setState((prev) => ({ ...prev, selectedState: obj }));
  };
  const countryOnchange = (obj: any) => {
    setStateOptions([]);
    setValue("country", obj?.value, {
      shouldValidate: true,
    });

    setValue("state", "", {
      shouldValidate: true,
    });

    setState((prev) => ({ ...prev, selectedState: {}, selectedCountry: obj }));
    getStateList(obj?.value);
  };
  useEffect(() => {
    getCountryList();
    ///  getStateList();
  }, []);

  return (
    <>
      <Modal
        size={"xl"}
        //  blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          sx={{
            backgroundColor: "white",
          }}
        >
          <ModalHeader color={"primary.100"} textAlign={"center"}>
            Complete Your Profile
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Box maxW="xl" mx="auto" p={4}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl my="4" isInvalid={!!errors.email}>
                  <FormLabel htmlFor="email">Enter your email</FormLabel>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        borderColor="secondary.100"
                        borderRadius="0"
                      />
                    )}
                  />
                  <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.street}>
                  <FormLabel color={"primary.100"}>Address line - 1</FormLabel>
                  <Controller
                    name="street"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        borderColor="secondary.100"
                        borderRadius={0}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.street && errors.street.message}
                  </FormErrorMessage>
                </FormControl>
                <Flex gap={4}>
                  <FormControl mt={4} isInvalid={!!errors.country}>
                    <FormLabel color={"primary.100"}>Country</FormLabel>
                    <Controller
                      name="country"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          placeholder="select a country"
                          options={countryOptions}
                          value={state?.selectedCountry || "ankit"}
                          //isClearable
                          isSearchable
                          onChange={(e) => countryOnchange(e)}
                          styles={customStyles}
                        />
                      )}
                    />

                    <FormErrorMessage>
                      {errors.country && errors.country.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl mt={4} isInvalid={!!errors.state}>
                    <FormLabel color={"primary.100"}>State</FormLabel>
                    <Controller
                      name="state"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={stateOptions}
                          value={state.selectedState}
                          // isClearable
                          //  defaultValue={stateOptions[0]}
                          isSearchable
                          placeholder="Select a state"
                          onChange={(e) => stateOnchange(e)}
                          styles={customStyles}
                        />
                      )}
                    />
                    <FormErrorMessage>
                      {errors.state && errors.state.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex gap={4}>
                  <FormControl mt={4} isInvalid={!!errors.district}>
                    <FormLabel color={"primary.100"}>District</FormLabel>
                    <Controller
                      name="district"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          borderColor="secondary.100"
                          borderRadius={0}
                        />
                      )}
                    />
                    <FormErrorMessage>
                      {errors.district && errors.district.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl mt={4} isInvalid={!!errors.city}>
                    <FormLabel color={"primary.100"}>City</FormLabel>
                    <Controller
                      name="city"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          borderColor="secondary.100"
                          borderRadius={0}
                        />
                      )}
                    />
                    <FormErrorMessage>
                      {errors.city && errors.city.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>

                <FormControl mt={4} isInvalid={!!errors.date_of_birth}>
                  <FormLabel color={"primary.100"}>Date of birth</FormLabel>
                  <Controller
                    name="date_of_birth"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="date"
                        {...field}
                        borderColor="secondary.100"
                        max={currentDate} // Set max attribute to disable future dates
                        borderRadius={0}
                        value={
                          field.value instanceof Date
                            ? field.value.toISOString().split("T")[0]
                            : field.value
                        }
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.date_of_birth && errors.date_of_birth.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl mt={4} isInvalid={!!errors.emergency_person_name}>
                  <FormLabel color={"primary.100"}>
                    Emergency contact person name
                  </FormLabel>
                  <Controller
                    name="emergency_person_name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        borderColor="secondary.100"
                        borderRadius={0}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.emergency_person_name &&
                      errors.emergency_person_name.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl mt={4} isInvalid={!!errors.emergency_phone_no}>
                  <FormLabel color={"primary.100"}>
                    Emergency contact number
                  </FormLabel>
                  <Controller
                    name="emergency_phone_no"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        borderColor="secondary.100"
                        borderRadius={0}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.emergency_phone_no &&
                      errors.emergency_phone_no.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl mt={4} isInvalid={!!errors?.zip}>
                  <FormLabel color={"primary.100"}>Pincode</FormLabel>
                  <Controller
                    name="zip"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="number"
                        borderColor="secondary.100"
                        borderRadius={0}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.zip && errors.zip.message}
                  </FormErrorMessage>
                </FormControl>

                <Button
                  my={8}
                  bgGradient="linear(to-l, #0C82EE, #00B16B)"
                  type="submit"
                  w="full"
                  color="white"
                  p="4"
                  _hover={{}}
                  borderRadius={0}
                >
                  Complete Your Profile
                </Button>
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
