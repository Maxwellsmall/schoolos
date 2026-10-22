"use client"

import { ArrowRight, Check, Code2 } from "lucide-react"
import { Button } from "./ui/button"
import { Shield, GraduationCap, CreditCard, ClipboardList, Users, BookOpen } from "lucide-react";
import SixTailoredCard from "@/components/SixTailoredCard"
import CoreModulesCard from "./CoreModulesCard";

export default function Dedicated() {
  const Data = [
        {   
            id: "1",
            headericon: <Shield className="w-4 h-4"/>,
            header: "Academic Structure & Calendars",
            paragraph: `Configure institutional academic sessions, term dates, instructional day quotas, and grade arms (Pearl, Ruby, Gold, Diamond, Blue, Alpha) with room numbers and occupancy progress indicators.
                       `,
            features: [
                "Master curriculum catalog with Core vs. Elective subjects.",
                "Form tutor classroom allocation with capacity constraints.",
                "Interactive weekly master timetable matrix (Periods 1–7).",
            ],
            subHeader: "Sessions · Terms · Class Arms · Subjects"
        },
         {   
            id: "2",
            headericon: <Shield className="w-4 h-4"/>,
            header: "Academic Structure & Calendars",
            paragraph: `Configure institutional academic sessions, term dates, instructional day quotas, and grade arms (Pearl, Ruby, Gold, Diamond, Blue, Alpha) with room numbers and occupancy progress indicators.
                       `,
            features: [
                "Detailed daily absentee roster with guardian phone numbers.",
                "Direct parent call logging and medical excuse note attachments.",
                "Weekly compliance leaderboard and chronic absentee tracking.",
            ],
            subHeader: "Sessions · Terms · Class Arms · Subjects"
        },
        {   
            id: "3",
            headericon: <Shield className="w-4 h-4"/>,
            header: "Academic Structure & Calendars",
            paragraph: `Enforce mandatory morning roll call cutoffs. Administrative overview monitors class register compliance in real time with one-click automated SMS reminders to pending form tutors.
                       `,
            features: [
                "Master curriculum catalog with Core vs. Elective subjects.",
                "Form tutor classroom allocation with capacity constraints.",
                "Interactive weekly master timetable matrix (Periods 1–7).",
            ],
            subHeader: "Sessions · Terms · Class Arms · Subjects"
        },
        {   
            id: "2",
            headericon: <Shield className="w-4 h-4"/>,
            header: "Academic Structure & Calendars",
            paragraph: `Configure institutional academic sessions, term dates, instructional day quotas, and grade arms (Pearl, Ruby, Gold, Diamond, Blue, Alpha) with room numbers and occupancy progress indicators.
                       `,
            features: [
                "Master curriculum catalog with Core vs. Elective subjects.",
                "Form tutor classroom allocation with capacity constraints.",
                "Interactive weekly master timetable matrix (Periods 1–7).",
            ],
            subHeader: "Sessions · Terms · Class Arms · Subjects"
        }
          
      
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
            <div className="my-5 grid grid-cols-2 gap-3 px-5">
            {Data.map((card) => (
                <CoreModulesCard
                    header={card.header}
                    headericon={card.headericon}
                    subHeader={card.subHeader}
                    paragraph={card.paragraph}
                    features={card.features}
                />
            ))

            }
            </div>
        </div>        
        </>
    )
}