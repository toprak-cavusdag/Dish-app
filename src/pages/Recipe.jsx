import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import React from 'react';
import axios from 'axios';

const Recipe = () => {
  const [details, setDetails] = useState({});
  let params = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;

  const FetchDetails = async () => {
    const respone = await axios.get(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`
    );
    console.log(respone);
    const detailData = await respone.data;
    setDetails(detailData);
  };

  useEffect(() => {
    FetchDetails();
  }, [params.name]);

  return <div>{details.title}</div>;
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active{
    background: linear-gradient:(35deg, #494949, #313131)
    color:white;
  }

  h2{
    margin-bottom:2rem;
  }
  li{
    font-size:1.2rem;
    line-height:2.5rem;
  }

  ul{
    margin-top:2rem;
  }


`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
`;

export default Recipe;
