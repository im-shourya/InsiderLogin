export default function FeatureCard({ id, icon, title, subtitle }) {
  return (
    <div
      id={id}
      className="feature-card flex items-start gap-4 p-5 rounded-2xl transition-all duration-200 hover:scale-[1.02] group cursor-default"
    >
      <div className="feature-icon flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200">
        {icon}
      </div>

      <div className="pt-0.5">
        <p className="feature-title font-semibold text-sm leading-snug mb-1">
          {title}
        </p>
        <p className="feature-subtitle text-xs">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
