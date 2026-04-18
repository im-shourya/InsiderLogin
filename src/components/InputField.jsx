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
        className="form-input rounded-lg px-4 py-3 text-sm"
        style={{ paddingRight: isPassword ? '2.75rem' : '1rem' }}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="toggle-eye absolute right-3.5 top-1/2 -translate-y-1/2"
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
