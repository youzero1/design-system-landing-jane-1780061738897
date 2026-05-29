import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'CTO, TechCorp',
    content: 'This platform transformed our workflow. We reduced operational overhead by 40%.',
    rating: 5,
  },
  {
    name: 'Bob Smith',
    role: 'Lead Engineer, DevStudio',
    content: 'The automation features alone saved us countless hours. Incredible value.',
    rating: 5,
  },
  {
    name: 'Carol Davis',
    role: 'Product Manager, SaaSify',
    content: 'Finally a tool that scales with us. The analytics are a game-changer.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Loved by Teams
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            See what our customers have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
