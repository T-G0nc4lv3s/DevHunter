import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Search from 'pages/Search';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/search">
            <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
