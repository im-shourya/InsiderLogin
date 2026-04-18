import ImagePanel from './ImagePanel';
import SignupForm from './SignupForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-[#514b63]">
      <div className="relative w-full max-w-[1020px] bg-[#1e1730] border border-[#3a3252] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 flex min-h-[600px]">
        <div className="hidden lg:block w-[46%] flex-shrink-0 p-3">
          <ImagePanel />
        </div>

        <div className="flex-1 px-12 py-10 flex items-center">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
