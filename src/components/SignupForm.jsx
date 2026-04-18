import { useState } from 'react';
import InputField from './InputField';
import SocialButton from './SocialButton';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="#e6e6fa">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.28-2.16 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.87M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

export default function SignupForm() {
  const [agreed, setAgreed] = useState(true);

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="mb-7">
        <h1 className="text-[2rem] font-bold text-white leading-tight tracking-tight">
          Create an account
        </h1>
        <p className="text-[#a0a0b8] text-sm mt-2.5">
          Already have an account?{' '}
          <a href="signin" className="text-[#a490c2] hover:text-[#c4b4e0] underline underline-offset-4 transition-colors">
            Log in
          </a>
        </p>
      </div>

      <div className="space-y-3.5 mb-5">
        <div className="grid grid-cols-2 gap-3.5">
          <InputField type="text" placeholder="First name" />
          <InputField type="text" placeholder="Last name" />
        </div>
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Enter your passwrod" />
      </div>

      <label className="flex items-center gap-2.5 cursor-pointer mb-6 group">
        <div className="relative flex-shrink-0">
          <input
            type="checkbox"
            checked={agreed}
            onChange={e => setAgreed(e.target.checked)}
            className="sr-only"
          />
          <div
            className={`w-[18px] h-[18px] rounded-[4px] transition-all duration-200 flex items-center justify-center ${
              agreed
                ? 'bg-[#4a4e8f] border border-[#4a4e8f]'
                : 'border border-[#555] bg-transparent group-hover:border-[#a490c2]'
            }`}
          >
            {agreed && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-[#a0a0b8] text-xs">
          I agree to the{' '}
          <a href="#" className="text-[#a490c2] hover:text-[#c4b4e0] underline underline-offset-2 transition-colors">
            Terms & Conditions
          </a>
        </span>
      </label>

      <button className="
        w-full py-3 rounded-lg font-bold text-sm
        text-white
        active:scale-[0.99] transition-all duration-200
        mb-6
      " style={{ background: 'linear-gradient(135deg, #7b6ba5 0%, #a490c2 100%)' }}>
        Create account
      </button>

      <div className="relative flex items-center gap-4 mb-5">
        <div className="flex-1 h-px bg-[#3a3252]" />
        <span className="text-[#777] text-xs whitespace-nowrap">Or register with</span>
        <div className="flex-1 h-px bg-[#3a3252]" />
      </div>

      <div className="grid grid-cols-2 gap-3.5">
        <SocialButton provider="Google" icon={<GoogleIcon />} />
        <SocialButton provider="Apple" icon={<AppleIcon />} />
      </div>
    </div>
  );
}
