"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Code, FileCode, FileEdit, GitBranch, Menu, Sparkles, Users2, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "GitHelpBot", path: "/githelpbot", icon: <GitBranch className="h-5 w-5" /> },
    { name: "CodeScheduler", path: "/codescheduler", icon: <Code className="h-5 w-5" /> },
    { name: "DevDuel", path: "/devduel", icon: <Users2 className="h-5 w-5" /> },
    { name: "Snippify", path: "/snippify", icon: <FileCode className="h-5 w-5" /> },
    { name: "CleanCode", path: "/cleancode", icon: <Sparkles className="h-5 w-5" /> },
    { name: "Resume Builder", path: "/resumebuilder", icon: <FileEdit className="h-5 w-5" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`border-b border-terminal-light bg-terminal-dark/90 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 overflow-hidden rounded-md bg-terminal-gray flex items-center justify-center border border-matrix-green-subtle transition-all duration-300 group-hover:border-matrix-green-dim">
              <span className="text-matrix-green-dim font-bold text-lg group-hover:text-matrix-green transition-colors duration-300">
                C
              </span>
              <div className="absolute inset-0 opacity-30">
                <div className="matrix-rain" />
              </div>
            </div>
            <span className="font-bold text-matrix-green-dim text-xl group-hover:text-matrix-green transition-colors duration-300">
              Gitzen
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-300 hover-glow ${
                  pathname === route.path ? "text-matrix-green-dim" : "text-foreground/70"
                }`}
              >
                {route.icon}
                {route.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-2">
            <Button
              variant="outline"
              className="border-matrix-green-subtle text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim hover:border-matrix-green-dim transition-all duration-300"
            >
              Sign In
            </Button>
            <Button className="bg-terminal-gray border border-matrix-green-subtle hover:bg-terminal-light hover:border-matrix-green-dim text-matrix-green-dim hover:text-matrix-green transition-all duration-300 matrix-button">
              Sign Up
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-terminal-light bg-terminal-dark/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {routes.map((route, index) => (
              <Link
                key={route.path}
                href={route.path}
                className={`flex items-center gap-2 p-2 rounded-md transition-all duration-300 stagger-item ${
                  pathname === route.path
                    ? "bg-terminal-gray text-matrix-green-dim"
                    : "text-foreground/70 hover:bg-terminal-gray/50 hover:text-matrix-green-dim"
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {route.icon}
                {route.name}
              </Link>
            ))}

            <div
              className="flex gap-2 mt-4 pt-4 border-t border-terminal-light stagger-item"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                variant="outline"
                className="flex-1 border-matrix-green-subtle text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim hover:border-matrix-green-dim transition-all duration-300"
              >
                Sign In
              </Button>
              <Button className="flex-1 bg-terminal-gray border border-matrix-green-subtle hover:bg-terminal-light hover:border-matrix-green-dim text-matrix-green-dim hover:text-matrix-green transition-all duration-300 matrix-button">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

