import React from 'react';
import {
  handleErrorMessage,

  TXLego,
} from '@daohaus/utils';
import { useDHConnect } from '@daohaus/connect';
import { useTxBuilder } from '@daohaus/tx-builder';
import { Spinner, useToast } from '@daohaus/ui';

import { ACTION_TX } from '../legos/tx';
import { GatedButton } from './GatedButton';
import { CONTRACT } from '../legos/contract';


export const ApproveButton = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  const daochain  = "0x64";
  const { fireTransaction } = useTxBuilder();
  const { chainId, address } = useDHConnect();
  const { errorToast, defaultToast, successToast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleApprove = () => {

    setIsLoading(true);
    fireTransaction({
      tx: { ...ACTION_TX.APPROVE } as TXLego,
      lifeCycleFns: {
        onTxError: (error) => {
          const errMsg = handleErrorMessage({
            error,
          });
          errorToast({ title: 'Approve Failed', description: errMsg });
          setIsLoading(false);
        },
        onTxSuccess: () => {
          setIsLoading(false);
          onSuccess();
          defaultToast({
            title: 'Approve Success',
            description: 'Please wait for subgraph to sync',
          });
        },
        
      },
    });
  };

  const isConnectedToDao =
    chainId === daochain
      ? true
      : 'You are not connected to the same network as the DAO';


  return (
    <GatedButton
      color="secondary"
      rules={[isConnectedToDao]}
      onClick={handleApprove}
      // centerAlign
    >
      {isLoading ? <Spinner size="2rem" strokeWidth=".2rem" /> : 'Approve'}
    </GatedButton>
  );
};