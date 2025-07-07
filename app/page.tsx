import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";
import HowItWorksSetion from "@/components/home/how-it-work";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col ">
      <HeroSection/>
      <DemoSection/>
      <HowItWorksSetion/>
      </div>
      
    </div>
  );
}
