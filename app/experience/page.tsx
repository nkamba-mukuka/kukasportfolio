import React from 'react'


export default function Experience() {
    const experiences = [
        {
            title: "Senior Software Engineer",
            company: "Tech Company A",
            period: "2020 - Present",
            description: "Led development of key features for the company's main product. Mentored junior developers and implemented best practices."
        },
        {
            title: "Software Engineer",
            company: "Tech Startup B",
            period: "2017 - 2020",
            description: "Worked on full-stack development of a SaaS platform. Improved application performance by 40%."
        },
        {
            title: "Junior Developer",
            company: "Software House C",
            period: "2015 - 2017",
            description: "Assisted in the development of web applications for various clients. Gained experience in Agile methodologies."
        }
    ];

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-[#FFC0CB] mb-6">Experience</h1>
            {experiences.map((exp, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-xl font-semibold">{exp.title}</h2>
                    <p className="text-[#FFC0CB]">{exp.company}</p>
                    <p className="text-sm mb-2">{exp.period}</p>
                    <p>{exp.description}</p>
                </div>
            ))}
        </div>
    )
}

