import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileEdit, Plus, Trash } from "lucide-react"

export default function ResumeBuilder() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-matrix-green">Resume Builder</h1>
        <p className="text-matrix-green/70">Create a professional developer resume that stands out</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
        <div>
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid grid-cols-5 mb-8 bg-black border border-matrix-green/30">
              <TabsTrigger
                value="personal"
                className="data-[state=active]:bg-matrix-green/10 data-[state=active]:text-matrix-green"
              >
                Personal
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-matrix-green/10 data-[state=active]:text-matrix-green"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-matrix-green/10 data-[state=active]:text-matrix-green"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="data-[state=active]:bg-matrix-green/10 data-[state=active]:text-matrix-green"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-matrix-green/10 data-[state=active]:text-matrix-green"
              >
                Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4">
              <div className="border border-matrix-green/30 rounded-lg p-6 bg-matrix-green/5">
                <h2 className="text-xl font-semibold text-matrix-green mb-4">Personal Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-matrix-green mb-2">Full Name</label>
                    <Input
                      placeholder="John Doe"
                      className="bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
                    />
                  </div>
                  <div>
                    <label className="block text-matrix-green mb-2">Job Title</label>
                    <Input
                      placeholder="Senior Frontend Developer"
                      className="bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
                    />
                  </div>
                  <div>
                    <label className="block text-matrix-green mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="john.doe@example.com"
                      className="bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
                    />
                  </div>
                  <div>
                    <label className="block text-matrix-green mb-2">Phone</label>
                    <Input
                      placeholder="(123) 456-7890"
                      className="bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
                    />
                  </div>
                  <div>
                    <label className="block text-matrix-green mb-2">Location</label>
                    <Input
                      placeholder="San Francisco, CA"
                      className="bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
                    />
                  </div>
                  <div>
                    <label className="block text-matrix-green mb-2">Website</label>
                    <Input
                      placeholder="https://johndoe.dev"
                      className="bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-matrix-green mb-2">Professional Summary</label>
                  <textarea
                    rows={4}
                    placeholder="A brief summary of your professional background and goals..."
                    className="w-full bg-black border border-matrix-green/50 rounded-md p-2 text-matrix-green focus:outline-none focus:ring-2 focus:ring-matrix-green/50"
                  />
                </div>
              </div>

              <div className="border border-matrix-green/30 rounded-lg p-6 bg-matrix-green/5">
                <h2 className="text-xl font-semibold text-matrix-green mb-4">Social Links</h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-matrix-green mb-2">GitHub</label>
                      <Input
                        placeholder="github.com/johndoe"
                        className="bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
                      />
                    </div>
                    <div>
                      <label className="block text-matrix-green mb-2">LinkedIn</label>
                      <Input
                        placeholder="linkedin.com/in/johndoe"
                        className="bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-matrix-green mb-2">Twitter</label>
                      <Input
                        placeholder="twitter.com/johndoe"
                        className="bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
                      />
                    </div>
                    <div>
                      <label className="block text-matrix-green mb-2">Stack Overflow</label>
                      <Input
                        placeholder="stackoverflow.com/users/123456"
                        className="bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="space-y-4">
              <div className="border border-matrix-green/30 rounded-lg p-6 bg-matrix-green/5">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-matrix-green">Work Experience</h2>
                  <Button className="bg-matrix-green hover:bg-matrix-green/80 text-black">
                    <Plus className="h-4 w-4 mr-2" /> Add Experience
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="border border-matrix-green/30 rounded-lg p-4 bg-black">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-matrix-green">Senior Frontend Developer</h3>
                        <p className="text-matrix-green/70">TechCorp Inc.</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10"
                        >
                          <FileEdit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-matrix-green/70 text-sm mb-1">Start Date</label>
                        <p className="text-matrix-green">January 2020</p>
                      </div>
                      <div>
                        <label className="block text-matrix-green/70 text-sm mb-1">End Date</label>
                        <p className="text-matrix-green">Present</p>
                      </div>
                      <div>
                        <label className="block text-matrix-green/70 text-sm mb-1">Location</label>
                        <p className="text-matrix-green">San Francisco, CA (Remote)</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-matrix-green/70 text-sm mb-1">Responsibilities & Achievements</label>
                      <ul className="list-disc list-inside text-matrix-green space-y-1">
                        <li>Led a team of 5 developers in rebuilding the company's flagship product</li>
                        <li>Reduced load times by 40% through code optimization and lazy loading</li>
                        <li>Implemented CI/CD pipeline that reduced deployment time by 60%</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border border-matrix-green/30 rounded-lg p-4 bg-black">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-matrix-green">Frontend Developer</h3>
                        <p className="text-matrix-green/70">WebSolutions LLC</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10"
                        >
                          <FileEdit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-matrix-green/70 text-sm mb-1">Start Date</label>
                        <p className="text-matrix-green">March 2018</p>
                      </div>
                      <div>
                        <label className="block text-matrix-green/70 text-sm mb-1">End Date</label>
                        <p className="text-matrix-green">December 2019</p>
                      </div>
                      <div>
                        <label className="block text-matrix-green/70 text-sm mb-1">Location</label>
                        <p className="text-matrix-green">Boston, MA</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-matrix-green/70 text-sm mb-1">Responsibilities & Achievements</label>
                      <ul className="list-disc list-inside text-matrix-green space-y-1">
                        <li>Developed responsive web applications using React and TypeScript</li>
                        <li>Collaborated with UX designers to implement pixel-perfect interfaces</li>
                        <li>Built reusable component library that increased development speed by 30%</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="space-y-4">
              <div className="border border-matrix-green/30 rounded-lg p-6 bg-matrix-green/5">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-matrix-green">Technical Skills</h2>
                  <Button className="bg-matrix-green hover:bg-matrix-green/80 text-black">
                    <Plus className="h-4 w-4 mr-2" /> Add Skill
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-matrix-green mb-3">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"].map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 bg-matrix-green/10 px-3 py-1.5 rounded-md border border-matrix-green/30"
                        >
                          <span className="text-matrix-green">{skill}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-5 w-5 text-matrix-green hover:bg-matrix-green/20 p-0"
                          >
                            <Trash className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-matrix-green mb-3">Frameworks & Libraries</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "Node.js", "Express", "TailwindCSS", "Redux", "GraphQL"].map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 bg-matrix-green/10 px-3 py-1.5 rounded-md border border-matrix-green/30"
                        >
                          <span className="text-matrix-green">{skill}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-5 w-5 text-matrix-green hover:bg-matrix-green/20 p-0"
                          >
                            <Trash className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-matrix-green mb-3">Tools & Platforms</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "Docker", "AWS", "Vercel", "Figma", "Jest", "Webpack"].map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 bg-matrix-green/10 px-3 py-1.5 rounded-md border border-matrix-green/30"
                        >
                          <span className="text-matrix-green">{skill}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-5 w-5 text-matrix-green hover:bg-matrix-green/20 p-0"
                          >
                            <Trash className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-matrix-green/30 rounded-lg p-6 bg-matrix-green/5">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-matrix-green">Soft Skills</h2>
                  <Button className="bg-matrix-green hover:bg-matrix-green/80 text-black">
                    <Plus className="h-4 w-4 mr-2" /> Add Skill
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Team Leadership",
                    "Problem Solving",
                    "Communication",
                    "Agile Methodology",
                    "Project Management",
                    "Mentoring",
                    "Time Management",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 bg-matrix-green/10 px-3 py-1.5 rounded-md border border-matrix-green/30"
                    >
                      <span className="text-matrix-green">{skill}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-5 w-5 text-matrix-green hover:bg-matrix-green/20 p-0"
                      >
                        <Trash className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-4">
              {/* Education content would go here, similar to experience */}
              <div className="border border-matrix-green/30 rounded-lg p-6 bg-matrix-green/5">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-matrix-green">Education</h2>
                  <Button className="bg-matrix-green hover:bg-matrix-green/80 text-black">
                    <Plus className="h-4 w-4 mr-2" /> Add Education
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="border border-matrix-green/30 rounded-lg p-4 bg-black">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-matrix-green">Master of Computer Science</h3>
                        <p className="text-matrix-green/70">Stanford University</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10"
                        >
                          <FileEdit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-matrix-green/70 text-sm mb-1">Graduation Date</label>
                        <p className="text-matrix-green">May 2018</p>
                      </div>
                      <div>
                        <label className="block text-matrix-green/70 text-sm mb-1">GPA</label>
                        <p className="text-matrix-green">3.8/4.0</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-matrix-green/70 text-sm mb-1">Relevant Coursework</label>
                      <p className="text-matrix-green">
                        Advanced Algorithms, Machine Learning, Distributed Systems, Human-Computer Interaction
                      </p>
                    </div>
                  </div>

                  <div className="border border-matrix-green/30 rounded-lg p-4 bg-black">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-matrix-green">Bachelor of Science in Computer Science</h3>
                        <p className="text-matrix-green/70">MIT</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10"
                        >
                          <FileEdit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-matrix-green/70 text-sm mb-1">Graduation Date</label>
                        <p className="text-matrix-green">May 2016</p>
                      </div>
                      <div>
                        <label className="block text-matrix-green/70 text-sm mb-1">GPA</label>
                        <p className="text-matrix-green">3.7/4.0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-4">
              {/* Projects content would go here */}
              <div className="border border-matrix-green/30 rounded-lg p-6 bg-matrix-green/5">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-matrix-green">Projects</h2>
                  <Button className="bg-matrix-green hover:bg-matrix-green/80 text-black">
                    <Plus className="h-4 w-4 mr-2" /> Add Project
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="border border-matrix-green/30 rounded-lg p-4 bg-black">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-matrix-green">E-commerce Platform</h3>
                        <p className="text-matrix-green/70">Full-stack application with React, Node.js, and MongoDB</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10"
                        >
                          <FileEdit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-matrix-green/70 text-sm mb-1">Description</label>
                      <p className="text-matrix-green">
                        Built a complete e-commerce platform with user authentication, product catalog, shopping cart,
                        and payment processing.
                      </p>
                    </div>

                    <div className="mb-4">
                      <label className="block text-matrix-green/70 text-sm mb-1">Technologies Used</label>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API", "AWS S3"].map((tech) => (
                          <span
                            key={tech}
                            className="bg-matrix-green/10 px-2 py-0.5 rounded text-xs text-matrix-green border border-matrix-green/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-matrix-green/70 text-sm mb-1">Links</label>
                      <div className="flex gap-4 text-matrix-green">
                        <a href="#" className="hover:underline">
                          GitHub
                        </a>
                        <a href="#" className="hover:underline">
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border border-matrix-green/30 rounded-lg p-4 bg-black">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-matrix-green">AI-Powered Task Manager</h3>
                        <p className="text-matrix-green/70">React Native mobile application with ML capabilities</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10"
                        >
                          <FileEdit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-matrix-green/70 text-sm mb-1">Description</label>
                      <p className="text-matrix-green">
                        Developed a mobile task manager that uses machine learning to prioritize tasks and suggest
                        optimal scheduling.
                      </p>
                    </div>

                    <div className="mb-4">
                      <label className="block text-matrix-green/70 text-sm mb-1">Technologies Used</label>
                      <div className="flex flex-wrap gap-2">
                        {["React Native", "TensorFlow.js", "Firebase", "Redux", "Expo"].map((tech) => (
                          <span
                            key={tech}
                            className="bg-matrix-green/10 px-2 py-0.5 rounded text-xs text-matrix-green border border-matrix-green/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-matrix-green/70 text-sm mb-1">Links</label>
                      <div className="flex gap-4 text-matrix-green">
                        <a href="#" className="hover:underline">
                          GitHub
                        </a>
                        <a href="#" className="hover:underline">
                          App Store
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <div className="sticky top-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-matrix-green">Preview</h2>
              <Button className="bg-matrix-green hover:bg-matrix-green/80 text-black">
                <Download className="h-4 w-4 mr-2" /> Export PDF
              </Button>
            </div>

            <div className="border border-matrix-green/30 rounded-lg overflow-hidden bg-white text-black">
              <div className="p-6 bg-matrix-green/10 border-b border-matrix-green/30">
                <h1 className="text-2xl font-bold text-black">John Doe</h1>
                <p className="text-gray-700">Senior Frontend Developer</p>
                <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-600">
                  <span>john.doe@example.com</span>
                  <span>•</span>
                  <span>(123) 456-7890</span>
                  <span>•</span>
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h2 className="text-lg font-semibold border-b pb-1 mb-2">Experience</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="font-medium">Senior Frontend Developer</h3>
                        <span className="text-sm text-gray-600">Jan 2020 - Present</span>
                      </div>
                      <p className="text-gray-700">TechCorp Inc.</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                        <li>Led a team of 5 developers in rebuilding the company's flagship product</li>
                        <li>Reduced load times by 40% through code optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold border-b pb-1 mb-2">Skills</h2>
                  <div className="flex flex-wrap gap-1">
                    {["JavaScript", "React", "TypeScript", "Node.js", "CSS", "HTML"].map((skill) => (
                      <span key={skill} className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold border-b pb-1 mb-2">Education</h2>
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-medium">Master of Computer Science</h3>
                      <span className="text-sm text-gray-600">2018</span>
                    </div>
                    <p className="text-gray-700">Stanford University</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <Button variant="outline" className="border-matrix-green/50 text-matrix-green hover:bg-matrix-green/10">
                Change Template
              </Button>
              <Button variant="outline" className="border-matrix-green/50 text-matrix-green hover:bg-matrix-green/10">
                Customize Colors
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

