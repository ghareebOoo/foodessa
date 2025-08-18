import Header from "@/components/Header";
import FoodContextProvider from "@/app/(site)/context/FoodContext";
import Footer from "@/components/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <FoodContextProvider>
        <Header />
        {children}
        <Footer />
      </FoodContextProvider>
    </div>
  );
}
