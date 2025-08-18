
import Header from "@/components/Header";
import FoodContextProvider from "@/context/FoodContext";
import Footer from "@/components/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <FoodContextProvider>
        <Header />
          {children}
        <Footer />
        </FoodContextProvider>
      </body>
    </html>
  );
}
