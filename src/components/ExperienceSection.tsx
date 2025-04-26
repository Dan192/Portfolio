// src/components/ExperienceSection.tsx
import React from "react";

const experiences = [
  {
    role: "GF&BM Summer Analyst",
    company: "J.P. Morgan Chase & Co.",
    duration: "June 2023 – August 2023",
    logo: "/logos/JPMlogo.jpg",
    description: [
    "Built an Auto-Regressive Time Series Forecasting model in to create Pre-Provision Net Revenue forecasts for 34 banks over 9 macroeconomic quarters, ensuring accuracy against Federal Reserve benchmarks", 
    "Implemented capital stress testing processes for the 34 bank forecast, and managed the development and security of financial reports for authorized stakeholders", 
    "Presented detailed analysis of SVB's deposit and lending policies compared to JPMorgan to 5 department heads, including the Treasury Chief Investment Officer, influencing key funding decisions", 
    "Updated the bank's database to ensure key individuals have access to upcoming stress tests"  
    ]
  },
  {
    role: "Hackathon Social Impact Winner",
    company: "Chainlink Labs",
    duration: "April 2022 – May 2022",
    logo: "/logos/CHAINLINKlogo.jpg",
    description: [
      "Developed a decentralized application to enhance financial services access for disabled users, integrating haptic feedback, voice commands, and audio playback using React JS, Solidity, and Python", 
      "Utilized Chainlink, Truflation, Moralis, and Hardhat to enhance app performance, winning the social impact category among 8,500 participants; featured on Chainlink’s Blog and Truflation’s social media" 
    ]
  },
  {
    role: "Business Development/Networking Intern",
    company: "Skadden, Arps, Slate, Meagher & Flom LLP and Affiliates",
    duration: "July 2018 – August 2018",
    logo: "/logos/SKADDENlogo.jpg",
    description: [
      "Led software management, including troubleshooting, installations, and upgrades in collaboration with 3 networking teams, significantly enhancing system reliability and user satisfaction", 
      "Coordinated 2 information technology infrastructure projects, such as data wiring and maintaining hardware storage rooms, ensuring efficient operations and robust network performance", 
      "Enhanced website functionality by resolving issues with the Development Team, boosting efficiency by 15%", 
      "Upgraded employee hardware, handled installations, and resolved technical issues efficiently"
    ]
  },
];

const ExperienceSection = () => {
  return (
    <section className="mt-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-python-blue mb-8 text-center">
        Experience
      </h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-all"
          >
            <div className="flex items-center gap-4 mb-2">
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 object-contain rounded"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold">
                  {exp.role} @ {exp.company}
                </h3>
              <p className="text-sm text-gray-500">{exp.duration}</p>
            </div>
          </div>


            <div className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {Array.isArray(exp.description) ? (
                <ul className="list-disc pl-5 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{exp.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ExperienceSection;
