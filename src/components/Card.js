import Spinner from "./Spinner";

const Card = ({ dog, updateDog, loading }) => {
  if (loading) return <Spinner />;

  return (
    <div className="card bounce" onClick={() => updateDog(dog.breed.id)}>
      <img src={dog.image} alt="Dog" />
      <p>{dog.breed.name} </p>
    </div>
  );
};

export default Card;
