import { Box, Text } from '@chakra-ui/react';
import SessionCheckHOC from "../../requests/SessionCheckHOC";

function NotFound() {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' w='100%' h='100%'>
      <Box h='auto'>
        <Box textAlign='center'>
          <Text as='h1' textDecoration='underline' textColor='customPurple' fontSize='3rem' lineHeight='1'>
            Página não encontrada!
          </Text>
          <Text as='h3' textColor='white' fontSize='1.875rem' lineHeight='2.25rem'>
            Voltando para página de login em 3 segundos!
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default SessionCheckHOC(NotFound, 3000);