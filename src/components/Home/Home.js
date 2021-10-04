import React from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import { array2 as array } from '../../utilites/data';
import Categories from '../Categories/Categories';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Services array={array}></Services>
      <Categories></Categories>
      
    </div>
  );
};

export default Home;