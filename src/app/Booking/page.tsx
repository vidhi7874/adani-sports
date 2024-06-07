"use client";
import {
  Box,
  Center,
  Grid,
  Icon,
  Image,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Hero from "@/components/HeroSection";
// import Translation from "../../components/Translation";

import translate from "@/lib/translate";
import Translation from "@/components/Translation";


export default function BookingPage() {
  return (
    <Box>
      <Hero />

      <Box border="1px" p="8">
        <Box mx="6">
          <Tabs variant="unstyled">
            <TabList gap="6">
              <Tab
                bg="#C2C2C2"
                color="white"
                px="10"
                _selected={{ color: "white", bg: "#006DB7" }}
              >
                {translate("search_by_sport")}
              </Tab>
              <Tab
                bg="#C2C2C2"
                color="white"
                px="10"
                _selected={{ color: "white", bg: "#006DB7" }}
              >
                {translate("search_by_venue")}
               
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SearchBySport />
              </TabPanel>
              <TabPanel>
                <SearchByVenue />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

const SearchBySport = () => {
  const games = [
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
  ];
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="end">
        <Box w="25%">
          <Input
            borderColor="#D8D8D8"
            height="14"
            placeholder="Search here"
            borderRadius="0"
          />
        </Box>
      </Box>

      <Box mt="10">
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="6">
          {games.map((game, i) => (
            <Box key={i} width="100%">
              <GameCard />
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const SearchByVenue = () => {
  const games = [
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
    {
      name: "Cricket",
      img: "/images/cricket.svg",
    },
  ];
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="end">
        <Box w="25%">
          <Input
            borderColor="#D8D8D8"
            height="14"
            placeholder="Search here"
            borderRadius="0"
          />
        </Box>
      </Box>

      <Box mt="10">
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="6">
          {games.map((game, i) => (
            <Box key={i} width="100%">
              <GameCardTwo />
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const GameCard = () => {
  return (
    <Box p="4" w="100%" bg="#d6eaff">
      <Box>
        <Text fontWeight="bold">Cricket</Text>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Image src="/images/cricket.svg" alt="cricket" />
      </Box>
    </Box>
  );
};

const GameCardTwo = () => {
  return (
    <Box
      w="full"
      mb={{ base: 4, lg: 0 }}
      backgroundImage={`radial-gradient(circle, #000000c2, #00000087), url(/images/game_poster.svg)`}
      backgroundSize="cover"
      backgroundPosition="center center"
      border="1px"
      p="4"
      // display="flex"
      // justifyContent="center"
      // alignItems="center"
    >
      <Box
        display="flex"
        gap="4"
        mb="4"
        justifyContent="start"
        alignItems="center"
      >
        <Icon width="10" height="10" viewBox="0 0 26 24" color="red.500">
          <path
            d="M22.6967 9V20.993C22.6977 21.1243 22.6709 21.2545 22.6179 21.3762C22.5649 21.4979 22.4867 21.6087 22.3878 21.7022C22.2889 21.7957 22.1711 21.8701 22.0413 21.9212C21.9116 21.9723 21.7722 21.9991 21.6313 22H4.45014C4.16777 22 3.89695 21.8955 3.69719 21.7095C3.49742 21.5235 3.38505 21.2712 3.38477 21.008V2.992C3.38477 2.455 3.86435 2 4.45551 2H15.1865V8C15.1865 8.26522 15.2996 8.51957 15.5008 8.70711C15.702 8.89464 15.9749 9 16.2594 9H22.6967ZM22.6967 7H17.3323V2.003L22.6967 7ZM8.7492 7V9H11.9679V7H8.7492ZM8.7492 11V13H17.3323V11H8.7492ZM8.7492 15V17H17.3323V15H8.7492Z"
            fill="white"
          />
        </Icon>
        <Text color="white" fontSize={20} fontWeight="bold">
          Ahmedabad
        </Text>
      </Box>

      <Text
        lineHeight={10}
        mb="2"
        color="white"
        fontSize={22}
        fontWeight="bold"
      >
        Sardar patel, Motera Stedium
      </Text>

      <Text lineHeight={6} color="white">
        Sardar patel, Motera Stedium, Near Chandkheda.
      </Text>
    </Box>
  );
};
