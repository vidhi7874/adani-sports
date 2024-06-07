import React from "react";
import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Flex,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import Translation from "../components/Translation";
import translate from "@/lib/translate";
import { useEffect, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import Image from "next/image";

// Settings for the slider
const settings = {
  // dots: true,
  // arrows: false,
  // fade: true,
  // infinite: true,
  // autoplay: true,
  // speed: 500,
  // autoplaySpeed: 5000,
  // slidesToShow: 1,
  // slidesToScroll: 1,

  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

export default function Hero() {
  // const cards = ["/images/header_image_1.jpg", "/images/header_image_2.jpg"];
  const cards = [
    "/images/header_image_slider_1.png",
    "/images/header_image_slider_2.png",
  ];
  const ImageSlider = () => {
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: "90%", md: "50%" });
    const side = useBreakpointValue({ base: "30%", md: "10px" });

    // These are the images used in the slide
    const cards = [
      "/images/header_image_slider_1.png",
      "/images/header_image_slider_2.png",
    ];

    return (
      <Box
        //  position={"relative"}
        //height={"100vh"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <Box display={{ base: "none", md: "block" }}>
          <IconButton
            aria-label="left-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            <BiLeftArrowAlt />
          </IconButton>
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <IconButton
            aria-label="right-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <BiRightArrowAlt />
          </IconButton>
        </Box>

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((path: string, index: any) => (
            <Image
              src={path}
              alt={`Slide ${index}`}
              layout="responsive" // Ensure responsive sizing
              width={800} // Adjust width as needed
              height={1000} // Adjust height as needed
              placeholder="blur" // Use blur as placeholder
              blurDataURL={
                "https://avatars.mds.yandex.net/i?id=e9c2a874277afd212e896e308b3fe1ead7efa5da-9137926-images-thumbs&n=13"
              }
            />
          ))}
        </Slider>
      </Box>
    );
  };

  return (
    <>
      {/* <Box
        backgroundImage={`url(/images/herosec_en_us.jpeg)`}
       display="flex"
         justifyContent="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        alignItems="center"
        backgroundSize="100vw auto"
        width="100vw"
        height={{ base: 250, sm: 500 }}
      >
       
      </Box>  */}
      <Box
        position={"relative"}
        // height={"100vh"}
        width={"full"}
        overflow={"hidden"}
        mt={{ base: "16%", sm: "8%", md: "3%" }}
      >
        <Box
          width="100%"
          //height={{ base: "100vh", sm: "100vh" }}
        >
          <ImageSlider />
          {/* <ImgSlider images={cards} /> */}
        </Box>
      </Box>
    </>
  );
}

const ImgSlider_demo = ({ images }: any) => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   adaptiveHeight: true, // Automatically adjust slide height to content
  // };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image: any, index: any) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Slide ${index}`}
              layout="responsive" // Ensure responsive sizing
              width={800} // Adjust width as needed
              height={600} // Adjust height as needed
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
