import React, {Component} from 'react';
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import MainPage from "../pages/MainPage";
import ServicesPage from "../pages/services/ServicesPage";

class Main extends Component {
   render() {
      return (
          <div>
             <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/services" component={ServicesPage}/>
             </Switch>
          </div>
      );
   }
}

export default Main;
