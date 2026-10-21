"use client"

import { ArrowRight, Check, Code2 } from "lucide-react"
import { Button } from "./ui/button"
import SixTailoredCard from "@/components/SixTailoredCard"

export default function Dedicated() {
    const Data = [
        {   
            id: "1",
            badge: "Root Platform Owner",
            headericon: <Code2/>,
            listicon: <Check/>,
            header: "1. Root Admin Portal",
            paragraph: "For software owners and regional education boards managing the entire SaaS multi-tenant infrastructure.",
            list: "Provision new school campuses and database partitions.", 
            button: "Enter as Root Admin"
        },
       
        {   
            id: "2",
            badge: "Head of School",
            headericon: <Code2/>,
            listicon: <Check/>,
            header: "2. Principal Super Admin",
            paragraph: "Executive oversight over academic sessions, grading standards, broadsheet approvals, and school settings.",
            list: "Provision new school campuses and database partitions.", 
            button: "Enter as Principal"
        },
        {   
            id: "3",
            badge: "Operations & Finances",
            headericon: <Code2/>,
            listicon: <Check/>,
            header: "3. Registrar & Bursar Admin",
            paragraph: "Student enrollment admissions, guardian records, fee billing, offline receipt issuance, and staff directory.",
            list: "Provision new school campuses and database partitions.", 
            button: ""
        },
        {   
            id: "4",
            badge: "Root Platform Owner",
            headericon: <Code2/>,
            listicon: <Check/>,
            header: "1. Root Admin Portal",
            paragraph: "For software owners and regional education boards managing the entire SaaS multi-tenant infrastructure.",
            list: "Provision new school campuses and database partitions.", 
            button: "Enter as Root Admin"
        },
         {   
            id: "5",
            badge: "Root Platform Owner",
            headericon: <Code2/>,
            listicon: <Check/>,
            header: "1. Root Admin Portal",
            paragraph: "For software owners and regional education boards managing the entire SaaS multi-tenant infrastructure.",
            list: "Provision new school campuses and database partitions.", 
            button: "Enter as Root Admin"
        },
    ]

    

     
    return (
        <>
        <div id="Roles Portal" className="w-full flex flex-col items-center justify-center py-12">
            <div className="flex items-start w-full max-w-7xl flex-col px-4">
                <p className="text-gray-400 font-extrabold">DEDICATED STAKEHOLDERS PORTALS</p>
                <div className="w-full">
                    <h1 className="text-blue-950 font-bold my-2 text-4xl">Six Tailored Perspectives</h1>
                   <div className="w-full flex items-center justify-between">
                     <p className="text-gray-800 text-[18px] max-w-4xl mb-8">
                    Every stakeholder logs into a purpose-built workspace calibrated precisely to their responsibilities.
                    </p>
                    <Button className="bg-white rounded-md hover:bg-zinc-200 border-2 border-zinc-200 text-black" >
                        <span>Test Role switcher in Portal</span>
                        <ArrowRight className="w-3 h-3"/>
                    </Button>
                   </div>
                </div>
            </div>
            <div className="my-5 grid grid-cols-3 gap-3 px-5 bg-red-500">
            {Data.map((card) => (
                <div className="my-2" key={card.id}>
                    <SixTailoredCard
                    badge={card.badge}
                    headericon={card.headericon}
                    listicon={card.listicon} 
                    header={card.header}
                    paragraph={card.paragraph} 
                    list={card.list} 
                    button={card.button}
                    />
                </div>
            ))

            }
            </div>
        </div>        
        </>
    )
}