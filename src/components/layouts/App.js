import React, {Component, Fragment} from 'react';

import Header from "./header/Header";
import Routes from "./Routes";

class App extends Component {
   render() {
      return (
          <Fragment>
             <Header/>
             <Routes/>
          </Fragment>
      );
   }
}

export default App;
