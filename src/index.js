import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './Containers/App.js';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './Store/rootReducer';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}> 
    <App />
</Provider>
, document.getElementById('root'));
