"use client"
import { Button } from "@/components/ui/button"
import { Ellipse, Ellipsis, GraduationCap, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Classes(){

  const data = [
    {
      title: "JSS 1 Gold",
      icon: <GraduationCap className="w-4 h-4"/>,
      name: "Mr. Ayodele Danjuma",
      slots: "30 / 35 seats",
      dot: <Ellipsis className="w-4 h-4"/>
      
    },
       {
      title: "JSS 1 Diamond",
      icon: <GraduationCap className="w-4 h-4"/>,
      name: "Mrs. Nneka Okafor",
      slots: "20 / 35 seats",
      dot: <Ellipsis className="w-4 h-4"/>
      
    },
       {
      title: "JSS 2 Gold",
      icon: <GraduationCap className="w-4 h-4"/>,
      name: "Mrs. Folashade Adeyemi",
      slots: "32 / 35 seats",
      dot: <Ellipsis className="w-4 h-4"/>
      
    },
       {
      title: "JSS 2 Diamond",
      icon: <GraduationCap className="w-4 h-4"/>,
      name: "Mr. Chinedu Balogun",
      slots: "29 / 35 seats",
      dot: <Ellipsis className="w-4 h-4"/>
      
    },
       {
      title: "JSS 1 Science",
      icon: <GraduationCap className="w-4 h-4"/>,
      name: "	Engr. Olufemi Sowore",
      slots: "26 / 35 seats",
      dot: <Ellipsis className="w-4 h-4"/>
      
    },
     {
      title: "JSS 2 Science",
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
              Classes & Academic Arms
            </h1>
            <p className="text-black text-gray-500">
              Configure classroom arms, assign designated class teachers, and manage seat capacities.
            </p>
          </div>
          <div className="flex items-center gap-2">
          <Button className="rounded-sm cursor-pointer"> <Plus /> New Classroom</Button>
          <Button variant="ghost" className="rounded-sm border-1 border-black cursor-pointer"> <Plus /> New Term</Button>
          </div>
        </div>

        <div className="flex gap-3 bg-zinc-100  w-[400px] rounded-md">
            <Button variant="ghost">Classrooms (6)</Button>
            <Button variant="secondary">Class Levels (6)</Button>
            <Button variant="secondary">Arms (6)</Button>

        </div>
        <Input type="search" placeholder="Search Classes (e.g. JSS 2 Gold)..." className="my-5 w-[400px]"/>

        <div className="w-full flex flex-col rounded-md border border-zinc-300">
          <div className="w-full items-center justify-center bg-green-50/50 px-2 hover:bg-zinc-100/60">
            <ul className="flex justify-between items-center py-3">
            <li className="font-normal text-slate-400">CLASS NAME</li>
            <li className="font-normal text-slate-400">FORM / CLASS TEACHER</li>
            <li className="font-normal text-slate-400">ENROLLMENT</li>
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
                      <span className="">{card.title}</span>
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
        <div>
              <p className="text-zinc-300">Showing 1 to 6 of 6 records</p>

        </div>
        </div>
    )
}