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
        className="hero-glow absolute right-[8%] top-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
      />
      <div
        className="hero-glow--dim absolute left-[5%] top-[20%] w-[400px] h-[400px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-[580px] mt-4">
        <h1
          className="auth-heading font-bold leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          The hassle-free platform
          <br />
          to sell globally for less
        </h1>
        <p
          className="hero-subtitle mb-9 text-base leading-relaxed"
          style={{ maxWidth: '380px' }}
        >
          Connect your bank account and
          <br />
          start selling to the world today!
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <Link
            to="/signup"
            id="cta-get-started"
            className="btn-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Get Started
          </Link>
          <button
            id="cta-book-demo"
            className="btn-outline inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
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
          style={{ width: 'clamp(240px, 45vw, 500px)' }}
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
    </section>
  );
}
