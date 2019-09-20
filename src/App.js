import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import WelcomePage from "./components/WelcomePage.js";
import TabBar from './components/TabBar';
import SearchForm from './components/SearchForm';
import LocationsList from './components/LocationsList';


export default function App() {
  return (
    <main>
      <Header />
      <TabBar />
      <SearchForm />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/character" component={CharacterList}/>
      <Route path="/location" component={LocationsList}/>
      {/* <LocationList /> */}
    </main>
  );
}
