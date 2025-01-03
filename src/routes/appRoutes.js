import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  HomeContainer,
  AboutContainer,
  RecipesContainer,
  ContactContainer,
  PageNotFoundContainer
} from '../containers/pages';

const AppRoutes = ({}) => {
  return (
    <Routes>
      <Route exact path="/" element={<HomeContainer />} />
      <Route path="/home" element={<HomeContainer />} />
      <Route path="/about" element={<AboutContainer />} />
      <Route path="/recipes" element={<RecipesContainer />} />
      <Route path="/contact" element={<ContactContainer />} />

      <Route element={<PageNotFoundContainer />} />
    </Routes>
  );
};



export default AppRoutes;
