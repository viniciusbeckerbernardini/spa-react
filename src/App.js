import React from 'react';
import './App.css';
import TopMenu from "./components/TopMenu/TopMenu";
import Resume from "./components/Resume/Resume";
import Query from "./components/Query/Query";
import Revenue from "./components/Revenue/Revenue";
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
      <div>
          <div>
              <TopMenu/>
          </div>
          <div className="container container-fluid">
          <div className="row">
              <div className="col">
                  <Switch>
                      <Route path="/" exact component={Resume} />
                      <Route path="/consultas" exact component={Query} />
                      <Route path="/faturamento" exact component={Revenue} />

                  </Switch>
              </div>
          </div>
          </div>
      </div>
  );
}

export default App;
