import { Heading, HStack, VStack, Flex, Text, Divider, useColorModeValue } from '@chakra-ui/react';
import { CurrentInfo } from '../../entities/CurrentInfo';

const DashBoard = ({ currentInfo }: { currentInfo: CurrentInfo }) => {
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
  const upColor = useColorModeValue('red.400', 'red.400');
  const downColor = useColorModeValue('blue.500', 'blue.500');
  const profitNLossPrice =
    currentInfo.korPrice +
    currentInfo.coinPrice -
    (currentInfo.depositPrice - currentInfo.withdrawPrice);

  return (
    <Flex w="full" p={2}>
      <VStack w="full" h="full" p={10} spacing={6} align="flex-start" bg={bgColor}>
        <VStack alignItems="flex-start" spacing={3}>
          <Heading size="lg">자산 현황</Heading>
        </VStack>

        <VStack spacing={4} alignItems="stretch" w="full">
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>입금</Text>
            <Heading size="sm">{`${currentInfo.depositPrice.toLocaleString()} 원`}</Heading>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>출금</Text>
            <Heading size="sm">{`${currentInfo.withdrawPrice.toLocaleString()} 원`}</Heading>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>보유원화</Text>
            <Heading size="sm">{`${currentInfo.korPrice.toLocaleString()} 원`}</Heading>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>보유코인</Text>
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
      </VStack>
    </Flex>
  );
};

export default DashBoard;
