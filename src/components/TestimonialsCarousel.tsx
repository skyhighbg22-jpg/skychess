import { useState } from 'react';

const testimonials = [
  { name: 'Alex Chen', role: 'Chess Master', text: 'Excellent learning platform!' },
  { name: 'Maria Garcia', role: 'Tournament Player', text: 'Amazing AI feedback!' },
  { name: 'James Wilson', role: 'Student', text: 'Great for learning!' },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">What Players Say</h2>
        <div className="bg-gray-900 p-8 rounded-lg">
          <p className="text-lg text-gray-300 mb-6 italic">"{testimonials[current].text}"</p>
          <div className="text-center">
            <p className="text-white font-semibold">{testimonials[current].name}</p>
            <p className="text-gray-400">{testimonials[current].role}</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)} className="px-4 py-2 bg-blue-600 text-white rounded">Previous</button>
          <button onClick={() => setCurrent((p) => (p + 1) % testimonials.length)} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
        </div>
      </div>
    </section>
  );
}
