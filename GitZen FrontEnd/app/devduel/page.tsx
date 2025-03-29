import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Code, Trophy, Users } from "lucide-react"

export default function DevDuel() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-matrix-green">DevDuel</h1>
        <p className="text-matrix-green/70">Challenge your friends to 1v1 coding matches and improve your skills</p>
      </div>

      <Tabs defaultValue="challenges" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8 bg-black border border-matrix-green/30">
          <TabsTrigger
            value="challenges"
            className="data-[state=active]:bg-matrix-green/10 data-[state=active]:text-matrix-green"
          >
            Challenges
          </TabsTrigger>
          <TabsTrigger
            value="create"
            className="data-[state=active]:bg-matrix-green/10 data-[state=active]:text-matrix-green"
          >
            Create Duel
          </TabsTrigger>
          <TabsTrigger
            value="leaderboard"
            className="data-[state=active]:bg-matrix-green/10 data-[state=active]:text-matrix-green"
          >
            Leaderboard
          </TabsTrigger>
        </TabsList>

        <TabsContent value="challenges" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border border-matrix-green/30 rounded-lg p-6 bg-matrix-green/5 hover:bg-matrix-green/10 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-matrix-green">Algorithmic Challenge #{i}</h3>
                  <span className="bg-matrix-green/20 text-matrix-green text-xs px-2 py-1 rounded">Medium</span>
                </div>
                <p className="text-matrix-green/70 mb-4">
                  Implement an efficient algorithm to solve the given problem within the time constraints.
                </p>
                <div className="flex justify-between items-center text-sm text-matrix-green/60">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>30 minutes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>12 participants</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Code className="h-4 w-4" />
                    <span>JavaScript, Python</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-matrix-green hover:bg-matrix-green/80 text-black">
                  Join Challenge
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-matrix-green/50 text-matrix-green hover:bg-matrix-green/10">
              Load More Challenges
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="create" className="border border-matrix-green/30 rounded-lg p-6 bg-matrix-green/5">
          <h2 className="text-xl font-semibold text-matrix-green mb-6">Create a New Coding Duel</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-matrix-green mb-2">Challenge Title</label>
              <Input
                placeholder="Enter a title for your challenge"
                className="bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
              />
            </div>

            <div>
              <label className="block text-matrix-green mb-2">Description</label>
              <textarea
                rows={4}
                placeholder="Describe your challenge"
                className="w-full bg-black border border-matrix-green/50 rounded-md p-2 text-matrix-green focus:outline-none focus:ring-2 focus:ring-matrix-green/50"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-matrix-green mb-2">Time Limit (minutes)</label>
                <Input
                  type="number"
                  placeholder="30"
                  className="bg-black border-matrix-green/50 text-matrix-green focus-visible:ring-matrix-green/50"
                />
              </div>
              <div>
                <label className="block text-matrix-green mb-2">Difficulty Level</label>
                <select className="w-full bg-black border border-matrix-green/50 rounded-md p-2 text-matrix-green focus:outline-none focus:ring-2 focus:ring-matrix-green/50">
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                  <option>Expert</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-matrix-green mb-2">Allowed Languages</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["JavaScript", "Python", "Java", "C++", "Ruby", "Go"].map((lang) => (
                  <label key={lang} className="flex items-center gap-2 text-matrix-green/70 hover:text-matrix-green">
                    <input type="checkbox" className="accent-matrix-green" />
                    {lang}
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button className="w-full bg-matrix-green hover:bg-matrix-green/80 text-black">Create Challenge</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="leaderboard" className="border border-matrix-green/30 rounded-lg overflow-hidden">
          <div className="p-4 bg-matrix-green/10 border-b border-matrix-green/30">
            <h2 className="text-xl font-semibold text-matrix-green flex items-center gap-2">
              <Trophy className="h-5 w-5" /> Global Leaderboard
            </h2>
          </div>

          <div className="divide-y divide-matrix-green/20">
            {[
              { rank: 1, name: "Matrix_Master", score: 2840, wins: 42 },
              { rank: 2, name: "CodeNinja", score: 2720, wins: 38 },
              { rank: 3, name: "AlgoWizard", score: 2650, wins: 35 },
              { rank: 4, name: "ByteBender", score: 2590, wins: 33 },
              { rank: 5, name: "QuantumCoder", score: 2510, wins: 30 },
            ].map((user) => (
              <div key={user.rank} className="flex items-center p-4 hover:bg-matrix-green/5">
                <div className="w-10 text-center font-bold text-matrix-green">{user.rank}</div>
                <div className="flex-1 text-matrix-green">{user.name}</div>
                <div className="text-matrix-green/70 mr-6">{user.score} points</div>
                <div className="text-matrix-green/70">{user.wins} wins</div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-matrix-green/30 bg-matrix-green/5">
            <div className="flex items-center">
              <div className="w-10 text-center font-bold text-matrix-green">87</div>
              <div className="flex-1 text-matrix-green">You</div>
              <div className="text-matrix-green/70 mr-6">980 points</div>
              <div className="text-matrix-green/70">8 wins</div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

