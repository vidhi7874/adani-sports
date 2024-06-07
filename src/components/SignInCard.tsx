"use client";

import { FormEvent, ChangeEvent, useState, useEffect, useRef } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  Box,
  Image,
  FormLabel,
  FormErrorMessage,
  PinInput,
  PinInputField,
  HStack,
  Center,
  RadioGroup,
  Radio,
  Checkbox,
} from "@chakra-ui/react";

import translate from "@/lib/translate";

import { CheckIcon } from "@chakra-ui/icons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  useGetTitleMutation,
  useLoginMutation,
  useResendOTPMutation,
  useSignupMutation,
  useVerifyOtpMutation,
} from "@/redux/features/auth/auth.slice";
import toast from "react-hot-toast";
import { localStorageService } from "@/services/localStorge.service";
import { useRouter } from "next/navigation";

import { useSelector, useDispatch } from "react-redux";
import { isNowLogin } from "@/redux/features/checkAuthUserSlice";
import Select from "react-select";
import { cardDAta } from "@/redux/features/bookingSlice";
import Loader from "./Loader";

const phoneRegExp = /^\d{1,10}$/;
interface FormData {
  digit1: string;
  digit2: string;
  digit3: string;
  digit4: string;
}

const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required(translate("phone_number_is_required"))
    .min(10, translate("Phone number must be exactly 10 digits"))
    .max(10, translate("Phone number must be exactly 10 digits"))
    .matches(
      /^[6-9]\d{9}$/,
      translate("Phone number should be start with (6,7,8,9) digit")
    ),
});

const pinSchema = yup.object().shape({
  digit1: yup
    .string()
    .length(1, "Please enter a valid one-digit number")
    .required("Required"),
  digit2: yup
    .string()
    .length(1, "Please enter a valid one-digit number")
    .required("Required"),
  digit3: yup
    .string()
    .length(1, "Please enter a valid one-digit number")
    .required("Required"),
  digit4: yup
    .string()
    .length(1, "Please enter a valid one-digit number")
    .required("Required"),
});

const signUp_schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .trim()
    .required(translate("phone_number_is_required")),
  //email: yup.string().email("Invalid email address"),

  firstName: yup
    .string()
    .trim()
    .required(translate("first_name_required"))
    .matches(
      /^[A-Za-z]+$/,
      translate("first_name_must_only_contain_alph_label")
    ),
  lastName: yup
    .string()
    .trim()
    .required(translate("last_name_required_label"))
    .matches(/^[A-Za-z]+$/, translate("last_name_alpha_char_label")),
  title: yup.string().required(translate("title_required_label")),
  email: yup
    .string()
    .email(translate("valid_email_required"))
    .required(translate("email_required_label")),

  agreeToTerms: yup
    .boolean()
    .oneOf([true], translate("you_must_agree_to_the_terms_label")),
});

interface SportsProps {
  // Add other props here if needed
}
interface SportsState {
  mobile_num: string;
  signIn: boolean;
  otp_cmp: boolean;
  sign_up: boolean;
  // email: string;
}

