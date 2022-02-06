import { Box, Center, Heading, VStack, Image } from '@chakra-ui/react'

function LoginTitleComponent() {
    return (
    <Box w='100%' p={10} color='black'>
      <Center>
        <VStack>
          <Image 
              borderRadius='full'
              boxSize='150px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov' />

          <Heading>
            Galactico
          </Heading>
        </VStack>
      </Center>
    </Box>
    );
  };
  
  export default LoginTitleComponent;
  