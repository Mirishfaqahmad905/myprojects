import { useReducer } from 'react';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  isLoading: false
};

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case 'LOGOUT':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
}

function LoginPage() {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function handleLogin(username, password) {
    dispatch({ type: 'LOGIN' });

    login(username, password)
      .then(user => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      })
      .catch(error => {
        dispatch({ type: 'LOGIN_ERROR', payload: error });
      });
  }

  function handleLogout() {
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <div>
      {state.isAuthenticated ? (
        <div>
          Welcome, {state.user.name}
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log in</button>
          </form>
          {state.error && <div>{state.error.message}</div>}
        </div>
      )}
    </div>
  );
}
export default authReducer;