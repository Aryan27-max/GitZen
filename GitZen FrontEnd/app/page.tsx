"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Code, FileCode, GitBranch, Sparkles, Users2, FileEdit } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const featureElements = document.querySelectorAll(".feature-card")
    featureElements.forEach((el) => observer.observe(el))

    return () => {
      featureElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const features = [
    {
      title: "GitHelpBot",
      description: "Your AI assistant for Git commands and workflows",
      icon: <GitBranch className="h-6 w-6" />,
      href: "/githelpbot",
    },
    {
      title: "CodeScheduler",
      description: "Schedule your coding sessions and stay productive",
      icon: <Code className="h-6 w-6" />,
      href: "/codescheduler",
    },
    {
      title: "DevDuel",
      description: "Challenge your friends to 1v1 coding matches",
      icon: <Users2 className="h-6 w-6" />,
      href: "/devduel",
    },
    {
      title: "Snippify",
      description: "Save and organize your code snippets",
      icon: <FileCode className="h-6 w-6" />,
      href: "/snippify",
    },
    {
      title: "CleanCode",
      description: "Clean and enhance your code automatically",
      icon: <Sparkles className="h-6 w-6" />,
      href: "/cleancode",
    },
    {
      title: "Resume Builder",
      description: "Create a professional developer resume",
      icon: <FileEdit className="h-6 w-6" />,
      href: "/resumebuilder",
    },
  ]

  return (
    <div className="space-y-16">
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="matrix-rain" />
        </div>
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 text-matrix-green-dim glitch"
          data-text="GitZen Platform"
        >
          GitZen Platform
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-foreground/80 typing overflow-hidden whitespace-nowrap w-full md:w-3/4 mx-auto">
          Elevate your coding experience with our suite of developer tools
        </p>
        <Link
          href="/githelpbot"
          className="inline-flex items-center gap-2 bg-terminal-gray border border-matrix-green-subtle px-6 py-3 rounded-md font-medium text-matrix-green-dim hover:bg-terminal-light hover:text-matrix-green hover:border-matrix-green-dim transition-all duration-300 matrix-button"
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={featuresRef}>
        {features.map((feature, index) => (
          <Link
            key={feature.title}
            href={feature.href}
            className="border border-terminal-light rounded-lg p-6 hover:bg-terminal-gray transition-all duration-300 group feature-card opacity-0"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-terminal-gray p-3 rounded-md text-matrix-green-dim group-hover:text-matrix-green transition-colors duration-300">
                {feature.icon}
              </div>
              <h2 className="text-xl font-semibold text-matrix-green-dim group-hover:text-matrix-green transition-colors duration-300">
                {feature.title}
              </h2>
            </div>
            <p className="text-foreground/70 mb-4 group-hover:text-foreground transition-colors duration-300">
              {feature.description}
            </p>
            <div className="flex items-center text-matrix-green-dim group-hover:text-matrix-green group-hover:translate-x-1 transition-all duration-300">
              Explore <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>
        ))}
      </section>

      <section className="border border-terminal-light rounded-lg p-8 bg-terminal-gray/20 terminal fade-in">
        <h2 className="text-2xl font-bold mb-4 text-matrix-green-dim">Join the Matrix</h2>
        <p className="text-foreground/80 mb-6">
          Sign up today to access all features and connect with other developers in our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 bg-terminal-dark border border-terminal-light rounded-md focus:outline-none focus:ring-2 focus:ring-matrix-green-dim text-foreground transition-all duration-300 border-glow"
          />
          <button className="bg-terminal-gray border border-matrix-green-subtle px-6 py-2 rounded-md font-medium text-matrix-green-dim hover:bg-terminal-light hover:text-matrix-green hover:border-matrix-green-dim transition-all duration-300 matrix-button">
            Sign Up
          </button>
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-matrix-green-dim mb-4">Why Choose GitZen?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Our platform is designed by developers, for developers. Experience the future of coding with our suite of
            tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="terminal p-6 fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-semibold text-matrix-green-dim mb-4">Cutting-Edge Technology</h3>
            <div className="code-block mb-4">
              <pre className="text-foreground/80 text-sm">
                <span className="text-matrix-green-dim">const</span> <span className="text-blue-400">features</span> ={" "}
                {`{`}
                <br />
                {"  "}ai: <span className="text-orange-400">'Advanced algorithms'</span>,<br />
                {"  "}performance: <span className="text-orange-400">'Lightning fast'</span>,<br />
                {"  "}security: <span className="text-orange-400">'Enterprise grade'</span>
                <br />
                {`}`};
              </pre>
            </div>
            <p className="text-foreground/70">
              Built with the latest technologies to ensure you have the best tools at your fingertips.
            </p>
          </div>

          <div className="terminal p-6 fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold text-matrix-green-dim mb-4">Community Driven</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-terminal-gray flex items-center justify-center">
                <Users2 className="h-6 w-6 text-matrix-green-dim" />
              </div>
              <div>
                <div className="text-foreground/80">Active Users</div>
                <div className="text-2xl font-bold text-matrix-green-dim">10,000+</div>
              </div>
            </div>
            <p className="text-foreground/70">
              Join a thriving community of developers who share knowledge and collaborate on projects.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 fade-in">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-matrix-green-dim mb-4">What Our Users Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "GitZen has completely transformed my coding workflow. The tools are intuitive and powerful.",
              author: "Sarah J.",
              role: "Senior Developer",
            },
            {
              quote:
                "The DevDuel feature helped me improve my coding skills through friendly competition. Highly recommended!",
              author: "Mike T.",
              role: "Full Stack Engineer",
            },
            {
              quote: "I use Snippify daily to organize my code snippets. It's a game-changer for productivity.",
              author: "Alex K.",
              role: "Frontend Developer",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="border border-terminal-light rounded-lg p-6 bg-terminal-gray/10 hover:bg-terminal-gray/20 transition-all duration-300 hover-scale stagger-item"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <p className="text-foreground/80 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-terminal-gray flex items-center justify-center text-matrix-green-dim">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-matrix-green-dim">{testimonial.author}</div>
                  <div className="text-sm text-foreground/60">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

