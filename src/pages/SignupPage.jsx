import ImagePanel from '../components/ImagePanel';
import SignupForm from '../components/SignupForm';

export default function SignupPage() {
  return (
    <div className="bg-[#514b63] min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      <div className="bg-[#1e1730] border border-[#3a3252] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.40)] relative w-full max-w-[1020px] rounded-2xl overflow-hidden flex min-h-[600px]">
        <div className="hidden lg:block w-[46%] flex-shrink-0 p-3">
          <ImagePanel />
        </div>

        <div className="flex-1 px-6 sm:px-8 md:px-12 py-8 sm:py-10 flex items-center">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
