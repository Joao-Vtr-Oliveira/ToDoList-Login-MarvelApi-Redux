import { Card, CardBody, CardHeader, Flex, Heading } from "@chakra-ui/react";
import MarvelSvg from "../../components/MarvelSvg";
import TodoSvg from '../../components/TodoSvg';
import SessionCheckHOC from "../../requests/SessionCheckHOC";

function Home() {
  return (
    <Flex align="center" justify="center" height="100vh" w='80%'>
      <Card w={['83.333333%', '83.333333%', '83.333333%', '83.333333%', '40%']} h={['40%']}>
        <CardHeader display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
          <Heading>Home</Heading>
        </CardHeader>
        <CardBody display='flex' alignItems='center' justifyContent='center'>
          <TodoSvg />
          <MarvelSvg />
        </CardBody>
      </Card>
    </Flex>
  );
}

export default SessionCheckHOC(Home);