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

export const SecondsActiveUpdate = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  const daochain  = "0x64";
  const { fireTransaction } = useTxBuilder();
  const { chainId, address } = useDHConnect();
  const { errorToast, defaultToast, successToast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleUpdate = () => {

    setIsLoading(true);
    fireTransaction({
      tx: { ...ACTION_TX.UPDATE_SECONDS, staticArgs: [] } as TXLego,
      lifeCycleFns: {
        onTxError: (error) => {
          const errMsg = handleErrorMessage({
            error,
          });
          errorToast({ title: 'Update Failed', description: errMsg });
          setIsLoading(false);
        },
        onTxSuccess: () => {
          defaultToast({
            title: 'Update Success',
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
            title: 'Update Success',
            description: 'Seconds Updated',
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
      onClick={handleUpdate}
      // centerAlign
    >
      {isLoading ? <Spinner size="2rem" strokeWidth=".2rem" /> : 'Update Seconds'}
    </GatedButton>
  );
};