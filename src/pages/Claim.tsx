import React from "react";
import { useDHConnect } from "@daohaus/connect";
import {
  H2,
  H3,
  H5,
  Link,
  ParMd,
  SingleColumnLayout,
  Spinner,
} from "@daohaus/ui";
import styled from "styled-components";
import { GatedButton } from "../components/GatedButton";
import { SecondsActiveUpdate } from "../components/SecondsActiveUpdate";
import { HausAnimated } from "../components/HausAnimated";
import { Trigger } from "../components/Trigger";
import { ClaimButton } from "../components/ClaimButton";
import { TXBuilder } from "@daohaus/tx-builder";

export const Claim = () => {
  const { chainId, provider, address } = useDHConnect();
  const daochain = "0x5";
  const [isLoading, setIsLoading] = React.useState(false);

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
        <H2>Claim Governance</H2>
        <H5>
          PG members can claim to become member of the dao and have voting and
          execution rights.
        </H5>

        <ClaimButton
          onSuccess={() => {
            alert("yay");
          }}
        />
      </SingleColumnLayout>
    </TXBuilder>
  );
};
