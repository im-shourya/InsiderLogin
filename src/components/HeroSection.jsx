import { Link } from 'react-router-dom';
import waveFill from '../assets/wave-fill.svg';
import tealCurve from '../assets/teal-curve.svg';

export default function HeroSection() {
  return (
    <section
      className="relative flex-1 flex items-center overflow-hidden px-4 sm:px-6 md:px-8 pt-6 pb-0"
      style={{ minHeight: '480px' }}
    >
      <div
        className="absolute right-[8%] top-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(74,78,143,0.35) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute left-[5%] top-[20%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(74,78,143,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[580px] mt-4">
        <h1
          className="text-white font-bold leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          The hassle-free platform
          <br />
          to sell globally for less
        </h1>
        <p
          className="mb-9 text-base leading-relaxed"
          style={{ color: 'rgba(230,230,250,0.65)', maxWidth: '380px' }}
        >
          Connect your bank account and
          <br />
          start selling to the world today!
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <Link
            to="/signup"
            id="cta-get-started"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
            style={{
              backgroundColor: '#E5C84A',
              color: '#1f1d35',
              boxShadow: '0 4px 20px rgba(229,200,74,0.35)',
            }}
          >
            Get Started
          </Link>
          <button
            id="cta-book-demo"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200 hover:bg-white/10 hover:scale-105 active:scale-95"
            style={{ color: '#e6e6fa', borderColor: 'rgba(230,230,250,0.30)' }}
          >
            Book a demo
          </button>
        </div>
      </div>

      <div className="absolute right-[6%] bottom-0 z-10 hidden sm:flex items-end justify-center pointer-events-none select-none">
        <img
          src="/mascot.png"
          alt="Picksell mascot"
          className="mascot-float"
          style={{
            width: 'clamp(240px, 45vw, 500px)',
            filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.45))',
          }}
        />
      </div>

      <img
        src={waveFill}
        alt=""
        className="absolute bottom-0 left-0 w-full"
        style={{ zIndex: 1 }}
      />

      <img
        src={tealCurve}
        alt=""
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ zIndex: 2 }}
      />

      <style>{`
        .mascot-float {
          animation: mascotFloat 4s ease-in-out infinite;
        }
        @keyframes mascotFloat {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-18px) rotate(2deg); }
        }
      `}
      </style>
    </section>
  );
}
