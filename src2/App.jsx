import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import LinksList from './LinksList';
import Categories from './Categories';
import './App.css';

const AppRoute = ({ index, links, match }) => (
  <div>
    <AppHeader activeIndex={index} />
    <Categories isStudent={index === 0} url={match.url} />
  </div>
);

const ListRoute = ({ index, links, match }) => (
  <div>
    <AppHeader activeIndex={index} />
    <LinksList id={match.params.id} links={links} />
  </div>
);

const App = ({ links }) => (
  <Router>
    <div>
      <Route
        exact
        path="/"
        render={props =>
          <AppRoute {...props} index={0} links={links} />
         }
      />
      <Route
        exact
        path="/faculty"
        render={props =>
          <AppRoute {...props} index={1} links={links} />
         }
      />
      <Route
        exact
        path="/student"
        render={props =>
          <AppRoute {...props} index={0} links={links} />
         }
      />
      <Route
        path="/faculty/:id"
        render={props =>
          <ListRoute {...props} index={1} links={links} />
         }
      />
      <Route
        path="/student/:id"
        render={props =>
          <ListRoute {...props} index={0} links={links} />
         }
      />
      <AppFooter />
    </div>
  </Router>
);

export default App;
