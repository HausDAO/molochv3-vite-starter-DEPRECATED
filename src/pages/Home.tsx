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

export const Home = () => {
  const { chainId, provider, address } = useDHConnect();
  const daochain = "0x5";
  const { isIdle, isLoading, error, data, refetch } = useMemberRegistry({
    registryAddress: "0x664a32F97569b7EA0a1DdC118e2D50EA6507E289", // get from contracts
    userAddress: address,
    chainId: "0x5",
  });

  console.log("data", data);
  
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
          memberList={[
            "0xCED608Aa29bB92185D9b6340Adcbfa263DAe075b",
            "0x4C0a466DF0628FE8699051b3Ac6506653191cc21",
            "0xBaf6e57A3940898fd21076b139D4aB231dCbBc5f",
            "0x0EaBFFD8cE94ab2387fC44Ba32642aF0c58Af433",
            "0x08913515803c69EE3c2B8BdFF49Cf53Baa1694D6",
            "0x06535A967d958dEa135f6B50056362947AE5754b",
            "0xb4C3A698874B625DF289E97f718206701c1F4c0f",
            "0x60959Ed8307EE2b0d04306f6b319AEeE8864f1Ee",
          ]}
        />

        <ParMd>-----------------------</ParMd>
        <ParMd>Following is a table of members and seconds active</ParMd>
      </SingleColumnLayout>
    </TXBuilder>
  );
};
