import ImagePanel from '../components/ImagePanel';
import SigninForm from '../components/SigninForm';

export default function SigninPage() {
  return (
    <div className="auth-page min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      <div className="auth-card relative w-full max-w-[1020px] rounded-2xl overflow-hidden flex min-h-[600px]">
        <div className="hidden lg:block w-[46%] flex-shrink-0 p-3">
          <ImagePanel />
        </div>
        <div className="flex-1 px-6 sm:px-8 md:px-12 py-8 sm:py-10 flex items-center">
          <SigninForm />
        </div>
      </div>
    </div>
  );
}