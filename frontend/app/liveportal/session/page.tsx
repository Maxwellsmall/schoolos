"use client"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, Ellipsis, ChevronRight, ChevronLeft, GraduationCap, Plus, Trash, UserCheck } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"
export default function session(){
  const [activeTab, setActiveTab] = useState("Academic Sessions")


  const data = [
        {
            year: "2023/2024 Academic Year",
            startDate: "11 Sept 2024",
            endDate: "19 Jul 2024",
            AssignedSub: "Mrs. Folashade Adeyemi",
            status: "Archived / Inactive",
            Actions: <Ellipsis className="w-4 h-4"/>
        },
         {
            year: "2024/2025 Academic Year",
            startDate: "9 Sept 2024",
            endDate: "	18 Jul 2025",
            AssignedSub: "Mrs. Folashade Adeyemi",
            status: "Current Active Session",
            Actions: <Ellipsis className="w-4 h-4"/>
        },
        
        

    ]

    return (
        <div className="p-10 ">
        <div className="md:flex gap-4 rounded-md justify-between relative isolate mb-3">
          <div className="">
            <h1 className="text-black text-2xl font-semibold">
              Sessions & Academic Terms
            </h1>
            <p className="text-xs text-gray-500">
              configure academic years, resumption schedules and define the active institutional term
            </p>
          </div>
          <div className="flex gap-2">
          <Button className="rounded-sm"> <Plus /> New session</Button>
          <Button variant="ghost" className="rounded-sm border-1 border-black"> <Plus /> New Term</Button>
          </div>
        </div>

        <div className="flex gap-3 bg-zinc-200 w-[400px] rounded-md">
            <Button variant="ghost" onClick={() => setActiveTab("Academic Sessions")}
              className={`${activeTab === "Academic Sessions"}`}
              >Academic Sessions (2)</Button>
            <Button variant="secondary" onClick={() => setActiveTab("School Terms")}>School Terms (3)</Button>
        </div>
        <Input type="search" placeholder="Search Sessions (e.g. 2024/2025)..." className="my-5 w-[400px]"/>

        <div className="p-8 max-w-7xl mx-auto">
          <div className="w-full bg-white rounded-lg border border-zinc-200 shadow-2xs overflow-hidden">
             <div className="grid grid-cols-14 bg-white px-6 py-3 border-b border-zinc-200 text-xs font-semibold text-emerald-800/80 tracking-wider">
            <div className="col-span-4">Session Name</div>
            <div className="col-span-2">Start Date</div>
            <div className="col-span-2">End Date</div>
            <div className="col-span-4">Status</div>
            <div className="col-span-2">Actions</div>
        </div>

         <div className="divide-y divide-zinc-200">
            {data.map((item, index) => (
                <div key={index} className="grid grid-cols-14 items-center px-6 py-5 hover:bg-zinc-50/80 transition-colors">

                    <div className="col-span-4 flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-zinc-600"/>
                        <span className="text-xs text-zinc-600">{item.year}</span>
                    </div>

                  
                     <div className="col-span-2 flex items-center gap-2.5">
                        <span className="text-xs text-zinc-600">{item.startDate}</span>
                    </div>

                    <div className="col-span-2 flex items-center gap-2.5">
                        <span className="text-xs text-zinc-600">{item.endDate}</span>
                    </div>
                      <div className="col-span-4 flex items-center gap-2.5">
                        <span className="text-xs text-zinc-600">{item.status}</span>
                    </div>

                    <div className="col-span-2  flex items-center gap-2.5">
                        <span className="text-black text-xs">{item.Actions}</span>
                    </div>
                </div>

                
            ))}
        </div>
          </div>
         <div className="flex items-center justify-between mt-2 text-sm">
        <p className="text-zinc-500 text-xs">Showing 1 to {data.length} of {data.length} records</p>
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
        </div>
    )
}