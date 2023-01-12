import React from "react";
import { handleErrorMessage, TXLego } from "@daohaus/utils";
import { useDHConnect } from "@daohaus/connect";
import { useTxBuilder } from "@daohaus/tx-builder";
import { Spinner, useToast } from "@daohaus/ui";

import { ACTION_TX } from "../legos/tx";
import { GatedButton } from "./GatedButton";

export const Trigger = ({
  onSuccess,
  memberList,
}: {
  onSuccess: () => void;
  memberList: any;
}) => {
  const daochain = "0x5";
  const { fireTransaction } = useTxBuilder();
  const { chainId, address } = useDHConnect();
  const { errorToast, defaultToast, successToast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleTrigger = () => {
    console.log("memberList", memberList);
    const sortedMemberList = memberList
      .map((member: any) => member.account)
      .sort((a: string, b: string) => {
        return parseInt(a.slice(2), 16) - parseInt(b.slice(2), 16);
      });
    setIsLoading(true);
    fireTransaction({
      tx: { ...ACTION_TX.TRIGGER, staticArgs: [sortedMemberList] } as TXLego,
      lifeCycleFns: {
        onTxError: (error) => {
          const errMsg = handleErrorMessage({
            error,
          });
          errorToast({ title: "Trigger Failed", description: errMsg });
          setIsLoading(false);
        },
        onTxSuccess: () => {
          defaultToast({
            title: "Trigger Success",
            description: "Please wait for subgraph to sync",
          });
        },
        onPollError: (error) => {
          const errMsg = handleErrorMessage({
            error,
          });
          errorToast({ title: "Poll Error", description: errMsg });
          setIsLoading(false);
        },
        onPollSuccess: () => {
          successToast({
            title: "Trigger Success",
            description: "Trigger success",
          });
          setIsLoading(false);
          onSuccess();
        },
      },
    });
  };

  const isConnectedToDao =
    chainId === daochain
      ? true
      : "You are not connected to the same network as the DAO";

  return (
    <GatedButton
      color="secondary"
      rules={[isConnectedToDao]}
      onClick={handleTrigger}
      // centerAlign
    >
      {isLoading ? (
        <Spinner size="2rem" strokeWidth=".2rem" />
      ) : (
        "Trigger Split"
      )}
    </GatedButton>
  );
};
