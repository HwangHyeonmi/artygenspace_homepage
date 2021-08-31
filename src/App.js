import React from 'react';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import Location from './Pages/Location';
import Main from './Pages/Main';
import  "../src/style.scss"
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

