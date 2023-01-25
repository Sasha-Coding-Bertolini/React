import { Container } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const DrinkItem = ({ drink, onClick }) => {
  return (
    <>
      <Container
        mb="10"
        display="flex"
        width="fit-content"
        alignItems="center"
        justifyContent="center"
        cursor={"pointer"}
        onClick={() => onClick(drink)}
      >
        <Image
          boxSize="75px"
          borderRadius="full"
          src={drink.imgUrl}
          alt={drink.alt}
        />
        <Text fontSize="lg">{drink.name}</Text>
      </Container>
    </>
  );
};
