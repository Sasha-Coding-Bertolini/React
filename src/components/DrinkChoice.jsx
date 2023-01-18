export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <h3>Your choice: {drink.name}</h3>
      <img src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
      <p>The drink will be ready in a few minutes...</p>
    </>
  );
};