export default function FeatureCard({ id, icon, title, subtitle }) {
  return (
    <div
      id={id}
      className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200 hover:scale-[1.02] group cursor-default"
      style={{
        backgroundColor: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200 group-hover:bg-[#4a4e8f]/60"
        style={{ backgroundColor: 'rgba(74,78,143,0.35)', color: '#e6e6fa' }}
      >
        {icon}
      </div>

      <div className="pt-0.5">
        <p className="font-semibold text-sm leading-snug mb-1" style={{ color: '#ffffff' }}>
          {title}
        </p>
        <p className="text-xs" style={{ color: 'rgba(230,230,250,0.50)' }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
