import { useState } from 'react';

const faqs = [
  { q: 'How does SkyChess differ from other platforms?', a: 'We use AI to provide personalized feedback and adaptive learning paths tailored to your skill level.' },
  { q: 'Can beginners use SkyChess?', a: 'Absolutely! Our platform caters to all levels from absolute beginners to advanced players.' },
  { q: 'Is there a free trial?', a: 'Yes, we offer a 14-day free trial with full access to all features.' },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-neon-purple">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-neon-purple/30 rounded-lg overflow-hidden hover:border-neon-purple transition">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full p-4 text-left flex justify-between items-center hover:bg-neon-purple/5">
                <span className="font-bold text-neon-purple">{faq.q}</span>
                <span className={`transform transition ${open === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {open === i && <div className="p-4 border-t border-neon-purple/20 text-muted-foreground">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
