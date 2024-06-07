import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import Translation from "../components/Translation";
import translate from "@/lib/translate";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  const router = useRouter();
  const handleLinkClick = () => {
    router.push("/terms-and-conditions");
  };
  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <Flex direction={"column"} bottom={"auto"}>
      <Box border={"1px solid"} borderColor={"lightgray"}>
        <Flex justifyContent="center" alignItems="center">
          {" "}
          {/* Add your URL here */}
          <Image
            src="/images/logo.svg"
            alt="logo"
            px={{ base: "8", md: "0" }}
            //w={{ base: "100%", md: "50%", lg: "50%" }}
            my={"4"}
            onClick={handleHomeClick}
          />
        </Flex>
      </Box>
      <Box backgroundColor={"darkgray.100"}>
        <Flex
          justifyContent={"space-around"}
          direction={{ base: "column", md: "row" }}
        >
          {/* <Box>
            <Text
              color={"white"}
              fontWeight={"medium"}
              fontSize={{ base: "xs", lg: "sm" }}
              py={"2"}
              textAlign={"center"}
            >
              © {translate("footer_adani_group")}
            </Text>
          </Box> */}
          <Box px={{ base: "1", md: "8" }}>
            <Flex justifyContent={"center"}>
              {/* <Text
                color={"white"}
                textAlign={"center"}
                fontWeight={"medium"}
                fontSize={{ base: "xs", lg: "sm" }}
                py={"2"}
              >
                {translate("legal_disclaminer_label")}
              </Text> */}
              {/* <Center>
                <Divider orientation="vertical" mx={"2"} height="4" />
              </Center> */}
              <Text
                color={"white"}
                fontWeight={"medium"}
                fontSize={{ base: "xs", lg: "sm" }}
                py={"2"}
                textAlign={"center"}
                cursor="pointer"
              >
                © {translate("footer_adani_group")}
              </Text>
              <Center>
                <Divider orientation="vertical" mx={"2"} height="4" />
              </Center>

              <Text
                color={"white"}
                fontWeight={"medium"}
                fontSize={{ base: "xs", lg: "sm" }}
                cursor="pointer"
                py={"2"}
                textAlign={"center"}
              >
                <a onClick={handleLinkClick}>
                  {translate("terms_and_condition_lable")}
                </a>
              </Text>
              <Center>
                <Divider orientation="vertical" mx={"2"} height="4" />
              </Center>
              <Text
                color={"white"}
                textAlign={"center"}
                fontWeight={"medium"}
                fontSize={{ base: "xs", lg: "sm" }}
                cursor="pointer"
                py={"2"}
              >
                <a onClick={() => router.push("/privacy-policy")}>
                  {translate("privacy_policy_label")}
                </a>
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

// <Box
//   bg={useColorModeValue("gray.50", "gray.900")}
//   color={useColorModeValue("gray.700", "gray.200")}
// >
//   <Container
//     as={Stack}
//     maxW={"6xl"}
//     py={4}
//     direction={{ base: "column", md: "row" }}
//     spacing={4}
//     justify={{ base: "center", md: "space-between" }}
//     align={{ base: "center", md: "center" }}
//   >
//     <Text>© 2023 Adani sport line. All rights reserved</Text>
//     <Stack direction={"row"} spacing={6}>
//       <SocialButton label={"Twitter"} href={"#"}>
//         <FaTwitter />
//       </SocialButton>
//       <SocialButton label={"YouTube"} href={"#"}>
//         <FaYoutube />
//       </SocialButton>
//       <SocialButton label={"Instagram"} href={"#"}>
//         <FaInstagram />
//       </SocialButton>
//     </Stack>
//   </Container>
// </Box>
