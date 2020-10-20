import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import LinkList from "./components/LinkList";
import CreateLink from "./components/CreateLink";
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Login from "./components/Login";
import Search from "./components/Search";

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </div>
  )
}

export default App;
