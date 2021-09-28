import React from "react";
import { useHistory } from "react-router-dom";

export default function Cards(props) {
  const history = useHistory();
  const { id, name, types, image } = props.pokemon;

  const detailHandler = (id) => {
    history.push(`/${id}`);
  };

  return (
    <div>
      <div
        className="max-w-sm bg-blue-700 border-2 border-gray-300 p-6 rounded-lg tracking-wide shadow-lg flex cursor-pointer"
        onClick={() => detailHandler(id)}
      >
        <div className="flex-column">
          <h1 className="text-xl font-semibold mb-5">{name}</h1>
          {types.map((type, idx) => {
            return (
              <div className="mb-2" key={idx}>
                <button className="btn btn-primary w-20 cursor-default">
                  {type}
                </button>
              </div>
            );
          })}
        </div>
        <div className="mb-4 ml-20">
          <img
            alt="pokemon_images"
            className="w-40 "
            src={image["official-artwork"].front_default}
          />
        </div>
      </div>
    </div>
  );
}
