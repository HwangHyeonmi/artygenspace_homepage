import React from 'react';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Location from './Pages/Location';
import Main from './Pages/Main';
import  "../src/style.css"
export default function App() {
  return (
    <div>
      <BrowserRouter>  
      <Switch>
            <Route exact path="/" component={Main}/>    
            <Route path="/location" component={Location}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
};

