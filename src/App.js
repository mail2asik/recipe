import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import { Header, Footer } from './components/sections';
import AppRoutes from './routes/appRoutes';

import './App.css';

const App = props => {
  return (
    <BrowserRouter>
      <Header />

        <main role="main" className="container">
          <div className="starter-template">
            <AppRoutes />
          </div>
        </main>

      <Footer />
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
