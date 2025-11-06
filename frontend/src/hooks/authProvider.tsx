import React, { useState, type ReactNode } from "react";
import AuthContext from "./authContext";

type AuthProviderProps = {
    children: ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userID, setUserID] = useState<number | null>(null);

    function login(userID: number) {
        setUserID(userID);
    };

    function logout() {
        setUserID(null);
    };

    return (
        <AuthContext.Provider value={{ userID, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
