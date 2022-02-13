import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Reserva() {
  const property = {
    imageUrl:
      "https://www.2playbook.com/uploads/s1/43/21/holmes-place-editada.jpeg",
    imageAlt: "Reservas",
    title:
      "Puedes realizar tu reserva para cualquier sede disponible segun tu plan",
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Reserva");
  };
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Button
            colorScheme="teal"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            onClick={() => handleClick()}
          >
            Reserva
          </Button>
        </Box>

        <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {property.title}
        </Text>
      </Box>
    </Box>
  );
}

export default Reserva;
