import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopuler();
  }, []);
  const getPopuler = async () => {
    const api = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`
    );

    const data = await api.data.recipes;
    setPopular(data);
  };
  console.log(popular);

  return (
    <div>
      <Wrapper>
        <h3>Populer Picks</h3>
        <Splide
          options={{
            perPage: 4,
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide>
                <Card key={recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 4rem;
`;

const Card = styled.div`
  margin: 1rem;
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`;

export default Popular;
