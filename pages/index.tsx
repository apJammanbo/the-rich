import { VStack, Container } from '@chakra-ui/react';
import Header from '../src/header';
import CoinBoard from '../src/sections/coinboard';
import DashBoard from '../src/sections/dashboard';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import { CurrentInfo } from '../entities/CurrentInfo';
import { useEffect, useState } from 'react';

const IndexPage = ({ currentInfo: firstInfo }: { currentInfo: CurrentInfo }) => {
  const [info, setInfo] = useState(firstInfo);

  const getData = async () => {
    const currentInfo = await getCurrentInfo();
    setInfo(currentInfo);
  };

  useEffect(() => {
    const interval = setInterval(getData, 5000);
    return function cleanup() {
      clearInterval(interval);
    };
  });

  return (
    <>
      <Header />
      <Container maxW="container.xl">
        {info ? (
          <VStack py={[2, 10, 10]} px={[0, 46, 46]}>
            <DashBoard currentInfo={info} />
            <CoinBoard currentInfo={info} />
          </VStack>
        ) : null}
      </Container>
    </>
  );
};

const GET_CURRENT_INFO = gql`
  query {
    getCurrentInfo {
      korPrice
      withdrawPrice
      depositPrice
      coinPrice
      coinBuyPrice
    }
  }
`;

const getCurrentInfo = async () => {
  const { data } = await client.query({
    query: GET_CURRENT_INFO,
    fetchPolicy: 'network-only',
  });
  return data.getCurrentInfo;
};

export const getStaticProps = async () => {
  const currentInfo = await getCurrentInfo();

  return {
    props: {
      currentInfo,
    },
    revalidate: 5,
  };
};

export default IndexPage;
