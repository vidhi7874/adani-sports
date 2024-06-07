import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { cardDAta, countDownTimer } from "@/redux/features/bookingSlice";
import { useCartExpireMutation } from "@/redux/features/auth/auth.slice";
import { localStorageService } from "@/services/localStorge.service";
import { usePathname, useRouter } from "next/navigation";

export default function CountDownTimer({
  confirm_time,
  reserved_time,
  setShowTimer,
  showTimer,
}) {
  // const confirm_date_time = "2023-08-22 12:55:34";
  // const slot_reserved_time_minute = 5;
  const reducerState = useSelector((state) => state);
  const dispatch = useDispatch();
  const path = usePathname();
  const router = useRouter();

  const [cartExpire, { isLoading: cartExpireApiIsLoading }] =
    useCartExpireMutation();

  let showCountDownTimer =
    reducerState?.bookingSliceReducer?.showCountDownTimer;

  const [confirm_date_time, setConfirm_date_time] = useState(confirm_time);
  const [slot_reserved_time_minute, setSlot_reserved_time_minute] = useState(
    parseInt(reserved_time)
  );

  var countdownInterval = "";

  // Convert confirm_date_time to a JavaScript Date object
  const targetDate = new Date(confirm_date_time);

  // Calculate the end time for the countdown
  const endTime = new Date(
    targetDate.getTime() + parseInt(slot_reserved_time_minute) * 60000
  );

  // Function to calculate the time remaining for the countdown
  function getTimeRemaining() {
    const currentTime = new Date();
    const timeDifference = endTime - currentTime;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      return {
        minutes: 0,
        seconds: 0,
      };
    }

    const minutes = Math.floor(timeDifference / 60000 || 0);
    const seconds = Math.floor((timeDifference % 60000) / 1000 || 0);
    return { minutes, seconds };
  }

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining);

  const expireCartApiCall = async () => {
    let cart_details = localStorageService.get("ADANI_MY_CART_DETAILS");
    try {
      console.log("expire api calling ------->");
      const res = await cartExpire(cart_details?.order_id).unwrap();
      if (res.result?.statusCode === 200) {
        console.log("use path name hook --> ", path);
        localStorageService.set("ADANI_MY_CART_DETAILS", {
          order_id: res?.result?.order_id,
          isFreshLogin: false,
        });
        dispatch(
          cardDAta({
            booking_lines: [],
            isFreshLogin: false,
            order_id: res?.result?.order_id,
          })
        );

        if (path === "/booking-cart") {
          router.push("/");
        }

        dispatch(countDownTimer(false));
      }
    } catch (err) {
      console.log("expire api calling -------> err", err);
      console.log(err);
    }
  };

  useEffect(() => {
    setConfirm_date_time(confirm_time);
    setSlot_reserved_time_minute(reserved_time);
  }, []);

  useEffect(() => {
    if (timeRemaining.minutes == 0 && timeRemaining.seconds == 0) {
      expireCartApiCall();
    }
  }, [timeRemaining]);

  useEffect(() => {
    // if (timeRemaining.minutes !== 0 && timeRemaining.seconds !== 0) {
    if (reducerState?.bookingSliceReducer?.showCountDownTimer) {
      if (timeRemaining.minutes === 0 && timeRemaining.seconds === 0) {
        console.log("dfd");
        dispatch(countDownTimer(false));
      } else {
        countdownInterval = setInterval(() => {
          const newTimeRemaining = getTimeRemaining();
          console.log("start countdown timer useEffect", newTimeRemaining);
          setTimeRemaining(newTimeRemaining);
        }, 1000);
      }
    }
    //}
    // else {
    //   setShowTimer(false);
    // }

    return () => {
      clearInterval(countdownInterval);
      dispatch(countDownTimer(false));
    };
  }, []);

  return (
    reducerState?.bookingSliceReducer?.showCountDownTimer && (
      <Box border="1px" maxW={200} minW={100}>
        <Text fontSize="2xl" color="#006db7" textAlign="center">
          {timeRemaining.minutes < 10
            ? `0${timeRemaining.minutes}`
            : timeRemaining.minutes}
          {" : "}
          {timeRemaining.seconds < 10
            ? `0${timeRemaining.seconds}`
            : timeRemaining.seconds}
        </Text>
      </Box>
    )
  );
}

