import React from "react";
import { useDHConnect } from "@daohaus/connect";
import { FormBuilder } from "@daohaus/form-builder";
import { TXBuilder } from "@daohaus/tx-builder";

import { FORM } from "../legos/forms";
import { ApproveButton } from "../components/Approve";
import { Avatar, Checkbox, ParMd, SingleColumnLayout } from "@daohaus/ui";

export const FormTest = () => {
  const { provider } = useDHConnect();
  const [isApproveDone, setIsApproveDone] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <TXBuilder
      provider={provider}
      chainId="0x64"
      daoId="0xc035dd7cda32ae73f0f306ed56658527aad47648"
      safeId="0x36824793440d1ab326b9b5634418393d5f5e30a3"
      appState={{}}
    >

      {!isApproveDone && (
        <SingleColumnLayout>
          <Checkbox title="I aggree to the manifesto and charter" onCheckedChange={()=>setIsChecked(true)} />

          <ApproveButton
            onSuccess={() => {
              setIsApproveDone(true);
              console.log("success");
            }}
          />
        </SingleColumnLayout>
      )}
      {isApproveDone && (
        <SingleColumnLayout>
          <img src='https://www.supducks.com/_next/static/media/volt-header.0fa4daef.png' />

          <FormBuilder form={FORM.ONBOARDER} targetNetwork="0x64" onSuccess={()=>{console.log("form")}} />
        </SingleColumnLayout>
      )}
    </TXBuilder>
  );
};
