export default function PricingSection() {
  return (
    <section className="py-20 px-6 bg-black border-t border-neon-cyan/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-neon-cyan">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Starter', 'Pro', 'Elite'].map((plan, i) => (
            <div key={i} className="p-8 border border-neon-cyan/30 rounded-lg hover:border-neon-cyan transition">
              <h3 className="text-2xl font-bold text-neon-cyan mb-4">{plan}</h3>
              <p className="text-3xl font-bold text-neon-green mb-6">${plan === 'Starter' ? '9' : plan === 'Pro' ? '29' : '99'}/mo</p>
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold hover:shadow-lg hover:shadow-neon-cyan/50">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
