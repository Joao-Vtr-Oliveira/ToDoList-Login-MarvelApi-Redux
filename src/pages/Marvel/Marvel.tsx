import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import CharactersCard from "./CharactersCard";
import { CharacterType } from "../../types/CharacterType";
import SessionCheckHOC from "../../requests/SessionCheckHOC";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { incrementOffsetByAmount, marvelReduxRequest } from "../../store/reducer/MarvelSlice";

function Marvel() {

  const offset = useSelector((state: RootState) => state.marvel.offset);
  const characters = useSelector((state: RootState) => state.marvel.data);
  const dispatch = useDispatch<AppDispatch>();
  
  React.useEffect(() => {
    dispatch(marvelReduxRequest(offset));
  }, [offset]);
  
  console.log(characters);
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPages = 1563;

    for (let i = offset - 20; i <= offset + 70 && i <= totalPages; i += 10) {
      if (i > 0) {
        pageNumbers.push(
          <div
            key={i}
            onClick={() => dispatch(incrementOffsetByAmount((i)))}
            style={{
              fontSize: "20px",
              cursor: "pointer",
              fontWeight: i === offset ? "bold" : "normal",
              margin: "0 5px",
            }}
          >
            {i}
          </div>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <Flex
      align="center"
      direction="column"
      justify="center"
      height="100vh"
      overflow="hidden"
    >
      <Card
        width="100%"
        maxW="1000px"
        height={{ base: "100vh", md: "90vh" }}
        overflowY="auto"
      >
        <CardHeader className="flex flex-col items-center justify-center">
          <Heading>Marvel Characters</Heading>
        </CardHeader>
        <CardBody borderRadius={6}>
          <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
            {characters &&
              characters.data.results.map((character: CharacterType, index) => (
                <GridItem key={index}>
                  <CharactersCard data={character} />
                </GridItem>
              ))}
          </Grid>
        </CardBody>
        <CardFooter className="flex items-center justify-center">
          <ArrowLeftIcon
            w={5}
            h={5}
            cursor="pointer"
            visibility={offset <= 0 ? "hidden" : "initial"}
            onClick={() => dispatch(incrementOffsetByAmount((0)))}
          />
          <ChevronLeftIcon
            width={10}
            height={10}
            visibility={offset <= 0 ? "hidden" : "initial"}
            cursor="pointer"
            onClick={() => dispatch(incrementOffsetByAmount((offset - 10)))}
          />
          {renderPageNumbers()}
          <ChevronRightIcon
            cursor="pointer"
            w={10}
            h={10}
            onClick={() => dispatch(incrementOffsetByAmount((offset + 10)))}
            visibility={offset >= 1563 ? "hidden" : "initial"}
          />
          <ArrowRightIcon
            w={5}
            h={5}
            cursor="pointer"
            onClick={() => dispatch(incrementOffsetByAmount((1563)))}
            visibility={offset >= 1563 ? "hidden" : "initial"}
          />
        </CardFooter>
      </Card>
    </Flex>
  );
}

export default SessionCheckHOC(Marvel);