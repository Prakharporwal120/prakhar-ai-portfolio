import { Code, Database, Palette, Brain, Server, Globe } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10 border-blue-500/20",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10 border-green-500/20",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "Django", level: 65 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10 border-purple-500/20",
      skills: [
        { name: "MongoDB", level: 70 },
        { name: "MySQL", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10 border-orange-500/20",
      skills: [
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 75 }
      ]
    },
    {
      title: "AI/ML Technologies",
      icon: <Brain className="h-6 w-6" />,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10 border-pink-500/20",
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "Deep Learning", level: 75 },
        { name: "OpenCV", level: 70 },
        { name: "NLP", level: 70 },
        { name: "YOLO", level: 75 }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: <Palette className="h-6 w-6" />,
      color: "text-teal-500",
      bgColor: "bg-teal-500/10 border-teal-500/20",
      skills: [
        { name: "React Native", level: 70 },
        { name: "Flutter", level: 65 },
        { name: "Firebase", level: 75 },
        { name: "Git", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-surface/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and capabilities
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg border border-card-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${category.bgColor} border ${category.color} mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-foreground-muted">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Highlight */}
          <div className="mt-16">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-xl border border-card-border text-center">
              <h3 className="text-2xl font-bold mb-4">Additional Competencies</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {[
                  "Problem Solving",
                  "Team Collaboration",
                  "System Architecture",
                  "API Development",
                  "UI/UX Design",
                  "Agile Methodology",
                  "Version Control",
                  "Testing & Debugging",
                  "Cloud Computing",
                  "DevOps Basics"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Journey */}
          <div className="mt-12 text-center">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-card-border">
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-foreground-muted mb-4">
                I'm constantly expanding my skill set and staying updated with the latest technologies and industry trends.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20">
                  Currently Learning: Advanced React
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20">
                  Next: TypeScript
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20">
                  Exploring: GraphQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;