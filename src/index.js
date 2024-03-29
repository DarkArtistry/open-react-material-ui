import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import configureStore from './app/configureStore';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ components: {}, app: { preview: false} })
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
            <App />
          </DndProvider>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
