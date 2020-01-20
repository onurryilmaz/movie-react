import React from 'react';
import { Route, Switch } from 'react-router-dom'

//Component Page
import Home from './pages/home'
import Error from './pages/error'
import Header from './pages/partials/header'
import CategorySettings from './pages/categories/CategorySettings'
import Category from './pages/categories/'
import Director from './pages/director'
import Movies from './pages/movies'

//Bootstrap
import Container from 'react-bootstrap/Container'

function App() {
  return (
      <Container>
        <Header/>
        <Switch>
          <Route path='/' exact strict component = {Home}/>
          <Route path='/category/:id?' component = {Category}/>
          <Route path='/category-settings' exact strict component = {CategorySettings}/>
          <Route path='/director' exact strict component = {Director}/>
          <Route path='/admin/movie' exact strict component = {Movies}/>
          <Route component={Error} />
        </Switch>
      </Container>
  );
}

export default App;
