import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import WelcomePage from "./components/WelcomePage.js";
import TabBar from './components/TabBar';
import SearchForm from './components/SearchForm';


export default function App() {
  return (
    <main>
      <Header />
      <TabBar />
      <SearchForm />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/character" component={CharacterList}/>
    </main>
  );
}
