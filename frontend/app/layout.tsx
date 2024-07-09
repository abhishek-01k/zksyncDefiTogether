"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Web3Context from "./context/Web3Context";
import { PowerStoneNft } from "./types/powerStoneNft";
import { Contract, Web3Provider, Signer } from "zksync-ethers";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import { ChakraProvider } from '@chakra-ui/react';
import "@rainbow-me/rainbowkit/styles.css";
import React, { FC, useState } from "react";
import { ethers } from "ethers";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  zkSync,
  zkSyncTestnet,
  goerli,
  sepolia,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import MainLayout from "../layout/mainLayout";
import dynamic from "next/dynamic";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [greeterContractInstance, setGreeterContractInstance] =
    useState<Contract | null>(null);
  const [greeting, setGreetingMessage] = useState<string>("");
  const [nfts, setNfts] = useState<PowerStoneNft[]>([]);
  const [signer, setSigner] = useState<Signer | null>(null);



  const { chains, provider } = configureChains(
    [
      mainnet,
      zkSync,
      zkSyncTestnet,
      goerli,
    ],
    [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "zkSyncDefiTogether",
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <html lang="en">
      <ChakraProvider>
        <Web3Context.Provider
          value={{
            greeterContractInstance,
            setGreeterContractInstance,
            greeting,
            setGreetingMessage,
            nfts,
            setNfts,
            provider,
            signer,
            setSigner,
          }}
        >
          <body className={inter.className}>
            <WagmiConfig client={wagmiClient}>
              <RainbowKitProvider
                modalSize="compact"
                initialChain={zkSyncTestnet}
                chains={chains}
              >
                <Navbar />
                {children}
                <Footer />
              </RainbowKitProvider>
            </WagmiConfig>
          </body>
        </Web3Context.Provider>
      </ChakraProvider>
    </html>
  );
}
