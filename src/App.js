import './App.scss';
import Header from './components/Header/Header.js';
import { Component } from 'react';
import Home from './Pages/Home/Home';
import Upload from './Pages/Upload/Upload';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'

class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <Header />
        <Switch>
          < Route path="/" exact render={() => <Home />} />
          < Route path="/upload" component={Upload} />
          <Route path='/:videoId' component={Home} />
        </Switch>

      </BrowserRouter>
    );
  }
}



export default App;
