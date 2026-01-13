import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import BenefitsBanner from "@/components/BenefitsBanner";
import QuickCategories from "@/components/QuickCategories";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryHighlights from "@/components/CategoryHighlights";
import HealthPlans from "@/components/HealthPlans";
import ClubeNobre from "@/components/ClubeNobre";
import MarqueeBanner from "@/components/MarqueeBanner";
import PromoBanner from "@/components/PromoBanner";
import FavoriteProducts from "@/components/FavoriteProducts";
import BenefitsSection from "@/components/BenefitsSection";
import RecommendedProducts from "@/components/RecommendedProducts";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <main>
        <MarqueeBanner />
        {/* <BenefitsBanner /> */}
        <QuickCategories />
        <HeroCarousel />
        {/* <PromoBanner /> */}
        {/* <CategoryHighlights />: */}
        {/* <HealthPlans /> */}
        {/* <ClubeNobre /> */}
        <FavoriteProducts />
        {/* <BenefitsSection /> */}
        <RecommendedProducts />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
