import {
  Flex,
  HStack,
  VStack,
  Icon,
  Text,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";

function Profile() {
  return (
    <Center mt={10}>
      <Flex bg={"black"} w="80%" p={5} color="white" borderRadius="lg">
        <HStack spacing="15px">
          <Icon as={CgProfile} boxSize={10} />
          <Text fontSize="lg">{localStorage.getItem("nombre")}</Text>
        </HStack>

        <Spacer />
        <VStack spacing="15px">
          <HStack>
            <Text fontSize="lg">Plan:</Text>
            <Text fontSize="lg" color={"orange"}>
              {localStorage.getItem("plan")}
            </Text>
          </HStack>
          <HStack>
            <Text fontSize="lg">Estado:</Text>
            <Text fontSize="lg" color="green">
              {localStorage.getItem("estado")}
            </Text>
          </HStack>
        </VStack>

        <Spacer />
        <HStack spacing="15px">
          <Text fontSize="lg">Sede:</Text>
          <Text fontSize="lg" color="red">
            {localStorage.getItem("sede")}
          </Text>
        </HStack>
      </Flex>
    </Center>
  );
}

export default Profile;
