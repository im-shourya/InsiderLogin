export default function SocialButton({ provider, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-[#3a3252] text-[#e6e6fa] bg-transparent transition-all duration-200 hover:border-[#a490c2]/50 hover:bg-[#2b2340] flex items-center justify-center gap-2.5 w-full rounded-lg py-3 px-4 text-sm active:scale-[0.98]"
    >
      {icon}
      <span>{provider}</span>
    </button>
  );
}
