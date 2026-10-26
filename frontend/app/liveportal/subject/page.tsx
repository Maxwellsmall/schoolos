"use client"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Ellipse, Ellipsis, GraduationCap, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Subject(){

  const data = [
    {
    code: "MTH 101",
      icon: <GraduationCap className="w-4 h-4"/>,
      name: "Mr. Ayodele Danjuma",
      slots: "30 / 35 seats",
      dot: <Ellipsis className="w-4 h-4"/>
      
    },
       {
      code: "ENG 101",
      icon: <GraduationCap className="w-4 h-4"/>,
      name: "Mrs. Nneka Okafor",
      slots: "20 / 35 seats",
      dot: <Ellipsis className="w-4 h-4"/>
      
    },
       {
      code: "JSS 2 Gold",
      icon: <GraduationCap className="w-4 h-4"/>,
      name: "Mrs. Folashade Adeyemi",
      slots: "32 / 35 seats",
      dot: <Ellipsis className="w-4 h-4"/>
      
    },
       {
      code: "BSC 101",
      icon: <GraduationCap className="w-4 h-4"/>,
      name: "Mr. Chinedu Balogun",
      slots: "29 / 35 seats",
      dot: <Ellipsis className="w-4 h-4"/>
      
    },
       {
      code: "BTE 101",
      icon: <GraduationCap className="w-4 h-4"/>,
      name: "	Engr. Olufemi Sowore",
      slots: "26 / 35 seats",
      dot: <Ellipsis className="w-4 h-4"/>
      
    },
     {
      code: "CVE 101",
      icon: <GraduationCap className="w-4 h-4"/>,
      name: "	Dr. Hadiza Usman",
      slots: "25 / 35 seats",
      dot: <Ellipsis className="w-4 h-4"/>
      
    },
    
  ]


    return (
        <div className="p-10 ">
        <div className="md:flex gap-4 rounded-md justify-between relative isolate mb-3">
          <div className="">
            <h1 className="text-black text-2xl font-semibold">
              Curriculum Subjects
            </h1>
            <p className="text-black text-gray-500 text-sm">
                Maintain the school syllabus, subject categorizations, and grade level applicability.            </p>
          </div>
          <div className="flex items-center gap-2">
          <Button className="rounded-sm cursor-pointer"> <Plus /> Add Support</Button>
          </div>
        </div>

        <div className="flex gap-3 bg-zinc-100  w-[400px] rounded-md">
            <Button variant="ghost">Classrooms (6)</Button>
            <Button variant="secondary">Class Levels (6)</Button>
            <Button variant="secondary">Arms (6)</Button>

        </div>
        <div className="w-full justify-center items-center flex">
            <Input type="searclh" placeholder="Search Classes (e.g. JSS 2 Gold)..." className="my-5 w-[400px]"/>
            <div className="flex w-full items-center gap-3">
                <p>Category:</p>
                <select name="">
                    <option value="">All Categories</option>
                    <option value="">Core</option>
                    <option value="">Vocaional</option>
                    <option value="">Educational</option>
                </select>
            </div>
        </div>

        <div className="w-full flex flex-col rounded-md border border-zinc-300">
          <div className="w-full items-center justify-center bg-green-50/50 px-2 hover:bg-zinc-100/60">
            <ul className="flex justify-between items-center py-3">
            <li className="font-normal text-slate-400">CODE</li>
            <li className="font-normal text-slate-400">SUBJECT TITLE</li>
            <li className="font-normal text-slate-400">CATEGORY</li>
            <li className="font-normal text-slate-400">TAUGHT AT LEVELS</li>
            <li className="font-normal text-slate-400">ACTIONS</li>

            </ul>
          </div>
          <div className="border w-full"/>
          <div className="w-full items-center justify-center px-2 hover:bg-zinc-100/60 ">
              <div className="w-full flex flex-col">
                {data.map((card) => (
                  <>
                  <div className="w-full flex items-center py-5 justify-between">
                    <div className="flex gap-2 items-center">
                      <span className="font-bold text-[20px]">{card.icon}</span>
                      <span className="">{card.code}</span>
                    </div>
                      <span>{card.name}</span>
                      <span>{card.slots}</span>
                      <span>{card.dot}</span>
                      
                  </div>
                 <div className="border w-full"/>
                  </>

                ))
                  
                }
              </div>

          </div>

        </div>
        <div className="flex w-full justify-between my-4">
              <p className="text-zinc-400">Showing 1 to 6 of 6 records</p>
              <div className="flex items-center gap-2 justify-center">
                <Button>
                <ChevronLeft/>
                </Button>
                <span>Page 1 of 1</span>
                <Button>
                <ChevronRight/>
                </Button>
              </div>

        </div>
        </div>
    )
}