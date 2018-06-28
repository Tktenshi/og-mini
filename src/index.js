import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Provider from 'react-redux/lib/components/Provider';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import ProviderWithRouter from "./store/ProviderWithRouter";
import App from './components/layouts/App';

import './assets/css/basecss.css';
import './assets/css/fonts.css';
import './assets/css/innerpages.css';
import './assets/css/paypages.css';
import 'current-device';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
       <BrowserRouter>
          <ProviderWithRouter>
                <App/>
          </ProviderWithRouter>
       </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
