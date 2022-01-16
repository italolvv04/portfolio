import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiAndroid, DiReact, DiPython } from 'react-icons/di';

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      w="100%"
      maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          2
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Anos de Experiência{' '}
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: 'black.400' }}
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
            bg="green.200"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon color="black" p="4" as={DiAndroid} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Flutter Apps
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="yellow.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon as={DiPython} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Python
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
