import { Box, Image } from "@chakra-ui/react";

function Maquinas() {
  const property = {
    imageUrl:
      "https://virtualbackgrounds.site/wp-content/uploads/2020/09/modern-home-gym-1536x864.jpg",
    imageAlt: "Maquinas",
    title: "Si entrenas duro, no solo serás duro, serás duro de superar.",
    formattedPrice:
      "Posees total disponibilidad de nuestras maquinas para mantener tu cuerpo y mente muy saludable.",
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {property.title}
        </Box>

        <Box>{property.formattedPrice}</Box>
      </Box>
    </Box>
  );
}

export default Maquinas;
