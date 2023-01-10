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
import { useDao,useProposals } from "@daohaus/moloch-v3-context";

export const Dao = () => {
  const { chainId, address } = useDHConnect();
  const daochain = "0x64";
  const [isLoading, setIsLoading] = React.useState(false);

  const isConnectedToDao =
    chainId === daochain
      ? true
      : "You are not connected to the same network as the DAO";

  const { dao } = useDao();
  const { proposals } = useProposals();

  console.log(dao);
  console.log(proposals);

  return (
    <SingleColumnLayout>
      <H2>DAO overview</H2>
      <H5>
        active member propsals, useful stats, submit onchain document
        ratification ¯\_(ツ)_/¯
      </H5>
      <Link href="https://admin.daohaus.club/#/molochV3/0x5/0x7839755b77aadcd6a8cdb76248b3dddfa9b7f5f1">
        Link to DAO
      </Link>
    </SingleColumnLayout>
  );
};
