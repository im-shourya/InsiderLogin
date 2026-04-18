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
                <h1 className="text-[2rem] font-bold text-white leading-tight tracking-tight">
                    Welcome back
                </h1>
                <p className="text-[#a0a0b8] text-sm mt-2.5">Don't have an account?{' '}
                    <a href="signup" className="text-[#a490c2] hover:text-[#c4b4e0] underline underline-offset-4 transition-colors">Sign up</a>
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
                    className={`w-[18px] h-[18px] rounded-[4px] transition-all duration-200 flex items-center justify-center ${
                    agreed
                        ? 'bg-[#4a4e8f] border border-[#4a4e8f]'
                        : 'border border-[#555] bg-transparent group-hover:border-[#a490c2]'
                    }`}
                >
                    {agreed && (
                    <img src={checkmarkIcon} alt="" className="w-3 h-3" />
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
            <button className="w-full py-3 rounded-lg font-bold text-white 
            active:scale-[0.99] transition-all duration-200
            mb-6" 
            style={{ background: 'linear-gradient(135deg, #7b6ba5 0%, #a490c2 100%)' }}>
                Sign in
            </button>
            <div className="relative flex items-center gap-4 mb-5">
                <div className=" flex-1 h-[1px] bg-[#3a3252]"/>
                <span className="text-[#777] text-xs whitespace-nowrap">
                    Or Continue with</span>
                <div className=" flex-1 h-[1px] bg-[#3a3252]"/>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
                <SocialButton provider="Google" icon={<img src={googleIcon} alt="Google" className="w-[18px] h-[18px]" />} />
                <SocialButton provider="Apple" icon={<img src={appleIcon} alt="Apple" className="w-[18px] h-[18px]" />} />
            </div>
        </div>

    );
}
