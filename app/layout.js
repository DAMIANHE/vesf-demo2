import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "VEFS Demo",
  description: "VEFS Demo – Impacto en VAN"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
