import { useState } from 'react';

const testimonials = [
  { name: 'Alex Chen', role: 'Chess Master', text: 'SkyChess transformed my opening game completely!' },
  { name: 'Maria Garcia', role: 'Tournament Player', text: 'The AI feedback is incredibly insightful and personalized.' },
  { name: 'James Wilson', role: 'Student', text: 'Finally understanding complex openings with this platform.' },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-neon-blue">What Players Say</h2>
        <div className="relative">
          <div className="p-8 border-2 border-neon-blue/30 rounded-lg bg-gradient-to-br from-neon-darkblue/20 to-transparent">
            <p className="text-lg text-muted-foreground mb-6 italic"">\u201c{testimonials[current].text}\u201d</p>
            <h3 className="text-xl font-bold text-neon-blue">{testimonials[current].name}</h3>
            <p className="text-neon-cyan">{testimonials[current].role}</p>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition ${i === current ? 'bg-neon-cyan w-8' : 'bg-neon-cyan/30'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
