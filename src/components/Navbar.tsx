"use client";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  Portal,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Divider,
  Avatar,
  Select,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useEffect, useMemo, useState, useRef } from "react";
import { localStorageService } from "@/services/localStorge.service";
import { useRouter } from "next/navigation";
import d from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { isNowLogin } from "@/redux/features/checkAuthUserSlice";
import {
  useFetBookingSlotMutation,
  useAllLanguagesMutation,
} from "@/redux/features/auth/auth.slice";
import ReactSelect from "react-select";
import Translation from "../components/Translation";
import translate from "@/lib/translate";
import useAuthState from "@/hooks/useAuthState";
import { setCurrentRouteSlice } from "@/redux/features/currentRouteSlice";
import CountDownTimer from "./CountDownTimer";
import {
  countDownTimer,
  seCartItemForceFullyZero,
  selectedMySlots,
} from "@/redux/features/bookingSlice";
import dayjs from "dayjs";

// import useRouteChange from "@/hooks/useRouterPath";
// import useRouterPath from "@/hooks/useRouterPath";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "#D1E9FF",
    padding: "2px",
    zIndex: 11,
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    zIndex: 19,
    backgroundColor: state.isSelected
      ? "#007BFF"
      : state.isFocused
      ? "#F0F0F0"
      : "white",
    color: state.isSelected ? "#FFF" : "#000",
  }),

  menu: (provided: any) => ({
    ...provided,
    zIndex: 50,
    // backgroundColor: "pink",
  }),

  singleValue: (provided: any) => ({
    ...provided,
    color: "#000", // Change color of the selected option
  }),
};

