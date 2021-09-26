import { Heading, HStack, VStack, Flex, Text, Divider, useColorModeValue } from '@chakra-ui/react';
import { CurrentInfo } from '../../entities/CurrentInfo';

const CoinBoard = ({ currentInfo }: { currentInfo: CurrentInfo }) => {
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
  const upColor = useColorModeValue('red.400', 'red.400');
  const downColor = useColorModeValue('blue.500', 'blue.500');
  const profitNLossPrice = currentInfo.coinPrice - currentInfo.coinBuyPrice;
  const profitNLossRatio = (profitNLossPrice / currentInfo.coinBuyPrice) * 100;

  return (
    <Flex w="full" p={2}>
      <VStack w="full" h="full" p={10} spacing={6} align="flex-start" bg={bgColor}>
        <VStack alignItems="flex-start" spacing={3}>
          <Heading size="lg">코인 현황</Heading>
        </VStack>

        <VStack spacing={4} alignItems="stretch" w="full">
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>구매금액</Text>
            <Heading size="sm">{`${currentInfo.coinBuyPrice.toLocaleString()} 원`}</Heading>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>현재금액</Text>
            <Heading size="sm">{`${currentInfo.coinPrice.toLocaleString()} 원`}</Heading>
          </HStack>
        </VStack>
        <Divider />
        <HStack justifyContent="space-between" w="full">
          <Text>손익</Text>
          <Heading size="lg" color={profitNLossPrice > 0 ? upColor : downColor}>
            {`${profitNLossPrice.toLocaleString()} 원`}
          </Heading>
        </HStack>
        <HStack justifyContent="space-between" w="full">
          <Text>수익률</Text>
          <Heading size="lg" color={profitNLossRatio > 0 ? upColor : downColor}>
            {`${profitNLossRatio.toLocaleString()} %`}
          </Heading>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default CoinBoard;
