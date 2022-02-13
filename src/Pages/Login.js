import TitleComponent from "../Components/Login/TitleComponent.js";
import BodyComponent from "../Components/Login/BodyComponent.js";
import { Box, Center } from "@chakra-ui/react";

function saveData() {
  localStorage.setItem("user", "moises.luna@vasslatam.com");
  localStorage.setItem("password", "luna");
  localStorage.setItem("plan", "Diamante");
  localStorage.setItem("estado", "Activo");
  localStorage.setItem("sede", "Centro Comercial Titan");
  localStorage.setItem("nombre", "Moises Luna");
  localStorage.setItem("session", "false");
  localStorage.setItem("reservas", JSON.stringify([]));
}
function Login() {
  saveData();
  return (
    <Center isTruncated={true} marginTop={2}>
      <Box
        bg={"blackAlpha.900"}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
      >
        <TitleComponent></TitleComponent>
        <BodyComponent></BodyComponent>
      </Box>
    </Center>
  );
}

export default Login;
