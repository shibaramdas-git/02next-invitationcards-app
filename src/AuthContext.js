// Create a context to manage authentication state. This will help in keeping your authentication logic organized.
"use client";
import React, { createContext, useState } from "react";

const AuthContext = createContext();
//by creating a context any component can access this pages exported variables and methods

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //Login
  const login = async (username, password) => {
    try {
      const response = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`${response.status} ${errorData.message}`);
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
      alert(
        "Invalid Credentials ! Try again with any username & password from https://dummyjson.com/users"
      );
    }
  };

  //Logout
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
