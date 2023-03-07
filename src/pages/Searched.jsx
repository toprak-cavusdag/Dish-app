import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
