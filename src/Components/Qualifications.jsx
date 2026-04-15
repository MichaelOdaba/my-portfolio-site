import React from "react";

const Qualifications = () => {
  const certifications = [
    {
      name: "B.S.c Computer Science",
      issuer: "Father Moses Orshio Adasu University",
      date: "2022-2026 (4 Years)",
      description:
        "Studied software engineering, Algorithms, Data Structures, AI and more. Built projects in web dev, machine learning, and mobile apps",
      logo: "projects/Moamlogo.png",
      link: "",
    },
    {
      name: "Software Developer Intern",
      issuer: "Federal Medical Center Makurdi",
      date: "23rd August 2025 - 3rd February 2026 (6 Months)",
      description:
        "Built features, fixed bugs, worked on integrations, and learned agile workflows in a healthcare setting",
      logo: "projects/FMCM logo.jpg",
      link: "",
    },
  ];
  return (
    <section id="qualifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <p className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <span className="text-primary">Education</span> &{" "}
          <span className="text-primary">Certifications</span>{" "}
        </p>
        <div className="grid grid-cols-1 gap-10">
          {certifications.map((certification, key) => {
            return (
              <div
                className="group bg-card card-hover p-3 py-7 rounded-md"
                key={key}
              >
                <div className="flex flex-col gap-2 justify-between items-center">
                  <img
                    src={certification.logo}
                    alt="issuer logo"
                    className="h-52 w-52 transition-transform duration-500 group-hover:scale-110"
                    key={key}
                  />

                  <p className="text-xl font-bold">{certification.name}</p>
                  <a href={certification.link}>
                    {" "}
                    <p className="text-primary text-lg font-bold">
                      {certification.issuer}
                    </p>
                  </a>

                  <p>{certification.description}</p>
                  <p className="text-sm font-bold">{certification.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
