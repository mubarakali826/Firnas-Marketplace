// src/app/layout.jsx
import Navbar from "./components/Navbar";
import "./globals.css";
export const metadata = {
  title: "My App",
  description: "Description of my app",
};
import Footer from "./components/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
