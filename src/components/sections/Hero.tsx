import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Your New System,
          <span className="block text-indigo-600 dark:text-indigo-400">Simplified.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Streamline your workflow, automate repetitive tasks, and gain insights with our all-in-one platform.
          Built for teams that move fast.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium rounded-lg shadow-lg transition-colors">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-lg font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
