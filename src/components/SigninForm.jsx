import { useState } from "react";
import InputField from "./InputField";
import SocialButton from "./SocialButton";
export default function SigninForm() {
    const [agreed, setAgreed] = useState(true);
    return (
        <div className="flex flex-col justify-center w-full">
            <div className="mb-7">
                <h1 className="text-[2rem] font-bold text-white leading-tight tracking-tight">Welcome back</h1>
                <p className="text-[#a0a0b8] text-sm mt-2.5">Don't have an account?{' '}
                    <a href="#" className="text-[#a490c2] hover:text-[#c4b4e0] underline underline-offset-4 transition-colors">Sign up</a>
                </p>
            </div>
        </div>
    );
}

