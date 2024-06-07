// useRouteChange.js

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentRouteSlice } from "@/redux/features/currentRouteSlice";

const useRouteChange = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleRouteChange = () => {
      console.log("window.location.pathname -->", window.location.pathname);
      dispatch(setCurrentRouteSlice(window.location.pathname));
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [dispatch]);
};

export default useRouteChange;
