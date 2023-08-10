import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/thunks';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginUser(email, password));
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded py-2 px-4 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded py-2 px-4 mb-2"
      />
      <button onClick={handleLogin}
       className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >Login</button>
    </div>
  );
};

export default Login;
