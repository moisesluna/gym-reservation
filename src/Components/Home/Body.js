import { Box, Divider, Center } from "@chakra-ui/react";
import Profile from "./Profile.js";
import Maquinas from "./Maquinas.js";
import Reserva from "./Reserva.js";

function Body() {
  return (
    <Box>
      <Profile />
      <Center height="50px">
        <Divider w="50%" />
      </Center>
      <Center>
        <Reserva />
      </Center>
      <Center height="50px">
        <Divider w="50%" />
      </Center>
      <Center>
        <Maquinas />
      </Center>
    </Box>
  );
}

export default Body;
