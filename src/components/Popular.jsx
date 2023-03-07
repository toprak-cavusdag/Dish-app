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
    const check = localStorage.getItem('Popular');

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`
      );

      const data = await api.data.recipes;

      localStorage.setItem('Popular', JSON.stringify(data));

      setPopular(data);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Populer Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '3rem',
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card key={recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
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
  margin: 4rem 10px;
`;

const Card = styled.div`
  min-height: 17rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    witdh: 100%;
    left: 0;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`;

export default Popular;
