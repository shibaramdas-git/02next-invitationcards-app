import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/AuthContext";
// import { useContext } from "react";
// import { user, login, logout } from "@/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Invitation Card App",
  description: "Build invitation & greeting cards easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
