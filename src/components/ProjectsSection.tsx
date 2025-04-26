import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Black-Scholes Calculator and Visualizer",
    description: "Web app for pricing options and visualizing Greek sensitivities through dynamic charts and heatmaps based on the Black-Scholes model",
    tags: ["Python", "Pandas", "Matplotlib", "NumPy", "Seaborn", "Streamlit", "Scipy", "Statistics", "Data Visualization"],
    link: "https://black-scholes-webapp.streamlit.app/"
  },
  {
    title: "Monte Carlo Portfolio Analysis Model",
    description: `Modeled long-term portfolio performance using Monte Carlo Simulations on historical market data. Assessed risk and return trade-offs 
    by simulating thousands of potential outcomes, enabling data-driven insights into diversification strategies and volatility exposure`,
    tags: ["Python", "Pandas", "NumPy", "Statistics", "Monte Carlo", "yFinance", "MatplotLib", "Scipy"],
    link: "https://github.com/Dan192/Monte-Carlo-Portfolio-Analysis"
  },
  {
    title: "Global Hackathon Win - Chainlink",
    description: `HapticDAO Entry, as featured in the Chainlink Blog. Contributed to backend oracle provided data for different token
    information. Oracle data is decentralized across different central sources and is the industry standard for greater accuracy and reliability.`,
    tags: ["Python", "Solidity", "Javascript", "ReactJS", "Blockchain", "Accessibility"],
    link: "https://devpost.com/software/hapticdao"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-python-blue mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full hover:shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out">
                    <CardHeader>
                      <CardTitle className="text-python-blue">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-python-yellow/20 text-python-blue rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ) : (
                <Card className="h-full hover:shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out">
                  <CardHeader>
                    <CardTitle className="text-python-blue">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-python-yellow/20 text-python-blue rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
