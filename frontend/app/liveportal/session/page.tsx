"use client"
import { Button } from "@/components/ui/button"
import { Calendar, Plus, Search } from "lucide-react"
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

        <div className="flex my-5 w-[400px] border items-center rounded-md">
            <Button variant="ghost">
            <Search className="text-zinc-400 text-xs"/>
            </Button>
            <Input type="search" placeholder="Search Sessions (e.g. 2024/2025)..." className=" w-full border-0 hover:border-0"/>
        </div>
        <div className="">
            <div className="">
                <div className="flex justify-between text-zinc-400 ">
                    <p>SESSION NAME </p>
                    <p>START DATE</p>
                    <p>END DATE</p>
                    <p>STATUS</p>
                    <p>ACTIONS</p>
                </div>
                <div className="">
                    <div className=" flex gap-2 items-center">
                        <Calendar />
                    <p className="semibold">2023/2024 Academic Year</p>
                    </div>
                    <p>11 sept 2023</p>
                    <p>9 sept 2024</p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
        </div>
    )
}