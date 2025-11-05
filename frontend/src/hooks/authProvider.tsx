import React, { useState } from "react";
import type { ReactNode } from "react";
import AuthContext from "./authContext";
import type { User } from "../types/types";

type AuthProviderProps = {
    children: ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    function login(userData: User) {
        setUser(userData);
    };

    function logout() {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
