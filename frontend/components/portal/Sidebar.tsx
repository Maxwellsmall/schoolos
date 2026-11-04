"use ckient"
import { Button } from "../ui/button"
import { Award, BookOpen, Building2, Church, ClipboardCheck, GraduationCap, LayoutDashboard, User2, UserCheck, UserCircle } from "lucide-react"
import Link from "next/link"

export default function Sidebar(){
    return (
        <div className="bg-[#fdfcf9] h-full w-[310px] hidden md:block border-r"> 
         <div className="flex gap-3 items-center  mr-5 p-4">
      <div className="text-center p-2 px-4  bg-black rounded-md text-white">S</div>
      <div className="">
        <h1>SchoolOs</h1>
        <p className="text-xs">Campus Operationals Portal</p>
      </div>
        </div>
       
            <div className="m-5">
                <p className="text-xs tracking-wider mb-2 font-semibold text-slate-400/80">OVERVIEW</p>
                <div className="gap-2">
                    <Link href={"/adminDashboard"}>
                    <Button variant={"selected"} className="flex justify-start gap-2 items-center px-5 bg-black w-full">
                            <LayoutDashboard />
                            Dashboard
                    </Button>
                    </Link>
                    <p className="text-xs tracking-wider mt-5 text-slate-400/80 font-semibold">ACADEMIC STRUCTURE</p>
                    <div className="gap-5">
                        <Link href="/adminDashboard/session">
                    <Button variant={"ghost"} className="flex justify-around text-slate-600/90 items-center px-5 cursor-pointer">
                            <Building2 />
                            session and Terms
                    </Button> 
                    </Link>

                    <Link href="/adminDashboard/classes">
                    <Button variant={"ghost"} className="flex justify-around text-slate-600/90 items-center px-5 cursor-pointer">
                            <GraduationCap />
                           Classes & Arms
                    </Button> 
                    </Link>
                       <Link href="/adminDashboard/subject">
                    <Button variant={"ghost"} className="flex justify-around text-slate-600/90 items-center px-5 cursor-pointer">
                            <BookOpen />
                           Subjects
                    </Button> 
                    </Link>
                      <Link href="/adminDashboard/teacher">
                    <Button variant={"ghost"} className="flex justify-around text-slate-600/90 items-center px-5 cursor-pointer">
                            <UserCheck />
                           Teacher Assignments
                    </Button> 
                    </Link>
                    </div>
                     <p className="text-xs tracking-wider mt-5  text-slate-400/80 font-semibold">PEOPLE</p>
                    <div className="gap-5">
                        <Link href="/adminDashboard/people">
                    <Button variant={"ghost"} className="flex justify-around items-center px-5 text-slate-600/90 cursor-pointer">
                        <User2 />
                        Students
                    </Button> 
                    </Link>

                    <Link href="/adminDashboard/guardians">
                    <Button variant={"ghost"} className="flex justify-around items-center px-5 text-slate-600/90 cursor-pointer">
                        <User2 />
                        Guardians
                    </Button> 
                    </Link>

                        <Link href="/adminDashboard/staff">
                    <Button variant={"ghost"} className="flex justify-around items-center px-5 text-slate-600/90 cursor-pointer">
                        <Church />
                        Staff Dictionary
                    </Button> 
                    </Link>

                    </div>

                     <p className="text-xs tracking-wider mt-5 text-slate-400/80 font-bold">ACADEMICS ATTENDANCE</p>

                    <div className="gap-5 mt-2">
                        <Link href="/adminDashboard/attendance">
                    <Button variant={"ghost"} className="flex justify-around items-center px-5 cursor-pointer text-slate-600/90">
                        <ClipboardCheck />
                        Attendance Summary
                    </Button> 
                    </Link>

                    <Link href="/adminDashboard/scores">
                    <Button variant={"ghost"} className="flex justify-around items-center px-5 cursor-pointer text-slate-600/90">
                        <Award />
                        Scores & Grading
                    </Button> 
                    </Link>
                    </div>
                </div>
                <div className="flex absolute bottom-0 p-2 gap-3 items-center jusrify-start self-start">
                    <UserCircle size={35}/>
                    <div className="text-xs">
                        <p className="font-bold ">Dr. Authur Dance</p>
                        <span className="text-[10px] text-zinc-500">Super Admin</span>
                    </div>
                </div>
            </div>
        </div>
    )
}