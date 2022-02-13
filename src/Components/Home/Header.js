import { Flex, Image, Spacer, Icon, Button } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("session", "false");
    navigate("/Login");
  };
  return (
    <Flex bg={"black"}>
      <Image
        boxSize="100px"
        src="https://thumbs.dreamstime.com/b/white-dumbbell-gym-logo-black-background-workout-sign-vector-template-172909186.jpg"
        alt="Gym"
        marginLeft={100}
      />
      <Spacer />
      <Button mt={7} bg={"black"} color={"white"} onClick={() => handleClick()}>
        <Icon as={FiLogOut} boxSize={12} />
      </Button>
    </Flex>
  );
}

export default Header;
