import React from "react";
import { useDHConnect } from "@daohaus/connect";
import { H2, Link, ParMd, SingleColumnLayout, Spinner } from "@daohaus/ui";
import styled from "styled-components";
import { GatedButton } from "../components/GatedButton";
import { SecondsActiveUpdate } from "../components/SecondsActiveUpdate";
import { HausAnimated } from "../components/HausAnimated";
import { Trigger } from "../components/Trigger";
import { TXBuilder } from "@daohaus/tx-builder";
import { CONTRACT } from "../legos/contract";
import { useMemberRegistry } from "../hooks/useRegistry";

export const HAUS_RPC = {
  "0x1": `https://787b6618b5a34070874c12d7157e6661.eth.rpc.rivet.cloud/`,
  "0x5": `https://787b6618b5a34070874c12d7157e6661.goerli.rpc.rivet.cloud/`,
  "0x64": "https://rpc.gnosischain.com/",
  "0xa": "https://mainnet.optimism.io",
  "0x89": "https://polygon-rpc.com/",
  "0xa4b1": "https://arb1.arbitrum.io/rpc",
  "0xa4ec": "https://forno.celo.org",
};

export const Home = () => {
  const { chainId, provider, address } = useDHConnect();
  const daochain = "0x5";
  const { isIdle, isLoading, error, data, refetch } = useMemberRegistry({
    registryAddress: "0x664a32F97569b7EA0a1DdC118e2D50EA6507E289", // get from contracts
    userAddress: address,
    chainId: "0x5",
    rpcs: HAUS_RPC,
  });  

  const isConnectedToDao =
    chainId === daochain
      ? true
      : "You are not connected to the same network as the DAO";

  return (
    <TXBuilder
      provider={provider}
      chainId="0x5"
      daoId="0x7839755b77aadcd6a8cdb76248b3dddfa9b7f5f1"
      safeId="0xaccd85e73639b5213a001630eb2512dbd6292e32"
      appState={{}}
    >
      <SingleColumnLayout>
        <H2>PG Member Registry</H2>
        <ParMd>
          Protocol guild keeps a onchain registry of active members which is
          updated periodically to track member activity. This registry informs
          the automatic compensation distro.
        </ParMd>

        <Trigger
          onSuccess={() => {
            alert("yay trigger");
          }}
          memberList={data?.members}
        />

        <ParMd>-----------------------</ParMd>
        <ParMd>Following is a table of members and seconds active</ParMd>
      </SingleColumnLayout>
    </TXBuilder>
  );
};
