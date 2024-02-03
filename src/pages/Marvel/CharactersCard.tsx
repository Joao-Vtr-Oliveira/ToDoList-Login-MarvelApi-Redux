import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { CharacterType } from "../../types/CharacterType";
import { Link } from "react-router-dom";

export function CharactersCard({ data }: { data: CharacterType }) {
  return (
    <Card
      bg="black"
      height="100%"
    >
      <Link to={`/marvel/${data.id}`}>
        <CardHeader>
          <Heading color="white" textAlign="center">
            {data.name}
          </Heading>
        </CardHeader>
        <CardBody display="flex" alignItems="center" justifyContent="center">
          <Image
            width="100%"
            height={'500px'}
            borderRadius='0.25rem'
            src={`${data.thumbnail.path}/portrait_fantastic.${data.thumbnail.extension}`}
            alt={data.name}
          />
        </CardBody>
        <CardFooter>
          <Text textAlign="center" color="white">
            {data.description ? data.description : "Sem descrição."}
          </Text>
        </CardFooter>
      </Link>
    </Card>
  );
}

export default CharactersCard;