export default function SocialButton({ provider, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn-social flex items-center justify-center gap-2.5 w-full rounded-lg py-3 px-4 text-sm active:scale-[0.98]"
    >
      {icon}
      <span>{provider}</span>
    </button>
  );
}
