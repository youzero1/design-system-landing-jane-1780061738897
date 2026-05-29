import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 dark:bg-indigo-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your System?
          </h2>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
            Join thousands of teams already using SysFlow to build better products.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-600 text-lg font-medium rounded-lg shadow-lg hover:bg-indigo-50 transition-colors">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white text-lg font-medium rounded-lg hover:bg-white/10 transition-colors">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
