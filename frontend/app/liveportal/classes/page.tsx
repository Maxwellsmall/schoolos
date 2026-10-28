"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Ellipsis, GraduationCap, Plus, ChevronDown, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Classes() {
  const data = [
    {
      code: "CLS 101",
      title: "JSS 1 Gold",
      category: "Senior Arm",
      name: "Mr. Ayodele Danjuma",
      slots: "30 / 35 seats",
    },
    {
      code: "CLS 102",
      title: "JSS 1 Diamond",
      category: "Junior Arm",
      name: "Mrs. Nneka Okafor",
      slots: "20 / 35 seats",
    },
    {
      code: "CLS 201",
      title: "JSS 2 Gold",
      category: "Junior Arm",
      name: "Mrs. Folashade Adeyemi",
      slots: "32 / 35 seats",
    },
    {
      code: "CLS 202",
      title: "JSS 2 Diamond",
      category: "Junior Arm",
      name: "Mr. Chinedu Balogun",
      slots: "29 / 35 seats",
    },
    {
      code: "CLS 301",
      title: "JSS 1 Science",
      category: "Science Arm",
      name: "Engr. Olufemi Sowore",
      slots: "26 / 35 seats",
    },
    {
      code: "CLS 302",
      title: "JSS 2 Science",
      category: "Science Arm",
      name: "Dr. Hadiza Usman",
      slots: "25 / 35 seats",
    },
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="text-xs text-zinc-500 mb-2">
        Academia <span className="mx-1">&gt;</span> Admin
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-zinc-900 text-2xl font-bold tracking-tight">
            Classes & Academic Arms
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            Configure classroom arms, assign designated class teachers, and manage seat capacities.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="rounded-md bg-zinc-900 hover:bg-zinc-800 text-white cursor-pointer">
            <Plus className="w-4 h-4 mr-1" /> New Classroom
          </Button>
          <Button variant="outline" className="rounded-md border-zinc-300 hover:bg-zinc-100 cursor-pointer">
            <Plus className="w-4 h-4 mr-1" /> New Term
          </Button>
        </div>
      </div>

      <div className="flex gap-1 bg-zinc-100 p-1 w-fit rounded-lg mb-6 border border-zinc-200/60">
        <Button variant="ghost" className="text-xs font-medium h-8 px-3 rounded-md bg-white shadow-xs text-zinc-900">
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
            placeholder="Search Classes (e.g. JSS 2 Gold)..." 
            className="pl-9 bg-white border-zinc-300 focus-visible:ring-zinc-400"
          />
        </div>
        
        <div className="flex items-center gap-2 text-sm text-zinc-600">
          <span className="text-zinc-500">Category:</span>
          <div className="flex items-center gap-1 px-3 py-1.5 bg-white border border-zinc-300 rounded-md shadow-2xs cursor-pointer hover:bg-zinc-50">
            <span className="font-medium text-zinc-800">All Categories</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-lg border border-zinc-200 shadow-2xs overflow-hidden">
        <div className="grid grid-cols-12 bg-emerald-50/40 px-6 py-3 border-b border-zinc-200 text-xs font-semibold text-emerald-800/80 tracking-wider">
          <div className="col-span-3">CLASS NAME</div>
          <div className="col-span-4">FORM / CLASS TEACHER</div>
          <div className="col-span-3">ENROLLMENT</div>
          <div className="col-span-2 text-right">ACTIONS</div>
        </div>

        <div className="divide-y divide-zinc-200">
          {data.map((item, index) => (
            <div key={index} className="grid grid-cols-12 items-center px-6 py-4 hover:bg-zinc-50/80 transition-colors">
              <div className="col-span-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-700 border border-zinc-200">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm text-zinc-900">{item.title}</span>
              </div>

              <div className="col-span-4 text-sm text-zinc-700 font-medium">
                {item.name}
              </div>

              <div className="col-span-3 text-sm text-zinc-600">
                {item.slots}
              </div>

              <div className="col-span-2 flex justify-end">
                <button className="w-8 h-8 rounded-md hover:bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer">
                  <Ellipsis className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 text-sm">
        <p className="text-zinc-500">Showing 1 to 6 of 6 records</p>
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