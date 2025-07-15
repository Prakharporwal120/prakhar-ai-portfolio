import { Mail, Phone, Linkedin, Github, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "porwalprakhar704@gmail.com",
      href: "mailto:porwalprakhar704@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 7820098039",
      href: "tel:+917820098039",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "prakhar-porwal-12a1b334b",
      href: "https://linkedin.com/in/prakhar-porwal-12a1b334b",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "Prakharporwal120",
      href: "https://github.com/Prakharporwal120",
      gradient: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-surface/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Let's discuss opportunities, collaborations, or just have a conversation about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-foreground-muted text-lg leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or simply chat about technology and innovation. Feel free to reach out through any 
                  of the channels below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block group"
                  >
                    <div className="bg-card rounded-xl p-6 shadow-lg border border-card-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{contact.label}</h4>
                          <p className="text-foreground-muted group-hover:text-primary transition-colors duration-300">
                            {contact.value}
                          </p>
                        </div>
                        <MessageCircle className="h-5 w-5 text-foreground-subtle group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-card-border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-foreground">Currently Available</span>
                </div>
                <p className="text-foreground-muted">
                  Open to internship opportunities, freelance projects, and collaborative ventures in 
                  AI/ML and full-stack development.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-card-border">
              <div className="flex items-center mb-6">
                <Send className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground-subtle mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground-subtle mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground-subtle mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground-subtle mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full group">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center text-sm text-foreground-muted">
                  Typically responds within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-12 border-t border-border text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gradient">PP</span>
                <span className="text-foreground-muted">Prakhar Porwal</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground-muted">
                <MapPin className="h-4 w-4" />
                <span>India</span>
              </div>
              <p className="text-sm text-foreground-muted">
                © 2025 Prakhar Porwal. Built with passion and React.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;