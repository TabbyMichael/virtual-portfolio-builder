
import React from 'react';
import { Check, Star } from 'lucide-react';

const About = () => {
  const skills = [
    "Email Management",
    "Calendar Management",
    "CRM Administration",
    "Data Entry & Analysis",
    "Document Preparation",
    "Travel Arrangements",
    "Social Media Management",
    "Customer Support",
    "Research",
    "Project Management",
    "Bookkeeping",
    "Event Planning"
  ];

  const testimonials = [
    {
      text: "Tabitha has been an incredible asset to our team. Her organization skills and attention to detail have transformed our administrative processes.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc."
    },
    {
      text: "Working with Tabitha has allowed me to focus on growing my business while she handles the day-to-day operations. I couldn't recommend her more highly.",
      author: "Michael Chen",
      position: "Founder, Design Collective"
    },
    {
      text: "Tabitha's ability to manage multiple projects simultaneously while maintaining quality is remarkable. She's truly the best VA I've worked with.",
      author: "Emma Rodriguez",
      position: "Marketing Director, Global Brands"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-in-left">
            <h2 className="heading-lg mb-6">About Me</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              With over 5 years of experience as a dedicated Virtual Assistant, I specialize in helping entrepreneurs, executives, and small businesses streamline their operations and increase productivity.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I pride myself on being detail-oriented, highly organized, and committed to delivering exceptional service. My goal is to provide seamless support that allows you to focus on what matters most – growing your business.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Whether you need ongoing administrative support or project-based assistance, I offer flexible solutions tailored to your specific needs.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <h2 className="heading-lg mb-6">Client Testimonials</h2>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md border border-border"
                >
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
