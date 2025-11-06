import { createContext } from 'react';

export type AuthContextType = {
    userID: number | null;
    login: (userID: number) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;