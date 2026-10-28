"use client"
import { Button } from "@/components/ui/button"
import { BookOpen, ChevronLeft, ChevronRight, Ellipsis, Plus, Search, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Subject() {
  const data = [
    {
      code: "MTH 101",
      name: "Mathematics",
      category: "Core",
      levels: ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"],
    },
    {
      code: "ENG 101",
      name: "English Language",
      category: "Core",
      levels: ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"],
    },
    {
      code: "BSC 101",
      name: "Basic Science",
      category: "Core",
      levels: ["JSS 1", "JSS 2", "JSS 3"],
    },
    {
      code: "BTE 101",
      name: "Basic Technology",
      category: "Core",
      levels: ["JSS 1", "JSS 2", "JSS 3"],
    },
    {
      code: "CVE 101",
      name: "Civic Education",
      category: "Core",
      levels: ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"],
    },
    {
      code: "AGR 101",
      name: "Agricultural Science",
      category: "Vocational",
      levels: ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2"],
    },
    {
      code: "BUS 101",
      name: "Business Studies",
      category: "Vocational",
      levels: ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2"],
    },
    {
      code: "PHY 101",
      name: "Physics",
      category: "Science",
      levels: ["SSS 1", "SSS 2", "SSS 3"],
    },
    {
      code: "CHM 101",
      name: "Chemistry",
      category: "Science",
      levels: ["SSS 1", "SSS 2", "SSS 3"],
    },
    {
      code: "BIO 101",
      name: "Biology",
      category: "Science",
      levels: ["SSS 1", "SSS 2", "SSS 3"],
    },
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="text-xs text-zinc-500 mb-2">
        Academia <span className="mx-1">&gt;</span> Admin <span className="mx-1">&gt;</span> <span className="text-zinc-900 font-medium">Subjects</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-zinc-900 text-2xl font-bold tracking-tight">
            Curriculum Subjects
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            Maintain the school syllabus, subject categorizations, and grade level applicability.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="rounded-md bg-zinc-900 hover:bg-zinc-800 text-white cursor-pointer">
            <Plus className="w-4 h-4 mr-1" /> Add Subject
          </Button>
        </div>
      </div>

      <div className="flex gap-1 bg-zinc-100 p-1 w-fit rounded-lg mb-6 border border-zinc-200/60">
        <Button variant="ghost" className="text-xs font-medium h-8 px-3 rounded-md text-zinc-600 hover:text-zinc-900">
          Classrooms (6)
        </Button>
        <Button variant="ghost" className="text-xs font-medium h-8 px-3 rounded-md text-zinc-600 hover:text-zinc-900">
          Class Levels (6)
        </Button>
        <Button variant="ghost" className="text-xs font-medium h-8 px-3 rounded-md text-zinc-600 hover:text-zinc-900">
          Arms (6)
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="relative w-full sm:w-[380px]">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
          <Input 
            type="search" 
            placeholder="Search subjects by name or code..." 
            className="pl-9 bg-white border-zinc-300 focus-visible:ring-zinc-400"
          />
        </div>
        
        <div className="flex items-center gap-2 text-sm text-zinc-600">
          <span className="text-zinc-500">Category:</span>
          <div className="flex items-center gap-1 px-3 py-1.5 bg-white border border-zinc-300 rounded-md shadow-2xs cursor-pointer hover:bg-zinc-50">
            <span className="font-medium text-zinc-800 text-xs">All Categories</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-lg border border-zinc-200 shadow-2xs overflow-hidden">
        <div className="grid grid-cols-12 bg-emerald-50/40 px-6 py-3 border-b border-zinc-200 text-xs font-semibold text-emerald-800/80 tracking-wider">
          <div className="col-span-2">CODE</div>
          <div className="col-span-3">SUBJECT TITLE</div>
          <div className="col-span-2">CATEGORY</div>
          <div className="col-span-4">TAUGHT AT LEVELS</div>
          <div className="col-span-1 text-right">ACTIONS</div>
        </div>

        <div className="divide-y divide-zinc-200">
          {data.map((item, index) => (
            <div key={index} className="grid grid-cols-12 items-center px-6 py-4 hover:bg-zinc-50/80 transition-colors">
              <div className="col-span-2">
                <span className="inline-block px-2 py-1 bg-zinc-100 border border-zinc-200 text-zinc-800 rounded text-xs font-mono font-bold">
                  {item.code}
                </span>
              </div>

              <div className="col-span-3 flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-zinc-600" />
                <span className="font-semibold text-sm text-zinc-900">{item.name}</span>
              </div>

              <div className="col-span-2">
                <span className="inline-block px-2.5 py-1 bg-zinc-900 text-white rounded-md text-xs font-medium">
                  {item.category}
                </span>
              </div>

              <div className="col-span-4 flex flex-wrap gap-1.5">
                {item.levels.map((lvl, idx) => (
                  <span key={idx} className="px-1.5 py-0.5 bg-zinc-100 text-zinc-600 border border-zinc-200 rounded text-[11px] font-medium">
                    {lvl}
                  </span>
                ))}
              </div>

              <div className="col-span-1 flex justify-end">
                <button className="w-8 h-8 rounded-md hover:bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer">
                  <Ellipsis className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 text-sm">
        <p className="text-zinc-500">Showing 1 to {data.length} of {data.length} records</p>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" className="h-8 w-8 border-zinc-300 disabled:opacity-40" disabled>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-zinc-600 font-medium text-xs">Page 1 of 1</span>
          <Button variant="outline" size="icon" className="h-8 w-8 border-zinc-300 disabled:opacity-40" disabled>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}