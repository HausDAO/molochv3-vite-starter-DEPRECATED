import React from "react";
import { useDHConnect } from "@daohaus/connect";
import { H2, Link, ParMd, SingleColumnLayout, Spinner } from "@daohaus/ui";
import styled from "styled-components";
import { GatedButton } from "../components/GatedButton";
import { SecondsActiveUpdate } from "../components/SecondsActiveUpdate";
import { HausAnimated } from "../components/HausAnimated";
import { Trigger } from "../components/Trigger";
import { TXBuilder } from "@daohaus/tx-builder";

export const Home = () => {
  const { chainId, provider, address } = useDHConnect();
  const daochain = "0x64";
  const [isLoading, setIsLoading] = React.useState(false);

  const isConnectedToDao =
    chainId === daochain
      ? true
      : "You are not connected to the same network as the DAO";

  const handleTrigger = () => {};

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
        updated periodically to track member activity. This registry informs the
        automatic compensation distro.
      </ParMd>

      <Trigger
        onSuccess={() => {
          alert("yay trigger");
        }}
        memberList={["0xCED608Aa29bB92185D9b6340Adcbfa263DAe075b",
          "0x4C0a466DF0628FE8699051b3Ac6506653191cc21",
          "0xBaf6e57A3940898fd21076b139D4aB231dCbBc5f"]}
      />

      <ParMd>-----------------------</ParMd>
      <ParMd>Following is a table of members and seconds active</ParMd>
    </SingleColumnLayout>
    </TXBuilder>
  );
};
