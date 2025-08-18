"use client"
import AboutUs from "@/components/AboutUs";
import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import Popular from "@/components/Popular";
import Reviews from "@/components/Reviews";
import { useFoodContext } from "@/app/(site)/context/FoodContext";

export default function Home() {
  const { token } = useFoodContext();

  return (
    <>
      {token && (
        <div>
          <Hero />
          <AboutUs />
          <Popular />
          <Reviews />
          <Discover />
        </div>
      )}
    </>
  );
}
