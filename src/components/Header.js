import React from 'react';
import { Flex, Stack, Box, Text, Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <div>
      <Stack>
        <Flex
          direction={isNotSmallerScreen ? 'row' : 'column'}
          spacing="200px"
          p={isNotSmallerScreen ? '32' : '0'}
          alignSelf="flex-start"
        >
          <Box mt={isNotSmallerScreen ? '0' : 16} align="flex-start">
            <Text fontSize="5xl" fontWeight="semibold">
              Hi, I am
            </Text>
            <Text
              fontSize="7xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
              bgClip="text"
            >
              Italo Vieira
            </Text>
            <Text color={isDark ? 'gray.200' : 'gray.500'}>
              Desenvolvedor Front End & Mobile 🗣
            </Text>
            <Button
              mt={8}
              colorScheme="blue"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5562984353561')}
            >
              Entrar em contato
            </Button>
          </Box>
          <Image
            alignSelf="center"
            ml={12}
            mt={isNotSmallerScreen ? '0' : '12'}
            mb={isNotSmallerScreen ? '0' : '12'}
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="lg"
            boxSize="300px"
            src="https://avatars.githubusercontent.com/u/54339309?s=400&u=baad752e2f2518cb0a477b3b54b43110f215f8e1&v=4"
          />
        </Flex>
      </Stack>
    </div>
  );
}

export default Header;