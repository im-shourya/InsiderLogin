import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureStrip from '../components/FeatureStrip';

export default function LandingPage() {
  return (
    <div className="bg-[#1f1d35] font-['FreeSans',_sans-serif] min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeatureStrip />
    </div>
  );
}
