export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-black">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to SkyChess</h1>
          <p className="text-xl text-gray-400 mb-8">Master chess openings with AI</p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</button>
        </div>
      </div>
    </section>
  );
}
