import { Card, CardBody, CardHeader, Flex, Heading } from "@chakra-ui/react";
import MarvelSvg from "../../components/MarvelSvg";
import TodoSvg from '../../components/TodoSvg';
import SessionCheckHOC from "../../requests/SessionCheckHOC";

function Home() {
  return (
    <Flex align="center" justify="center" height="100vh" className="w-4/5">
      <Card className="w-5/6 h-2/5 xl:w-2/5 xl:h-2/5">
        <CardHeader className="flex flex-col items-center justify-center">
          <Heading>Home</Heading>
        </CardHeader>
        <CardBody className="flex items-center justify-center">
          <TodoSvg />
          <MarvelSvg />
        </CardBody>
      </Card>
    </Flex>
  );
}

export default SessionCheckHOC(Home);