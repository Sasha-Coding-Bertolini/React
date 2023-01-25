export const DrinkItem = ({ drink }) => {
  return (
    <>
      <img src={drink.imgUrl} alt={drink.alt} width={50} height={50} />
      <p>{drink.name}</p>
    </>
  );
};