const Sports: React.FC<SportsProps> = () => {
  const [email, setEmail] = useState<string>("");

  const reducerState = useSelector((state: any) => state);

  console.log(reducerState.checkAuthUserReducer);

  const [state, setState] = useState<SportsState>({
    mobile_num: "",
    signIn: true,
    otp_cmp: false,
    sign_up: false,
  });

  const [error, setError] = useState<boolean>(false);

  return (
    <Box
      // maxW={"lg"}
      bg={useColorModeValue("white", "whiteAlpha.100")}
      p={4}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        mt={10}
        minHeight="calc(100vh - 150px)"
      >
        <Box w="50%" display={{ base: "none", md: "block" }}>
          <Box boxSize={{ base: "sm", lg: "lg", xl: "2xl" }}>
            <Image src="/images/login.svg" alt="Dan Abramov" />
          </Box>
        </Box>

        <Box
          w={{ base: "100%", md: "50%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {state.signIn && <SignIn setState={setState} />}
          {state.otp_cmp && <Otp state={state} setState={setState} />}
          {state.sign_up && <SignUp state={state} setState={setState} />}
        </Box>
      </Box>
    </Box>
  );
};

export default Sports;
interface SignInResponse {
  result?: {
    statusCode: number;
    message: string;
    // Other properties if there are any
  };
  // Other properties if there are any
}
const SignIn = ({ setState }: any) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [login, { isLoading: loginApiIsLoading }] = useLoginMutation();

  const onSubmit = (data: any) => {
    // Handle your form submission here
    console.log(data);
    const credentials: any = {
      country_code: "+91",
      mobile_no: data.phoneNumber,
    };

    setState((prev: any) => ({
      ...prev,
      mobile_num: data.phoneNumber,
    }));
    sendOtp(credentials);
  };

  const sendOtp = async (obj: any) => {
    // setState((prev: any) => ({
    //   ...prev,
    //   signIn: false,
    //   otp_cmp: true,
    // }));
    try {
      const res = (await login(obj).unwrap()) as SignInResponse;

      // Handle the successful response (res) here
      console.log("Login successful:", res);
      if (res?.result?.statusCode === 200) {
        setState((prev: any) => ({
          ...prev,
          signIn: false,
          otp_cmp: true,
        }));
        toast.success(<div>{translate("otp_send_successfully_label")}</div>);
      }
    } catch (error) {
      // Handle errors, if any
      console.error("Login error:", error);
    }
  };

  return (
    <Box
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      height={330}
      w="80%"
    >
      <Heading
        as={"h2"}
        fontSize={{ base: "xl", md: "2xl", xl: "3xl" }}
        textAlign={"center"}
        p="8"
      >
        {translate("signin_signup_label")}
      </Heading>
      <Box p="6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.phoneNumber}>
            <FormLabel htmlFor="phoneNumber">
              {translate("phone_number_label")}
            </FormLabel>

            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  borderColor="#D8D8D8"
                  height="14"
                  type="number"
                  placeholder={translate("enter_your_phone_number_label")}
                  borderRadius="0"
                />
              )}
            />

            <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt="6" w={{ base: "100%" }}>
            <Button
              colorScheme={"blue"}
              isLoading={loginApiIsLoading}
              w="100%"
              type="submit"
            >
              {translate("send_otp_label")}
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};
interface PinInputRefType {
  reset: () => void;
  // Other methods or properties if applicable
}
interface OtpResponse {
  result?: {
    statusCode: number;
    message: string;
    // Other properties if there are any
  };
  // Other properties if there are any
}
const Otp = ({ state, setState }: any) => {
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(pinSchema),
  });

  const countDownTimerSeconds = 30;
  const [hideOtpBox, setHideOtpBox] = useState(false);
  const [seconds, setSeconds] = useState(countDownTimerSeconds);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const reducerState = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(reducerState);

  const router = useRouter();
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const [login, { isLoading: loginApiIsLoading }] = useLoginMutation();
  const [resendOTP, { isLoading: resendOTPApiIsLoading }] =
    useResendOTPMutation();

  const pinInputRef = useRef<PinInputRefType | null>(null);

  const resendOtp = () => {
    setHideOtpBox(true);
    const obj: any = {
      country_code: "+91",
      mobile_no: state.mobile_num,
    };

    sendOtp(obj);
  };

  const sendOtp = async (obj: any) => {
    try {
      //  setHideOtpBox(true);
      const res = (await resendOTP(obj).unwrap()) as OtpResponse;
      //let statusCode = ;
      setHideOtpBox(false);
      console.log("Login successful:", res);
      if (res?.result?.statusCode === 200) {
        toast.success(<div>{translate("otp_resend_successfully_label")}</div>);
        setValue("digit1", "", {
          shouldValidate: false,
        });
        setValue("digit2", "", {
          shouldValidate: false,
        });
        setValue("digit3", "", {
          shouldValidate: false,
        });
        setValue("digit4", "", {
          shouldValidate: false,
        });
        clearErrors(["digit1", "digit2", "digit3", "digit4"]);
      }
    } catch (error) {
      // Handle errors, if any
      console.error("Login error:", error);
    }
  };

  const onSubmit = async (data: FormData) => {
    // Do something with the pin data, e.g., submit to server or validate against some saved pin
    console.log(data);
    interface DataObject {
      country_code: string;
      mobile_no: string; // Assuming mobile_no is a string
      otp: string; // Assuming otp is a string
    }

    interface Profile {
      title?: any;
      first_name?: any;
      last_name?: any;
      mobile?: any;
    }

    interface Result {
      api_token: any;
      statusCode: any;
      message: any;
      profile?: Profile;
      order_id?: any;
    }

    interface ApiResponse {
      result?: Result;
      // Other properties in the response if there are any
    }

    let otp = [data.digit1, data.digit2, data.digit3, data.digit4];

    let obj: DataObject = {
      country_code: "+91",
      mobile_no: state.mobile_num,
      otp: otp.join(""),
    };

    // interface ApiResponse {
    //   result?: {
    //     api_token: any;
    //     statusCode: any;
    //     message: any;
    //   };
    //   // Other properties in the response if there are any
    // }

    try {
      let res = (await verifyOtp(obj).unwrap()) as ApiResponse;

      // Handle the successful response (res) here
      console.log("verifyOtp successful:", res);
      let statusCode = res?.result?.statusCode;

      if (statusCode === 200) {
        const token = res?.result?.api_token;
        if (token) {
          let user_details_obj: any = {
            // name: data.fullName,
            mobile_no: res?.result?.profile?.mobile,
            // email: data.email,
            title: res?.result?.profile?.title?.[1],
            first_name: res?.result?.profile?.first_name,
            last_name: res?.result?.profile?.last_name,
          };
          dispatch(isNowLogin(true));
          localStorageService.set("ADANI_SPORTS_LINE", token);
          localStorageService.set(
            "ADANI_SPORTS_LINE_USER_DETAILS",
            user_details_obj
          );
          localStorageService.set("ADANI_MY_CART_DETAILS", {
            order_id: res?.result?.order_id || "",
            isFreshLogin: false,
            isCallAddToCart: true,
          });
          router.push("/");
        } else {
          setState((prev: any) => ({
            ...prev,
            signIn: false,
            otp_cmp: false,
            sign_up: true,
          }));
        }
      } else {
        if (res?.result?.message === "Invalid OTP") {
          toast.error(translate("invalid otp"));
        } else {
          toast.error(res?.result?.message);
        }
        setError("digit1", {
          type: "400",
        });
        setError("digit2", {
          type: "400",
        });
        setError("digit3", {
          type: "400",
        });
        setError("digit4", {
          type: "400",
        });
      }
    } catch (error) {
      // Handle errors, if any
      console.error("Login error:", error);
    }
  };

  // Function to start the timer
  const startTimer = () => {
    setIsTimerActive(true);
    setSeconds(countDownTimerSeconds);
  };

  // Function to handle timer expiration
  const handleTimerExpiration = () => {
    setIsTimerActive(false);
    // Perform your action when the timer expires (e.g., show "Resend OTP" button)
    console.log('OTP expired, show "Resend OTP" button');
  };

  useEffect(() => {
    let countdown: any;

    if (isTimerActive) {
      countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          clearInterval(countdown);
          handleTimerExpiration();
        }
      }, 1000);
    } else {
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [isTimerActive, seconds]);

  // Start the countdown for 30 seconds
  // countdown(30);

  console.log("errors", errors);
  // var timeLeft = 30;

  // var timerId = setInterval(countdown, 1000);
  // const countdown = () => {
  //   if (timeLeft == 0) {
  //     clearTimeout(timerId);
  //     doSomething();
  //   } else {
  //     elem.innerHTML = timeLeft + " seconds remaining";
  //     timeLeft--;
  //   }
  // }

  return (
    <Box
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      height={{ base: 310, sm: 310, md: 370 }}
      w={{ base: "100%", sm: "80%" }}
    >
      <Flex direction={"column"} alignItems={"center"} my={"2"}>
        <Heading py="3">{translate("otp_verification_label")}</Heading>
        <Text>
          {translate("otp_shared_on_label")} {`+91 ${state.mobile_num}`}
        </Text>

        {hideOtpBox && (
          <Box my="4">
            <Loader />
          </Box>
        )}
        {hideOtpBox === false && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <HStack
              spacing="10px"
              my="5"
              ml={{ base: "30px", md: "30px", lg: "0px" }}
            >
              <FormControl isInvalid={!!errors.digit1}>
                <PinInput
                  otp
                  //size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
                >
                  <Controller
                    name="digit1"
                    control={control}
                    // defaultValue=""
                    render={({ field }) => (
                      <PinInputField
                        h={{ base: "10", lg: "14", xl: 20 }}
                        w={{ base: "10", lg: "14", xl: 20 }}
                        mx={{ base: 1, lg: 5 }}
                        border="1px"
                        borderColor={errors.digit1 ? "red" : "#858585"}
                        _focus={{
                          border: "1px",
                          borderColor: "green",
                        }}
                        textAlign="center"
                        fontSize={18}
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="digit2"
                    control={control}
                    // defaultValue=""
                    render={({ field }) => (
                      <PinInputField
                        h={{ base: "10", lg: "14", xl: 20 }}
                        w={{ base: "10", lg: "14", xl: 20 }}
                        mx={{ base: 1, lg: 5 }}
                        border="1px"
                        borderColor={errors.digit1 ? "red" : "#858585"}
                        textAlign="center"
                        fontSize={18}
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="digit3"
                    control={control}
                    //  defaultValue=""
                    render={({ field }) => (
                      <PinInputField
                        h={{ base: "10", lg: "14", xl: 20 }}
                        w={{ base: "10", lg: "14", xl: 20 }}
                        mx={{ base: 1, lg: 5 }}
                        border="1px"
                        borderColor={errors.digit1 ? "red" : "#858585"}
                        textAlign="center"
                        fontSize={18}
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="digit4"
                    control={control}
                    //  defaultValue=""
                    render={({ field }) => (
                      <PinInputField
                        h={{ base: "10", lg: "14", xl: 20 }}
                        w={{ base: "10", lg: "14", xl: 20 }}
                        mx={{ base: 1, lg: 5 }}
                        border="1px"
                        borderColor={errors.digit1 ? "red" : "#858585"}
                        textAlign="center"
                        fontSize={18}
                        {...field}
                      />
                    )}
                  />
                </PinInput>
              </FormControl>
            </HStack>

            <Box my={"3"} textAlign="center">
              <div>
                {isTimerActive ? (
                  // <Text color="red">OTP Timer: {seconds} seconds</Text>
                  <Box my={"5"}>
                    {/* {translate("No OTP receive : ")} */}

                    <Text
                      fontWeight={"bold"}
                      as="span"
                      //  onClick={() => resendOtp()}
                      mx="1"
                    >
                      {`${translate("time_remaining")} ${seconds} ${translate(
                        "seconds"
                      )} `}
                    </Text>
                  </Box>
                ) : (
                  <Box
                    my={"5"}
                    px={"10px"}
                    display={{ base: "column", lg: "flex" }}
                    gap="4"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text>{translate("no_otp_received_label")}</Text>

                    <Text
                      fontWeight={"bold"}
                      as="span"
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        startTimer();
                        resendOtp();
                      }}
                      mx="1"
                    >
                      {translate("resend_opt_label")}
                    </Text>
                  </Box>
                )}
              </div>

              <Button
                bgGradient="linear(to-l, #0C82EE, #00B16B)"
                type="submit"
                w="full"
                color="white"
                isLoading={isLoading || loginApiIsLoading}
                borderRadius="0"
                p="6"
                _hover={{}}
              >
                {translate("otp_verification_button_label")}
              </Button>
            </Box>
          </form>
        )}
      </Flex>
    </Box>
  );
};
interface SignupResponse {
  result?: {
    statusCode?: number;
    message?: string;
    api_token?: string;
    order_id?: any;
    // Other properties if there are any
  };
  // Other properties if there are any FDDF
}

const SignUp = ({ setState, state }: any) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUp_schema) });

  const router = useRouter();
  const dispatch = useDispatch();
  const [getTitle] = useGetTitleMutation();
  const [signup, { isLoading }] = useSignupMutation();
  const reducer_State = useSelector((state: any) => state);
  const [titleState, setTitleState] = useState({
    selectedTitle: {},
  });

  //for radiobutton
  const [Radiovalue, setRadioValue] = useState("Mr.");
  const [activeCheckbox, setActiveCheckbox] = useState(false);

  const [titleOption, setTitleOption] = useState<
    { value: any; label: string }[]
  >([]);
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      // borderColor: "#7E7E7E",
      borderRadius: "0",
      padding: "9px",
      borderColor: state.selectProps?.errors ? "red" : "#D8D8D8",
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

  const onSubmit = async (data: any) => {
    // Handle form submission here

    console.log(data);
    let obj: any = {
      // name: data.fullName,
      mobile_no: data.phoneNumber,
      email: data.email,

      title: data.title,
      first_name: data.firstName,
      last_name: data.lastName,
    };

    console.log(obj);

    try {
      const res: any = (await signup(obj).unwrap()) as SignupResponse;
      // Handle the successful response (res) here
      // let statusCode = ;
      console.log("Login successful:", res);

      if (res?.result?.statusCode === 200) {
        const token: any = res?.result?.api_token;
        if (token) {
          console.log("1******");
          dispatch(isNowLogin(true));
          localStorageService.set("ADANI_SPORTS_LINE", token);
          localStorageService.set("ADANI_SPORTS_LINE_USER_DETAILS", obj);
          localStorageService.set("ADANI_MY_CART_DETAILS", {
            order_id: res?.result?.order_id || "",
            isCallAddToCart: true,
            isFreshLogin: false,
          });

          const isFreshLogin =
            reducer_State?.bookingSliceReducer?.cartData?.isFreshLogin;
          console.log("isFreshLogin ---> ", isFreshLogin);
          if (isFreshLogin) {
            // alert("22222");
            router.push("/booking-now");
          }
          if (!isFreshLogin) {
            router.push("/");
          }
        } else {
          setState((prev: any) => ({
            ...prev,
            signIn: false,
            otp_cmp: false,
            sign_up: true,
          }));
        }
        toast.success(translate("profile_created_successfully_label"));
        // router.push("/");
      } else if (res?.result?.statusCode === 400) {
        toast.error(res?.result?.message);
      } else {
        toast.error(translate("internal_server_label"));
      }
    } catch (error) {
      // Handle errors, if any
      console.error("Login error:", error);
    }
  };

  const getTitleList = async () => {
    try {
      const response = await getTitle({}).unwrap();
      console.log("response ", response);

      let transformedOptions: { value: any; label: string }[] = [];

      if (response.result.statusCode === 200) {
        transformedOptions = response.result.title.map((title: any) => ({
          value: title.id,
          label: title.name,
        }));
      }

      setTitleOption(transformedOptions);
    } catch (error) {
      console.error("Error fetching title list:", error);
    }
  };

  const titleOnchange = (obj: any) => {
    setValue("title", obj?.label, {
      shouldValidate: true,
    });
    setTitleState((prev) => ({ ...prev, selectedTitle: obj }));
    // getStateList(obj?.value);
  };

  useEffect(() => {
    getTitleList();
    setValue("phoneNumber", state.mobile_num, {
      shouldValidate: true,
    });
  }, []);

  const handleLinkClick = () => {
    router.push("/terms-and-conditions");
  };

  return (
    <Box
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      w="85%"
    >
      <Heading
        as={"h2"}
        fontSize={{ base: "xl", md: "2xl", xl: "4xl" }}
        textAlign={"center"}
        pt="8"
      >
        {translate("Create Your Profile")}
      </Heading>
      <Box p="6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* //@ts-ignore */}

          <Flex gap="6" flexDirection={{ base: "column", lg: "row" }}>
            <FormControl flex="1" mr="3" isInvalid={!!errors.title}>
              <FormLabel>
                {translate("title_label_prefix")}{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </FormLabel>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={titleOption}
                    value={state.selectedTitle}
                    isSearchable
                    placeholder={translate("placeholder_title_label")}
                    onChange={(e) => titleOnchange(e)}
                    styles={customStyles}
                  />
                )}
              />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>
            <FormControl flex="2" mr="3" isInvalid={!!errors.firstName}>
              <FormLabel htmlFor="firstName">
                {translate("firstname_label")}{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </FormLabel>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    height="14"
                    borderColor="#D8D8D8"
                    borderRadius="0"
                  />
                )}
              />
              <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl flex="2" isInvalid={!!errors.lastName}>
              <FormLabel htmlFor="lastName">
                {translate("lastname_label")}{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </FormLabel>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    height="14"
                    borderColor="#D8D8D8"
                    borderRadius="0"
                  />
                )}
              />
              <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl mt="6" isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">
              {translate("enter_your_email_label")}{" "}
              <Text as="span" color="red">
                *
              </Text>
            </FormLabel>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  height="14"
                  borderColor="#D8D8D8"
                  borderRadius="0"
                />
              )}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt="6" isInvalid={!!errors.phoneNumber}>
            <FormLabel htmlFor="phoneNumber">
              {translate("enter_your_mobile_no_label")}{" "}
              <Text as="span" color="red">
                *
              </Text>
            </FormLabel>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  disabled
                  borderColor="#D8D8D8"
                  height="14"
                  borderRadius="0"
                />
              )}
            />
            {/* <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage> */}
          </FormControl>

          <Box py="4">
            {/* <Checkbox
              defaultChecked={false}
              color={"gray.300"}
              size={"md"}
              borderColor={"#0C82EE"}
              onChange={(e) => setActiveCheckbox(e.target.checked)}
            >
              I have read and agree to the{" "}
              <span style={{ color: "#0C82EE" }}> Terms & Conditions</span>{" "}
            </Checkbox> */}
            <Checkbox
              colorScheme="CheckBoxPrimary"
              borderColor="#0C82EE"
              onChange={(e) => setActiveCheckbox(e.target.checked)}
            >
              <Text>
                <Text as="span" color="secondary.100">
                  {translate("i_have_read_and_agree_label")}
                </Text>{" "}
                <Text fontWeight={"bold"} as="span" color="third.100">
                  <a onClick={handleLinkClick}>
                    {translate("terms_and_condition_label")}
                  </a>
                </Text>
              </Text>
            </Checkbox>
          </Box>

          <FormControl mt="6" w={{ base: "100%" }}>
            <Button
              bgGradient="linear(to-l, #0C82EE, #00B16B)"
              type="submit"
              w="full"
              color="white"
              isLoading={isLoading}
              borderRadius="0"
              p="8"
              _hover={{}}
              isDisabled={!activeCheckbox}
            >
              {translate("submit_label")}
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};
