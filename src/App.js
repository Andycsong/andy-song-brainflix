import './App.scss';
import Header from './components/Header/Header.js';
import { Component } from 'react';
import Home from './Pages/Home/Home';
import Upload from './Pages/Upload/Upload';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Header />
        <Switch>
          < Route path="/" exact component={Home} />
          < Route path="/upload" exact component={Upload} />
          <Route path='/video/:id' exact component={Home} />
        </Switch>

      </BrowserRouter>
    );
  }
}



export default App;
