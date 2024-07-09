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
import TokensBalanceDisplay from "../../../frontend/app/components/tokensBalanceDisplay";
import zksync from "../../public/zksync.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <main className={styles.main}>
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 10, md: 20 }}
            py={{ base: 10, md: 20 }}
          >
            <Heading
              fontWeight={700}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Batch transactions, made
              <br />
              <Text as={"span"} fontWeight={700} color={"yellow.500"}>
                possible.
              </Text>
            </Heading>

            <Container centerContent maxW={"3xl"}>
              <Image
                src={zksync}
                alt="logo"
                width={400}
                height={400}
                onClick={() => router.push("/")}
              ></Image>
            </Container>

            <Text
              color={"white"}
              fontWeight={500}
              fontSize={{ base: "xl", sm: "xl", md: "2xl" }}
            >
              Save time and money by bundling transactions, combine multiple
              transactions into one and pay only one gas fee!
              <br />
            </Text>
            <Text
              color={"white"}
              fontWeight={500}
              fontSize={{ base: "xl", sm: "xl", md: "2xl" }}
            >
              Out of ETH? No worries! Pay in USDC and keep your transactions
              moving with our account abstraction product.
            </Text>
            <Text
              color={"red.100"}
              fontWeight={600}
              fontSize={{ base: "xl", sm: "xl", md: "2xl" }}
            >
              Not Enough Funds ? No need to worry ! Use our one-click LENDING & SWAP
              Protocols !! <br /> <br />

              Also manager would act as paymaster and will pay your gas fee!!!
              <br />
            </Text>

            {/* <TokensBalanceDisplay address={""} chain={"ETH_GOERLI"} /> */}

            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button
                fontSize="24px"
                transition={"all 0.3s ease"}
                colorScheme={"blue"}
                bgImage={
                  "linear-gradient(to right, RGB(220,77,1), RGB(234, 206, 9))"
                }
                fontWeight={700}
                border={"1"}
                rounded={"full"}
                px={12}
                py={8}
                _hover={{
                  border: "1px solid rgba(var(--primary-color), 0.5)",
                  color: "black",
                  transition: "all 2s ease",
                }}
                onClick={() => router.push("/your-zaaps")}
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
