import { ADD_POKEMONS, ADD_POKEMON, TOOGLE_LOADING } from "./actionType";

const initialState = {
  pokemons: [],
  detailPokemon: {},
  isLoading: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    case ADD_POKEMON:
      return {
        ...state,
        detailPokemon: action.payload,
      };
    case TOOGLE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}
