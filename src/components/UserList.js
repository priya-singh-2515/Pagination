import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/thunks';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, currentPage, totalPages } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers(currentPage, 10)); // 10 users per page
  }, [dispatch, currentPage]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.first_name} {user.last_name}</li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
      <button
        onClick={() => {
          if (currentPage > 1) {
            dispatch(fetchUsers(currentPage - 1, 10));
          }
        }}
        disabled={currentPage === 1}
        className="bg-gray-300 text-gray-600 py-2 px-4 rounded cursor-pointer"
      >
        Previous
      </button> 
    
      <button
        onClick={() => {
          if (currentPage < totalPages) {
            dispatch(fetchUsers(currentPage + 1, 10));
          }
        }}
        disabled={currentPage === totalPages}
        className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
      >
        Next
      </button>
    </div>
    </div>
  );
};

export default UserList;
