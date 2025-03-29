import { Bot, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function GitHelpBot() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-matrix-green">GitHelpBot</h1>
        <p className="text-matrix-green/70">
          Your AI assistant for Git commands and workflows. Ask any Git-related question.
        </p>
      </div>

      <div className="border border-matrix-green/30 rounded-lg overflow-hidden">
        <div className="h-[500px] overflow-y-auto p-4 space-y-4 bg-black/50">
          <div className="flex gap-3">
            <div className="bg-matrix-green/10 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
              <Bot className="h-5 w-5 text-matrix-green" />
            </div>
            <div className="border border-matrix-green/30 rounded-lg p-3 bg-matrix-green/5 max-w-[80%]">
              <p className="text-matrix-green">Hello! I'm GitHelpBot. How can I assist you with Git today?</p>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <div className="border border-matrix-green/30 rounded-lg p-3 bg-matrix-green/10 max-w-[80%]">
              <p className="text-matrix-green">How do I undo my last commit?</p>
            </div>
            <div className="bg-matrix-green/20 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
              <span className="text-matrix-green font-medium">U</span>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="bg-matrix-green/10 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
              <Bot className="h-5 w-5 text-matrix-green" />
            </div>
            <div className="border border-matrix-green/30 rounded-lg p-3 bg-matrix-green/5 max-w-[80%]">
              <p className="text-matrix-green">
                To undo your last commit while keeping the changes in your working directory, use:
              </p>
              <pre className="bg-black/50 p-2 rounded mt-2 text-matrix-green overflow-x-auto">
                git reset --soft HEAD~1
              </pre>
              <p className="text-matrix-green mt-2">
                If you want to completely discard the commit and its changes, use:
              </p>
              <pre className="bg-black/50 p-2 rounded mt-2 text-matrix-green overflow-x-auto">
                git reset --hard HEAD~1
              </pre>
              <p className="text-matrix-green mt-2">
                Be careful with --hard as it will delete your changes permanently.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-matrix-green/30 bg-black/80">
          <div className="flex gap-2">
            <Input
              placeholder="Ask a Git question..."
              className="bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
            />
            <Button className="bg-matrix-green hover:bg-matrix-green/80 text-black">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border border-matrix-green/30 rounded-lg p-4 bg-matrix-green/5">
          <h3 className="font-medium text-matrix-green mb-2">Popular Questions</h3>
          <ul className="space-y-2 text-matrix-green/70">
            <li className="hover:text-matrix-green cursor-pointer">• How to create a new branch?</li>
            <li className="hover:text-matrix-green cursor-pointer">• What is git rebase?</li>
            <li className="hover:text-matrix-green cursor-pointer">• How to resolve merge conflicts?</li>
            <li className="hover:text-matrix-green cursor-pointer">• How to squash commits?</li>
          </ul>
        </div>
        <div className="border border-matrix-green/30 rounded-lg p-4 bg-matrix-green/5">
          <h3 className="font-medium text-matrix-green mb-2">Git Cheat Sheet</h3>
          <ul className="space-y-2 text-matrix-green/70">
            <li>
              <code className="bg-black/50 px-1 rounded">git init</code> - Initialize a repository
            </li>
            <li>
              <code className="bg-black/50 px-1 rounded">git clone</code> - Clone a repository
            </li>
            <li>
              <code className="bg-black/50 px-1 rounded">git pull</code> - Fetch and merge changes
            </li>
            <li>
              <code className="bg-black/50 px-1 rounded">git push</code> - Push commits to remote
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

