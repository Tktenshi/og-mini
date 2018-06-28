import React, {Fragment, Component} from 'react';

class MainPage extends Component {

   shouldComponentUpdate(nextProps, nextState) {
      return false
   }

   render() {
      document.title = "Оплата государственных услуг — штрафы, налоги и другие виды задолженностей перед государством";

      return (
          <Fragment>
             <h1>MainPage</h1>
          </Fragment>
      )
   }
}

export default MainPage;