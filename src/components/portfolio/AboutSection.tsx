import { GraduationCap, MapPin, Calendar, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-surface/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Passionate about creating innovative solutions through technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Bio */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-card-border">
                <div className="flex items-center mb-6">
                  <User className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Who I Am</h3>
                </div>
                <p className="text-foreground-muted leading-relaxed">
                  Motivated and enthusiastic B.Tech student specializing in Artificial Intelligence, 
                  Machine Learning, and Deep Learning. Eager to apply academic knowledge in real-world 
                  settings through internships or training opportunities.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg border border-card-border">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Currently building hands-on experience in frontend and backend development. 
                  Exploring HTML, CSS, JavaScript, and frameworks like React and Express.js through 
                  personal and internship projects. Eager to develop real-world applications, 
                  understand system architecture, and grow within collaborative development environments.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg border border-card-border">
                <h3 className="text-2xl font-semibold mb-4">Looking Forward</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Open to opportunities that support continuous learning and professional growth 
                  in full stack development. Passionate about solving complex problems and 
                  creating impactful solutions through technology.
                </p>
              </div>
            </div>

            {/* Right Side - Education & Quick Facts */}
            <div className="space-y-6">
              {/* Education Card */}
              <div className="bg-gradient-card rounded-2xl p-8 shadow-xl border border-card-border">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold text-primary mb-2">
                      B.Tech in Computer Science Engineering
                    </h4>
                    <p className="text-foreground-muted mb-1">AI Specialization</p>
                    <p className="text-foreground-subtle mb-2">Teerthanker Mahaveer University</p>
                    <div className="flex items-center text-sm text-foreground-muted">
                      <Calendar className="h-4 w-4 mr-2" />
                      Expected Graduation: 2027
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-6 text-center shadow-lg border border-card-border">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-foreground-muted">Active Internships</div>
                </div>
                <div className="bg-card rounded-xl p-6 text-center shadow-lg border border-card-border">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-foreground-muted">Projects Completed</div>
                </div>
              </div>

              {/* Skills Highlight */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-card-border">
                <h3 className="text-xl font-semibold mb-4">Core Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Full-Stack Development",
                    "Deep Learning",
                    "Web Development"
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;