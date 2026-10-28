"use client"
import { Button } from "@/components/ui/button"
import { Calendar, Ellipsis, Plus, Search } from "lucide-react"
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
                <div className="grid grid-cols-5 text-zinc-400 ">
                    <p>SESSION NAME </p>
                    <p>START DATE</p>
                    <p>END DATE</p>
                    <p>STATUS</p>
                    <p>ACTIONS</p>
                </div>
                <div className="grid grid-cols-5 ">
                    <div className=" flex gap-2 items-center w-[400px]">
                        <Calendar size="10px" />
                    <p className="semibold">2023/2024 Academic Year</p>
                    </div>
                    <p className="w-[300px]">11 sept 2023</p>
                    <p className="w-[300px]">9 sept 2024</p>
                    <p className="w-[300px]">archived/inactive</p>
                    <button className="mr-0 w-[200px]">
                        <Ellipsis />
                    </button>
                    <p></p>
                </div>
                <div className="grid grid-cols-5 ">
                    <div className=" flex gap-2 items-center w-[400px]">
                        <Calendar size="10px" />
                    <p className="semibold">2023/2024 Academic Year</p>
                    </div>
                    <p className="w-[300px]">11 sept 2023</p>
                    <p className="w-[300px]">9 sept 2024</p>
                    <p className="w-[300px]">archived/inactive</p>
                    <button className="mr-0 w-[200px]">
                        <Ellipsis />
                    </button>
                    <p></p>
                </div>
            </div>
        </div>
        </div>
    )
}