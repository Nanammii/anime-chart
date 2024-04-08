import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/app';
import {Provider} from "react-redux";
import store from "./store/store";
import {fetchAnimeSeasons, fetchAnimeSeasonsAll} from "./store/actions";

store.dispatch(fetchAnimeSeasons());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
