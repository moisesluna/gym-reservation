import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Center,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

function LoginBodyComponent() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if (
      localStorage.getItem("user") === user &&
      localStorage.getItem("password") === password
    ) {
      localStorage.setItem("session", "true");
      navigate("/Home");
    }
  };
  return (
    <Center>
      <Box bg={"orange"} w="100%" p={10} color="black" borderRadius="lg">
        <VStack>
          <FormControl>
            <FormLabel htmlFor="use">Username or Email Address</FormLabel>
            <Input
              id="use"
              type="text"
              bg="white"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <FormLabel htmlFor="pass">Password</FormLabel>
            <Input
              id="pass"
              type="password"
              bg="white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            color={"white"}
            bg="red"
            variant="solid"
            isFullWidth={true}
            onClick={() => handleClick()}
          >
            Iniciar Sesion
          </Button>
          <Button
            color={"white"}
            bg="orange.300"
            variant="outline"
            isFullWidth={true}
          >
            Registrate
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default LoginBodyComponent;
