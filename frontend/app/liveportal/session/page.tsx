"use client"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function session(){


  const data = [
        {
            subject: "Mathematics",
            classArm: "JSS 2 Gold",
            AssignedSub: "Mrs. Folashade Adeyemi",
            Actions: "Unassign"
        },
         {
            subject: "Mathematics",
            classArm: "JSS 2 Diamond",
            AssignedSub: "Mrs. Folashade Adeyemi",
            Actions: "Unassign"
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
            <Button variant="ghost">Academic Sessions (2)</Button>
            <Button variant="secondary">School Terms (3)</Button>
        </div>
        <Input type="search" placeholder="Search Sessions (e.g. 2024/2025)..." className="my-5 w-[400px]"/>

        <div className="p-8 max-w-7xl mx-auto">
          <div className="w-full bg-white rounded-lg border border-zinc-200 shadow-2xs overflow-hidden">
             <div className="grid grid-cols-12 bg-white px-6 py-3 border-b border-zinc-200 text-xs font-semibold text-emerald-800/80 tracking-wider">
            <div className="col-span-3">Session Name</div>
            <div className="col-span-2">Start Date</div>
            <div className="col-span-2">End Date</div>
            <div className="col-span-3">Status</div>
            <div className="col-span-2">Actions</div>
        </div>
          </div>
        </div>
        </div>
    )
}