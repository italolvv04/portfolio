import Icon from '@chakra-ui/icon';
import { HStack } from '@chakra-ui/layout';
import React from 'react';
import { FaFigma } from 'react-icons/fa';
import { DiCss3, DiHtml5, DiJavascript1 } from 'react-icons/di';
import { Flex } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';

function Social() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <HStack spacing="24">
      <Flex
        rounded="xl"
        direction="column"
        mt={4}
        ml={isNotSmallerScreen ? 4 : 0}
        bg="orange.300"
        h="6vh"
        w="6vh"
        justify="flex-end"
      >
        <Icon as={DiHtml5} boxSize="50" />
      </Flex>

      <Flex
        rounded="xl"
        direction="column"
        mt={4}
        ml={isNotSmallerScreen ? 4 : 0}
        bg="blue.400"
        h="6vh"
        w="6vh"
        justify="flex-end"
      >
        <Icon as={DiCss3} boxSize="50" />
      </Flex>

      <Flex
        rounded="xl"
        direction="column"
        mt={4}
        ml={isNotSmallerScreen ? 4 : 0}
        bg="yellow.400"
        h="6vh"
        w="6vh"
        justify="flex-end"
      >
        <Icon as={DiJavascript1} boxSize="50" />
      </Flex>

      <Flex
        rounded="xl"
        direction="column"
        mt={4}
        ml={isNotSmallerScreen ? 4 : 0}
        bg="red.300"
        h="6vh"
        w="6vh"
        justify="flex-end"
      >
        <Icon as={FaFigma} boxSize="50" />
      </Flex>
    </HStack>
  );
}

export default Social;
