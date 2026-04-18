import { useState } from 'react';

export default function InputField({ type = 'text', placeholder, className = '' }) {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className={`relative group ${className}`}>
      <input
        type={isPassword && show ? 'text' : type}
        placeholder={placeholder}
        className="
          w-full bg-transparent border border-[#3a3252] rounded-lg px-4 py-3
          text-[#e6e6fa] placeholder-[#6b6580] text-sm
          focus:outline-none focus:border-[#a490c2]
          transition-all duration-200
          group-hover:border-[#4a4560]
        "
        style={{ paddingRight: isPassword ? '2.75rem' : '1rem' }}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6b6580] hover:text-[#a490c2] transition-colors duration-200"
        >
          {show ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
