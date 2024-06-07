"use client";

import {
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();
  const handleLinkClick = () => {
    router.back();
  };

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
            <BreadcrumbLink>Privacy-policy</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box>
        <div>
          <Box>
            <Text as="h1" fontSize="2xl">
              PRIVACY POLICY
            </Text>
          </Box>

          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>Welcome to </span>
            <span
              style={{
                fontFamily: '"Adani Regular"',
              }}
            >
              Adani Sportsline Private Limited
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              policy (“Privacy Policy”, “Policy” or Privacy Notice).
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                fontFamily: '"Adani Regular"',
              }}
            >
              Adani Sportsline Private Limited
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              and its affiliates (collectively, “
            </span>
            <strong>
              <span
                style={{
                  fontFamily: '"Adani Regular"',
                }}
              >
                Adani Sportsline
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              ”, “we” or “us” or “our”) are engaged in the business of{" "}
            </span>
            <span
              style={{
                fontFamily: '"Adani Regular"',
              }}
            >
              sports academy &amp; franchise sports
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              . This Policy outlines our practices in relation to the
              collection, storage, usage, processing, and disclosure of personal
              data that you have consented to share with us when you access,
              use, or otherwise interact with our website available at{" "}
            </span>
            <span
              style={{
                fontFamily: '"Adani Regular"',
              }}
            >
              https://adanisportsline.com/
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              (collectively, “Platform”) or avail products or services that
              Adani Sportsline offers you on or through the Platform
              (collectively, the “Services”).
            </span>
          </p>
          {/* ----------------------1------------------------- */}
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              In this Policy, the services offered to you through the Platform
              are referred to as{" "}
            </span>
            <span
              style={{
                fontFamily: '"Adani Regular"',
              }}
            >
              “Sports services”. At Adani Sportsline,
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              we are committed to protecting your personal data and respecting
              your privacy. To provide you with services, we have to collect and
              otherwise process certain data about you. This Policy explains how
              we process and use personal data about you. Please note that
              unless specifically defined in this Policy, capitalized terms
              shall have the same meaning ascribed to them in our Terms and
              Conditions, available at{" "}
            </span>
            <span
              style={{
                fontFamily: '"Adani Regular"',
              }}
            >
              https://adanisportsline.com (“Terms”).
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}> </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              We do collect your personal information and process your personal
              data in accordance with the IT Act, 2000 (21 of 2000) and other
              national and state laws which relate the processing of personal
              data.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Please read this Policy in consonance with the Terms. By using the
              Services, you confirm that you have read and agree to be bound by
              this Policy and consent to the processing activities described
              under this Policy.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                1. DEFINITIONS AND KEY CONCEPTS
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "1.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              In this Privacy Policy, the following definitions are used:
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>Data</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Personal information, including sensitive personal information and
              special category personal data (as defined under Data Protection
              Laws) about you, which we collect, receive, or otherwise process
              in connection with your use of our website/App and/or the
              Platform.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>Cookies</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              a small file placed on your device by our website/App or the
              Platform when you either visit or use certain features of our
              website/App or the Platform.
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp; </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              A cookie generally allows a website or mobile application to
              remember your actions or preference for a certain period of time.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Data Protection Laws
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              any applicable law for the time being in force relating to the
              processing of Data.
            </span>
          </p>
          {/* ------------------ 2 --------------------*/}
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "1pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>Partners</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              select third parties (including Adani Group Entities) with whom we
              have contracts for the businesses described in this Privacy
              Notice.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Service Providers
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              includes entities which provide services to us and to whom we may
              disclose your Data for a specific purpose pursuant to a written
              contract.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Adani Sportsline Private Limited
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "1pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                fontFamily: '"Adani Regular"',
              }}
            >
              Adani Sportsline Private Limited, a company incorporated in India
              whose registered office is Adani Corporate House, Shantigram, Nr -
              Vaishnodevi Circle, S.G.Highway, Khodiyar, Ahmedabad - 382421,
              Gujarat, India
            </span>
          </p>
          {/* --------------------------- 3 -------------------- */}
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "2.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Adani Group Entity
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Adani Enterprises Limited, and its subsidiaries, affiliates,
              associate companies and joint venture companies.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "1pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>User or you</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              the natural person who accesses or use the Services through our
              website/App or the Platform.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Our status as controller or processor
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>:</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "1.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Our business involves:
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "1pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          {/* ----------------------------- 4 ------------------- */}
          <ol
            type="a"
            className="awlist1"
            style={{ margin: "0pt", paddingLeft: "0pt" }}
          >
            <li
              style={{
                marginLeft: "21pt",
                marginBottom: "8pt",
                textIndent: "-21pt",
                textAlign: "justify",
                lineHeight: "108%",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <span
                style={{
                  width: "8.47pt",
                  font: '7pt "Adani Regular"',
                  display: "inline-block",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              </span>
              Adani Sportsline is associated with champion teams Gujarat Giants
              (Women’s Premier League, Kabaddi, Kho-Kho), International Cricket
              team Gulf Giants, World-Class School Academy program for Cricket
              and Football and India’s top marathon dedicated to the welfare of
              Armed Forces – Adani Ahmedabad Marathon.
            </li>
          </ol>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "1pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              For the purposes of certain applicable Data Protection Laws, we
              will act as a "controller" when we use your Data for our own
              purposes and a "processor" when we use your Data for and under the
              instructions of a Group Entity and other participating entities.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              This Privacy Policy primarily explains how we use your personal
              data when we act as a controller of your Data. Where we act as a
              "processor" on behalf of an Adani Group Entity or other
              participating entity (i.e. the “controller”).
            </span>
            <br />
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>2.</span>
            </strong>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </strong>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                WHAT DATA DO WE COLLECT ABOUT YOU
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "1pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              We collect Data for various purposes set out in this Privacy
              Notice.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              This Data includes, without limitation, the following categories:
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "1pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          {/* ------------------------ 5 -------------------------- */}
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>(a) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Contact information
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              : first and last name, email address, postal address, country,
              phone number and other similar contact data.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>(b) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Financial information
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              : payment instrument information, transactions, transaction
              history, preferences, method, mode and manner of payment, spending
              pattern or trends, and other similar data. It is clarified that we
              do not store any of your cards details i.e. credit and debit card
              in our Application or website.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>(c) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Technical information
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              : website, device and mobile app usage, Internet Protocol (IP)
              address and similar information collected via automated means,
              such as cookies, pixels and similar technologies.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>(d) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Product and service information
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              : Your website/App or Platform account membership number,
              registration information, and program-specific information, when
              you request products and/or services directly from us or
              participate in marketing programs.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              (e) Your reviews, feedback and opinions about our products,
              programmes, and services.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>(f) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Loyalty programme information
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              : your loyalty membership information, account details, profile or
              password details, if any.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>(g) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Transaction information:
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              date of the transaction, transaction amount, transaction history
              and related details.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>(h) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Other information
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              : Age, sex, date of birth, marital status, nationality, occupation
              or any other personal information provided by you.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>(i) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Location information
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              : personal data collected during usage of service provided by us
              such as Maps and Navigation, cab services, or any other similar
              services which requires processing of such data.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "1pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          {/* -------------------------- 6 --------------------- */}
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <br style={{ pageBreakBefore: "always", clear: "both" }} />
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                3. HOW WE COLLECT DATA
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "1pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              We collect Data in the following ways:
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "1pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          {/* ----------------------------------- 7 --------------------- */}
          <ol type="a" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "31.67pt",
                textAlign: "justify",
                lineHeight: "108%",
                paddingLeft: "4.33pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <strong>Information You Give Us:</strong> We receive and store any
              information you enter on our website App or the Platform or give
              us in any other way. Please see the section below, titled “Data
              Shared by You” for more information.
            </li>
            <li
              style={{
                marginLeft: "32.2pt",
                textAlign: "justify",
                lineHeight: "108%",
                paddingLeft: "3.8pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <strong>Information You Give to Transit Hotel</strong>:&nbsp; We
              receive and store any information you provide to the Transit Hotel
              available at our Platform.
            </li>
            <li
              style={{
                marginLeft: "31.08pt",
                textAlign: "justify",
                lineHeight: "108%",
                paddingLeft: "4.92pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <strong>Automatic Information We Collect</strong>: We use
              “cookies”, pixels and similar technologies to receive and store
              certain types of information whenever you interact with us. Please
              see the section below, titled “Data That is Collected
              Automatically” for more information.
            </li>
            <li
              style={{
                marginLeft: "32.2pt",
                textAlign: "justify",
                lineHeight: "108%",
                paddingLeft: "3.8pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <strong>E-mail Communications</strong>: We often receive a
              confirmation (if your device supports such capabilities) when you
              open e-mail from us or click on a link in the e-mail. You can
              choose not to receive marketing emails from us by clicking on the
              unsubscribe link in any marketing email.
            </li>
            {/* ---------------------------- 8 ------------------------ */}
            <li
              style={{
                marginLeft: "31.76pt",
                textAlign: "justify",
                lineHeight: "108%",
                paddingLeft: "4.24pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <strong>Customer Care Support</strong>: We store data provided by
              You to the our customer care support team including but not
              limited to the call recording.
            </li>
            <li
              style={{
                marginLeft: "29.69pt",
                textAlign: "justify",
                lineHeight: "108%",
                paddingLeft: "6.31pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <strong>
                Automatic Information We Collect from Other Websites
              </strong>
              : We receive and store certain types of information when you
              interact with third-party websites that use our technology or with
              whom we have a specific agreement.
            </li>
            <li
              style={{
                marginLeft: "32.14pt",
                textAlign: "justify",
                lineHeight: "108%",
                paddingLeft: "3.86pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <strong>Information from Other Sources</strong>: We may obtain
              information from other sources. An example where we receive your
              Data from Adani Group Entities in connection with the Platform for
              the purposes of enrolment, offering you products, services and
              benefits on the Platform.
            </li>
            {/* ------------------------------ 9 --------------------------- */}
            <li
              style={{
                marginLeft: "32.16pt",
                marginBottom: "8pt",
                textAlign: "justify",
                lineHeight: "108%",
                paddingLeft: "3.84pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              &nbsp;
              <strong>
                Information Previously Provided to Adani Group Entities:
              </strong>
              Where you have shared any information previously with any of the
              Group Entities and such Group Entity is permitted to further share
              such information, it will share such information with us. If such
              information is sensitive personal information or special category
              personal data, the Group Entity will only share such information
              with us with your consent. Regardless of the terms on which you
              had originally provided the information to a Group Entity, you
              acknowledge that: (a) we will collect such information from such
              Group Entity for the purposes set out in this Privacy Notice; (b)
              the Group Entity that provides such information to us is subject
              to its own compliance obligations under the Data Protection Laws,
              and (c) we are not responsible for&nbsp; any acts or omissions of
              such Group Entity in relation to any such compliance obligations
              under the Data Protection Laws.
            </li>
            <li
              style={{
                marginLeft: "28.71pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "7.29pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              We automatically collect purchase or content use history, which we
              sometimes aggregate with similar information from other customers
              to create features such as Best Seller, Top Rated, etc...
            </li>
            {/* ----------------------------------- 10 ------------------------------ */}
            <li
              style={{
                marginLeft: "28.81pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "7.19pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              The information about usage of the App, including crash logs and
              usage statistics.
            </li>
            <li
              style={{
                marginLeft: "31.64pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "4.36pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              Information about the location of your device, including
              geolocation information.
            </li>
            <li
              style={{
                marginLeft: "28.71pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "7.29pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              Information such as your location is collected upon availing
              service which require processing of such data to provide the
              requisite service to you.
            </li>
            {/* --------------------------------------------- 11 --------------------- */}
            <li
              style={{
                marginLeft: "35.57pt",
                textAlign: "justify",
                lineHeight: "108%",
                paddingLeft: "0.43pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              By using our App, you are agreeing that We may advertise your
              feedback on the App/ website and marketing materials.
            </li>
            <li
              style={{
                marginLeft: "32.1pt",
                marginBottom: "8pt",
                textAlign: "justify",
                lineHeight: "108%",
                paddingLeft: "3.9pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              We will retain your information as long as we require this to
              provide you with the goods and services and for such period as
              mandated by the concerned laws.
            </li>
          </ol>
          {/* --------------------------------------------- 12  --------------------- */}
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "3.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              You can make choices about our collection and use of your Data.
              For example, you may want to access, edit or remove your Data on
              our website/App or the Platform. When you are asked to provide
              Data, you may decline. For more information, please see the
              section below, titled “Your Rights and Choices”.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "4.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "4.5pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>4.</span>
            </strong>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp; </span>
            </strong>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                DATA SHARED BY YOU:
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "27pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              We may collect your Data in several ways from your use of our
              website/App or the Platform. For instance:
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "27pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              (a) when you register with us to receive our products and/or
              services.
            </span>
          </p>
          {/* --------------------------------------------- 12 --------------------- */}
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "27pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              (b) when you conduct a transaction or attempt a transaction on our
              website/App or Platform;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "27pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              (c) when you complete surveys conducted by or for us;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "27pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              (d) when you elect to receive any communications (including
              promotional offers) from us.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "27pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              (e) from the information gathered by your visit to our website or
              the Our Platform.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "27pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              (f) Do not provide personal data about others unless you are
              authorized or required to do so by contract or applicable law.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "27pt",
              marginBottom: "8pt",
              textIndent: "-13.5pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                5. DATA WE RECEIVED FORM OTHER SOURCES:
              </span>
            </strong>
          </p>
          {/* --------------------------------------------- 13 --------------------- */}
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "27pt",
              marginBottom: "8pt",
              textIndent: "-13.5pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "13.5pt",
            }}
          >
            <span
              style={{
                width: "13.5pt",
                textIndent: "0pt",
                fontFamily: '"Noto Sans"',
                backgroundColor: "#ffffff",
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span
              style={{
                lineHeight: "108%",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              We may receive personal data about you from other sources
              including but not limited to the information provided by you to us
              for availing any product or service available at the Platform, Our
              affiliate, a person, or company/organization authorized by you to
              submit an application on your behalf, and/or publicly available
              sources. We’ll contact you to let you know we are processing your
              personal information.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <br style={{ pageBreakBefore: "always", clear: "both" }} />
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "27pt",
              marginBottom: "8pt",
              textIndent: "-13.5pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "27pt",
              marginBottom: "8pt",
              textIndent: "-13.5pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                6. DATA THAT IS COLLECTED AUTOMATICALLY:
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "27pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "2.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          {/* --------------------------------------------- 14 --------------------- */}
          <ol
            type="a"
            className="awlist2"
            style={{ margin: "0pt", paddingLeft: "0pt" }}
          >
            <li
              style={{
                marginLeft: "31.5pt",
                textIndent: "-27pt",
                textAlign: "justify",
                lineHeight: "108%",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <span
                style={{
                  width: "14.47pt",
                  font: '7pt "Adani Regular"',
                  display: "inline-block",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              </span>
              We automatically collect some information when you visit our
              website/App or the Platform. This information helps us to make
              improvements to our content and navigation.&nbsp; The information
              collected automatically includes your IP address.
            </li>
          </ol>
          {/* --------------------------------------------- 15 --------------------- */}
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "31.5pt",
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <ol
            start={2}
            type="a"
            className="awlist3"
            style={{ margin: "0pt", paddingLeft: "0pt" }}
          >
            <li
              style={{
                marginLeft: "31.5pt",
                textIndent: "-27pt",
                textAlign: "justify",
                lineHeight: "108%",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <span
                style={{
                  width: "13.94pt",
                  font: '7pt "Adani Regular"',
                  display: "inline-block",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              </span>
              Our web servers or affiliates who provide analytics and
              performance enhancement services collect IP addresses, operating
              system details, browsing details, device details and language
              settings. This information is aggregated to measure the number of
              visits, average time spent on the site, pages viewed and similar
              information. We use this information to measure the site usage,
              improve content and to ensure safety and security, as well enhance
              performance of our website/App or the Platform.
            </li>
            <li
              style={{
                marginLeft: "31.5pt",
                textIndent: "-27pt",
                textAlign: "justify",
                lineHeight: "108%",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <span
                style={{
                  width: "15.06pt",
                  font: '7pt "Adani Regular"',
                  display: "inline-block",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              </span>
              We may collect your Data automatically via Cookies, pixels and
              similar technologies in line with settings on your browser. For
              more information about Cookies, please see the section below,
              titled “Cookies, Pixels and Similar Technologies”.
            </li>
          </ol>
          {/* --------------------------------------------- 16 --------------------- */}
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "31.5pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                7. OUR USE OF DATA
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              We use the information collected through this website/app, as
              described in this policy and we may use your information to:
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textIndent: "36pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              I. Improve our services, website/App and how we operate our
              businesses.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              II. Understand and enhance your experience using our Website/App,
              products and services.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textIndent: "36pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              III. Personalize our products or services and make
              recommendations.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textIndent: "36pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              IV. Provide and deliver products and services you request.
            </span>
          </p>
          {/* --------------------------------------------- 17 --------------------- */}
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textIndent: "36pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              V. Process, manage, complete, and account for transactions.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              VI. Provide customer support and respond to your requests,
              comments, and enquiries.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textIndent: "36pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              VII. Create and manage the online accounts you manage on our App.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              VIII. Send you related information, including confirmations,
              technical notices, updates, security alerts and support and
              administrative messages.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              IX. Communicate with you about promotions, upcoming events, and
              news about products and services.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "49.5pt",
              marginBottom: "14pt",
              textIndent: "-13.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              X. We may process your personal information without your knowledge
              or
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              &nbsp;&nbsp;&nbsp;{" "}
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              consent where required by applicable law or regulation for the
              purposes of verification of identity or for prevention, detection,
              or investigation, including of cyber incidents, prosecution, and
              punishment of offences.
            </span>
          </p>
          {/* --------------------------------------------- 18 --------------------- */}
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "49.5pt",
              marginBottom: "14pt",
              textIndent: "-9pt",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              XI. Protect, investigate, and deter against fraudulent,
              unauthorized, or illegal activity.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "45pt",
              marginBottom: "14pt",
              textIndent: "-9pt",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              XII. protecting against, and preventing, fraud, illegal activity,
              harm, financial loss and other legal or information security
              risks.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "45pt",
              marginBottom: "14pt",
              textIndent: "-9pt",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"', fontSize: "11.5pt" }}>
              XIII.
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}> </span>
            <span style={{ fontFamily: '"Adani Regular"', fontSize: "11.5pt" }}>
              providing marketing and promotional campaigns to you based on your
              profile;
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              XV. in connection with loyalty programs owned and operated by us
              or by other{" "}
            </span>
            <span
              style={{
                width: "23.25pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;&nbsp; </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Group Entities; and
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              XVI. Create a user profile based on data provided by you on using
              of the application.
            </span>
          </p>
          {/* --------------------------------------------- 19 --------------------- */}
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Where processing your Data is necessary for us to carry out our
                obligations arising from any contracts entered into between you
                and us
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              : If you enter into a contract with us in relation to any of our
              product or service offerings, including products or service
              offerings we offer to you directly on the Platform, we may process
              certain Data about you in order to perform our obligations under
              this contract, including to enable us to communicate with you
              about such products and/or services and to process your payment
              transactions.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Where processing your personal information is within our
                legitimate interests
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              : We can process certain Data where it is necessary for the
              purposes of the legitimate interests pursued by us or by a third
              party, except where such interests are overridden by the interests
              or fundamental rights or freedoms of yours which require
              protection of your Data.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Where you give us your opt-in consent to process your personal
                information:
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              In certain circumstances, where required under relevant Data
              Protection Laws, we will seek to obtain your consent before we
              undertake certain processing activities with your Data.
            </span>
          </p>
          {/* --------------------------------------------- 20 --------------------- */}
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <u>
                <span style={{ fontFamily: '"Adani Regular"' }}>
                  Where required under relevant Data Protection Laws
                </span>
              </u>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              (e.g. under direct marketing legislation), we will obtain your
              opt-in consent prior to sharing your Data with third parties and
              carrying out certain marketing activities (unless we are permitted
              by relevant Data Protection Laws to contact you without your
              opt-in consent in relation to goods and services which are similar
              to those which you have already purchased, used or interacted
              with).
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              You have the right to withdraw your consent to these activities.
              You can do so at any time, and details of how to do so can be
              found in the section below, titled "Your Rights and Choices".
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Where processing your personal information is necessary for our
                compliance with a legal obligation:
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              In certain circumstances, we may disclose your Data for the
              purposes of compliance with a legal obligation (for example, to
              comply with a law, regulation or compulsory legal request). We do
              not think that any of the above activities prejudice you in any
              way. However, you do have the right to object to us processing
              your personal information in certain circumstances. If you would
              like to know more about these circumstances and how to object to
              our processing activities, please see the section below, titled
              "Your Rights and Choices".
            </span>
          </p>
          {/* --------------------------------------------- 21 --------------------- */}
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Some of the above grounds for processing will overlap and there
              may be several grounds which justify our use of your Data.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Further, where required under relevant Data Protection Laws, we
              will only process special category personal data’ (as defined
              under Data Protection Laws) if there is a valid legal basis, which
              might involve obtaining your explicit consent.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Where we use or share or otherwise process your Data as a
              processor on behalf of a Group Entity or other participating
              entity (i.e., the controller) for the purposes of offering you
              access to Third Party Applications on the Platform or as part of
              any services that we provide to that entity, we do so under the
              instructions of that entity and that entity is responsible for
              ensuring that there is a legal basis for us to use or share your
              Data on its behalf (if such legal basis is required under relevant
              Data Protection Laws).
            </span>
          </p>
          {/* --------------------------------------------- 22 --------------------- */}
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "1.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                8. PERMISSIBLE AGE:
              </span>
            </strong>
          </p>
          <ol type="a" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "31.67pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "4.33pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              The Services are not intended for users under the age of 18,
              unless permitted under applicable local laws (Permissible Age) or
              under the involvement of a parent or guardian. We do not knowingly
              collect any personal information from users or market to or
              solicit information from anyone under the Permissible Age. If we
              become aware that a person submitting personal information is
              under the Permissible Age, we will delete the account and any
              related information as soon as possible. If you believe we might
              have any information from or about a user under the Permissible
              Age, please contact us at ‘sportsline@adani.com
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                ’
              </span>
            </li>
          </ol>
          {/* --------------------------------------------- 23 --------------------- */}
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "1.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <ol start={2} type="a" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "32.2pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "3.8pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              This Website is not directed at children under the age of 10 and
              We cannot distinguish the age of persons who access and use our
              website. If a minor (according to applicable laws) has provided us
              with Customer Data without parental or guardian consent, the
              parent or guardian should contact us (see Section 20) to remove
              the relevant Customer Data and unsubscribe the minor. If we become
              aware that Customer Data has been collected from a person under
              the age of 10 without parental or guardian consent, we will delete
              this Customer Data and, where that minor has an account, terminate
              the minor’s account.
            </li>
          </ol>
          {/* --------------------------------------------- 24 --------------------- */}
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                9. SHARING OF DATA:
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              We may share your data in the following ways (and for the purposes
              of relevant Data Protection Laws, we may do so either as a
              controller in our own right or as a processor on behalf of and
              under the instructions of another entity in accordance with our
              obligations under our agreement with that entity):
            </span>
          </p>
          {/* --------------------------------------------- 25 --------------------- */}
          <ol type="a" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "31.67pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "4.33pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              We share your data with your consent or to complete any
              transaction or provide any product or service you have requested
              or authorized. We also share data with our affiliates and
              subsidiaries, with vendors working on our behalf.
            </li>
            <li
              style={{
                marginLeft: "32.2pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "3.8pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              We may employ other companies and individuals to perform functions
              on our behalf. The functions include fulfilling orders for
              products or services, delivering packages, sending e-mail,
              removing repetitive information from customer lists, providing
              marketing assistance, providing search results and links
              (including paid listings and links), processing payments,
              transmitting content, scoring credit risk, and providing customer
              service.
            </li>
            {/* --------------------------------------------- 26 --------------------- */}
            <li
              style={{
                marginLeft: "31.08pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "4.92pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <strong>Business Transfers:</strong> As we continue to develop our
              business, we might sell or buy subsidiaries or business units.
              Your Data (including in relation to loyalty programs) may be
              transferred as part of such transactions.
            </li>
            <li
              style={{
                marginLeft: "32.2pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "3.8pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              Protecting Us: We may release Data when we believe that disclosure
              is reasonably necessary (a) to comply with a law, regulation or
              compulsory legal request; (b) to protect our or an Adani Group
              Entity's intellectual property rights; (c) to protect our against
              harm or financial loss; (d) when we believe disclosure is
              necessary to protect individuals’ vital interests, or (e) in
              connection with an investigation of suspected or actual fraudulent
              or illegal activity. This may include exchanging information with
              other companies and organizations for fraud protection, risk
              management and dispute resolution.
            </li>
            <li
              style={{
                marginLeft: "31.76pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "4.24pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <strong>Third Parties:</strong>&nbsp; We may also share your Data
              with other third parties where:
            </li>
          </ol>
          {/* --------------------------------------------- 27 --------------------- */}
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              a) You request or authorize us to do so;
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              b) We need to comply with applicable law or respond to valid legal
              process; or
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              c) We need to operate and maintain the security of our website/App
              or Platform, including to prevent or stop an attack on our
              computer systems or networks.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              d)The sharing of your Data will be in line with the processes set
              out in this Privacy Policy.
            </span>
          </p>
          {/* --------------------------------------------- 28 --------------------- */}
          <ol start={6} type="a" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "29.69pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "6.31pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              We reserve our right to share the information collected within the
              Adani Group Entities and internal departments for promotional and
              marketing activities and communications.
            </li>
            <li
              style={{
                marginLeft: "32.14pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "3.86pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              <strong>Migration of Data</strong>: We may also process your data
              for other business and offerings controlled, maintained, governed
              and operated by Adani Sportsline, thereby, Your Data (including in
              relation to any loyalty program(s) operated, maintained, and
              governed by Adani Sportsline or any other Group Companies) may be
              migrated as part of such business transactions.
            </li>
          </ol>
          {/* --------------------------------------------- 29 --------------------- */}
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>10</span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>. </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                DATA SECURITY
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>:</span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              We will use technical and organizational measures to safeguard
              your Data and we store your Data on secure servers. Technical and
              organizational measures include measures to deal with any
              suspected data breach.
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp; </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              If you suspect any misuse or loss or unauthorized access to your
              Data, please let us know immediately by contacting us by e-mail.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              The security of your Platform account depends on you keeping your
              account password(s), PINs and other access information
              confidential. If you share your Platform account information with
              a third party, they will have access to your account and your
              Data.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              It is your responsibility to control access to your mobile device
              and the Platform on your device, including keeping your
              password(s) and/or PIN confidential and not sharing it with
              anyone. It is also your responsibility to alert us if you believe
              that the security of your Data in the Platform has been
              compromised.
            </span>
          </p>
          {/* --------------------------------------------- 30 --------------------- */}
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                11. ANALYTICS AND TAILORED ADVERTISING
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              To help us better understand your use of the Services, we may use
              third-party web analytics on our Services, such as Google
              Analytics etc. These service providers use the sort of technology
              described in the "Automatically-Collected Information" Section
              above. The information collected by this technology will be
              disclosed to or collected directly by these service providers, who
              use the information to evaluate our users' use of the Services. We
              also use Google Analytics as described in the following section.
              To prevent Google Analytics from collecting or using your
              information, you may install the Google Analytics Opt-Out Browser
              add-on.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textIndent: "18pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Tailored Advertising
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "18pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Third parties whose products or services are accessible or
              advertised via the Services may also use cookies or similar
              technologies to collect information about your use of the
              Services. This is done in order to help them-
            </span>
          </p>
          {/* --------------------------------------------- 31 --------------------- */}
          <ul style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "28.29pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "7.71pt",
                fontFamily: "serif",
                fontSize: "11.5pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Inform, optimize, and serve ads based on past visits to our
                website and other sites and
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.29pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "7.71pt",
                fontFamily: "serif",
                fontSize: "11.5pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Report how our ad impressions, other uses of ad services, and
                interactions with these ad impressions and ad services are
                related to visits to our website. We also allow other third
                parties (e.g., ad networks and ad servers such as Google
                Analytics, and other programmatic/AdTech players) to serve
                tailored ads to you on the Services, and to access their own
                cookies or similar technologies on your computer, mobile phone,
                or other device you use to access the Services. We neither have
                access to, nor does this Privacy Policy govern, the use of
                cookies or other tracking technologies that may be placed by
                such third parties. These parties may permit you to opt out of
                ad targeting. If you are interested in more information about
                tailored browser advertising and how you can generally control
                cookies from being put on your computer to deliver tailored
                advertising (i.e., not just for the Services), you may visit the
                Network Advertising Initiative's Consumer Opt-Out Link, and/or
                the Digital Advertising Alliance's Consumer Opt-Out Link to
                opt-out of receiving tailored advertising from companies that
                participate in those programs. To opt out of Google Analytics
                for Display Advertising or customize Google Display Network ads,
                you can visit the Google Ads Settings page. Please note that to
                the extent advertising technology is integrated into the
                Services, you may still receive ads even if you opt-out of
                tailored advertising. In that case, the ads will just not be
                tailored to your interests. Also, we do not control any of the
                above opt-out links and are not responsible for any choices you
                make using these mechanisms or the continued availability or
                accuracy of these mechanisms.
              </span>
            </li>
          </ul>
          {/* --------------------------------------------- 32 --------------------- */}
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              When accessing the Services from a mobile application you may also
              receive tailored in-application advertisements. Each operating
              system: iOS, Android and Windows Phone provides its own
              instructions on how to prevent the delivery of tailored
              in-application advertisements. You may review the support
              materials and/or the privacy settings for the respective operating
              systems in order to opt-out of tailored in-application
              advertisements. For any other devices and/or operating systems,
              please visit the privacy settings for the applicable device or
              operating system or contact the applicable platform operator.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>12. </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                RETENTION OF DATA
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              We retain Data for as long as necessary for the use of our
              products and/or services or to provide access to and use of our
              website/App or the Platform, or for other essential purposes such
              as complying with our legal obligations, resolving disputes,
              enforcing our agreements and as long as processing and retaining
              your Data is necessary for our legitimate interests. Because these
              needs can vary for different data types and purposes, actual
              retention periods can vary significantly.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Even if we delete your Data, including on account of exercise of
              your right under Clause 13 below, it may persist on backup or
              archival media for audit, legal, tax or regulatory purposes.
            </span>
          </p>
          {/* --------------------------------------------- 33 --------------------- */}
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <strong>
              <span
                style={{ fontFamily: '"Adani Regular"', fontSize: "11.5pt" }}
              >
                13.
              </span>
            </strong>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}> </span>
            </strong>
            <strong>
              <span
                style={{ fontFamily: '"Adani Regular"', fontSize: "11.5pt" }}
              >
                WHERE WE STORE DATA:
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              We may transfer your Data to recipients in India, where we are
              headquartered, and other countries. These countries may not have
              the same data protection laws as the country in which you
              initially provided the information. If we transfer your Data to
              other countries, we will protect that information as described in
              this Privacy Policy, as disclosed to you at the time of data
              collection or as described in our program-specific privacy notice.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              If the GDPR/United Kingdom’s version of the GDPR applies to our
              processing of your Data, we will only process and/or transfer Data
              outside of the European Economic Area/United Kingdom where it is
              compliant with Data Protection Laws and the means of transfer
              provides adequate safeguards in relation to your Data, including
              for example:
            </span>
          </p>
          {/* --------------------------------------------- 34 --------------------- */}
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              (a) by way of a data transfer agreement incorporating the current
              relevant standard contractual clauses adopted in the European
              Economic Area/United Kingdom; or
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              (b) by transferring your Data to a country where there has been a
              finding of adequacy by the European Commission in respect of that
              country’s levels of data protection via its legislation; or
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              (c) where it is necessary for the conclusion or performance of a
              contract between us and a third party and the transfer is in your
              interests for the purposes of that contract; or
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                14. YOUR RIGHTS AND CHOICES
              </span>
            </strong>
          </p>
          {/* --------------------------------------------- 35 --------------------- */}
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Depending on which country’s laws are applicable to you, you may
              have various rights in relation to the Data that we hold about
              you. To get in touch with us about any of your rights under Data
              Protection Laws, please use the contact details set in the section
              below, titled “How to Contact Us”.
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp; </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              We will seek to deal with your request without undue delay, and in
              any event, within any time limits provided for in Data Protection
              Laws (subject to any extensions to which we are lawfully
              entitled). Please note that we may keep a record of your
              communications to help us resolve any issues which you raise.
              Where we are legally permitted to do so, we may refuse your
              request.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              You may be entitled to the following rights in relation to your
              Data:
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "1pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          {/* --------------------------------------------- 36 --------------------- */}
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>a) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Right to Confirmation and Access
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              - you may ask us to confirm what Data we hold about you at any
              time, and request us to modify, update or delete such Data. You
              may also request a copy of the Data we hold about you.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>b) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Right to Rectification
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              - you have the right to request that we rectify any inaccurate or
              incomplete Data that we hold about you, including by means of
              providing a supplementary statement.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>c)</span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Right to be Erasure
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              - you have the right to request that we "erase" your Data in
              certain circumstances.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>d) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Right to Restrict Our Use of your Data
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              - you have the right to request that we restrict our processing of
              your Data in certain circumstances, for example if you dispute the
              accuracy of the Data that we hold about you or you object to our
              processing of your Data (including where we process your Data for
              our legitimate interests, where permitted under applicable law).
            </span>
          </p>
          {/* --------------------------------------------- 37 --------------------- */}
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>e) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Right to Object
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              – this right enables you to object to us processing your Data
              where we do so for certain reasons.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>f) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Right to Data Portability
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              - you have the right to request that we transfer your Data to
              another third party. This right of data portability only applies
              to certain types of Data.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>g) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Right to Withdraw Consent
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              – where we have obtained your consent to process your Data for
              certain activities, you may withdraw this consent at any time and
              we will cease to carry out that particular activity that you
              previously consented to unless we consider that there is an
              alternative legal basis to justify our continued processing of
              your Data for this purpose.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>h) </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Right to File Complaints
              </span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              – you have the right to lodge a complaint with the relevant
              supervisory authority in your jurisdiction.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              To get in touch with us about these rights, or for more
              information about managing your Data and promotional
              communications, please use the contact details set out in the
              section below, titled “How to Contact Us”.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              It is important that the Data we hold about you is accurate and
              current. Please keep us informed if your personal information
              changes during the period for which we hold it.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textIndent: "13.5pt",
              textAlign: "justify",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                15. PROCESSING YOUR DATA
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              We take steps to ensure that your Data is processed according to
              the provisions of this Privacy Notice and the requirements of
              applicable law.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "108%",
              fontSize: "11.5pt",
            }}
          >
            <br style={{ pageBreakBefore: "always", clear: "both" }} />
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <strong>
              <span
                style={{ fontFamily: '"Adani Regular"', fontSize: "11.5pt" }}
              >
                16.
              </span>
            </strong>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}> </span>
            </strong>
            <strong>
              <span
                style={{ fontFamily: '"Adani Regular"', fontSize: "11.5pt" }}
              >
                SEVERABILITY
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textIndent: "-22.5pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                width: "22.5pt",
                textIndent: "0pt",
                fontFamily: '"Adani Regular"',
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              If any court or competent authority finds that any provision of
              this Privacy Policy (or part of any provision) is invalid, illegal
              or unenforceable, that provision or part-provision will, to the
              extent required, be deemed to be deleted, and the validity and
              enforceability of the other provisions of this Privacy Policy will
              not be affected.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textIndent: "13.5pt",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>17.</span>
            </strong>
            <strong>
              <span
                style={{
                  width: "7.83pt",
                  textIndent: "0pt",
                  fontFamily: '"Adani Regular"',
                  display: "inline-block",
                }}
              >
                &nbsp;
              </span>
            </strong>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                LINKS TO THIRD PARTY SITE/APPS
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Our App may, from time to time, contain links to and from other
              Apps/websites of third parties. Please note that if you follow a
              link to any of these Apps/websites, such Apps/websites will apply
              different terms to the collection and privacy of your personal
              data, and we do not accept any responsibility or liability for
              these policies. When you leave our Site, we encourage you to read
              the privacy policy of every App/Website you visit.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textIndent: "18pt",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>18. COOKIES</span>
            </strong>
          </p>
          <ol type="a" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "31.67pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "4.33pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              To optimize our App presence, we use cookies. These are small text
              files stored on your device. These cookies are deleted after you
              close the App. Other cookies remain on your device (long-term
              cookies) and permit its recognition on your next visit. This
              allows us to improve your access to our site. This helps us to
              learn more about your interests, and provide you with essential
              features and services and for additional purposes, including:
            </li>
          </ol>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textIndent: "36pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              I. Keeping track of items stored in your shopping basket.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              II. Conducting research and diagnostics to improve the content,
              products, and services.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textIndent: "36pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              III. Preventing fraudulent activity.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textIndent: "36pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              IV. Improving security.
            </span>
          </p>
          <ol start={2} type="a" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "32.2pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "3.8pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              Our cookies allow you to take advantage of some of our essential
              features. For instance, if you block or otherwise reject our
              cookies, you will not be able to add items to your shopping
              basket, proceed to checkout, or use any products or services that
              require you to sign in.
            </li>
            <li
              style={{
                marginLeft: "31.08pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "4.92pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              Approved third parties also may set cookies when you interact with
              Our services.
            </li>
            <li
              style={{
                marginLeft: "32.2pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "3.8pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              Third parties include search engines, providers of measurement and
              analytics services, social media networks, and advertising
              companies.
            </li>
            <li
              style={{
                marginLeft: "31.76pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "4.24pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              Third parties use cookies in the process of delivering content,
              including ads relevant to your interests, to measure the
              effectiveness of their ads, and to perform services on behalf of
              Us.
            </li>
            <li
              style={{
                marginLeft: "29.69pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "6.31pt",
                fontFamily: '"Adani Regular"',
                fontSize: "11.5pt",
              }}
            >
              You can prevent the storage of cookies by choosing a "disable
              cookies" option in your device settings. But this can limit the
              functionality of our services.
            </li>
          </ol>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                19. CHANGES TO THIS POLICY
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "18pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"', fontSize: "11.5pt" }}>
              We may change this policy from time to time. If we make any
              changes to this policy, we will change the "Last Updated" date
              above. You agree that your continued use of our services after
              such changes have been published to our services will constitute
              your acceptance of such revised policy.
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}> </span>
            <span style={{ fontFamily: '"Adani Regular"', fontSize: "11.5pt" }}>
              we will notify you and seek additional consent before using your
              personal data for a new purpose that is inconsistent with the
              original purpose for which we collected it.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>20</span>
            </strong>
            <span style={{ fontFamily: '"Adani Regular"' }}>. </span>
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                HOW TO CONTACT US
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "18pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"', fontSize: "11.5pt" }}>
              To request to review, update, or delete your personal information
              or to otherwise reach us, please submit a request by e-mailing us
              at
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}> </span>
            <span style={{ fontFamily: '"Adani Regular"', fontSize: "11.5pt" }}>
              sportsline@adani.com. You may contact us for information on
              Service Providers, Partners and Group Entities with whom we may
              share your Data in compliance with this Privacy Policy and
              applicable law. We will respond to your request within 30 days.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                21. GRIEVANCE:
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Please find below the details of the grievance:
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textIndent: "36pt",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <span
              style={{
                fontFamily: '"Adani Regular"',
              }}
            >
              Email Id:
            </span>
            <span style={{ fontFamily: '"Adani Regular"', fontSize: "11pt" }}>
              {" "}
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>
              sportsline@adani.com
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                The grievance officer is identified above pursuant to the
                provisions of applicable laws including but not limited to the
                information Technology Act, 2000 and the Consumer Protection
                Act, 2019 and the rules enacted under those laws.
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              lineHeight: "normal",
              fontSize: "11.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "13.5pt",
            }}
          >
            <span style={{ fontFamily: "Roboto-Bold" }}>
              PRIVACY POLICY APPLICABLE TO THE EUROPEAN ECONOMIC AREA (EEA) AND
              THE UNITED KINGDOM (UK)
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              1. Adani Sportsline (ASL, we/us/our) is committed to safeguarding
              the privacy of our customers (you/your). This privacy policy (the
              Privacy Policy) applies to our customers, potential customers who
              are in the European Economic Area (EEA) and the United Kingdom
              (UK). It sets out our personal data collection and sharing
              practices and informs you of the ways in which we collect personal
              data, the uses of that personal data and the ways in which we will
              share any personal data you choose to provide to us. To ensure
              that you can make informed decisions and feel confident about
              sharing certain personal data with us, please read this Privacy
              Policy to understand who we share your Personal Data with and for
              what purposes and the choices you have concerning how your
              Personal Data is collected and used by us.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              2. If you are an existing customer of ours, further details about
              how we use your personal data are set out in your customer
              contract with us. Further notices highlighting certain uses we
              wish to make of your personal data together with the ability to
              opt in or out of selected uses may also be provided when we
              collect personal data from you.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              3. Our websites/ Platform may contain links to other third-party
              websites. If you follow a link to any of those third-party
              websites, please note that they have their own privacy policies
              and that we do not accept any responsibility or liability for
              their policies or processing of your personal data. Please check
              these policies before you submit any personal data to such
              third-party websites.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              4. This Privacy Policy is intended to explain our privacy
              practices and covers the following areas
            </span>
          </p>
          <ul style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                What personal data about you we may collect?
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                How may we use your personal data?
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Who may we share your personal data with?
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                How we protect your personal data?
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Contacting us &amp; your rights to prevent marketing and to
                access and update your personal data?
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                How changes to this Privacy Policy and the Cookies Policy will
                be made.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: "Roboto-Bold" }}>
              1. Information we may collect about you
            </span>
          </p>
          <ul style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                We will collect and process all or some of the following
                personal data about you:
              </span>
              <ul
                style={{
                  marginRight: "0pt",
                  marginLeft: "0pt",
                  paddingLeft: "0pt",
                }}
              >
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Information you provide to us :
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Personal data that you provide to us, such as when using the
                    contact form on our website or mobile app, including your
                    name, email address etc.
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Advanced Passenger Information (API) :
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Including your passport, Visa and travel information, date
                    of birth, gender and nationality.
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Health data :
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Relating to passengers, in order to meet your requirements
                    in flight (eg. to respond to particular health risks or to
                    understand allergies, etc) and also to provide special
                    assistance, for example wheelchair access assistance;
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Payment information :
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Including payment type, information relating to the manner/
                    method of payment, card information (for your security, we
                    do not retain your CVV number, we simply use this to
                    authenticate your card) and where relevant, the name of your
                    bank);
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Our correspondence :
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    If you contact us, we will typically keep a record of that
                    correspondence;
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Survey information :
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    We may also ask you to complete surveys that we use for
                    research purposes. In such circumstances we shall collect
                    the information provided in the completed survey;
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Your transactions :
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    If you have purchased any services through our website or
                    platform, details of related transaction details and of the
                    fulfilment of the services we provide.
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Website and communication usage :
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Details of your visits to the websites and information
                    collected our website including cookies and other tracking
                    technologies including, but not limited to, your IP address
                    and domain name, geographical location, your browser version
                    and operating system, traffic data, location data, web logs
                    and other communication data, and the resources that you
                    access.
                  </span>
                </li>
              </ul>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Certain personal data (particularly details of your travel
                documentation, payment details and contact information) are
                required in order for us to supply our products and services and
                if you fail to supply such personal data as requested for
                specific services, we may be unable to deliver you the products
                and services in full.
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Where you have provided us, personal data relating to another
                person (for example, where you have booked a flight on his or
                her behalf) please ensure that you have that person’s knowledge
                and permission to use their data. Please provide that person
                with a copy of (or a link to) this privacy policy so they
                understand how we process personal data.
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                We may receive personal data from
              </span>
              <ul
                style={{
                  marginRight: "0pt",
                  marginLeft: "0pt",
                  paddingLeft: "0pt",
                }}
              >
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Global Distribution Systems
                    </span>
                  </strong>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      &nbsp;
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    For example, where you have made a booking using a flight
                    comparison website.
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Online travel agents
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Where you have made a booking using a third-party agency; or
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Travel management companies
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Where you (or your employer or company on your behalf) have
                    booked corporate travel through a third-party agency.
                  </span>
                </li>
              </ul>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                The data received from these organizations will be limited to
                that described at section 2.1 above and we will not use it for
                any other purpose other than those described.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: "Roboto-Bold" }}>
              2. USES MADE OF YOUR PERSONAL DATA
            </span>
          </p>
          <ul style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                In this section, we set out the purposes for which we use your
                personal data and, in compliance with our obligations under
                European law, identify the lawful bases we rely on in order to
                process the information.
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                These “legal grounds” are set out in the relevant data
                protection law applicable to the EEA and the UK, which allows
                companies to process personal data only when the processing is
                permitted by the specific “legal grounds” set out in law.
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Please note that in addition to the disclosures we have
                identified below, we may disclose personal data for the purposes
                we explain in this notice to service providers, contractors,
                agents, advisors (e.g. legal, financial, business or other
                advisors) and affiliates of ASL that perform activities on our
                behalf, as well as other members of the Adani Group.
              </span>
              <ul
                style={{
                  marginRight: "0pt",
                  marginLeft: "0pt",
                  paddingLeft: "0pt",
                }}
              >
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      To communicate effectively with you and conduct our
                      business :
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    To conduct our business, including to respond to your
                    queries, to otherwise communicate with you, or to carry out
                    our obligations arising from any agreements entered into
                    between you and us;{" "}
                  </span>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Legal bases :
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Contract performance, legitimate interests (to enable us to
                    perform our obligations and provide our services to you)
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      To provide you with marketing materials:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    To provide you with updates and offers, where you have
                    chosen to receive these. We may also use your information
                    for marketing our own and our selected business partners’
                    products and services to you by post, email, SMS, phone and
                    fax and private messages through other digital platforms
                    and, where required by law, we will ask for your consent at
                    the time we collect your data to conduct any of these types
                    of marketing. We will provide an option to unsubscribe or
                    opt-out of further communication on any electronic marketing
                    communication sent to you or you may opt out by contacting
                    us as set out in the “Contacting Us” section below.{" "}
                  </span>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Legal bases:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Consent, legitimate interest (to keep you updated with news
                    in relation to our products and services).
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      For research and development purposes:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    To analyse your personal data in order to better understand
                    your and our other clients’ services and marketing
                    requirements, to better understand our business and develop
                    our products and services;{" "}
                  </span>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Legal bases:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Legitimate interests (to allow us to improve our services)
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      To monitor certain activities:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    To monitor queries and transactions to ensure service
                    quality, compliance with procedures and to combat criminal{" "}
                  </span>
                  <u>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      activity;
                    </span>
                  </u>
                  <strong>
                    <u>
                      <span
                        style={{
                          fontFamily: '"Adani Regular"',
                          fontSize: "12pt",
                        }}
                      >
                        Legal
                      </span>
                    </u>
                  </strong>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      bases:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Legal obligations, legal claims, legitimate interests (to
                    ensure that the quality and legality of our services
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      To inform you of changes:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    To notify you about changes to our services and products;{" "}
                  </span>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Legal bases:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Legitimate interests (to notify you about changes to our
                    service)
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      To ensure website content is relevant:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    To ensure that content from our websites/Platform is
                    presented in the most effective manner for you and for your
                    device, which may include passing your data to business
                    partners, suppliers and/or service providers;{" "}
                  </span>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Legal bases:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Legitimate interests (to allow us to provide you with the
                    content and services on the websites)
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      To reorganize or make changes to our business :
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Strong in the event that we: (i) are subject to negotiations
                    for the sale of our business or part thereof to a third
                    party; (ii) are sold to a third party; or (iii) undergo a
                    re-organization, we may need to transfer some or all of your
                    personal data to the relevant third party (or its advisors)
                    as part of any due diligence process for the purpose of
                    analyzing any proposed sale or re-organization. We may also
                    need to transfer your personal data to that re-organized
                    entity or third party after the sale or reorganization for
                    them to use for the same purposes as set out in this policy;{" "}
                  </span>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Legal bases:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Legitimate interests (in order to allow us to change our
                    business)
                  </span>
                </li>
                <li style={{ marginLeft: "29pt", paddingLeft: "7pt" }}>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      In connection with legal or regulatory obligations:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    We may process your personal data to comply with our
                    regulatory requirements or discourse with regulators as
                    applicable which may include disclosing your personal data
                    to third parties, the court service and/or regulators or law
                    enforcement agencies in connection with enquiries,
                    proceedings or investigations by such parties anywhere in
                    the world or where compelled to do so. Where permitted, we
                    will direct any such request to you or notify you before
                    responding unless to do so would prejudice the prevention or
                    detection of a crime.{" "}
                  </span>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Legal bases:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Legal obligations, legal claims, legitimate interests (to
                    cooperate with law enforcement and regulatory authorities)
                  </span>
                </li>
                <li
                  style={{
                    marginLeft: "29pt",
                    marginBottom: "14pt",
                    paddingLeft: "7pt",
                  }}
                >
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Understanding your health requirements:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    To ensure that you are safe on flights and to manage any
                    particular requirements for example, allergies.{" "}
                  </span>
                  <strong>
                    <span
                      style={{
                        fontFamily: '"Adani Regular"',
                        fontSize: "12pt",
                      }}
                    >
                      Legal bases:
                    </span>
                  </strong>
                  <span
                    style={{
                      fontFamily: '"Adani Regular"',
                      fontSize: "12pt",
                    }}
                  >
                    Explicit consent
                  </span>
                </li>
              </ul>
            </li>
          </ul>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: "Roboto-Bold" }}>
              3. WHO WE SHARE YOUR PERSONAL INFORMATION WITH
            </span>
          </p>
          <ul style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                We may disclose information about you to any of our, agents,
                suppliers or subcontractors insofar as reasonably necessary for
                the purposes set out in this privacy policy. This will include
                customs and immigrations authorities, airports at which we
                operate, credit card fraud companies (to detect and prevent
                fraud), payment operating services, notification channels to
                notify customers regarding their bookings, flight schedule
                changes by sending SMS and emails, the departure control system
                (DCS), the baggage reconciliation system (BRS), advance
                passenger processing (APP) and customer and border protection
                (CBP), travel processing system.
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                In addition, we may disclose information about you to
                counterparties, customs and immigration authorities, other
                government bodies, regulators and law enforcement agencies where
                required by law, in connection with any legal proceedings or
                prospective legal proceedings, or to establish, exercise or
                defend our legal rights including providing information to
                others for the purposes of crime detection and prevention.
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Except as provided in this Privacy Policy, we will not otherwise
                provide your information to third parties.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: "Roboto-Bold" }}>
              4. STORAGE AND SECURITY OF YOUR PERSONAL DATA
            </span>
          </p>
          <ul style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                No data transmission over the Internet or website can be
                guaranteed to be secure from intrusion. However, we maintain
                commercially reasonable physical, electronic and procedural
                safeguards to protect your personal data in accordance with data
                protection legislative requirements.
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                All information you provide to us is stored on our or our
                subcontractors’ secure servers in on outside of the EEA or the
                UK (i.e. India only) and accessed and used subject to our
                security policies and standards.
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Where we have given you (or where you have chosen) a password
                which enables you to access certain parts of our websites, you
                are responsible for keeping this password confidential and for
                complying with any other security procedures that we notify you
                of. We ask you not to share a password with anyone.
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Protecting Adani Sportsline: We may share your Data when we
                believe that disclosure is reasonably necessary (a) To comply
                with a law, regulation or compulsory legal request; (b) To
                protect Adani Sportsline or a Adani Group Entity's intellectual
                property rights; (c) To protect Adani Sportsline against harm or
                financial loss; (d) When we believe disclosure is necessary to
                protect individuals’ vital interests, or (e) In connection with
                an investigation of suspected or actual fraudulent or illegal
                activity. This may include exchanging information with other
                companies and organizations for fraud protection, risk
                management and dispute resolution.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: "Roboto-Bold" }}>
              5. PROCESSING OUTSIDE THE EEA AND THE UK
            </span>
          </p>
          <ul style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                We will sometimes transfer personal data to other jurisdictions,
                including destinations outside the country in which you are
                located, whose data protection laws may not be adequate or of
                the same level as in your country. We will, in all
                circumstances, safeguard personal data as set out in this
                Privacy Policy
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Where your personal data is transferred from an entity inside
                the European Economic Area (the EEA) or the UK (as the case may
                be) to outside the EEA or the UK (as the case may be), we may be
                required to take specific additional measures to safeguard the
                relevant personal data. Where we transfer your personal data, we
                will establish legal grounds justifying such transfer, or
                otherwise to ensure the appropriate security of your personal
                data
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <strong>
                <span
                  style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}
                >
                  Storage limits:
                </span>
              </strong>
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                &nbsp;
              </span>
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Our retention periods for personal data are based on business
                needs and legal requirements. We retain personal data for as
                long as is necessary for the processing purpose(s) for which the
                information was collected, and any other permissible, related
                purpose. For example, we may retain certain transaction details
                and correspondence until the time limit for claims arising from
                the transaction has expired, or to comply with regulatory
                requirements regarding the retention of such data.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: "Roboto-Bold" }}>
              6. YOUR RIGHTS &amp; CONTACTING US
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "13.5pt",
            }}
          >
            <span style={{ fontFamily: "Roboto-Bold" }}>Marketing</span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              You have the right to ask us not to process your personal data for
              marketing purposes. We will inform you if we intend to use your
              information for such purposes or if we intend to disclose your
              information to any third party for such purposes. Where you do not
              wish to receive marketing from us, you can decline or withdraw
              your consent at any time, either by choosing not to select the
              relevant check boxes on our subscription form, by clicking the
              unsubscribe link in any marketing message received from us, or by
              contacting us here.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "13.5pt",
            }}
          >
            <span style={{ fontFamily: "Roboto-Bold" }}>
              Updating Information
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              We will use reasonable endeavors to ensure that your personal data
              is accurate. In order to assist us with this, you should notify us
              of any changes to the personal data that you have provided to us
              by contacting us as set out in the “Contacting Us” section below.
              Please note that it is your responsibility to ensure that your
              booking information or flight itinerary is accurate.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "13.5pt",
            }}
          >
            <span style={{ fontFamily: "Roboto-Bold" }}>Your rights</span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              If you have any questions in relation to our use of your personal
              data, you should first contact us as per the “Contacting Us”
              section below. Under certain conditions, you may have the right to
              require us to:
            </span>
          </p>
          <ul style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Provide you with further details on the use we make of your
                information.
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Provide you with a copy of information that you have provided to
                us;
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Update any inaccuracies in the personal data we hold
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Delete any personal data that we no longer have a lawful ground
                to use;
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Where processing is based on consent, withdraw your consent so
                that we stop that particular processing. Please note that in
                relation to health information, this will prevent us from
                reacting to any health condition you may have;
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                To ask us to transmit the personal data you have provided to us
                and we still hold about you to a third party electronically;
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Object to any processing based on the legitimate interests
                ground unless our reasons for undertaking that processing
                outweigh any prejudice to your data protection rights; and
              </span>
            </li>
            <li
              style={{
                marginLeft: "27.6pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                Restrict how we use your information whilst a complaint is being
                investigated.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              Your exercise of these rights is subject to certain exemptions to
              safeguard the public interest (e.g. the prevention or detection of
              crime) and our interests (e.g. the maintenance of legal
              privilege). If you exercise any of these rights, we will check
              your entitlement and respond in most cases within 90 days from the
              date of receipt of any such request.
            </span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              If you are not satisfied with our use of your personal data or our
              response to any exercise of these rights, you have the right to
              complain to the relevant data protection authority.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "10pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Adani Regular"' }}>
                Contacting us
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              If you have any questions in relation to this policy, please
              contact us at
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
            <u>
              <span
                style={{
                  fontFamily: '"Adani Regular"',
                  color: "#333333",
                }}
              >
                sportsline@adani.com
              </span>
            </u>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: "Roboto-Bold" }}>
              7. Changes to our Privacy Policy and/or Cookies Policy
            </span>
          </p>
          <ul style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginTop: "14pt",
                marginLeft: "27.6pt",
                marginBottom: "14pt",
                textAlign: "justify",
                lineHeight: "normal",
                paddingLeft: "8.4pt",
                fontFamily: "serif",
                fontSize: "10pt",
              }}
            >
              <span style={{ fontFamily: '"Adani Regular"', fontSize: "12pt" }}>
                We may change the content of our websites and how we use cookies
                and consequently our Privacy Policy and our Cookie Policy may
                change from time to time in the future. If we change this
                Privacy Policy or our Cookies Policy, we will update the date it
                was last changed below. If these changes are material, we will
                indicate this clearly on our website.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "14pt",
              marginLeft: "36pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "14pt",
              marginBottom: "14pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: '"Adani Regular"' }}>
              This Privacy Policy was last updated on{" "}
            </span>
            <span
              style={{
                fontFamily: '"Adani Regular"',
              }}
            >
              1 Aug 2023
            </span>
            <span style={{ fontFamily: '"Adani Regular"' }}>.</span>
          </p>
          <div style={{ clear: "both" }}>
            <p
              style={{
                marginTop: "0pt",
                marginBottom: "0pt",
                lineHeight: "normal",
              }}
            >
              &nbsp;
            </p>
          </div>
        </div>
      </Box>
    </Box>
  );
}
