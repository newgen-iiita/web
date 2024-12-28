import React, { useState, useEffect } from "react";

const data = [
  {
    title: "Eco-C",
    owner: "G. Vijay Naik",
    description:
      "The applicant is in the e-bike sector. The applicant demonstrated 2 new prototypes (improved versions) of the previous version of the e-bike. The applicant demonstrated, through video, the working of the latest prototypes. The applicant has 4 pilot customers and is looking for large investment help to further the idea. Currently, we are working on product development. Acquired 5 pilot customers.",
    logo: "c1.png",
    link: "https://www.hindustantimes.com/cities/others/iiita-signs-mou-with-alumni-start-up-eco-c-pvt-ltd-to-develop-affordable-technology-for-eco-friendly-electric-cycles-101684847966781.html",
  },
  {
    title: "Glexspace",
    owner: "Ayush Chaurasiya",
    description:
      "The startup solves problems related to mental health. The startup provides access to counselors for college students along with conduction of various events. The pilot customer/ study at Pune was successful. They provide in-app Tele-Consultation, CRM and other services. Served more than 40 Clients, Generating Revenue.",
    logo: "c2.webp",
    link: "https://glexpace.in/",
  },
  {
    title: "Nirvaan",
    owner: "Abhinav",
    description:
      "The startup provides Online Psychotherapy with several features including selection of music, psychologist therapy, Sleep etc. They impact the world through Therapy-especially to those with Anxiety/Depression, Their therapy is a combination of best practices and concepts from psychotherapy, counseling mindfulness, Indian philosophy & Science-based healing music They have more than 250 clients so far with over 2.5 lac revenue. Served more than 250 Clients, Generated Revenue with over 2.5+ lakhs revenue.",
    logo: "c3.webp",
    link: "https://www.nirvaan.org.in/",
  },
  {
    title: "Primary Healthcare Drone",
    owner: "Pankaj Kumar Goyal",
    description:
      "The startup was admitted in the last round and has since then made designs for the drone. 3D printing of the drone Body is completed. Electronic configurations are in process.",
    logo: "c4.png",
    link: "https://www.google.com/",
  },
  {
    title: "Stimular",
    owner: "Akshat Baranwal",
    description:
      "The startup provides Al-based voice analysis to help students and working professionals globally to enhance their English-speaking proficiency. The startup has 200,000+ users from over 200 different countries and is already making early revenue. Raised seed round of 1 Million dollars. Improving the overall AI accuracy and performance of the platform.",
    logo: "c5.svg",
    link: "https://stimuler.tech/",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 2, data.length - 2) 
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 2, 0)); 
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "ArrowLeft") {
      handlePrev();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="mt-20 overflow-hidden bg-[#1e1e2d] text-white p-8 rounded-2xl shadow-lg">
        <div className="relative">
          <div
            className="flex transition-transform duration-300 gap-6"
            style={{
              transform: `translateX(-${currentIndex * 33}%)`,
            }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[90%] sm:w-[48%] lg:w-[33.33%] p-6 bg-gray-800 rounded-2xl shadow-lg flex flex-col justify-between"
              >
                <div className="text-center">
                  <img
                    src={item.logo}
                    alt={`${item.title} logo`}
                    className="mx-auto mb-4 w-16 h-16"
                  />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">By {item.owner}</p>
                </div>
            
                <div className="mt-4 text-gray-300 overflow-y-auto max-h-[100px]">
                  {item.description}
                </div>
                <a
                  href={item.link}
                  className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 mx-auto"
                >
                  Visit →
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 p-2 rounded disabled:opacity-50"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= data.length - 2}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 p-2 rounded disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
