import { ConnectButton } from "@rainbow-me/rainbowkit";
// import styles from "../../styles/Navbar.module.css";
import { useRouter } from "next/navigation";
import styles from "../../styles/Home.module.css";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Menu,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ZKSYNC from "../../../public/zksync.png";
import { zkSync } from "wagmi/dist/chains";

export default function MainNavbar() {
  const router = useRouter();

  return (
    <>
      <Box
        bgImage={"linear-gradient(to right, rgb(247 255 0), rgb(182 49 167))"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box pl={6}>
            <Link  href="/">
              <Image
                src={ZKSYNC}
                alt="logo"
                width={64}
                height={64}
                onClick={() => router.push("/")}
              />
            </Link>
          </Box>

          <Flex>
            <Stack
              h={16}
              justifyContent={"space-between"}
              direction={"row"}
              fontSize={"18px"}
              spacing={24}
              display="flex"
              color={"black"}
              alignItems={"center"}
              fontWeight={700}
            >
              <Link
                _hover={{
                  color: "yellow.100",
                  transition: "all 1s ease",
                }}
                onClick={() => router.push("/bundle")}
              >
                Bundle Transactions
              </Link>
              <Link
                _hover={{
                  color: "purple.100",
                  transition: "all 1s ease",
                }}
                onClick={() => router.push("/bundler")}
              >
                Past Transactions
              </Link>
              <Link
                _hover={{
                  color: "purple.100",
                  transition: "all 1s ease",
                }}
                onClick={() => router.push("/howitworks")}
              >
                How it works
              </Link>
            </Stack>
          </Flex>

          <Flex padding={10}>
            <ConnectButton></ConnectButton>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
