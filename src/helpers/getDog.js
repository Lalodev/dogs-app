const getDog = async (id) => {
  /*let url;
  if (id === 0 || id === undefined) {
    url = "https://api.thedogapi.com/v1/images/search";
  } else {
    url = `https://api.TheDogAPI.com/v1/images/search?breed_ids=${id}`;
  }*/

  const url =
    !id || id === 0
      ? "https://api.thedogapi.com/v1/images/search"
      : `https://api.TheDogAPI.com/v1/images/search?breed_ids=${id}`;

  const res = await fetch(url);

  if (!res.ok) {
    const { url, status, statusText } = res;
    throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
  }

  const [data] = await res.json();

  let {
    url: image,
    breeds: [breed],
  } = data;

  //console.log(data);

  if (!breed) {
    breed = {
      id: 0,
      name: "random",
    };
  }

  const dog = {
    image,
    breed,
  };

  //console.log(dog);

  return dog;
};

export default getDog;
