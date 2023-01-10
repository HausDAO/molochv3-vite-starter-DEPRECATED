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

export const ClaimButton = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  const daochain  = "0x5";
  const { fireTransaction } = useTxBuilder();
  const { chainId, address } = useDHConnect();
  const { errorToast, defaultToast, successToast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClaim = () => {

    setIsLoading(true);
    fireTransaction({
      tx: { ...ACTION_TX.CLAIM, staticArgs: [] } as TXLego,
      lifeCycleFns: {
        onTxError: (error) => {
          const errMsg = handleErrorMessage({
            error,
          });
          errorToast({ title: 'Claim Failed', description: errMsg });
          setIsLoading(false);
        },
        onTxSuccess: () => {
          defaultToast({
            title: 'Claim Success',
            description: 'Please wait for subgraph to sync',
          });
        },
        onPollError: (error) => {
          const errMsg = handleErrorMessage({
            error,
          });
          errorToast({ title: 'Poll Error', description: errMsg });
          setIsLoading(false);
        },
        onPollSuccess: () => {
          successToast({
            title: 'Claim Success',
            description: 'Share Claimed in DAO',
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
      : 'You are not connected to the same network as the DAO';


  return (
    <GatedButton
      color="secondary"
      rules={[isConnectedToDao]}
      onClick={handleClaim}
      // centerAlign
    >
      {isLoading ? <Spinner size="2rem" strokeWidth=".2rem" /> : 'Claim'}
    </GatedButton>
  );
};