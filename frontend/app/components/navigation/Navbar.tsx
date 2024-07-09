import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Links = [
  "Withdraw-Swap-Send",
  "Borrow-Swap-Send",
  "Withdraw-Swap-Deposit",
];



export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>

          {/* Link Names defined above */}
          <HStack spacing={6} alignItems={"center"}>
            <Box fontSize={"lg"} color={"orange.600"} fontWeight={800}>
              ZksyncDefiTogether
            </Box>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
              fontSize="md"
              color="gray.800"
              fontWeight={500}
            >
              <Link
                _hover={{
                  padding: "1",
                  backgroundColor: "orange",
                  transition: "all 1s ease",
                }}
                onClick={() => router.push("/bundler/wss")}
              >
                Withdraw-Swap-Send
              </Link>
              <Link
                _hover={{
                  padding: "1",
                  backgroundColor: "orange",
                  transition: "all 1s ease",
                }}
                onClick={() => router.push("/bundler/bss")}
              >
                Borrow-Swap-Send
              </Link>
              <Link
                _hover={{
                  padding: "1",
                  backgroundColor: "orange",
                  transition: "all 1s ease",
                }}
                onClick={() => router.push("/bundler/wsd")}
              >
                Winthdraw-Swap-Deposit
              </Link>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
