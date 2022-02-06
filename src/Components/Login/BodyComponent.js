import { Box, Center, VStack, FormControl, FormLabel, Input,Button} from '@chakra-ui/react'

function LoginBodyComponent() {
    return (
      <Center>
        <Box bg={'blackAlpha.100'} w='100%' p={10} color='black' borderRadius='lg'>
            <VStack>
            <FormControl>
              <FormLabel htmlFor='user'>Username or Email Address</FormLabel>
              <Input id='user' type='text' bg='white' />
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input id='password' type='password' bg='white' />
            </FormControl>
            <Button colorScheme='teal' variant='solid' isFullWidth={true}>
              Sing In
            </Button>
            <Button colorScheme='teal' variant='outline' isFullWidth={true}  bg='white' >
              Sing Up
            </Button>
            </VStack>

        </Box>
      </Center>
    );
  };
  
  export default LoginBodyComponent;
  