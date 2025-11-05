import { createContext } from 'react';
import type { User } from '../types/types';

export type AuthContextType = {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;