// const minuteSeconds = 60;
// const hourSeconds = 3600;
// const daySeconds = 86400;

// const timerProps = {
//   isPlaying: true,
//   size: 120,
//   strokeWidth: 6,
// };

// const renderTime = (time) => {
//   return (
//     <Box className="d" border="1px">
//       <Box className="time_e">{time}</Box>
//     </Box>
//   );
// };

// const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
// const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
// const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
// const getTimeDays = (time) => (time / daySeconds) | 0;

// export default function CountDownTimer({ confirm_time, reserved_time }) {
//   const [confirm_date_time, setConfirm_date_time] = useState(null);
//   const [slot_reserved_time, setSlot_reserved_time] = useState(null);
//   const [timeRemaining, setTimeRemaining] = useState(0);

//   useEffect(() => {
//     // Simulate API call to fetch confirm_date_time and slot_reserved_time
//     // Replace this with your actual API call

//     setConfirm_date_time(new Date(confirm_time).getTime());
//     setSlot_reserved_time(5) ;
//     // setSlot_reserved_time(parseInt(reserved_time));
//   }, []);

//   useEffect(() => {
//     if (confirm_date_time) {
//       const startTime = Date.now() / 1000; // Current UNIX timestamp in seconds
//       const endTime = confirm_date_time / 1000 + slot_reserved_time * 60;

//       const remainingTime = endTime - startTime;
//       console.log("remainingTime  --> ", remainingTime)
//       setTimeRemaining(remainingTime);
//     }
//   }, [confirm_date_time, slot_reserved_time]);

//   const size = 40;
//   return (
//     <Box display="flex">
//       <CountdownCircleTimer
//         {...timerProps}
//         colors="#218380"
//         size={size}
//         duration={hourSeconds}
//         strokeLinecap="square"
//         strokeWidth={6}
//         initialRemainingTime={timeRemaining % hourSeconds}
//         onComplete={(totalElapsedTime) => ({
//           shouldRepeat: timeRemaining - totalElapsedTime > minuteSeconds,
//         })}
//       >
//         {({ elapsedTime, color }) => (
//           <span style={{ color }}>
//             {renderTime(getTimeHours(hourSeconds - elapsedTime))}
//           </span>
//         )}
//       </CountdownCircleTimer>
//       <CountdownCircleTimer
//         {...timerProps}
//         colors="#FF4500"
//         size={size}
//         duration={minuteSeconds}
//         strokeLinecap="square"
//         strokeWidth={6}
//         initialRemainingTime={timeRemaining % minuteSeconds}
//         onComplete={(totalElapsedTime) => ({
//           shouldRepeat: timeRemaining - totalElapsedTime > 0,
//         })}
//       >
//         {({ elapsedTime, color }) => (
//           <span style={{ color }}>
//             {renderTime(getTimeSeconds(minuteSeconds - elapsedTime))}
//           </span>
//         )}
//       </CountdownCircleTimer>
//     </Box>
//   );
// }

// export default function CountDownTimer() {
//   const [confirm_date_time, setConfirm_date_time] = useState(
//     new Date("2023-08-22T11:39:15").getTime()
//   );
//   const [slot_reserved_time, setSlot_reserved_time] = useState(5);
//   const [timeRemaining, setTimeRemaining] = useState(slot_reserved_time * 60);

//   useEffect(() => {
//     const countDownInterval = setInterval(() => {
//       const currentTime = new Date().getTime();
//       const remainingTime = Math.max(
//         0,
//         Math.floor((confirm_date_time - currentTime) / 1000)
//       );

//       setTimeRemaining(remainingTime);

//       if (remainingTime === 0) {
//         clearInterval(countDownInterval);
//         // Perform any action when the countdown reaches zero
//       }
//     }, 1000);

//     return () => {
//       clearInterval(countDownInterval);
//     };
//   }, [confirm_date_time]);

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const formattedMinutes = String(minutes).padStart(2, "0");
//     const formattedSeconds = String(seconds % 60).padStart(2, "0");
//     return `${formattedMinutes} : ${formattedSeconds}`;
//   };

//   return (
//     <Box>
//       <Text fontSize="2xl">{formatTime(timeRemaining)}</Text>
//     </Box>
//   );
// }
