import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/AuthContext";
import Sidebar from "@/components/Sidebar";
import Smallbar from "@/components/Smallbar";
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
      <body className={`${inter.className} flex w-full`}>
        <AuthProvider>
          {/* <Sidebar /> */}
          <Smallbar />
          <div className="w-full">
            <header className="h-16 border-gray-300 border-b-[0.1px] shadow-sm">
              Header is here
            </header>
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
