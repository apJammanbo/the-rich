import {
  Flex,
  Heading,
  SimpleGrid,
  GridItem,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.800', 'whiteAlpha.50');
  const Icon = useColorModeValue(
    <MoonIcon w={6} h={6} onClick={toggleColorMode} />,
    <SunIcon w={6} h={6} onClick={toggleColorMode} />
  );

  return (
    <Flex
      w="100%"
      position="sticky"
      top="0"
      borderBottom="1px"
      h="16"
      borderColor={borderColor}
      bg={bgColor}
      zIndex={3}
    >
      <SimpleGrid columns={13} spacing={0} w="100%" px="5">
        <GridItem colSpan={1}></GridItem>
        <GridItem colSpan={11} display="flex" justifyContent="center" alignItems="center">
          <Heading size="md">{`Dogfeet's Coins`}</Heading>
        </GridItem>
        <GridItem colSpan={1} display="flex" justifyContent="flex-end" alignItems="center">
          <IconButton aria-label="darkmode" variant="ghost" icon={Icon} />
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default Header;
