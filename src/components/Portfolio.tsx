
import React from 'react';
import { Calendar, Clock, Award } from 'lucide-react';

const Portfolio = () => {
  const experiences = [
    {
      title: "Executive Virtual Assistant",
      company: "Global Tech Solutions",
      period: "2021 - Present",
      description: "Provide comprehensive virtual assistance to C-suite executives, managing emails, scheduling, travel arrangements, and preparing reports.",
      achievements: [
        "Reduced email response time by 60% through implementation of email management system",
        "Successfully coordinated international travel and events for 15+ executives",
        "Developed and maintained an efficient document management system"
      ]
    },
    {
      title: "Administrative Virtual Assistant",
      company: "Summit Enterprises",
      period: "2019 - 2021",
      description: "Managed day-to-day administrative tasks for a growing e-commerce business, including customer service, order processing, and inventory management.",
      achievements: [
        "Improved customer satisfaction ratings by 25% through enhanced communication",
        "Streamlined order processing workflow, reducing fulfillment time by 40%",
        "Implemented new CRM system, resulting in better lead tracking and conversion"
      ]
    },
    {
      title: "Social Media Coordinator",
      company: "Creative Minds Agency",
      period: "2018 - 2019",
      description: "Managed social media accounts for multiple clients, created content calendars, and analyzed performance metrics to optimize engagement.",
      achievements: [
        "Increased social media engagement by an average of 35% across all client accounts",
        "Developed comprehensive social media strategy templates now used company-wide",
        "Successfully grew client follower base by over 10,000 within first six months"
      ]
    }
  ];

  const certifications = [
    {
      title: "Certified Virtual Assistant",
      organization: "International Virtual Assistants Association",
      year: "2021"
    },
    {
      title: "Advanced Social Media Management",
      organization: "Digital Marketing Institute",
      year: "2020"
    },
    {
      title: "Project Management Professional (PMP)",
      organization: "Project Management Institute",
      year: "2019"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">My Experience</h2>
          <p className="text-lg text-muted-foreground">
            A track record of excellence providing virtual assistance across diverse industries.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="heading-md mb-8 animate-fade-in">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-md border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <h5 className="font-semibold mb-2">Key Achievements:</h5>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="heading-md mb-8 animate-fade-in">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-md border border-border flex flex-col animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                <p className="text-muted-foreground text-sm">{cert.organization}</p>
                <div className="mt-auto pt-4 flex items-center">
                  <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-sm text-muted-foreground">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
