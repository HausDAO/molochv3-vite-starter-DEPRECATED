import React from 'react';
import { useDHConnect } from '@daohaus/connect';
import { H2, Link, ParMd, SingleColumnLayout, Spinner } from '@daohaus/ui';
import styled from 'styled-components';
import { GatedButton } from '../components/GatedButton';
import { SecondsActiveUpdate } from '../components/SecondsActiveUpdate';
import { HausAnimated } from '../components/HausAnimated';
import { Trigger } from '../components/Trigger';



export const Home = () => {
  const { chainId, address } = useDHConnect();
  const daochain = "0x64";
  const [isLoading, setIsLoading] = React.useState(false);

  const isConnectedToDao =
    chainId === daochain
      ? true
      : 'You are not connected to the same network as the DAO';

  const handleTrigger = () => {}

  return (
    <SingleColumnLayout>
      <H2>Member Registry</H2>
    <Trigger onSuccess={()=>{alert('yay trigger')}} />
    <SecondsActiveUpdate onSuccess={()=>{alert('yay')}} />
    <ParMd>Following is a table of members and seconds active</ParMd>
    </SingleColumnLayout>
  );
};
