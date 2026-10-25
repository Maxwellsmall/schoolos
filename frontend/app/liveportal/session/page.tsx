"use client"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"

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

        <div className="flex gap-3 bg-zinc-300 p-2 w-[400px] rounded-md">
            <Button variant="ghost">Academic Sessions (2)</Button>
            <Button variant="secondary">School Terms (3)</Button>
        </div>
        <Input type="search" placeholder="Search Sessions (e.g. 2024/2025)..." className="my-5 w-[400px]"/>
        </div>
    )
}