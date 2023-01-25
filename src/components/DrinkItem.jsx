export const DrinkItem = ({ drink, onClick }) => {
  return (
    <>
      <button onClick={() => onClick(drink)}>
        <img src={drink.imgUrl} alt={drink.alt} width={50} height={50} />
        <p>{drink.name}</p>
      </button>
    </>
  );
};
