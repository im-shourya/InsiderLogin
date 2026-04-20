export default function FeatureCard({ id, icon, title, subtitle }) {
  return (
        <div
          id={id}
          className="bg-white/5 border border-white/8 flex items-start gap-4 p-5 rounded-2xl transition-all duration-200 hover:scale-[1.02] group cursor-default"
        >
          <div className="bg-[#4a4e8f]/35 text-[#e6e6fa] group-hover:bg-[#4a4e8f]/60 hover:bg-[#4a4e8f]/60 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200">
            {icon}
          </div>

          <div className="pt-0.5">
            <p className="text-white font-semibold text-sm leading-snug mb-1">
              {title}
            </p>
            <p className="text-[#e6e6fa]/50 text-xs">
              {subtitle}
            </p>
          </div>
    </div>
  );
}
