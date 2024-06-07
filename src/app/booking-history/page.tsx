"use client";
import { API } from "@/constants/api.constants";
import {
  useGetBookingHistoryMutation,
  useGetPrintBookingMutation,
  useGetPrintSlotMutation,
} from "@/redux/features/auth/auth.slice";
import { localStorageService } from "@/services/localStorge.service";
import { ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import translate from "@/lib/translate";

import { IoConstructOutline } from "react-icons/io5";
interface BookingItem {
  id: number;
  bookingCode: string;
  status: string;
  amount: number;
  venue: string;
  court: string;
  time: string;
  date: string;
}

interface APIResponse {
  status: boolean;
  statusCode: number;
  message: string;
  bookings: BookingItem[];
}

export default function BookingHistory() {
  //const [bookings, setBookings]: any = useState([]);
  // const bookings: BookingItem[] = [
  //   {
  //     id: "1",
  //     bookingCode: "2023/08/S00002",
  //     status: "Confirmed",
  //     amount: 70.0,
  //     venue: "Riverfront sports park - West",
  //     court: "Court - 1",
  //     time: "08:00 am - 08:30 am",
  //     date: "Jun 16, 2023",
  //   },
  //   {
  //     id: "2",
  //     bookingCode: "2023/08/S00003",
  //     status: "Pending",
  //     amount: 50.0,
  //     venue: "City Sports Club",
  //     court: "Indoor Court - 3",
  //     time: "09:00 am - 10:00 am",
  //     date: "Jun 18, 2023",
  //   },
  //   // Add more booking items here...
  // ];
  const router = useRouter();
  const [isLoading, setIsLoading]: any = useState({
    index: null,
    isLoading: false,
  });
  const [isLoadingSlotPdfApi, setIsLoadingSlotPdfApi]: any = useState({
    index: null,
    isLoading: false,
  });
  const [bookings, setBookings] = useState<BookingItem[]>([]);
  const [getBookingHistory, { isLoading: getBookingHistoryIsLoading }] =
    useGetBookingHistoryMutation();

  const [getPrintSlot, { isLoading: getPrintSlotIsLoading }] =
    useGetPrintSlotMutation();

  const [getPrintBooking, { isLoading: getPrintBookingIsLoading }] =
    useGetPrintBookingMutation();

  const SlotBookingPrintFunction = async (data: any, index2: any) => {
    setIsLoadingSlotPdfApi({
      index: index2,
      isLoading: true,
    });
    try {
      // const result = await getPrintSlot(id).unwrap();
      // if (result?.result?.statusCode === 200) {
      //   window.open(result.result.receipt_url, "_blank");
      // }
      // console.log(result);
      const headers = {
        "Content-Type": "blob",
        authorization: "Bearer " + localStorageService.get("ADANI_SPORTS_LINE"),
      };
      const config: any = {
        method: "POST",
        url: `${process.env.API_URL}/api` + API.PRINT_SLOT + data?.line_id,
        responseType: "arraybuffer",
        headers,
      };

      // getDownLoadExcel(`model_name=${filter?.excelDownload || ""}`);
      const response = await axios(config);

      console.log(response);

      const blob = new Blob([response.data], {
        type: "application/pdf",
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("type", "application/pdf");
      a.download = data.sport_name + " " + data.ground_name + ".pdf";
      a.click();
      window.URL.revokeObjectURL(url);
      setIsLoadingSlotPdfApi({
        index: null,
        isLoading: false,
      });
    } catch (e) {
      console.log(e);
      setIsLoadingSlotPdfApi({
        index: null,
        isLoading: false,
      });
    }
  };
  const OrderBookingPrintFunction = async (data: any, index: any) => {
    try {
      setIsLoading({
        index: index,
        isLoading: true,
      });
      // const result = await getPrintBooking(id).unwrap();
      // if (result?.result?.statusCode === 200) {
      //   window.open(result.result.receipt_url, "_blank");
      // }
      //

      console.log(data);
      const headers = {
        "Content-Type": "blob",
        authorization: "Bearer " + localStorageService.get("ADANI_SPORTS_LINE"),
      };
      const config: any = {
        method: "POST",
        url: `${process.env.API_URL}/api` + API.PRINT_BOOKING + data.order_id,
        responseType: "arraybuffer",
        headers,
      };

      // getDownLoadExcel(`model_name=${filter?.excelDownload || ""}`);
      const response = await axios(config);

      console.log(response);

      const blob = new Blob([response.data], {
        type: "application/pdf",
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("type", "application/pdf");
      a.download = data.booking_name + ".pdf";
      a.click();
      window.URL.revokeObjectURL(url);
      setIsLoading({
        index: null,
        isLoading: false,
      });
    } catch (e) {
      console.log(e);
      setIsLoading({
        index: null,
        isLoading: false,
      });
    }
  };
  const handleLinkClick = () => {
    router.push("/");
  };
  const handleLinkPageClick = () => {
    router.push("/booking-cart");
  };

  useEffect(() => {
    const fetchBookingHistory = async () => {
      try {
        const response = await getBookingHistory({}).unwrap();

        console.log("getBookingHistory", response);

        if (response?.result?.bookings) {
          setBookings(response.result.bookings);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBookingHistory();
  }, []);
  return (
    <>
      <Box
        my="28"
        mx="auto"
        width={{ base: "100%", md: "80%" }}
        minHeight={"300px"}
      >
        <Box my={4} mx="4">
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
                {translate("booking_history_label")}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Accordion width="full" allowToggle>
          {bookings?.length > 0 ? (
            bookings.map((item: any, index) => (
              <AccordionItem mx="6">
                <AccordionButton
                  width="full"
                  p="4"
                  border="none"
                  boxShadow="md"
                >
                  <Box
                    display="flex"
                    flexDirection={{ base: "column", sm: "row" }}
                    width="full"
                    justifyContent="space-between"
                    alignItems="center"
                    textAlign="left"
                  >
                    <Box
                      // width="full"
                      display={"flex"}
                      flexDirection={{ base: "column", md: "row" }}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap="10px"

                      //textAlign="left"
                    >
                      <Text
                        color={"#212529"}
                        fontSize={{ base: 22, sm: 20 }}
                        fontWeight={"semibold"}

                        // textAlign="left"
                      >
                        {item?.booking_name}
                      </Text>
                      <Text
                        color={"#838A93"}
                        fontSize={{ base: 22, sm: 20 }}
                        fontWeight={"semibold"}
                      >
                        {dayjs(item?.booking_date).format("MMM DD, YYYY")}
                      </Text>
                    </Box>

                    <Box
                      display={"flex"}
                      flexDirection={{ base: "column", lg: "row" }}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap="10px"
                    >
                      <Text
                        color={"primary.100"}
                        fontSize={{ base: 22, sm: 20 }}
                        fontWeight={"semibold"}
                      >
                        ₹ {item.amount_total}
                      </Text>
                      <Button
                        backgroundColor={"#007EA8"}
                        _hover={{
                          backgroundColor: "#007EA8",
                        }}
                        color={"white"}
                        px={10}
                        fontSize={{ base: 14, sm: 16 }}
                        borderRadius={"0"}
                        isLoading={
                          isLoading?.index === index && isLoading?.isLoading
                        }
                        onClick={() => {
                          OrderBookingPrintFunction(item, index);
                        }}
                      >
                        {translate("download_as_pdf_label")}
                      </Button>
                    </Box>
                  </Box>
                  {/* <AccordionIcon /> */}
                </AccordionButton>
                <AccordionPanel px="5px" pt="0" pb={4}>
                  <Box backgroundColor={"white"} boxShadow={"md"} p={4}>
                    {item?.booking_lines?.length > 0 ? (
                      item.booking_lines.map((item2: any, index2: any) => (
                        <>
                          {index2 !== 0 ? (
                            <Divider borderColor={"#DDDDDD"} mb={4} />
                          ) : (
                            <></>
                          )}
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            pb={4}
                          >
                            <Box
                              display={"flex"}
                              flexDirection={"column"}
                              gap="10px"
                              alignItems={"start"}
                            >
                              <Text
                                bgColor={"#9AFFDB"}
                                color={"#00AF6E"}
                                py={2}
                                px={4}
                                fontSize={"16px"}
                              >
                                {item2.sport_name}
                              </Text>
                              <Text color="#838A93" fontWeight="medium">
                                {item2.sports_complex_name}
                              </Text>
                              <Text color="#838A93" fontWeight="medium">
                                {item2.ground_name}
                              </Text>
                              <Text color="#838A93" fontWeight="medium">
                                {item2?.slot.map((item3: any, index3: any) => (
                                  <>{item3?.slot_name} | </>
                                ))}

                                {dayjs(item2.slot_booking_date).format(
                                  "MMM DD, YYYY"
                                )}
                              </Text>
                              <Button
                                backgroundColor={"primary.100"}
                                _hover={{
                                  backgroundColor: "#007EA8",
                                }}
                                color={"#FFFFFF"}
                                rounded={"0"}
                                isLoading={
                                  isLoadingSlotPdfApi?.index === index2 &&
                                  isLoadingSlotPdfApi?.isLoading
                                }
                                bottom={0}
                                px={8}
                                py={0}
                                onClick={() => {
                                  SlotBookingPrintFunction(item2, index2);
                                }}
                              >
                                {translate("download_as_pdf_label")}{" "}
                              </Button>
                            </Box>
                            <Box
                              color={"primary.100"}
                              fontWeight={"semibold"}
                              fontSize={"20px"}
                            >
                              ₹ {item2.total_amount}
                            </Box>
                          </Box>
                        </>
                      ))
                    ) : (
                      <>No slot booked</>
                    )}
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            ))
          ) : (
            <>
              <Text my={10} textAlign={"center"}>
                {" "}
                {translate("no_booking_history_label")}
              </Text>
            </>
          )}
        </Accordion>
      </Box>
    </>
  );
}
