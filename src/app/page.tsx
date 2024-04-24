"use client";

import { CrossmintNFTCollectionView } from "@crossmint/client-sdk-react-ui";

const wallets = [
  {
    chain: "solana",
    publicKey: "GHXgkurJcpJyxXz27QcHaYuQkZqHpR19hFAkYN24UH8u",
  },
  {
    chain: "ethereum",
    publicKey: "0x6C3b3225759Cbda68F96378A9F0277B4374f9F06",
  },
];

export default function yourPage() {
  return (
    <div style={{ height: "100vh" }}>
      <CrossmintNFTCollectionView wallets={wallets} environment="staging" />
    </div>
  );
}
