import { useState } from "react";
import InputField from "./InputField";
import SocialButton from "./SocialButton";
import googleIcon from '../assets/google.svg';
import appleIcon from '../assets/apple.svg';
import checkmarkIcon from '../assets/checkmark.svg';

export default function SigninForm() {
    const [agreed, setAgreed] = useState(true);
    return (
        <div className="flex flex-col justify-center w-full">
            <div className="mb-7">
                <h1 className="text-white text-2xl sm:text-[2rem] font-bold leading-tight tracking-tight">
                    Welcome back
                </h1>
                <p className="text-[#a0a0b8] text-sm mt-2.5">Don't have an account?{' '}
                    <a href="signup" className="text-[#a490c2] transition-colors duration-200 hover:text-[#c4b4e0] underline underline-offset-4">Sign up</a>
                </p>
            </div>
            <div className='space-y-3.5 mb-5'>
                <InputField type="email" placeholder="Resgistered email" />
                <InputField type="password" placeholder="Password" />
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
                    className={`w-[18px] h-[18px] rounded-[4px] flex items-center justify-center ${
                    agreed ? 'bg-[#4a4e8f] border-[#4a4e8f]' : 'border border-[#555555] bg-transparent transition-all duration-200 hover:border-[#a490c2]'
                    }`}
                >
                    {agreed && (
                    <img src={checkmarkIcon} alt="" className="w-3 h-3" />
                    )}
                </div>
                </div>
                <span className="text-[#a0a0b8] text-xs">
                I agree to the{' '}
                <a href="#" className="text-[#a490c2] transition-colors duration-200 hover:text-[#c4b4e0] underline underline-offset-2">
                    Terms & Conditions
                </a>
                </span>
            </label>
            <button className="text-white w-full py-3 rounded-lg font-bold text-sm active:scale-[0.99] transition-all duration-200 mb-6" style={{ background: 'linear-gradient(135deg, #7b6ba5 0%, #a490c2 100%)' }}>
                Sign in
            </button>
            <div className="relative flex items-center gap-4 mb-5">
                <div className="bg-[#3a3252] flex-1 h-[1px]"/>
                <span className="text-[#777777] text-xs whitespace-nowrap">
                    Or Continue with</span>
                <div className="bg-[#3a3252] flex-1 h-[1px]"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <SocialButton provider="Google" icon={<img src={googleIcon} alt="Google" className="w-[18px] h-[18px]" />} />
                <SocialButton provider="Apple" icon={<img src={appleIcon} alt="Apple" className="w-[18px] h-[18px]" />} />
            </div>
        </div>

    );
}
