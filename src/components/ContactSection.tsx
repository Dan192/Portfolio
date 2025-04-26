import { useState } from "react";

const messages = [
  "Dan is the best coder I know!",
  "Don't be shy, say hi!",
  "Cutting Edge Solutions? I'm down.",
  "Python is love. Python is life.",
  "Need a dev? I'm your dev!"
];

const ContactSection = () => {
  const [balloonVisible, setBalloonVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [balloonMessage, setBalloonMessage] = useState("");

  const handleHover = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setBalloonMessage(randomMessage);
    setBalloonVisible(true);
    setIsHovered(true);
    setTimeout(() => setBalloonVisible(false), 5000);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="contact" className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-python-blue mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out if you'd like to collaborate!
          </p>
          <a
            href="mailto:drassouli14@gmail.com"
            className="inline-block px-8 py-3 bg-python-blue text-white rounded-lg hover:bg-python-green transition-colors duration-300"
          >
            Send me an email
          </a>
        </div>

        {/* Snoopy GIF + NES Balloon */}
        <div
          className="absolute bottom-4 left-4 flex items-center gap-2 cursor-pointer"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={isHovered ? "/snoopy.gif" : "/snoop.png"}
            alt="Snoopy Yawning"
            className="w-24 h-24 object-contain"
          />
          {balloonVisible && (
            <div className="relative">
              <p className="nes-balloon from-left is-dark">{balloonMessage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
