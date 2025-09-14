import "./globals.css";
import { Roboto, Poppins } from "next/font/google";
import 'animate.css'
import Footer from '@/Component/footer'
import Nav from '@/Component/navbar'

// Load fonts properly
const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "My Website",
  description: "Next.js site with Bootstrap template",
  icons: {
    icon: "/img/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* External CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>     d
      <body 
      
      
      className={`${roboto.variable} ${poppins.variable}`}>
        {<Nav/>}
        {children}
        {<Footer/>}
      </body>
    </html>
  );
}
