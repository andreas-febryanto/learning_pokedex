import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemon } from "../store/action";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoading = useSelector((state) => state.isLoading);
  const detailPokemon = useSelector((state) => state.detailPokemon);

  useEffect(() => {
    dispatch(fetchPokemon(id));
  }, []);

  if (isLoading) {
    return <h1>lagi loading</h1>;
  }

  return (
    <div>
      <pre>{JSON.stringify(detailPokemon, null, 2)}</pre>
      <div className="mx-10 h-screen flex-col content-between justify-between overflow-hidden border-4 border-gray-200">
        {/* upper */}
        <div className="border-2 border-gray-200">
          <h1 className="text-2xl font-bold my-5">{detailPokemon.name}</h1>
          {detailPokemon?.types?.map((type, idx) => {
            return (
              <div className="mb-2" key={idx}>
                <button className="btn btn-primary w-20 cursor-default rounded-full">
                  {type}
                </button>
              </div>
            );
          })}
        </div>
        <div className="w-full bg-blue-700 border-2 border-gray-300 p-6 rounded-lg tracking-wide shadow-lg">
          <div className="tabs">
            <a className="tab">Tab 1</a>
            <a className="tab tab-active">Tab 2</a>
            <a className="tab">Tab 3</a>
          </div>
        </div>
      </div>
    </div>
  );
}
