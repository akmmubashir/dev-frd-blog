import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Find Rent Drive Blog",
  description: "Find Rent Drive Blog",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Find Rent Drive Blog",
    description: "Find Rent Drive Blog",
    images: [],
  },
};
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
