import { DrinkItem } from "./DrinkItem";
import { Flex } from "@chakra-ui/react";

export const DrinkItems = ({ drinks, onClick }) => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
      >
        {drinks.map((drink) => (
          <DrinkItem key={drink.id} drink={drink} onClick={onClick} />
        ))}
      </Flex>
    </>
  );
};
