import { useState, useEffect } from 'react';
import amuLogo from '../assets/amu-logo.svg';
import arrowRightIcon from '../assets/arrow-right.svg';

const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
  },
  {
    bg: 'https://images.unsplash.com/photo-1542401886-65d6c61de115?w=800&q=80',
  },
  {
    bg: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&q=80',
  },
];

export default function ImagePanel() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive(prev => (prev + 1) % slides.length);
        setFading(false);
      }, 500);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full rounded-xl overflow-hidden select-none" style={{ minHeight: '560px' }}>

      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${slides[active].bg})` }}
      />

      <div className="image-panel-overlay absolute inset-0" />

      <div className="absolute top-7 left-7 z-10">
        <img src={amuLogo} alt="AMU Logo" width="72" height="24" />
      </div>

      <div className="absolute top-6 right-6 z-10">
        <a href="/" className="pill-btn flex items-center gap-1.5 text-xs backdrop-blur-md rounded-full px-4 py-2">
          <span>Back to website</span>
          <img src={arrowRightIcon} alt="" className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className={`absolute bottom-10 left-0 right-0 px-8 z-10 transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}>
        <h2 className="panel-heading text-[1.6rem] leading-snug mb-7 text-center">
          Capturing Moments,<br />Creating Memories
        </h2>

        <div className="flex gap-2 justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                i === active ? 'slide-dot--active w-8' : 'slide-dot w-5'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
