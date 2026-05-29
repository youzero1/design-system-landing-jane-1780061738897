export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">SysFlow</span>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Simplifying systems for modern teams.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#features" className="hover:text-indigo-600 dark:hover:text-indigo-400">Features</a></li>
              <li><a href="#pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} SysFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
