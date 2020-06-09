import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Dso from './Dso';
import Cei from './Cei';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <HashRouter basename="/">
      <Header />
      <Switch>
     <Route exact path='/' component={Home} />
     {/* <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} /> */}
     <Route exact path='/dso' component={Dso} />
     {/* <Route exact path={process.env.PUBLIC_URL + '/dso'} component={Dso} /> */}
     <Route exact path='/cei' component={Cei} />
     {/* <Route exact path={process.env.PUBLIC_URL + '/cei'} component={Cei} /> */}
   </Switch>
<Footer />
</HashRouter>
</div>
  );
}

export default App;
