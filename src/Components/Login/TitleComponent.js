import { Box, Center, Heading, VStack, Image } from "@chakra-ui/react";

function LoginTitleComponent() {
  return (
    <Box w="100%" p={10} color="black">
      <Center>
        <VStack>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://thumbs.dreamstime.com/b/white-dumbbell-gym-logo-black-background-workout-sign-vector-template-172909186.jpg"
            alt="Gym"
          />
          <Heading color={"white"}>WorkOut Centre</Heading>
        </VStack>
      </Center>
    </Box>
  );
}

export default LoginTitleComponent;
