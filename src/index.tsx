import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from "react-redux";
import ErrorBoundary from './components/error-boundary';
import store from "./store";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";
import BookstoreService from "./services/bookstore-service";
import { BrowserRouter as Router } from "react-router-dom";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);


