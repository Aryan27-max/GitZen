import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Check, Code, Download, FileCode, Sparkles } from "lucide-react"

export default function CleanCode() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-matrix-green">CleanCode</h1>
        <p className="text-matrix-green/70">Clean, format, and enhance your code automatically</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-matrix-green">Input Code</h2>
            <div className="flex items-center gap-2">
              <select className="bg-black border border-matrix-green/50 rounded-md p-2 text-matrix-green focus:outline-none focus:ring-2 focus:ring-matrix-green/50">
                <option>JavaScript</option>
                <option>TypeScript</option>
                <option>Python</option>
                <option>HTML</option>
                <option>CSS</option>
                <option>Java</option>
              </select>
              <Button variant="outline" className="border-matrix-green/50 text-matrix-green hover:bg-matrix-green/10">
                <FileCode className="h-4 w-4 mr-2" /> Load File
              </Button>
            </div>
          </div>

          <textarea
            rows={20}
            placeholder="Paste your code here..."
            className="w-full bg-black border border-matrix-green/50 rounded-md p-4 text-matrix-green font-mono text-sm focus:outline-none focus:ring-2 focus:ring-matrix-green/50"
            defaultValue={`function calculateTotal(items) {
  var x = 0
  for(var i=0;i<items.length;i++){
    x = x + items[i].price
  }
  return x
}

// This function doesn't handle empty arrays properly
// It also doesn't account for quantity
// Variable naming could be improved
// No type checking is performed`}
          />

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" className="border-matrix-green/50 text-matrix-green hover:bg-matrix-green/10">
                Clear
              </Button>
              <Button variant="outline" className="border-matrix-green/50 text-matrix-green hover:bg-matrix-green/10">
                Reset
              </Button>
            </div>
            <Button className="bg-matrix-green hover:bg-matrix-green/80 text-black">
              Clean Code <Sparkles className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-matrix-green">Enhanced Code</h2>
            <Tabs defaultValue="clean" className="w-auto">
              <TabsList className="bg-black border border-matrix-green/30">
                <TabsTrigger
                  value="clean"
                  className="data-[state=active]:bg-matrix-green/10 data-[state=active]:text-matrix-green"
                >
                  Clean
                </TabsTrigger>
                <TabsTrigger
                  value="diff"
                  className="data-[state=active]:bg-matrix-green/10 data-[state=active]:text-matrix-green"
                >
                  Diff
                </TabsTrigger>
                <TabsTrigger
                  value="explanation"
                  className="data-[state=active]:bg-matrix-green/10 data-[state=active]:text-matrix-green"
                >
                  Explanation
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="border border-matrix-green/30 rounded-md bg-black/70 p-4 h-[480px] overflow-auto font-mono text-sm">
            <pre className="text-matrix-green">
              {`/**
 * Calculates the total price of all items in the array.
 * @param {Array} items - Array of items with price property.
 * @returns {number} The total price.
 */
function calculateTotal(items) {
  // Return 0 for empty arrays
  if (!items || items.length === 0) {
    return 0;
  }
  
  // Calculate total price
  let totalPrice = 0;
  
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const quantity = item.quantity || 1;
    
    totalPrice += item.price * quantity;
  }
  
  return totalPrice;
}`}
            </pre>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-2 text-matrix-green/70 text-sm">
              <Check className="h-4 w-4 text-matrix-green" />
              <span>Improved readability</span>
              <Check className="h-4 w-4 text-matrix-green ml-4" />
              <span>Added error handling</span>
            </div>
            <Button className="bg-matrix-green hover:bg-matrix-green/80 text-black">
              <Download className="h-4 w-4 mr-2" /> Download
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12 border border-matrix-green/30 rounded-lg p-6 bg-matrix-green/5">
        <h2 className="text-xl font-semibold text-matrix-green mb-4">CleanCode Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="bg-matrix-green/10 p-2 rounded-md">
                <Code className="h-5 w-5 text-matrix-green" />
              </div>
              <h3 className="font-medium text-matrix-green">Code Formatting</h3>
            </div>
            <p className="text-matrix-green/70 text-sm">
              Automatically format your code according to best practices and style guides.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="bg-matrix-green/10 p-2 rounded-md">
                <Sparkles className="h-5 w-5 text-matrix-green" />
              </div>
              <h3 className="font-medium text-matrix-green">Code Enhancement</h3>
            </div>
            <p className="text-matrix-green/70 text-sm">
              Improve your code with better variable names, error handling, and performance optimizations.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="bg-matrix-green/10 p-2 rounded-md">
                <ArrowRight className="h-5 w-5 text-matrix-green" />
              </div>
              <h3 className="font-medium text-matrix-green">Refactoring</h3>
            </div>
            <p className="text-matrix-green/70 text-sm">
              Restructure your code to improve readability and maintainability without changing its behavior.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

