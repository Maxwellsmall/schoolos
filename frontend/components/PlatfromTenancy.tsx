"use client"

import { ArrowBigDownIcon, Code2Icon, Shield, ShieldCheck } from "lucide-react"
import PlatformCard from "../components/PlatformCard"
import { Building2 } from "lucide-react";

export default function PlatformTenancy() {

    const cardData = [
        {
            id: "1",
            header: "Autonomous Campus Partitioning",
            body: "Independent academic terms, grading standards, subject catalogs, and financial ledgers for every campus without cross-school data pollution.",
            footer: "Apex International Academy · Greenfield STEM · St. Jude",
            classname: "",
            icon: <Code2Icon className="text-black w-4 h-4"/>
        }, 
        {
            id: "2",
            header: "Seamless Campus Switcher",
            body: "Board directors and education inspectors switch between institutions from the main navigation without repeated credentials entry.",
            footer: "Centralized authentication · Role-level audit trails",
            classname: "",
            icon: <Building2 className="w-4 h-4 text-black"  />
        }, 
        {
            id: "3",
            header: "Role-Based Data Partitioning",
            body: "Strict permission gates restrict teachers to their assigned classes, while students and parents view only their personal ward records.",
            footer: "Principal · Registrar · Teacher · Parent · Student",
            classname: "",
            icon: <ShieldCheck className="w-4 h-4 text-black"  />
        }, 
    ]
        
    return (
        <>
        <div id="Architecture" className="w-full flex flex-col items-center justify-center py-12">
            <div className="flex items-start w-full max-w-7xl flex-col px-4">
                <div>
                    <h1 className="text-blue-950 font-bold my-2 text-4xl">Engineered for Group and Independent Schools</h1>
                    <p className="text-gray-800 text-[20px] max-w-3xl mb-8">
                    Run autonomous school campuses under a central corporate board or operate as a standalone institution. Each campus maintains strict data separation
                     for academic sessions, classroom arms, fee structures, and staff directories.t census, fee 
                     structure, timetable, and grading rules.
                    </p>
                </div>
                
                <div className="grid grid-cols-3 gap-6 w-full">
                    {cardData.map((card) => (
                       <div key={card.id}>
                         <PlatformCard
                            header={card.header}
                            body={card.body}
                            footer={card.footer}
                            classname={card.classname}
                            icon={card.icon}
                         />
                       </div>
                    ))}
                </div>
            </div>
        </div>        
        </>
    )
}