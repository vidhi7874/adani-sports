import { useState, useEffect } from "react";
import { localStorageService } from "../services/localStorge.service";

export default function useAuthState() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoggedInStatus = () => {
    const loggedInStatus = localStorageService.get("ADANI_SPORTS_LINE");
    console.log("loggedInStatus --> ", loggedInStatus);
    setIsLoggedIn(loggedInStatus !== null);
  };

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  useEffect(() => {
    // Attach a storage event listener to react to changes in localStorage
    const handleStorageChange = () => {
      checkLoggedInStatus();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return isLoggedIn;
}
