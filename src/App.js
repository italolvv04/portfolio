import {
  Flex,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Spacer></Spacer>

        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            window.open('https://www.linkedin.com/in/italo-vieira/')
          }
        ></IconButton>

        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={() => window.open('https://www.instagram.com/italolvv/')}
        ></IconButton>

        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open('https://github.com/italolvv04')}
        ></IconButton>

        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>

      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
