"use client"

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import SchoolOsPreview from "@/components/SchoolOSPortalPreview"


export default function Hero() {
    return (
            <>
            <div className="w-full max-7xl py-10 flex flex-col items-center">
               
                <h1 className="font-bold max-w-3xl text-center text-blue-950 text-6xl mt-5 font-sans">
                    Enterprise School Management for Multi-Campus Institutions
                </h1>
                <p className="text-center mt-4 text-zinc-500 text-[23px] max-w-3xl">
                    A unified student information and campus operations system connecting platform executives, principals, registrars, form tutors, students, and parents into a single, role-governed platform.
                    Enter as Principal Super Admin

                </p>

                   <div className="items-center my-3 gap-3 flex">
                 <Button className="cursor-pointer py-6 px-6 font-bold bg-slate-900 hover:bg-slate-800">
                    <span>
                    Enter as Principal Super Admin
                    </span>
                    <ArrowRight/>
                </Button>
                <Button className="bg-white py-6 px-6 cursor-pointer font-bold border border-zinc-200 hover:bg-zinc-100 text-black">
                    Access Registrar & Bursary Portal
                </Button>
            </div>

                <div className="flex items-center gap-3 max-w-6xl">
                    <span>Direct portal access: </span>
                    <span className="underline text-zinc-600 hover:cursor-pointer hover:text-blue-900">Root Admin </span>
                    <span>·</span>
                    <span className="underline text-zinc-500 hover:cursor-pointer hover:text-blue-500">Principal</span>
                    <span>·</span>
                    <span className="underline text-zinc-500 hover:cursor-pointer hover:text-blue-500">Bursar / Registra</span>
                    <span>·</span>
                    <span className="underline text-zinc-500 hover:cursor-pointer hover:text-blue-500">Teacher (Roll Call)</span>
                     <span>·</span>
                    <span className="underline text-zinc-500 hover:cursor-pointer hover:text-blue-500">Parent Portal</span>
                    <span>·</span>
                    <span className="text-zinc-500 hover:cursor-pointer hover:text-blue-900">Students</span>
                </div>
                {/* <SchoolOsPreview/> */}

            </div>
            </>
    )
}