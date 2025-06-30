import BenefitSection from "@/features/home/BenefitSection";
import HeroSection from "@/features/home/HeroSection";
import PartnerSection from "@/features/home/PartnerSection";
import ServiceSection from "@/features/home/ServiceSection";
import WhyUsSection from "@/features/home/WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <BenefitSection />
      <WhyUsSection />
      <ServiceSection />
    </>
  );
}
