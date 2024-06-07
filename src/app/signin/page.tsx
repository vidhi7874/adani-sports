"use client";
import SimpleCard from "@/components/SignInCard";
import { localStorageService } from "@/services/localStorge.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import { useRouter } from "next/router";

export default function SignInPage() {
  const router = useRouter();

  const checkUserLoggedinStatus = () => {
    let token = localStorageService.get("ADANI_SPORTS_LINE");

    if (token) {
      router.push("/");
    } else {
      // router.push("/signin");
    }
  };

  useEffect(() => {
    checkUserLoggedinStatus();
  }, []);

  return (
    <>
      <SimpleCard />
    </>
  );
}
