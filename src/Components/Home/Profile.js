import { Flex, HStack, VStack, Icon, Text, Spacer, Center } from '@chakra-ui/react'
import { CgProfile} from 'react-icons/cg'

function Profile() {
    return (
        <Center mt={10}>
        <Flex bg={'blackAlpha.500'} w='80%' p={5} color='black' borderRadius='lg'>
            <HStack spacing='15px'>
               <Icon as={CgProfile} boxSize={10}/>
                <Text fontSize='lg'>Moises Luna</Text>
            </HStack>
            
         <Spacer />
            <VStack spacing='15px'>
                <Text fontSize='lg'>Plan: Diamante</Text>
                <Flex>
                    <Text fontSize='lg'>Estado:</Text>
                    <Text fontSize='lg' color='green'>Activo</Text>
                </Flex>                
            </VStack>
            
  <Spacer />
            <HStack spacing='15px'>
                <Text fontSize='lg'>Sede:</Text>
                <Text fontSize='lg' color='red'>Centro Comercial Titan</Text>
            </HStack>  
        </Flex>
        </Center>
    );
  };
  
  export default Profile;
  