import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureStrip from '../components/FeatureStrip';

export default function LandingPage() {
  return (
    <div className="landing-page min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeatureStrip />
    </div>
  );
}
