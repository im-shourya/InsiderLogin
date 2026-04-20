import FeatureCard from './FeatureCard';
import monitorIcon from '../assets/monitor.svg';
import paymentsIcon from '../assets/payments.svg';
import truckIcon from '../assets/truck.svg';

const FEATURES = [
  {
    id: 'feature-web-app',
    title: 'Instant Web & App',
    subtitle: 'Start selling today',
    icon: <img src={monitorIcon} alt="Web & App" className="w-7 h-7" />,
  },
  {
    id: 'feature-payments',
    title: 'Integrated payments',
    subtitle: '<1% transaction fees',
    icon: <img src={paymentsIcon} alt="Payments" className="w-7 h-7" />,
  },
  {
    id: 'feature-delivery',
    title: 'Integrated global delivery and logistics',
    subtitle: 'Live tracking',
    icon: <img src={truckIcon} alt="Delivery" className="w-7 h-7" />,
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-[rgba(31,29,53,0.97)] relative z-10 px-4 sm:px-6 md:px-8 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
}
