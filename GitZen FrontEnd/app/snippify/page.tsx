"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, Download, FileCode, FolderPlus, Plus, Search, Share2, Star, Tag, Trash } from "lucide-react"

export default function Snippify() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-matrix-green">Snippify</h1>
        <p className="text-matrix-green/70">Save and organize your code snippets for quick access</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-matrix-green/50" />
            <Input
              placeholder="Search snippets..."
              className="pl-9 bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
            />
          </div>

          <div className="border border-matrix-green/30 rounded-lg overflow-hidden">
            <div className="p-3 bg-matrix-green/10 border-b border-matrix-green/30 flex justify-between items-center">
              <h3 className="font-medium text-matrix-green">Collections</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10">
                <FolderPlus className="h-4 w-4" />
              </Button>
            </div>
            <div className="divide-y divide-matrix-green/20">
              {["JavaScript", "React", "CSS Tricks", "API Calls", "Algorithms"].map((collection) => (
                <div key={collection} className="p-3 flex items-center gap-2 hover:bg-matrix-green/5 cursor-pointer">
                  <FileCode className="h-4 w-4 text-matrix-green/70" />
                  <span className="text-matrix-green">{collection}</span>
                  <span className="ml-auto text-xs text-matrix-green/50">12</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-matrix-green/30 rounded-lg overflow-hidden">
            <div className="p-3 bg-matrix-green/10 border-b border-matrix-green/30 flex justify-between items-center">
              <h3 className="font-medium text-matrix-green">Tags</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10">
                <Tag className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-3 flex flex-wrap gap-2">
              {["frontend", "utility", "animation", "hooks", "performance", "debug"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-full text-xs bg-matrix-green/10 text-matrix-green border border-matrix-green/30 hover:bg-matrix-green/20 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-matrix-green">My Snippets</h2>
            <Button className="bg-matrix-green hover:bg-matrix-green/80 text-black">
              <Plus className="h-4 w-4 mr-2" /> New Snippet
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "React useEffect Cleanup",
                language: "JavaScript",
                description: "Pattern for properly cleaning up effects in React components",
                tags: ["react", "hooks", "cleanup"],
                stars: 12,
              },
              {
                title: "CSS Grid Layout Template",
                language: "CSS",
                description: "Responsive grid layout with named areas",
                tags: ["css", "layout", "responsive"],
                stars: 8,
              },
              {
                title: "Fetch API with Error Handling",
                language: "JavaScript",
                description: "Robust pattern for making API calls with proper error handling",
                tags: ["api", "fetch", "error-handling"],
                stars: 15,
              },
            ].map((snippet, i) => (
              <div key={i} className="border border-matrix-green/30 rounded-lg overflow-hidden">
                <div className="p-4 bg-matrix-green/5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-matrix-green">{snippet.title}</h3>
                    <span className="bg-matrix-green/20 text-matrix-green text-xs px-2 py-1 rounded">
                      {snippet.language}
                    </span>
                  </div>
                  <p className="text-matrix-green/70 text-sm mb-3">{snippet.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {snippet.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-xs bg-matrix-green/10 text-matrix-green border border-matrix-green/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <pre className="bg-black/70 p-3 rounded text-matrix-green text-sm overflow-x-auto">
                    {i === 0
                      ? `useEffect(() => {
  // Effect code here
  const subscription = someAPI.subscribe();
  
  // Cleanup function
  return () => {
    subscription.unsubscribe();
  };
}, [dependency]);`
                      : i === 1
                        ? `.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}`
                        : `async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}`}
                  </pre>
                </div>
                <div className="p-3 border-t border-matrix-green/30 bg-black flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-matrix-green hover:bg-matrix-green/10">
                      <Trash className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="h-8 text-matrix-green hover:bg-matrix-green/10 flex items-center gap-1"
                    >
                      <Star className="h-4 w-4 fill-matrix-green" />
                      <span>{snippet.stars}</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

