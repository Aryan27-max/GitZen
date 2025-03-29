import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-terminal-light bg-terminal-dark/90 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="fade-in">
            <div className="flex items-center gap-2 mb-4 hover-scale">
              <div className="relative h-8 w-8 overflow-hidden rounded-md bg-terminal-gray flex items-center justify-center border border-matrix-green-subtle">
                <span className="text-matrix-green-dim font-bold text-lg">C</span>
                <div className="absolute inset-0 opacity-30">
                  <div className="matrix-rain" />
                </div>
              </div>
              <span className="font-bold text-matrix-green-dim text-xl">GitZen</span>
            </div>
            <p className="text-foreground/70 text-sm mb-4">
              A platform for coders with various tools and features to enhance your coding experience.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-foreground/70 hover:text-matrix-green-dim transition-colors duration-300">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-matrix-green-dim transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-matrix-green-dim transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-medium text-matrix-green-dim mb-4">Tools</h3>
            <ul className="space-y-2">
              {[
                { name: "GitHelpBot", path: "/githelpbot" },
                { name: "CodeScheduler", path: "/codescheduler" },
                { name: "DevDuel", path: "/devduel" },
                { name: "Snippify", path: "/snippify" },
                { name: "CleanCode", path: "/cleancode" },
                { name: "Resume Builder", path: "/resumebuilder" },
              ].map((item, index) => (
                <li key={item.path} className="stagger-item" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                  <Link
                    href={item.path}
                    className="text-foreground/70 hover:text-matrix-green-dim transition-colors duration-300 text-sm hover-glow"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-medium text-matrix-green-dim mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: "Documentation", path: "#" },
                { name: "Blog", path: "#" },
                { name: "Tutorials", path: "#" },
                { name: "Community", path: "#" },
                { name: "API Reference", path: "#" },
              ].map((item, index) => (
                <li key={item.path} className="stagger-item" style={{ animationDelay: `${0.2 + index * 0.05}s` }}>
                  <Link
                    href={item.path}
                    className="text-foreground/70 hover:text-matrix-green-dim transition-colors duration-300 text-sm hover-glow"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-medium text-matrix-green-dim mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "#" },
                { name: "Careers", path: "#" },
                { name: "Contact", path: "#" },
                { name: "Privacy Policy", path: "#" },
                { name: "Terms of Service", path: "#" },
              ].map((item, index) => (
                <li key={item.path} className="stagger-item" style={{ animationDelay: `${0.3 + index * 0.05}s` }}>
                  <Link
                    href={item.path}
                    className="text-foreground/70 hover:text-matrix-green-dim transition-colors duration-300 text-sm hover-glow"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border-t border-terminal-light mt-8 pt-8 text-center text-sm text-foreground/50 fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <p>&copy; {new Date().getFullYear()} GitZen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

