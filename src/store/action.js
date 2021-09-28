import { ADD_POKEMONS, ADD_POKEMON, TOOGLE_LOADING } from "./actionType";

import axios from "axios";

export const addPokemons = (payload) => ({
  type: ADD_POKEMONS,
  payload,
});

export const addPokemon = (payload) => ({
  type: ADD_POKEMON,
  payload,
});

export const toogleLoading = (payload) => ({
  type: TOOGLE_LOADING,
  payload,
});

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemons = () => {
  return async (dispatch, getState) => {
    try {
      for (let i = 1; i <= 6; i++) {
        dispatch(toogleLoading(true));
        const { data } = await axios.get(`${baseUrl}/${i}`);
        const pokemonTypes = data.types.map((el) => el.type.name);
        const pokemonImage = data.sprites.other;
        const pokemons = {
          id: data.id,
          name: data.name,
          types: pokemonTypes,
          image: pokemonImage,
        };
        dispatch(toogleLoading(false));
        dispatch(addPokemons(pokemons));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchPokemon = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(toogleLoading(true));
      const { data } = await axios.get(`${baseUrl}/${id}`);
      const pokemonTypes = data.types.map((el) => el.type.name);
      const pokemonImage = data.sprites.other;
      const pokemonAbilities = data.abilities.map(
        (ability) => ability.ability.name
      );
      const pokemonStats = data.stats.map((el) => {
        const stats = {
          status: el.base_stat,
          statusName: el.stat.name,
        };
        return stats;
      });

      const pokemon = {
        id: data.id,
        name: data.name,
        types: pokemonTypes,
        image: pokemonImage,
        about: {
          height: data.height,
          weight: data.weight,
          species: data.species.name,
          abilities: pokemonAbilities,
        },
        status: pokemonStats,
      };

      dispatch(toogleLoading(false));
      dispatch(addPokemon(pokemon));
    } catch (error) {
      console.error(error);
    }
  };
};
