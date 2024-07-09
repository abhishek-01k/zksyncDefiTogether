import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import TokensBalanceDisplay from "../components/tokensBalanceDisplay.jsx";
import { useRouter } from "next/navigation";
import Navbar from "../components/navigation/Navbar";
import SimpleThreeColumns from "../components/threeColumn";

export default function Bss() {
  const router = useRouter();

  return (
    <div>
      <main className={styles.main}>
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 4, md: 4 }}
            py={{ base: 4, md: 4 }}
          >
            <Text
              as={"span"}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              fontWeight={700}
              color={"orange.300"}
            >
              zAAp Now!
            </Text>

            <Navbar></Navbar>
            <br />
            <Text fontSize="4xl" color="orange.400" as="b">
            BORROW - SWAP - SEND
          </Text>
            <Text fontSize="2xl" color="red.200" as="b">
            USDC --&#62; ETH --&#62; WETH --&#62; DAI (One Click) USDC --&#62;
            ETH --&#62; WETH --&#62; APPROVE --&#62; DAI
          </Text>
            {/* JUNK */}
            {/* TODO: pass dynamic chain id to display, here */}
            {/* <TokensBalanceDisplay address={""} chain={"ETH_GOERLI"} /> */}
            <br /> <br />
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <br />
              <br />
              <SimpleThreeColumns />
              <br />
              <br />
              <Button
                  fontSize="24px"
                  transition={"all 0.3s ease"}
                  colorScheme={"blue"}
                  bgImage={
                    "linear-gradient(to right, rgb(1 134 218), rgb(182 49 167))"
                  }
                  border={"1"}
                  rounded={"full"}
                  px={12}
                  py={8}
                  _hover={{
                    border: "1px solid rgba(var(--primary-color), 0.5)",
                    color: "yellow",
                    transition: "all 2s ease",
                  }}
              >
                Swap Now!
              </Button>
            </Stack>
          </Stack>
        </Container>
      </main>
    </div>
  );
}