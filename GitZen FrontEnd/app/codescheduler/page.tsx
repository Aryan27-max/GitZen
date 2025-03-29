"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  Clock,
  Code,
  Edit,
  Plus,
  Trash,
  Users,
  X,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Bell,
  Check,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CodeScheduler() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [showTimetableModal, setShowTimetableModal] = useState(false)
  const [timetableTemplate, setTimetableTemplate] = useState("custom")
  const [timetableData, setTimetableData] = useState<any[]>([])
  const [showSessionModal, setShowSessionModal] = useState(false)
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  // Days of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  // Time slots
  const timeSlots = [
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ]

  // Template options
  const templates = [
    { id: "morning", name: "Morning Coder", description: "Focus on coding in the morning hours (6AM-12PM)" },
    { id: "evening", name: "Night Owl", description: "Code during evening and night (6PM-12AM)" },
    { id: "balanced", name: "Balanced", description: "Spread coding sessions throughout the day" },
    { id: "weekend", name: "Weekend Warrior", description: "Heavy focus on weekends, light on weekdays" },
    { id: "custom", name: "Custom", description: "Build your own schedule from scratch" },
  ]

  // Initialize timetable data
  useEffect(() => {
    if (timetableData.length === 0) {
      const initialData = daysOfWeek.map((day) => ({
        day,
        sessions: [],
      }))
      setTimetableData(initialData)
    }
  }, [timetableData.length])

  // Apply template
  const applyTemplate = (templateId: string) => {
    setTimetableTemplate(templateId)

    // Create a new timetable based on the template
    const newTimetable = daysOfWeek.map((day) => ({
      day,
      sessions: [],
    }))

    // Fill in sessions based on template
    switch (templateId) {
      case "morning":
        // Add morning sessions on weekdays
        for (let i = 1; i <= 5; i++) {
          // Monday to Friday
          newTimetable[i].sessions.push({
            title: "Morning Code Session",
            time: "8:00 AM - 10:00 AM",
            type: "Solo Coding",
            color: "bg-blue-500",
          })
        }
        break

      case "evening":
        // Add evening sessions
        for (let i = 0; i < 7; i++) {
          if (i < 5) {
            // Weekdays
            newTimetable[i].sessions.push({
              title: "Evening Code Session",
              time: "8:00 PM - 10:00 PM",
              type: "Solo Coding",
              color: "bg-purple-500",
            })
          } else {
            // Weekends
            newTimetable[i].sessions.push({
              title: "Weekend Night Coding",
              time: "9:00 PM - 12:00 AM",
              type: "Project Work",
              color: "bg-indigo-500",
            })
          }
        }
        break

      case "balanced":
        // Balanced throughout the week
        for (let i = 0; i < 7; i++) {
          if (i < 5) {
            // Weekdays
            newTimetable[i].sessions.push({
              title: "Lunch Break Coding",
              time: "12:00 PM - 1:00 PM",
              type: "Quick Practice",
              color: "bg-green-500",
            })

            if (i % 2 === 0) {
              // Mon, Wed, Fri
              newTimetable[i].sessions.push({
                title: "Evening Session",
                time: "7:00 PM - 8:30 PM",
                type: "Project Work",
                color: "bg-amber-500",
              })
            }
          } else {
            // Weekends
            newTimetable[i].sessions.push({
              title: "Weekend Project",
              time: "10:00 AM - 12:00 PM",
              type: "Project Work",
              color: "bg-red-500",
            })
            newTimetable[i].sessions.push({
              title: "Afternoon Learning",
              time: "3:00 PM - 5:00 PM",
              type: "Learning/Tutorial",
              color: "bg-sky-500",
            })
          }
        }
        break

      case "weekend":
        // Weekend warrior
        // Light weekday sessions
        for (let i = 1; i <= 5; i++) {
          newTimetable[i].sessions.push({
            title: "Quick Code Review",
            time: "7:00 PM - 8:00 PM",
            type: "Code Review",
            color: "bg-teal-500",
          })
        }

        // Heavy weekend sessions
        for (let i = 0; i <= 6; i += 6) {
          // Saturday and Sunday
          newTimetable[i].sessions.push({
            title: "Morning Project Work",
            time: "9:00 AM - 12:00 PM",
            type: "Project Work",
            color: "bg-orange-500",
          })
          newTimetable[i].sessions.push({
            title: "Afternoon Learning",
            time: "2:00 PM - 4:00 PM",
            type: "Learning/Tutorial",
            color: "bg-pink-500",
          })
          newTimetable[i].sessions.push({
            title: "Evening Coding",
            time: "7:00 PM - 9:00 PM",
            type: "Solo Coding",
            color: "bg-violet-500",
          })
        }
        break

      case "custom":
      default:
        // Leave empty for custom scheduling
        break
    }

    setTimetableData(newTimetable)
  }

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // Get first day of month
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const daysInMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = getFirstDayOfMonth(year, month)

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: null, isCurrentMonth: false })
    }

    // Add days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true })
    }

    // Add empty cells to complete the last week if needed
    const remainingCells = 42 - days.length // 6 rows of 7 days
    for (let i = 0; i < remainingCells; i++) {
      days.push({ day: null, isCurrentMonth: false })
    }

    return days
  }

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  // Format month and year
  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  }

  // Check if a day has events
  const hasEvents = (day: number | null) => {
    if (!day) return false

    // Get the day of the week for this date
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    const dayOfWeek = date.getDay()

    // Check if there are sessions for this day of the week
    return timetableData[dayOfWeek]?.sessions.length > 0
  }

  // Get today's date
  const today = new Date()
  const isToday = (day: number | null) => {
    if (!day) return false
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    )
  }

  // Add a session to the timetable
  const addSession = (dayIndex: number, session: any) => {
    const updatedTimetable = [...timetableData]
    updatedTimetable[dayIndex].sessions.push(session)
    setTimetableData(updatedTimetable)
  }

  // Remove a session from the timetable
  const removeSession = (dayIndex: number, sessionIndex: number) => {
    const updatedTimetable = [...timetableData]
    updatedTimetable[dayIndex].sessions.splice(sessionIndex, 1)
    setTimetableData(updatedTimetable)
  }

  // Get sessions for a specific day
  const getSessionsForDay = (day: number | null) => {
    if (!day) return []

    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    const dayOfWeek = date.getDay()

    return timetableData[dayOfWeek]?.sessions || []
  }

  // Handle day click
  const handleDayClick = (day: number | null) => {
    if (!day) return
    setSelectedDay(day)
    setShowSessionModal(true)
  }

  return (
    <div className="max-w-6xl mx-auto fade-in">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-matrix-green-dim glitch" data-text="CodeScheduler">
          CodeScheduler
        </h1>
        <p className="text-foreground/70">Create your personalized coding timetable and stay productive</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-matrix-green-dim">Your Schedule</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="border-terminal-light text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim transition-all duration-300"
                onClick={() => setShowTimetableModal(true)}
              >
                <Plus className="h-4 w-4 mr-2" /> Create Timetable
              </Button>
              <Button
                variant="outline"
                className="border-terminal-light text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim transition-all duration-300"
                onClick={() => {
                  setCurrentDate(new Date())
                }}
              >
                Today
              </Button>
            </div>
          </div>

          <div className="border border-terminal-light rounded-lg overflow-hidden terminal">
            <div className="flex justify-between items-center p-3 bg-terminal-gray border-b border-terminal-light">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-foreground hover:text-matrix-green-dim hover:bg-terminal-dark transition-all duration-300"
                onClick={goToPreviousMonth}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h3 className="font-medium text-matrix-green-dim">{formatMonthYear(currentDate)}</h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-foreground hover:text-matrix-green-dim hover:bg-terminal-dark transition-all duration-300"
                onClick={goToNextMonth}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-7 text-center border-b border-terminal-light">
              {daysOfWeek.map((day) => (
                <div key={day} className="py-2 font-medium text-foreground/70 bg-terminal-gray/50">
                  {day.substring(0, 3)}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 auto-rows-[100px]">
              {generateCalendarDays().map((day, index) => (
                <div
                  key={index}
                  className={`border-b border-r border-terminal-light p-1 transition-all duration-300 ${
                    day.isCurrentMonth ? "bg-terminal-dark" : "bg-terminal-black/40 text-foreground/30"
                  } ${isToday(day.day) ? "bg-terminal-gray/30" : ""} ${
                    hasEvents(day.day) ? "hover:bg-terminal-gray/20 cursor-pointer" : ""
                  }`}
                  onClick={() => handleDayClick(day.day)}
                >
                  {day.day && (
                    <>
                      <div className="flex justify-between">
                        <span
                          className={`text-sm ${isToday(day.day) ? "text-matrix-green-dim font-bold" : "text-foreground/70"}`}
                        >
                          {day.day}
                        </span>
                        {hasEvents(day.day) && <span className="h-2 w-2 rounded-full bg-matrix-green-dim"></span>}
                      </div>

                      <div className="mt-1 space-y-1 overflow-hidden max-h-[80px]">
                        {getSessionsForDay(day.day)
                          .slice(0, 2)
                          .map((session, idx) => (
                            <div
                              key={idx}
                              className={`p-1 text-xs ${session.color || "bg-terminal-gray/30"} bg-opacity-20 border border-terminal-light rounded text-foreground/80`}
                            >
                              <div className="font-medium truncate">{session.title}</div>
                              <div className="truncate">{session.time}</div>
                            </div>
                          ))}
                        {getSessionsForDay(day.day).length > 2 && (
                          <div className="text-xs text-foreground/50 text-center">
                            +{getSessionsForDay(day.day).length - 2} more
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-terminal-light rounded-lg p-6 bg-terminal-gray/10 terminal">
            <h2 className="text-xl font-semibold text-matrix-green-dim mb-4">Weekly Timetable</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-terminal-light p-2 bg-terminal-gray/30 text-foreground/70">Time</th>
                    {daysOfWeek.map((day) => (
                      <th key={day} className="border border-terminal-light p-2 bg-terminal-gray/30 text-foreground/70">
                        {day.substring(0, 3)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timeSlots.map((time, timeIndex) => (
                    <tr key={time} className={timeIndex % 2 === 0 ? "bg-terminal-dark" : "bg-terminal-black/40"}>
                      <td className="border border-terminal-light p-2 text-foreground/70 text-sm">{time}</td>
                      {daysOfWeek.map((day, dayIndex) => {
                        const sessions = timetableData[dayIndex]?.sessions || []
                        const sessionForThisTime = sessions.find((s) => {
                          const [startTime] = s.time.split(" - ")
                          return startTime === time
                        })

                        return (
                          <td key={`${day}-${time}`} className="border border-terminal-light p-1 relative">
                            {sessionForThisTime && (
                              <div
                                className={`${sessionForThisTime.color || "bg-terminal-gray/30"} bg-opacity-20 p-1 rounded text-xs border border-terminal-light`}
                              >
                                <div className="font-medium text-foreground/80">{sessionForThisTime.title}</div>
                                <div className="text-foreground/60">{sessionForThisTime.time}</div>
                              </div>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                className="bg-terminal-gray border border-matrix-green-subtle text-matrix-green-dim hover:bg-terminal-light hover:border-matrix-green-dim hover:text-matrix-green transition-all duration-300 matrix-button"
                onClick={() => setShowTimetableModal(true)}
              >
                <Edit className="h-4 w-4 mr-2" /> Edit Timetable
              </Button>
            </div>
          </div>

          <div className="border border-terminal-light rounded-lg p-6 bg-terminal-gray/10 terminal">
            <h2 className="text-xl font-semibold text-matrix-green-dim mb-4">Upcoming Sessions</h2>

            <div className="space-y-4">
              <div className="border border-terminal-light rounded-lg p-4 bg-terminal-dark flex justify-between items-center hover:bg-terminal-gray/10 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-terminal-gray p-2 rounded-md">
                    <Code className="h-5 w-5 text-matrix-green-dim" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">React Component Library</h3>
                    <div className="flex items-center gap-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Today</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>2:00 PM - 4:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="border-terminal-light text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim transition-all duration-300"
                  >
                    Start
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim transition-all duration-300"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="border border-terminal-light rounded-lg p-4 bg-terminal-dark flex justify-between items-center hover:bg-terminal-gray/10 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-terminal-gray p-2 rounded-md">
                    <Users className="h-5 w-5 text-matrix-green-dim" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Pair Programming: API Integration</h3>
                    <div className="flex items-center gap-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Tomorrow</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>10:00 AM - 12:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="border-terminal-light text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim transition-all duration-300"
                  >
                    Join
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim transition-all duration-300"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="border border-terminal-light rounded-lg p-4 bg-terminal-dark flex justify-between items-center hover:bg-terminal-gray/10 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-terminal-gray p-2 rounded-md">
                    <Code className="h-5 w-5 text-matrix-green-dim" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Algorithm Practice</h3>
                    <div className="flex items-center gap-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Friday</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>3:00 PM - 5:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="border-terminal-light text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim transition-all duration-300 opacity-50"
                    disabled
                  >
                    Start
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim transition-all duration-300"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-terminal-light rounded-lg p-6 bg-terminal-gray/10 terminal">
            <h2 className="text-xl font-semibold text-matrix-green-dim mb-4">Create Session</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-foreground mb-2">Session Title</label>
                <Input
                  placeholder="e.g., React Component Development"
                  className="bg-terminal-dark border-terminal-light text-foreground focus-visible:ring-matrix-green-dim transition-all duration-300 border-glow"
                />
              </div>

              <div>
                <label className="block text-foreground mb-2">Session Type</label>
                <select className="w-full bg-terminal-dark border border-terminal-light rounded-md p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-matrix-green-dim transition-all duration-300 border-glow">
                  <option>Solo Coding</option>
                  <option>Pair Programming</option>
                  <option>Team Collaboration</option>
                  <option>Learning/Tutorial</option>
                  <option>Code Review</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground mb-2">Date</label>
                  <Input
                    type="date"
                    className="bg-terminal-dark border-terminal-light text-foreground focus-visible:ring-matrix-green-dim transition-all duration-300 border-glow"
                  />
                </div>
                <div>
                  <label className="block text-foreground mb-2">Time</label>
                  <Input
                    type="time"
                    className="bg-terminal-dark border-terminal-light text-foreground focus-visible:ring-matrix-green-dim transition-all duration-300 border-glow"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground mb-2">Duration</label>
                <select className="w-full bg-terminal-dark border border-terminal-light rounded-md p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-matrix-green-dim transition-all duration-300 border-glow">
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>1.5 hours</option>
                  <option>2 hours</option>
                  <option>3 hours</option>
                  <option>4 hours</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground mb-2">Goals & Notes</label>
                <textarea
                  rows={4}
                  placeholder="What do you want to accomplish in this session?"
                  className="w-full bg-terminal-dark border border-terminal-light rounded-md p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-matrix-green-dim transition-all duration-300 border-glow"
                />
              </div>

              <div>
                <label className="block text-foreground mb-2">Reminders</label>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="accent-matrix-green-dim" />
                  <span className="text-foreground/70">15 minutes before</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="accent-matrix-green-dim" />
                  <span className="text-foreground/70">1 hour before</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="accent-matrix-green-dim" />
                  <span className="text-foreground/70">1 day before</span>
                </div>
              </div>

              <Button className="w-full bg-terminal-gray border border-matrix-green-subtle text-matrix-green-dim hover:bg-terminal-light hover:border-matrix-green-dim hover:text-matrix-green transition-all duration-300 matrix-button">
                <Plus className="h-4 w-4 mr-2" /> Schedule Session
              </Button>
            </div>
          </div>

          <div className="border border-terminal-light rounded-lg p-6 bg-terminal-gray/10 terminal">
            <h2 className="text-xl font-semibold text-matrix-green-dim mb-4">Statistics</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-terminal-light rounded-lg p-3 bg-terminal-dark hover:bg-terminal-gray/10 transition-all duration-300">
                  <div className="text-sm text-foreground/70">This Week</div>
                  <div className="text-2xl font-bold text-matrix-green-dim">12h 30m</div>
                </div>
                <div className="border border-terminal-light rounded-lg p-3 bg-terminal-dark hover:bg-terminal-gray/10 transition-all duration-300">
                  <div className="text-sm text-foreground/70">This Month</div>
                  <div className="text-2xl font-bold text-matrix-green-dim">48h 15m</div>
                </div>
              </div>

              <div className="border border-terminal-light rounded-lg p-3 bg-terminal-dark hover:bg-terminal-gray/10 transition-all duration-300">
                <div className="text-sm text-foreground/70 mb-2">Coding Focus</div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs text-foreground/70">
                      <span>React</span>
                      <span>60%</span>
                    </div>
                    <div className="h-2 bg-terminal-black/50 rounded-full mt-1">
                      <div
                        className="h-2 bg-matrix-green-dim rounded-full transition-all duration-1000"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-foreground/70">
                      <span>Algorithms</span>
                      <span>25%</span>
                    </div>
                    <div className="h-2 bg-terminal-black/50 rounded-full mt-1">
                      <div
                        className="h-2 bg-matrix-green-dim rounded-full transition-all duration-1000"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-foreground/70">
                      <span>Backend</span>
                      <span>15%</span>
                    </div>
                    <div className="h-2 bg-terminal-black/50 rounded-full mt-1">
                      <div
                        className="h-2 bg-matrix-green-dim rounded-full transition-all duration-1000"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Timetable Modal */}
      {showTimetableModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-terminal-dark border border-terminal-light rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto terminal">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-matrix-green-dim">Create Personalized Timetable</h2>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-foreground hover:text-matrix-green-dim hover:bg-terminal-gray transition-all duration-300"
                onClick={() => setShowTimetableModal(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <Tabs defaultValue="templates" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6 bg-terminal-black border border-terminal-light">
                <TabsTrigger
                  value="templates"
                  className="data-[state=active]:bg-terminal-gray data-[state=active]:text-matrix-green-dim transition-all duration-300"
                >
                  Templates
                </TabsTrigger>
                <TabsTrigger
                  value="custom"
                  className="data-[state=active]:bg-terminal-gray data-[state=active]:text-matrix-green-dim transition-all duration-300"
                >
                  Custom Schedule
                </TabsTrigger>
              </TabsList>

              <TabsContent value="templates" className="space-y-4">
                <p className="text-foreground/70 mb-4">
                  Choose a template as a starting point for your coding schedule. You can customize it further after
                  applying.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {templates.map((template) => (
                    <div
                      key={template.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-terminal-gray/10 ${
                        timetableTemplate === template.id
                          ? "border-matrix-green-dim bg-terminal-gray/20"
                          : "border-terminal-light"
                      }`}
                      onClick={() => setTimetableTemplate(template.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-foreground">{template.name}</h3>
                        {timetableTemplate === template.id && <Check className="h-5 w-5 text-matrix-green-dim" />}
                      </div>
                      <p className="text-sm text-foreground/70">{template.description}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <Button
                    variant="outline"
                    className="border-terminal-light text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim transition-all duration-300"
                    onClick={() => setShowTimetableModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-terminal-gray border border-matrix-green-subtle text-matrix-green-dim hover:bg-terminal-light hover:border-matrix-green-dim hover:text-matrix-green transition-all duration-300 matrix-button"
                    onClick={() => {
                      applyTemplate(timetableTemplate)
                      setShowTimetableModal(false)
                    }}
                  >
                    Apply Template
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="custom" className="space-y-4">
                <p className="text-foreground/70 mb-4">
                  Create a custom schedule by adding sessions to specific days and times.
                </p>

                <div className="border border-terminal-light rounded-lg overflow-hidden">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-terminal-light p-2 bg-terminal-gray/30 text-foreground/70">Day</th>
                        <th className="border border-terminal-light p-2 bg-terminal-gray/30 text-foreground/70">
                          Sessions
                        </th>
                        <th className="border border-terminal-light p-2 bg-terminal-gray/30 text-foreground/70 w-24">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {timetableData.map((day, dayIndex) => (
                        <tr key={day.day} className={dayIndex % 2 === 0 ? "bg-terminal-dark" : "bg-terminal-black/40"}>
                          <td className="border border-terminal-light p-3 text-foreground">{day.day}</td>
                          <td className="border border-terminal-light p-3">
                            {day.sessions.length === 0 ? (
                              <span className="text-foreground/50 text-sm">No sessions scheduled</span>
                            ) : (
                              <div className="space-y-2">
                                {day.sessions.map((session, sessionIndex) => (
                                  <div
                                    key={sessionIndex}
                                    className={`${session.color || "bg-terminal-gray/30"} bg-opacity-20 p-2 rounded text-sm border border-terminal-light flex justify-between items-center`}
                                  >
                                    <div>
                                      <div className="font-medium text-foreground">{session.title}</div>
                                      <div className="text-foreground/70 text-xs">
                                        {session.time} • {session.type}
                                      </div>
                                    </div>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-7 w-7 text-foreground/70 hover:text-matrix-green-dim hover:bg-terminal-dark transition-all duration-300"
                                      onClick={() => removeSession(dayIndex, sessionIndex)}
                                    >
                                      <Trash className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </td>
                          <td className="border border-terminal-light p-3 text-center">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-terminal-light text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim transition-all duration-300"
                              onClick={() => {
                                // Add a new session for this day
                                addSession(dayIndex, {
                                  title: "New Session",
                                  time: "9:00 AM - 11:00 AM",
                                  type: "Solo Coding",
                                  color: "bg-blue-500",
                                })
                              }}
                            >
                              <Plus className="h-4 w-4 mr-1" /> Add
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <Button
                    variant="outline"
                    className="border-terminal-light text-foreground hover:bg-terminal-gray hover:text-matrix-green-dim transition-all duration-300"
                    onClick={() => setShowTimetableModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-terminal-gray border border-matrix-green-subtle text-matrix-green-dim hover:bg-terminal-light hover:border-matrix-green-dim hover:text-matrix-green transition-all duration-300 matrix-button"
                    onClick={() => setShowTimetableModal(false)}
                  >
                    Save Timetable
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}

      {/* Day Sessions Modal */}
      {showSessionModal && selectedDay && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-terminal-dark border border-terminal-light rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto terminal">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-matrix-green-dim">
                Sessions for{" "}
                {new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-foreground hover:text-matrix-green-dim hover:bg-terminal-gray transition-all duration-300"
                onClick={() => setShowSessionModal(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-4">
              {getSessionsForDay(selectedDay).length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-foreground/50 mb-4">No sessions scheduled for this day</div>
                  <Button className="bg-terminal-gray border border-matrix-green-subtle text-matrix-green-dim hover:bg-terminal-light hover:border-matrix-green-dim hover:text-matrix-green transition-all duration-300 matrix-button">
                    <Plus className="h-4 w-4 mr-2" /> Add Session
                  </Button>
                </div>
              ) : (
                <>
                  {getSessionsForDay(selectedDay).map((session, index) => (
                    <div
                      key={index}
                      className={`${session.color || "bg-terminal-gray/30"} bg-opacity-20 p-4 rounded border border-terminal-light`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-foreground">{session.title}</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-foreground/70 hover:text-matrix-green-dim hover:bg-terminal-dark transition-all duration-300"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-foreground/70 mb-2">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Code className="h-4 w-4" />
                          <span>{session.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-foreground/60">
                        <Bell className="h-3 w-3" />
                        <span>Reminder: 15 minutes before</span>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-end mt-4">
                    <Button className="bg-terminal-gray border border-matrix-green-subtle text-matrix-green-dim hover:bg-terminal-light hover:border-matrix-green-dim hover:text-matrix-green transition-all duration-300 matrix-button">
                      <Plus className="h-4 w-4 mr-2" /> Add Session
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

