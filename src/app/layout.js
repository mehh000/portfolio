import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navber from "@/components/Navber/Navber";
import Footer from "@/components/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Himal",
  description: "created by himal hasan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme='light'
          enableSystem
          disableTransitionOnChang
        >
          <Navber />
          {children}
         <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
