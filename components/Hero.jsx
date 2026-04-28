export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-black">
          Designing the future,<br className="hidden md:block" /> one idea at a time.
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
          We are a digital design studio focused on building sleek, intuitive, and modern experiences for forward-thinking brands.
        </p>
        <div className="pt-8">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}