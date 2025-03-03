
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      console.log('Form submitted:', data);
      
      // Wait for 1.5 seconds to simulate server processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success toast
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        variant: "default",
      });
      
      // Reset form
      reset();
      setIsSubmitted(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      // Show error toast
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Ready to boost your productivity? Let's discuss how I can help you streamline your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <div className="bg-white rounded-lg p-8 shadow-md border border-border h-full">
              <h3 className="heading-md mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:tabbynmichael@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      tabbynmichael@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+254798041879" className="text-muted-foreground hover:text-primary transition-colors">
                      +254 798 041 879
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-muted-foreground">
                      Virtual Assistant - Available Worldwide
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
                <p className="text-muted-foreground mb-2">Monday - Friday: 9am - 5pm EAT</p>
                <p className="text-muted-foreground">Weekend availability upon request</p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="bg-white rounded-lg p-8 shadow-md border border-border">
              <h3 className="heading-md mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground text-center">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      {...register('name')}
                      className={`block w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-input'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      {...register('email')}
                      className={`block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-input'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      {...register('subject')}
                      className={`block w-full rounded-md border ${errors.subject ? 'border-red-500' : 'border-input'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="What is this regarding?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={5}
                      className={`block w-full rounded-md border ${errors.message ? 'border-red-500' : 'border-input'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse mr-2">Sending...</span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
