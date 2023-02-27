import {createContext, useReducer, useContext} from 'react'

const initialState = {isAuth: false}

const AuthContext = createContext(initialState)

AuthContext.displayName = 'AuthContext'

export function reducer(state, action) {
    switch (action.type) {
      case "login":
        return { isAuth: true };
      case "admin":
        return { isAuth: true, isAdmin: true };
      case "logout":
        return { isAuth: false };
        default:
      throw new Error();
    }
  }

  export function AuthProvider({ children }) {
    const [auth, dispatch] = useReducer(reducer, initialState);
  
    return (
      <AuthContext.Provider value={[auth, dispatch]}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  export default function AuthConsumer() {
    return useContext(AuthContext);
  }