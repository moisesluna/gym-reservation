import { Flex, Box, Text, Spacer, Icon, HStack } from '@chakra-ui/react'
import { BsFacebook, BsInstagram , BsTwitter} from 'react-icons/bs'


function Footer() {
    return (
    <Flex bg='black' color='white'>
      <Box p={5}>
        <Text fontSize='lg'>Quienes Somos?</Text>
        <Text fontSize='lg'>Contactanos</Text>
        <Text fontSize='lg'>FAQ</Text>
        <Text fontSize='lg' color='orange'>Trabaja Con Nosotros</Text>
      </Box >
      <Spacer/>
      <Box p={5}>
        <HStack>
          <Icon as={BsFacebook} />
          <Text fontSize='lg'>Facebook</Text>
        </HStack>
        <HStack>
          <Icon as={BsTwitter} />
          <Text fontSize='lg'>Twitter</Text>
        </HStack>
        <HStack>
          <Icon as={BsInstagram} />
          <Text fontSize='lg'>Instagram</Text>
        </HStack>
      </Box >
    </Flex>
    );
  };
  
  export default Footer;
  