import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../components/Cards";
import { fetchPokemons } from "../store/action";

export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  if (isLoading) {
    return <h1>lagi loading</h1>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold my-5 ml-5">Pokedex</h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 justify-items-center gap-5">
        {pokemons?.map((pokemon, idx) => {
          return <Cards pokemon={pokemon} key={idx}></Cards>;
        })}
      </div>
    </div>
  );
}
