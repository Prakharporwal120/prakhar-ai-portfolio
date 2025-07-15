import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Future Full-Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Tech Explorer"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-hero shadow-2xl flex items-center justify-center text-4xl font-bold text-primary-foreground animate-fade-in">
              PP
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-30 animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-gradient">Prakhar Porwal</span>
          </h1>

          {/* Animated Tagline */}
          <div className="text-2xl md:text-3xl text-foreground-muted mb-8 h-12 animate-fade-in">
            <span className="inline-block">
              {currentText}
              <span className="animate-blink border-r-2 border-primary ml-1"></span>
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground-subtle max-w-2xl mx-auto mb-12 animate-fade-in">
            Building the future, one line of code at a time. B.Tech CS student specializing in AI & Machine Learning.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="min-w-[180px]"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="min-w-[180px]"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection("about")}
            className="animate-bounce hover:-translate-y-1 transition-transform duration-300"
          >
            <ChevronDown className="h-8 w-8 text-foreground-muted hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;