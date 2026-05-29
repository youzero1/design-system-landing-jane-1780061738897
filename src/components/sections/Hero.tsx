import { ArrowRight, Play, Star, Users, TrendingUp, Shield } from 'lucide-react';

const stats = [
  { icon: Users, value: '50K+', label: 'Active Users' },
  { icon: TrendingUp, value: '3x', label: 'Productivity Boost' },
  { icon: Shield, value: '99.9%', label: 'Uptime SLA' },
];

const avatars = [
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Mia',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-indigo-100 dark:bg-indigo-950 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-purple-100 dark:bg-purple-950 opacity-50 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-sky-50 dark:bg-sky-950 opacity-30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600" />
            </span>
            Introducing SysFlow 2.0 — Now in Beta
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Build Faster,
            <span className="relative mx-3 inline-block">
              <span className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Work Smarter
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5C60 3 120 1 150 1C180 1 240 3 298 8.5"
                  stroke="url(#underline-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#6366f1" />
                    <stop offset="0.5" stopColor="#a855f7" />
                    <stop offset="1" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mt-2">
            Scale with Confidence.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            SysFlow unifies your workflow, automates repetitive tasks, and delivers real-time insights —
            so your team can focus on what actually matters.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40 transition-all hover:scale-105 hover:shadow-xl">
            Start Free Trial
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-lg font-semibold rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900 transition-colors">
              <Play className="w-3.5 h-3.5 ml-0.5" fill="currentColor" />
            </span>
            Watch Demo
          </button>
        </div>

        {/* Social proof strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`User ${i + 1}`}
                className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200"
              />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-semibold text-gray-800 dark:text-gray-200 ml-1">4.9/5</span>
            <span>from 2,000+ reviews</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-3xl font-extrabold text-gray-900 dark:text-white">{value}</span>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</span>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          {/* Glow effect behind card */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-20 dark:opacity-30 blur-2xl rounded-3xl scale-95" />
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-900">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 ml-4 h-6 rounded-full bg-gray-200 dark:bg-gray-700 max-w-xs flex items-center px-3">
                <span className="text-xs text-gray-400 dark:text-gray-500 truncate">app.sysflow.io/dashboard</span>
              </div>
            </div>
            {/* Fake dashboard content */}
            <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-[340px]">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Total Revenue', value: '$84,231', change: '+12.5%', color: 'indigo' },
                  { label: 'Active Tasks', value: '1,429', change: '+8.2%', color: 'purple' },
                  { label: 'Team Members', value: '312', change: '+4.1%', color: 'pink' },
                ].map((card) => (
                  <div key={card.label} className="rounded-xl p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{card.label}</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{card.value}</p>
                    <span className="inline-block mt-1 text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">{card.change}</span>
                  </div>
                ))}
              </div>
              {/* Fake chart bars */}
              <div className="rounded-xl p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4">Weekly Performance</p>
                <div className="flex items-end gap-2 h-24">
                  {[65, 45, 78, 55, 90, 72, 85].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-md bg-gradient-to-t from-indigo-500 to-purple-400 opacity-80 hover:opacity-100 transition-opacity"
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-[10px] text-gray-400">{['M','T','W','T','F','S','S'][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
