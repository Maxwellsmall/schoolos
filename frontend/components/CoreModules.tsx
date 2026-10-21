"use client"

import { ArrowRight, Check, Code2 } from "lucide-react"
import { Button } from "./ui/button"
import { Shield, GraduationCap, CreditCard, ClipboardList, Users, BookOpen } from "lucide-react";
import SixTailoredCard from "@/components/SixTailoredCard"

export default function Dedicated() {
  const Data = [
        {   
            id: "1",
            badge: "Root Platform Owner",
            headericon: <Shield className="w-4 h-4"/>,
            featuresicon: <Check className="w-3 h-3 text-green-500"/>,
            header: "1. Root Admin Portal",
            paragraph: "For software owners and regional education boards managing the entire SaaS multi-tenant infrastructure.",
            features: [
                "Provision new school campuses and database partitions.",
                "Monitor platform subscriptions and licensing quotas.",
                "Global relay credentials (Twilio, SES, Stripe webhooks).",
            ],
            buttonText: "Enter as Root Admin",
            isFeatured: false,
            isFeaturedBadge: true
        },
        {   
            id: "2",
            badge: "Head of School",
            headericon: <GraduationCap className="w-4 h-4"/>,
            featuresicon: <Check className="w-3 h-3 text-green-500"/>,
            header: "2. Principal Super Admin",
            paragraph: "Executive oversight over academic sessions, grading standards, broadsheet approvals, and school settings.",
            features: [ 
                "Approve class result broadsheets and publish report cards.",
                "Configure institution profile, motto, letterhead, and logo.",
                "Set assessment percentage weights (CA1 + CA2 + Exam).",
            ], 
            buttonText: "Enter as Principal",
            isFeatured: true,
            isFeaturedBadge: true
        },
        {   
            id: "3",
            badge: "Operations & Finances",
            headericon: <CreditCard className="w-4 h-4"/>,
            featuresicon: <Check className="w-3 h-3 text-green-500"/>,
            header: "3. Registrar & Bursar Admin",
            paragraph: "Student enrollment admissions, guardian records, fee billing, offline receipt issuance, and staff directory.",
            features: [ 
                "Enroll new students with auto-generated admission numbers.",
                "Record bank wires, cash deposits, and POS drafts.",
                "Monitor whole-school daily attendance register submissions.",
            ], 
            buttonText: "Enter as Bursar / Registrar",
            isFeatured: false,
            isFeaturedBadge: false

        },
        {   
            id: "4",
            badge: "Classroom Faculty",
            headericon: <ClipboardList className="w-4 h-4"/>,
            featuresicon: <Check className="w-3 h-3 text-green-500"/>,
            header: "4. Teacher Workspace",
            paragraph: "Form class roll call, daily attendance toggles, continuous assessment gradebook, and student remarks.",
            features: [ 
                "Form class roll call and daily attendance toggles.",
                "Manage continuous assessment gradebook and compute totals.",
                "Input termly student behavioral remarks and comments.",
            ], 
            buttonText: "Enter as Teacher",
            isFeatured: false,
            isFeaturedBadge: false


        },
         {   
            id: "5",
            badge: "Family & Guidance",
            headericon: <Users className="w-4 h-4"/>,
            featuresicon: <Check className="w-3 h-3 text-green-500"/>,
            header: "5. Parent Portal",
            paragraph: "Multi-child switching, morning roll call notification, academic report cards, and online fee payments.",
            features: [ 
                "Multi-child switching across different campuses.",
                "Instant morning roll call arrival notifications.",
                "Access termly academic report cards and fee receipts.",
            ], 
            buttonText: "Enter as Parent",
            isFeatured: false,
            isFeaturedBadge: false


        },
        {   
            id: "6",
            badge: "Enrolled Learner",
            headericon: <BookOpen className="w-4 h-4"/>,
            featuresicon: <Check className="w-3 h-3 text-green-500"/>,
            header: "6. Student Portal",
            paragraph: "Daily period timetables, class rank standing, subject aggregates, and examination clearance certificates.",
            features: [ 
                "View daily period timetables and assignment schedules.",
                "Check continuous subject aggregates and termly standing.",
                "Download examination clearance certificates.",
            ], 
            buttonText: "Enter as Student",
            isFeatured: false,
            isFeaturedBadge: false


        },
    ]

     
    return (
        <>
        <div id="Core Modules" className="w-full flex flex-col items-center justify-center py-12">
            <div className="flex items-start w-full max-w-7xl flex-col px-4">
                <p className="text-gray-400 font-extrabold">Complete Functional Coverage</p>
                <div className="w-full">
                    <h1 className="text-blue-950 font-bold my-2 text-4xl">Architected for Every Campus Department</h1>
                   
                     <p className="text-gray-800 text-[18px] max-w-4xl mb-8">
                        From academic session calendars to financial bursary collections, explore the purpose-built modules powering day-to-day operations.
                    </p>
                   
                </div>
            </div>
            <div className="my-5 grid grid-cols-3 gap-3 px-5">
            {Data.map((card) => (
                <div className="my-2" key={card.id}>
                    <SixTailoredCard
                    badge={card.badge}
                    headericon={card.headericon}
                    featuresicon={card.featuresicon} 
                    header={card.header}
                    paragraph={card.paragraph} 
                    features={card.features} 
                    buttonText={card.buttonText}
                    isFeatured={card.isFeatured}
                    isFeaturedBadge={card.isFeaturedBadge}
                    />
                </div>
            ))

            }
            </div>
        </div>        
        </>
    )
}