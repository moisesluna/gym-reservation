import Header from "../Components/Home/Header.js";
import Body from "../Components/Home/Body.js";
import Footer from "../Components/Home/Footer.js";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("session") == "false") {
      navigate("/Login");
    }
  });

  return (
    <Box>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </Box>
  );
}

export default Home;
