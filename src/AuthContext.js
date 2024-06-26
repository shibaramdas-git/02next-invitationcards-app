// Create a context to manage authentication state. This will help in keeping your authentication logic organized.
"use client";
import { createContext, useState } from "react";

const AuthContext = createContext();
//by creating a context any component can access this pages exported variables and methods

export const [user, setUser] = useState(null);

//Login
export const login = async (username, password) => {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    setUser(response.data);
    console.log(response.data);
  } catch (error) {
    console.error("Login failed", error);
    alert("Invalid credentials");
  }
};

//Logout
export const logout = () => {
  setUser(null);
};

export default AuthContext;
