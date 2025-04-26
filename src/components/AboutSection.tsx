
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-python-blue mb-8">About Me</h2>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              I'm a passionate Python developer who loves turning complex problems into elegant solutions. 
              With a background in Finance & CS and a keen interest in data analysis and quantitative methods, 
              I create tools and applications that make a difference.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me playing basketball or strategy games, reading, 
              writing technical articles, or exploring new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
