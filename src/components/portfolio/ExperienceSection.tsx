import { Calendar, MapPin, Building2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Web Developer Intern",
      company: "Codec Technologies",
      duration: "Jun 2025 – Present",
      type: "Remote",
      description: "Assisted in web applications using HTML, CSS, JavaScript, React, Node.js/Express. Worked on UI design, backend APIs, and database integration.",
      technologies: ["React", "Node.js", "Express", "JavaScript", "HTML", "CSS"],
      status: "Current"
    },
    {
      title: "AI/ML Intern",
      company: "Edunet Foundation - AICTE Collaboration",
      duration: "Jun 2025 – Present",
      type: "Remote",
      description: "Working on classifying electronic waste using ML – involved in preprocessing, training, and evaluation.",
      technologies: ["Machine Learning", "Python", "Data Preprocessing", "Model Training"],
      status: "Current"
    },
    {
      title: "Full Stack Developer Intern",
      company: "CodeAlpha",
      duration: "Jun 2025",
      type: "Remote",
      description: "Contributed to building an e-commerce app using Flutter/React Native, Firebase, Razorpay. Focused on UI/UX, product listings, and authentication.",
      technologies: ["Flutter", "React Native", "Firebase", "Razorpay"],
      status: "Completed"
    },
    {
      title: "AI Intern",
      company: "Genz Educatewing",
      duration: "Completed",
      type: "Remote",
      description: "Completed Projects: Live Object Detection using YOLO & OpenCV, Twitter Sentiment Analysis using NLP",
      technologies: ["YOLO", "OpenCV", "NLP", "Python", "Computer Vision"],
      status: "Completed"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Building real-world skills through hands-on internships and projects
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 ml-16 md:ml-0' : 'md:pl-12 ml-16 md:ml-0'
                  }`}>
                    <div className="bg-card rounded-2xl p-8 shadow-lg border border-card-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exp.status === 'Current' 
                            ? 'bg-success/10 text-success border border-success/20' 
                            : 'bg-muted text-foreground-muted border border-border'
                        }`}>
                          {exp.status}
                        </span>
                        <div className="flex items-center text-sm text-foreground-muted">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.type}
                        </div>
                      </div>

                      {/* Company & Title */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                        <div className="flex items-center text-primary font-semibold mb-2">
                          <Building2 className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-sm text-foreground-muted">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.duration}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-foreground-muted mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground-subtle mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button variant="outline" size="sm" className="group">
                        Learn More
                        <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-xl border border-card-border">
              <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
              <p className="text-foreground-muted mb-6">
                I'm always open to new opportunities and exciting projects
              </p>
              <Button variant="gradient" size="lg">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;