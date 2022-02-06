import TitleComponent from "../Components/Login/TitleComponent.js"
import BodyComponent from "../Components/Login/BodyComponent.js"
import { Box, Center } from '@chakra-ui/react'

function Login() {
    return (
        <Center isTruncated={true} marginTop={2}>
            <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p={5}>
                <TitleComponent>
                </TitleComponent>
                <BodyComponent>
                </BodyComponent>
            </Box>
        </Center>
    );
  }
  
  export default Login;
  