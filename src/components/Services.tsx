
import React from 'react';
import { 
  Calendar, Mail, Database, Search, Users, BarChart, MessageSquare, PenTool
} from 'lucide-react';

const services = [
  {
    title: "Email & Calendar Management",
    description: "Inbox organization, email filtering, meeting scheduling, and calendar management to keep your day structured.",
    icon: <Mail className="h-10 w-10 text-primary" />
  },
  {
    title: "Data Entry & Research",
    description: "Accurate data entry, meticulous record keeping, and in-depth research on any topic you need.",
    icon: <Database className="h-10 w-10 text-primary" />
  },
  {
    title: "Administrative Support",
    description: "Document preparation, travel arrangements, expense reports, and general administrative tasks.",
    icon: <PenTool className="h-10 w-10 text-primary" />
  },
  {
    title: "Customer Support",
    description: "Responsive email and chat support, order management, and client follow-ups to keep your customers happy.",
    icon: <MessageSquare className="h-10 w-10 text-primary" />
  },
  {
    title: "Social Media Management",
    description: "Content creation, scheduling, audience engagement, and analytics reporting across all platforms.",
    icon: <Users className="h-10 w-10 text-primary" />
  },
  {
    title: "Market Research",
    description: "Competitor analysis, industry trends, and market opportunities to help your business grow.",
    icon: <Search className="h-10 w-10 text-primary" />
  },
  {
    title: "Reports & Analytics",
    description: "Data analysis, custom report creation, and performance tracking to help you make data-driven decisions.",
    icon: <BarChart className="h-10 w-10 text-primary" />
  },
  {
    title: "Appointment Scheduling",
    description: "Managing appointments, sending reminders, and following up to ensure nothing falls through the cracks.",
    icon: <Calendar className="h-10 w-10 text-primary" />
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">My Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive virtual assistance solutions designed to boost your productivity and streamline your operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border scale-on-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-lg text-muted-foreground mb-4">
            Need a custom service package tailored to your specific needs?
          </p>
          <a href="#contact" className="btn-primary">
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
