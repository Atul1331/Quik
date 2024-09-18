import Footer from "@/components/Footer";
import Features from "@/components/home-page/Features";
import Hero from "@/components/home-page/Hero";
import Pricing from "@/components/home-page/Pricing";
import UserReviews from "@/components/home-page/UserReview";


export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Features />
        <Pricing />
        <UserReviews />
      </div>
      <Footer />
    </>
    
  );
}
