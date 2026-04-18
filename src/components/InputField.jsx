import { useState } from 'react';
import eyeOffIcon from '../assets/eye-off.svg';
import eyeIcon from '../assets/eye.svg';

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
            <img src={eyeOffIcon} alt="Hide password" className="h-[18px] w-[18px]" />
          ) : (
            <img src={eyeIcon} alt="Show password" className="h-[18px] w-[18px]" />
          )}
        </button>
      )}
    </div>
  );
}
