import { Avatar, H2, Link, ParMd, SingleColumnLayout } from '@daohaus/ui';
import styled from 'styled-components';
import { HausAnimated } from '../components/HausAnimated';

const LinkBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export const Home = () => {
  return (
    <SingleColumnLayout>
      <H2>Cool duck says Sup!</H2>
      <Avatar size='16rem' src='https://www.supducks.com/_next/static/media/primary_duck.5d5476e7.png' />
      <ParMd style={{ marginBottom: '2.4rem' }}>
        Welcome to the onboarder example
      </ParMd>
      <LinkBox>
        <Link href="https://admin.daohaus.fun/#/molochv3/0x64/0x8dcc8cdbfb97200bd08e05f580c236b3ac655fd8">Go to the dao</Link>
      </LinkBox>
    </SingleColumnLayout>
  );
};
