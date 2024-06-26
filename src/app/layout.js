import { Inter } from "next/font/google";
import "./globals.css";
// import { Provider } from "react-redux";
// import store from "./store/store";
import AuthContext from "@/AuthContext";
import { useContext } from "react";
import {user, login, logout} from useContext={AuthContext}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Invitation Card App",
  description: "Build invitation & greeting cards easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext.Provider value={(user, login, logout)}>
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
