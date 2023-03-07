import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Searched = () => {
  const [searchedRecipes, setSearchedRecepies] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}`
    );
    const recipes = await response.data.results;
    setSearchedRecepies(recipes);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return <div>Searcheds</div>;
};

export default Searched;
