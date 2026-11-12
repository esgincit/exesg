import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "ESG - Executive Software Guild",
  description:
    "IT consulting, staffing and managed services across SAP, Oracle, Microsoft, Cloud, Big Data, BI, RPA and RevPro.",
  metadataBase: "https://www.exesg.us",
  openGraph: {
    title: "ESG - Executive Software Guild",
    description:
      "IT consulting, staffing and managed services across SAP, Oracle, Microsoft, Cloud, Big Data, BI, RPA and RevPro.",
    siteName: "Executive Software Guild",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
