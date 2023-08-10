import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import UserList from './components/UserList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
