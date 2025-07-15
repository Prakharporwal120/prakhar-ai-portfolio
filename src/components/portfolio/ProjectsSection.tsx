import React from "react";
import { Github, ExternalLink, Eye, Brain, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Live Object Detection System",
      description: "Built a real-time object detection system using YOLO and OpenCV for AI use-cases. Implemented advanced computer vision algorithms for accurate detection and classification.",
      longDescription: "A comprehensive object detection solution that processes video streams in real-time, identifying and classifying multiple objects simultaneously with high accuracy. The system includes features like bounding box visualization, confidence scoring, and performance optimization for various hardware configurations.",
      technologies: ["Python", "YOLO", "OpenCV", "Computer Vision", "AI/ML"],
      category: "AI/ML",
      icon: <Eye className="h-6 w-6" />,
      gradient: "from-blue-500 to-purple-600",
      stats: {
        accuracy: "95%",
        fps: "30 FPS",
        objects: "80+ Classes"
      },
      features: [
        "Real-time object detection",
        "Multiple object classification",
        "Bounding box visualization",
        "Performance optimization",
        "Customizable confidence thresholds"
      ]
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "Developed a model using NLP and ML to analyze tweet sentiments for social insights. Implemented advanced text processing and machine learning algorithms.",
      longDescription: "An intelligent sentiment analysis system that processes Twitter data to extract emotional insights and trends. The model uses advanced NLP techniques including text preprocessing, feature extraction, and classification algorithms to determine sentiment polarity with high accuracy.",
      technologies: ["Python", "NLP", "Machine Learning", "Pandas", "Scikit-learn"],
      category: "AI/ML",
      icon: <MessageSquare className="h-6 w-6" />,
      gradient: "from-green-500 to-teal-600",
      stats: {
        accuracy: "92%",
        tweets: "10K+ Analyzed",
        languages: "Multi-language"
      },
      features: [
        "Text preprocessing pipeline",
        "Sentiment classification",
        "Emotion detection",
        "Trend analysis",
        "Data visualization"
      ]
    },
    {
      title: "E-commerce Mobile App",
      description: "Contributed to building an e-commerce app using Flutter/React Native, Firebase, and Razorpay. Focused on UI/UX, product listings, and authentication systems.",
      longDescription: "A feature-rich mobile e-commerce application with modern UI/UX design, seamless payment integration, and robust authentication. The app includes product catalog management, shopping cart functionality, order tracking, and secure payment processing.",
      technologies: ["Flutter", "React Native", "Firebase", "Razorpay", "JavaScript"],
      category: "Mobile Development",
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-pink-500 to-rose-600",
      stats: {
        users: "500+ Users",
        rating: "4.5/5",
        conversion: "12% CVR"
      },
      features: [
        "Cross-platform compatibility",
        "Secure payment gateway",
        "User authentication",
        "Product catalog",
        "Order management"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Showcase of my technical projects and practical implementations
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {/* Category Badge */}
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                      {project.category}
                    </span>
                    <div className="flex items-center text-foreground-subtle">
                      {project.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>

                  {/* Description */}
                  <p className="text-foreground-muted text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-foreground-subtle leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground-subtle mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-foreground rounded-full text-sm border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground-subtle mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-foreground-muted">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button variant="gradient" size="lg" className="group">
                      <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      View Code
                    </Button>
                    <Button variant="outline" size="lg" className="group">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Project Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative group">
                    {/* Main Card */}
                    <div className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-300`}>
                      {/* Project Icon */}
                      <div className="flex justify-center mb-8">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                          {React.cloneElement(project.icon, { className: "h-10 w-10" })}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 text-center text-white">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="space-y-2">
                            <div className="text-2xl font-bold">{value}</div>
                            <div className="text-sm opacity-90 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-xl border border-card-border">
              <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
              <p className="text-foreground-muted mb-6">
                Check out my GitHub for more projects and contributions
              </p>
              <Button variant="outline" size="lg" className="group">
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;