import { createContext } from "react";

interface AuthContext {
  login: (user?: any) => void
  logout: () => void
  user?: any
}

const AuthContext = createContext<AuthContext>({user: null, login: () => {}, logout: () => {}});

export default AuthContext
