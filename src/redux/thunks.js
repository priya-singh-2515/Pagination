import { setToken, setUsers } from './actions';

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.token) {
      dispatch(setToken(data.token));
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

export const fetchUsers = (page, perPage) => async (dispatch, getState) => {
  const { user: { token } } = getState();
  
  try {
    const response = await fetch(`https://reqres.in/api/users?page=${page}&per_page=${perPage}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    dispatch(setUsers(data));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};


