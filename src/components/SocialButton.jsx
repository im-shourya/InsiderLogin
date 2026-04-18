export default function SocialButton({ provider, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center gap-2.5 w-full
        border border-[#3a3252] rounded-lg py-3 px-4
        text-[#e6e6fa] text-sm
        hover:border-[#a490c2]/50 hover:bg-[#2b2340]
        active:scale-[0.98] transition-all duration-200
        bg-transparent
      "
    >
      {icon}
      <span>{provider}</span>
    </button>
  );
}
