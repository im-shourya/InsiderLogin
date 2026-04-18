import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureStrip from '../components/FeatureStrip';

export default function LandingPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: '#1f1d35',
        fontFamily: "'FreeSans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      <Navbar />
      <HeroSection />
      <FeatureStrip />
    </div>
  );
}
