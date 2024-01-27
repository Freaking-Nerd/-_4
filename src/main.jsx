import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Form from './Form';
import Display from './Display';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <FormComponent />
        <DisplayComponent />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));