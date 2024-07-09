"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Web3Context from "./context/Web3Context";
import { PowerStoneNft } from "./types/types";
import { Contract, Web3Provider, Signer } from "zksync-ethers";
import MainNavbar from "./components/navigation/MainNavbar";
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
  const [provider, setProvider] = useState<Web3Provider | null>(null);


  const rainbow = configureChains(
    [
      mainnet,
      zkSync,
      // zkSyncTestnet,
      goerli,
    ],
    [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string }), publicProvider()]
  );

  const chains = rainbow?.chains;
  const rainbowprovider = rainbow?.provider;

  const { connectors } = getDefaultWallets({
    appName: "zkSyncDefiTogether",
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider: rainbowprovider,
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
            setProvider,
            signer,
            setSigner,
          }}
        >
          <body className={inter.className}>
            <WagmiConfig client={wagmiClient}>
              <RainbowKitProvider
                modalSize="compact"
                initialChain={zkSync}
                chains={chains}
              >
                <MainNavbar />
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
