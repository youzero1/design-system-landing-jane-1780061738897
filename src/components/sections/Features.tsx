import { Zap, Shield, BarChart3, Users, Cloud, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for performance with sub-second response times.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'End-to-end encryption and SOC 2 compliance built in.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time dashboards and custom reports at your fingertips.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with shared workspaces.',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Deploy anywhere with auto-scaling and high availability.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Multi-region support with 99.99% uptime SLA.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powerful features to help you build, deploy, and scale your system.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
