"use client";
import { useTermsandconditionsMutation } from "@/redux/features/auth/auth.slice";
import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Card,
  Checkbox,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { userRouter } from "next/navigation";
import { useRouter } from "next/navigation";

export default function TermsAndConditions() {
  const router = useRouter();
  const [termsandconditions] = useTermsandconditionsMutation();
  const [termsContent, setTermsContent] = useState(""); // State to hold terms content

  const getTermsAndConditions = async () => {
    const elementId: string = "demo";
    const element = document.getElementById(elementId);
    try {
      const res: any = await termsandconditions({}).unwrap();
      console.log(
        "Terms and Conditions response",
        res,
        "<div>" + res.result.terms[0].terms_and_condition_html + "</div>"
      );
      if (res && res.result.terms[0].terms_and_condition_html) {
        if (element !== null) {
          setTermsContent(
            "<div>" + res.result.terms[0].terms_and_condition_html + "</div>"
          );

          element.innerHTML =
            "<div>" + res.result.terms[0].terms_and_condition_html + "</div>";
        }
      }
    } catch (error) {
      console.error("Error fetching terms and conditions", error);
    }
  };

  const handleLinkClick = () => {
    router.back();
  };

  useEffect(() => {
    getTermsAndConditions();
  }, []);

  return (
    <Box mx={{ base: "2", md: "28" }} my={{ base: "2", md: "12" }}>
      <Box my={4} mt="28">
        <Breadcrumb
          spacing="10px"
          separator={<ArrowRightIcon color="gray.500" boxSize={3} />}
        >
          <BreadcrumbItem fontWeight={"bold"}>
            <BreadcrumbLink onClick={handleLinkClick}>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>Terms-and-conditions</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Flex justifyContent={{ base: "flex-start", md: "flex-start" }}>
        {/* <Heading
          color={"black.100"}
          fontSize={{ base: "2xl", md: "3xl" }}
          mt={10}
        >
          Terms & Conditions
        </Heading> */}
      </Flex>
      <Box mt={10}>
        <div id="demo">
          <div dangerouslySetInnerHTML={{ __html: termsContent }} />
        </div>
      </Box>
    </Box>
  );
}
