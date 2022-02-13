import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import {
  Box,
  Image,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Center,
  Heading,
  VStack,
  Select,
  Text,
  HStack,
} from "@chakra-ui/react";

function Body() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [sede, setSede] = useState("");
  const [hora, setHora] = useState("");
  const [reserv, setReserv] = useState([]);
  const size = localStorage.getItem("reservas").length > 0;

  const handleClick = () => {
    if (startDate < new Date()) {
      alert("Seleccione una fecha posterior a la actual");
    } else if (sede === "") {
      alert("Seleccione una sede");
    } else if (hora === "") {
      alert("Seleccione una hora");
    } else {
      const x = JSON.parse(localStorage.getItem("reservas"));

      var flag = false;
      for (let value of x) {
        var a = new Date(value.dt_ini.toString());
        var b = startDate;
        if (a.valueOf() === b.valueOf()) {
          flag = true;
        }
      }

      if (!flag) {
        const obj = { sede: sede, dt_ini: startDate, time: hora };
        x.push(obj);
        localStorage.setItem("reservas", JSON.stringify(x));
        setReserv(JSON.parse(localStorage.getItem("reservas")));
      } else {
        alert("Ya tiene reserva para este dia");
      }
    }
  };

  const volver = () => {
    navigate("/Home");
  };

  useEffect(() => {
    if (localStorage.getItem("session") == "false") {
      navigate("/Login");
    }
  });

  return (
    <Center>
      <VStack p={3}>
        <Box mt={"10"}>
          <Button colorScheme="blue" onClick={() => volver()}>
            Volver
          </Button>
          <Flex>
            <Image
              src="https://virtualbackgrounds.site/wp-content/uploads/2020/09/modern-home-gym-1536x864.jpg"
              alt="algo"
              maxW="md"
              borderRadius="lg"
              flex={1}
              overflow="hidden"
            />
            <Box maxW="md" borderRadius="lg" flex={1} bg="blackAlpha.500">
              <VStack borderWidth="1px" borderRadius="lg">
                <Heading
                  as="h1"
                  size="md"
                  bg={"orange"}
                  color={"orange.900"}
                  w={"100%"}
                  p={3}
                  fontWeight="semibold"
                  lineHeight="tight"
                >
                  Reserva tu dia de entrenamiento
                </Heading>
                <FormControl p={3} w={"70%"}>
                  <FormLabel htmlFor="sede">Sede</FormLabel>
                  <Select
                    id="sede"
                    bg={"white"}
                    value={sede}
                    onChange={(e) => setSede(e.target.value)}
                    placeholder="Seleccione opcion"
                  >
                    <option value="Titan">Titan</option>
                    <option value="Portal 80">Portal 80</option>
                    <option value="Santa Fe">Santa Fe</option>
                  </Select>
                  <FormLabel htmlFor="fecha">fecha</FormLabel>
                  <DatePicker
                    id="fecha"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    strictParsing
                  />
                  <FormLabel htmlFor="hora">hora</FormLabel>

                  <Select
                    id="hora"
                    bg={"white"}
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    placeholder="Hora"
                  >
                    <option value="7:00">7:00</option>
                    <option value="8:00">8:00</option>
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                  </Select>
                </FormControl>

                <Button
                  color="white"
                  bg={"red"}
                  variant="solid"
                  isFullWidth={true}
                  onClick={() => handleClick()}
                >
                  Guardar
                </Button>
              </VStack>
            </Box>
          </Flex>
        </Box>
        {reserv.length > 0 ? (
          <VStack
            mt={10}
            p={3}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={"black"}
          >
            <Center
              bg={"red"}
              w={"100%"}
              color="white"
              borderWidth="1px"
              borderRadius="lg"
              borderColor={"black"}
            >
              <Text>Reservas Pendientes</Text>
            </Center>
            {reserv.map((reserva, idx) => {
              return (
                <HStack key={idx} p={1}>
                  <Text bg={"black"} color="white" padding="1">
                    SEDE:
                  </Text>
                  <Text padding="1">{reserva.sede}</Text>

                  <Text bg={"black"} color="white" padding="1">
                    FECHA:
                  </Text>
                  <Text padding="1">{reserva.dt_ini}</Text>

                  <Text bg={"black"} color="white" padding="1">
                    HORA:
                  </Text>
                  <Text padding="1">{reserva.time}</Text>
                </HStack>
              );
            })}
          </VStack>
        ) : (
          <></>
        )}
      </VStack>
    </Center>
  );
}

export default Body;
