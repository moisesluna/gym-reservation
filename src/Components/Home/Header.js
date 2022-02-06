import { Flex, Image, Spacer, Icon } from '@chakra-ui/react'
import { FiLogOut} from 'react-icons/fi'

function Header() {
    return (
    <Flex>
        <Image 
          boxSize='100px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov' />
        <Spacer/>
        <Icon as={FiLogOut} boxSize={12} m={5}/>
    </Flex>
    );
  };
  
  export default Header;
  