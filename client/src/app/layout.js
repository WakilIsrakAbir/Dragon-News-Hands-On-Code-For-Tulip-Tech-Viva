import { Poppins } from "next/font/google";
import "./globals.css";

const popins = Poppins({
  variable:"--font-popins",
  weight:["400","500","600","700","800"],
  subsets:["latin"],
})

export const metadata = {
  title: "Dragon News",
  description: "Best News Portal in bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` h-full antialiased`}
    >
      <body className={`${popins.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
