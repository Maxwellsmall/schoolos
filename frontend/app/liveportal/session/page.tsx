"use client"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function session(){
    return (
        <div className="p-10 ">
        <div className="md:flex gap-4 rounded-md justify-between relative isolate mb-3">
          <div className="">
            <h1 className="text-black text-2xl font-semibold">
              Sessions & Academic Terms
            </h1>
            <p className="text-black text-gray-500">
              configure academic years, resumption schedules and define the active institutional term
            </p>
          </div>
          <div className="">
          <Button className="rounded-sm"> <Plus /> New session</Button>
          <Button variant="ghost" className="rounded-sm border-1 border-black"> <Plus /> New Term</Button>
          </div>
        </div>

        <div>
            <Button variant="ghost">Academic Sessions</Button>
        </div>
        </div>
    )
}