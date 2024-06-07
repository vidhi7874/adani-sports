"use client";
import React from "react";
import { Box, Spinner } from "@chakra-ui/react";
//
const Loader = () => {
  return (
    <Box textAlign="center" p="2">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export default Loader;
