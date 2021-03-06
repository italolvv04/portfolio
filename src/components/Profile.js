import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiAndroid, DiReact } from 'react-icons/di';
import { RiVuejsLine } from 'react-icons/ri';

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      pt={8}
      pb={8}
      w="100%"
      maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}
    >
      <Box alignSelf="center" pt={isNotSmallerScreen ? '32' : '10'} px={32}>
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl" flex={1} align="center" justify="center">
          2
        </Heading>
        <Text fontSize="2xl" color="gray.400" flex={1} align="center" justify="center">
          Anos de Experiência{' '}
        </Text>
      </Box>
      <Box alignSelf="center" pt="8">
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="green.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            align="center"
            _hover={{ bg: 'black.400' }}
          >
            <Icon as={RiVuejsLine} p="4" w="24" h="24" color="white" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Vue
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="blue.300"
            h="30vh"
            w="30vh"
            justify="flex-end"
            align="center"
          >
            <Icon color="white" p="4" as={DiReact} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              React
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="green.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            align="center"
          >
            <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              React Native
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
