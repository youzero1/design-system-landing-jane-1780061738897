import { Check } from 'lucide-react';
import { clsx } from 'clsx';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small teams getting started.',
    features: ['Up to 5 users', '10 GB storage', 'Basic analytics', 'Email support'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$99',
    description: 'For growing teams that need more power.',
    features: ['Up to 20 users', '100 GB storage', 'Advanced analytics', 'Priority support', 'Custom integrations'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$299',
    description: 'For large organizations with custom needs.',
    features: ['Unlimited users', '1 TB storage', 'Real-time analytics', '24/7 phone support', 'Dedicated account manager', 'Custom SLA'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            No hidden fees. No surprises.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'p-8 rounded-xl shadow-sm border-2 transition-all',
                plan.highlighted
                  ? 'border-indigo-500 bg-white dark:bg-gray-800 scale-105 shadow-lg'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
              )}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-4 text-4xl font-extrabold">{plan.price}<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span></p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={clsx(
                  'mt-8 w-full py-3 px-6 rounded-lg font-medium transition-colors',
                  plan.highlighted
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                )}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