export default function WithSubnavigation() {
  // const isLoggedIn_user = useAuthState();

  const [iSloggedin, setIsloggedin] = useState<boolean>(false);
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();
  const [langaguesList, setLangaguesList] = useState([]);
  const [activeRouter, setActiveRouter] = useState("/");
  const [confirm_time, setConfirm_time] = useState(null);
  const [reserved_time, setReserved_time] = useState(null);
  const [showTimer, setShowTimer] = useState(false);

  // Use the custom hook

  const handleRouteChange = (url: string) => {
    console.log(
      "Route changed to: #######################################",
      url
    );
    // You can perform any custom logic here
  };
  // useRouteChange(handleRouteChange);
  // const currentRoute = useRouterPath();

  // console.log("currentRoute --> ", currentRoute);

  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const [userDetails, setUserDetails]: any = useState({});
  const [fetBookingSlot, { isLoading: fetBookingSlotIsLoading }] =
    useFetBookingSlotMutation();

  const [allLanguages, { isLoading: allLanguagesApiIsLoading }] =
    useAllLanguagesMutation();

  const [totalCourt, setTotalCourt] = useState(0);
  const [selectedLang, setSelectedLang]: any = useState({});
  const reducerState = useSelector((state: any) => state);

  const dispatch = useDispatch();

  let cu_path = "";
  if (typeof window !== "undefined") {
    cu_path = window?.location?.pathname;
  }

  dispatch(setCurrentRouteSlice(cu_path));

  const isLoggedIn_user = reducerState?.checkAuthUserReducer?.isLogin;
  const current_active_route =
    reducerState?.currentRouterReducer?.currentActiveRoute;
  let cartData = reducerState?.bookingSliceReducer?.cartData;
  let cartItems = reducerState?.bookingSliceReducer?.cartItems;
  let isCartForceFullyZero =
    reducerState?.bookingSliceReducer?.isCartForceFullyZero;

  let details: any = localStorageService.get("ADANI_SPORTS_LINE_USER_DETAILS");

  let token: any = localStorageService.get("ADANI_SPORTS_LINE");
  let isFreshLogin = reducerState?.bookingSliceReducer?.cartData?.isFreshLogin;
  console.log(reducerState.checkAuthUserReducer);

  const checkUserLoggedinStatus = () => {
    setUserDetails(details);
    let path = window?.location?.pathname;
    setCurrentPath(path);
    if (token) {
      console.log("token --> ", token);
      //  setIsloggedin(false);
      dispatch(isNowLogin(true));
      //  router.push("/");
    } else {
      dispatch(isNowLogin(false));
      //  router.push("/signin");

      // window.location.href = "/signin";
    }
  };

  const handleSignout = (e: React.MouseEvent) => {
    e.preventDefault();

    localStorageService.remove("ADANI_SPORTS_LINE_USER_DETAILS");
    localStorageService.remove("ADANI_MY_CART_DETAILS");

    localStorage.removeItem("ADANI_SPORTS_LINE");

    window.location.href = "/";
  };

  const handleOrderHistoryClick = () => {
    router.push("/booking-history");
    onClose;
  };
  const fullName = `${userDetails?.first_name} ${userDetails?.last_name}`;
  const firstName = userDetails?.first_name || "";
  const lastName = userDetails?.last_name || "";
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

  const getCartLength = async () => {
    //alert(1);
    console.log("test isCartForceFullyZero -->", isCartForceFullyZero);
    let cart_details: any = localStorageService?.get("ADANI_MY_CART_DETAILS");
    // let order_id = details?.order_id || cartData?.order_id;
    let order_id = cart_details?.order_id || cartData?.order_id;
    if (order_id) {
      // alert(2)
      try {
        const res = await fetBookingSlot(order_id).unwrap();
        // debugger;
        console.log("fetchCart", res);

        if (res?.result?.statusCode === 200) {
          if (isCartForceFullyZero) {
            console.log(
              "test in IF bloc isCartForceFullyZero -->",
              isCartForceFullyZero
            );
            setTotalCourt(0);
            dispatch(countDownTimer(false));
           // dispatch(seCartItemForceFullyZero(false));
          } else {
            console.log(
              "test in Else bloc isCartForceFullyZero -->",
              isCartForceFullyZero
            );
            setConfirm_time(res?.result?.confirm_date_time || null);
            setReserved_time(res?.result?.slot_reserved_time || null);
            if (
              res?.result?.confirm_date_time !== "" &&
              res?.result?.slot_reserved_time !== ""
            ) {
              setShowTimer(true);
            } else {
              setShowTimer(false);
            }
            // setShowTimer(
            //   res?.result?.confirm_date_time !== "" &&
            //     res?.result?.slot_reserved_time !== ""
            // );

            // dispatch(countDownTimer(false));
            // dispatch(seCartItemForceFullyZero(false));

            dispatch(
              countDownTimer(
                res?.result?.confirm_date_time !== "" &&
                  res?.result?.slot_reserved_time !== ""
              )
            );

            console.log("res", res);
            let total_cart_items =
              res?.result?.sports_booking?.[0]?.booking_lines?.length;
            setTotalCourt(total_cart_items);

            console.log("api res !!!!! -> ", res.result);

            const transformedData: any = [];

            res?.result?.sports_booking?.[0]?.booking_lines?.forEach(
              (entry: any) => {
                entry.slot.forEach((slot: any) => {
                  transformedData.push({
                    ground_id: entry.ground_id,
                    slot_id: slot.slot_id,
                    date: dayjs(slot?.slot_booking_date).format("YYYY-MM-DD"),
                  });
                });
              }
            );

            dispatch(selectedMySlots(transformedData));
          }
        } else {
          // toast.error("Internal server error !");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleHomeClick = () => {
    router.push("/");
  };

  const getAllLanguages = async () => {
    try {
      const res = await allLanguages(null).unwrap();
      console.log("allLanguages", res);

      let selected_lang = localStorageService.get("ADANI_LANG");
      console.log("selected_lang -->", selected_lang);
      if (res?.result?.statusCode === 200) {
        console.log("res", res);
        let list_arr: any = res?.result?.languages.map((el: any) => ({
          label: el.name,
          value: el.code,
        }));
        let selected_lang_obj = list_arr.filter(
          (el: any) => el.value === selected_lang
        )[0];
        console.log("selected_lang_obj", selected_lang_obj);
        setSelectedLang(
          selected_lang_obj || { label: "English (US)", value: "en_US" }
        );
        console.log(list_arr);
        setLangaguesList(list_arr);
      } else {
        // toast.error("Internal server error !");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeLang = (obj: any) => {
    console.log("dsf");
    setSelectedLang(obj);
    localStorageService.set("ADANI_LANG", obj.value);
    location.reload();
  };

  useEffect(() => {
    getCartLength();
  }, [cartItems, isLoggedIn_user]);

  // useEffect(() => {
  //   if (isCartForceFullyZero) {
  //     console.log("isCartForceFullyZero in navbar");
  //     getCartLength();
  //   }
  // }, [reducerState?.bookingSliceReducer?.isCartForceFullyZero]);

  useEffect(() => {
    getCartLength();
  }, [reducerState?.bookingSliceReducer?.deletingSlotDetected]);

  useEffect(() => {
    console.log("showCountDownTimer in navbar");
    getCartLength();
  }, [reducerState?.bookingSliceReducer?.showCountDownTimer]);

  useEffect(() => {
    checkUserLoggedinStatus();
    console.log(
      "reducerState.checkAuthUserReducer",
      reducerState.checkAuthUserReducer
    );
  }, [reducerState.checkAuthUserReducer]);

  useEffect(() => {
    getAllLanguages();
  }, []);

  useEffect(() => {
    setIsloggedin(isLoggedIn_user);
  }, [isLoggedIn_user]);

  useEffect(() => {
    setActiveRouter(reducerState?.currentRouteReducer?.currentActiveRoute);
  }, [reducerState?.currentRouteReducer?.currentActiveRoute]);

  return (
    <Box position="relative" border="0px" zIndex="10">
      <Box position="fixed" top="0" zIndex={1} width="full">
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 1 }}
          px={{ base: 1, md: 20, lg: 32 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }}>
            <Button
              cursor="pointer"
              as="a"
              variant={"link"}
              onClick={handleHomeClick}
            >
              <Image
                maxW={{ base: "", sm: 320 }}
                src="/images/logo.svg"
                alt="logo"
                h="80%"
              />
            </Button>
          </Flex>
          {iSloggedin && showTimer && (
            <Box mx="2">
              <CountDownTimer
                confirm_time={confirm_time}
                reserved_time={reserved_time}
                setShowTimer={setShowTimer}
                showTimer={showTimer}
              />
            </Box>
          )}
          <Flex>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={{ base: 0, md: 1 }}
            >
              {!iSloggedin && activeRouter !== "/signin" && (
                <Button
                  fontSize={"sm"}
                  fontWeight={400}
                  color={"#0C82EE"}
                  px={{ base: 3, md: 6 }}
                  border={"1px"}
                  borderRadius={0}
                  textDecoration="none"
                  borderColor="linear(to-r,#0680AA, #00AB73)"
                  bg="white"
                  onClick={() => router.push("/signin")}
                >
                  {translate("login_label")}
                </Button>
              )}
            </Stack>

            {token && activeRouter !== "/booking-cart" && (
              <Box
                bg="linear-gradient(to right, #0680AA, #00AB73)"
                p="1px"
                mx="1"
              >
                <Box
                  cursor="pointer"
                  position="relative"
                  bg="white"
                  onClick={() => router.push("/booking-cart")}
                >
                  <Image
                    bg={"transparent"}
                    h={"80%"}
                    w={"100%"}
                    p={"5px"}
                    src="/images/cart.svg"
                    alt="cart"
                  />
                  <Box
                    position="absolute"
                    bottom="1px"
                    height="27px"
                    width="27px"
                    left="23px"
                    fontWeight="bold"
                    textAlign={"center"}
                    px={1}
                    background="linear-gradient(to right, #0680AA, #00AB73)"
                    color="white"
                    display={"flex"}
                    flexDirection="column"
                    justifyContent={"center"}
                    borderRadius={"25px"}
                  >
                    <Text
                      fontSize="12px"
                      textAlign={"center"}
                      lineHeight="10px"
                    >
                      {totalCourt ?? "0"}
                    </Text>
                  </Box>
                </Box>
              </Box>
            )}
            {/* currentPath !== "/signin" &&  */}
            {iSloggedin && (
              <Popover
                autoFocus={true}
                onClose={onClose}
                isOpen={isOpen}
                onOpen={onOpen}
                isLazy
                lazyBehavior="keepMounted"
              >
                <PopoverTrigger>
                  <Image
                    src="/images/profile.svg"
                    alt="profile"
                    width={{ base: "12" }}
                    mx={{ base: "0", md: "0" }}
                  />
                </PopoverTrigger>

                <Portal>
                  <PopoverContent backgroundColor={"white"}>
                    <Flex backgroundColor={"skyblue.100"} mx={"2"} my={"2"}>
                      <Box
                        backgroundColor="white"
                        borderRadius="3xl"
                        mx="3"
                        my="2"
                      >
                        <Flex
                          align="center"
                          justify="center"
                          w="12"
                          h="12"
                          fontWeight="bold"
                          fontSize="xl"
                        >
                          {initials}
                        </Flex>
                      </Box>
                      <PopoverHeader border={"none"} padding={"2"}>
                        <Flex
                          direction={"column"}
                          onClick={() => {
                            onClose(); // Close the popover
                          }}
                        >
                          <Text>
                            {`${userDetails?.first_name} ${userDetails?.last_name}`}{" "}
                          </Text>
                          <Text>{`${userDetails?.mobile_no}`}</Text>
                        </Flex>
                      </PopoverHeader>
                    </Flex>

                    <PopoverBody
                      borderBottom={"none"}
                      cursor={"pointer"}
                      onClick={() => {
                        handleOrderHistoryClick();
                        onClose();
                      }}
                      _hover={{ backgroundColor: "skyblue.100" }}
                    >
                      <Flex border={"none"}>
                        <Box
                          backgroundColor={"skyblue.100"}
                          borderRadius={"lg"}
                          mx={"4"}
                        >
                          {" "}
                          <Image
                            src="/images/order_history.svg"
                            alt="order History"
                            padding={"2"}
                            width={"10"}
                          />
                        </Box>

                        <PopoverHeader border={"none"}>
                          {translate("order_history_label")}
                        </PopoverHeader>
                      </Flex>

                      <Divider
                        my={"2"}
                        w={"64"}
                        display={{ base: "block", lg: "none" }}
                        marginLeft={"6"}
                        borderColor={"#E6ECF1"}
                      />

                      <Box display={{ base: "block", lg: "none" }}>
                        <Flex border={"none"}>
                          <Box
                            backgroundColor={"skyblue.100"}
                            borderRadius={"lg"}
                            mx={"4"}
                            display="flex"
                            alignItems="center"
                          >
                            {" "}
                            <Text p="2">LN</Text>
                          </Box>

                          <PopoverHeader border={"none"}>
                            <ReactSelect
                              className="basic-single"
                              classNamePrefix="select"
                              value={selectedLang}
                              styles={{
                                ...customStyles,
                                control: (provided: any) => ({
                                  ...provided,
                                  backgroundColor: "white",
                                  padding: "1px",
                                  zIndex: 11,
                                }),
                              }}
                              options={langaguesList || []}
                              onChange={(obj) => handleChangeLang(obj)}
                            />
                          </PopoverHeader>
                        </Flex>
                      </Box>
                    </PopoverBody>
                    <Divider
                      my={"1"}
                      w={"64"}
                      marginLeft={"6"}
                      borderColor={"#E6ECF1"}
                    />
                    <PopoverFooter
                      borderTop={"0px"}
                      onClick={(e) => {
                        handleSignout(e);
                        onClose();
                      }}
                      cursor={"pointer"}
                      _hover={{ backgroundColor: "skyblue.100" }}
                    >
                      <Flex>
                        <Box
                          backgroundColor={"skyblue.100"}
                          borderRadius={"lg"}
                          mx={"4"}
                        >
                          {" "}
                          <Image
                            src="/images/sign_out.svg"
                            alt="sign out "
                            padding={"2"}
                            width={"10"}
                          />
                        </Box>

                        <PopoverHeader border={"none"}>
                          {translate("sign_out_label")}
                        </PopoverHeader>
                      </Flex>
                    </PopoverFooter>
                    <Divider
                      w={"64"}
                      marginLeft={"6"}
                      my={"1"}
                      mb={"8"}
                      borderColor={"#E6ECF1"}
                    />
                  </PopoverContent>
                </Portal>
              </Popover>
            )}
          </Flex>

          {activeRouter === "/" && (
            <>
              {/* show only user in  login  */}
              <Box display={{ base: "none", md: "block" }} width="13%" mx="2">
                <ReactSelect
                  className="basic-single"
                  classNamePrefix="select"
                  value={selectedLang}
                  styles={customStyles}
                  //  isClearable
                  options={langaguesList || []}
                  onChange={(obj) => handleChangeLang(obj)}
                />
              </Box>
            </>
          )}

          {!token && activeRouter === "/" && (
            <>
              {/* show only user in not login  */}
              <Box display={{ base: "block", md: "none" }} width="13%" mx="2">
                <Popover>
                  <PopoverTrigger>
                    <Button>
                      {selectedLang?.value === "en_US"
                        ? "EN"
                        : selectedLang?.value === "gu_IN"
                        ? "GUJ"
                        : "HIN"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />

                    <PopoverBody background="white">
                      <ReactSelect
                        className="basic-single"
                        classNamePrefix="select"
                        value={selectedLang}
                        styles={customStyles}
                        options={langaguesList || []}
                        onChange={(obj) => handleChangeLang(obj)}
                      />
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
            </>
          )}
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: "Inspiration",
  //   children: [
  //     {
  //       label: "Explore Design Work ",
  //       subLabel: "Trending Design to inspire you",
  //       href: "#",
  //     },
  //     {
  //       label: "New & Noteworthy",
  //       subLabel: "Up-and-coming Designers",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "Find Work",
  //   children: [
  //     {
  //       label: "Job Board",
  //       children: [
  //         {
  //           label: "Job ankit",
  //           subLabel: "test",
  //           href: "#",
  //         },
  //       ],
  //       subLabel: "Find your dream design job",
  //       href: "#",
  //     },
  //     {
  //       label: "Freelance Projects",
  //       subLabel: "An exclusive list for contract work",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "Learn Design",
  //   href: "#",
  // },
  // {
  //   label: "Hire Designers",
  //   href: "#",
  // },
];
