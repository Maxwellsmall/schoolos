"use client"

import { ArrowRight, Check, Code2 } from "lucide-react"
import { Button } from "./ui/button"
import { Shield, GraduationCap, CreditCard, ClipboardList, Users, BookOpen } from "lucide-react";
import SixTailoredCard from "@/components/SixTailoredCard"
import CoreModulesCard from "./CoreModulesCard";
import OperationsCard from "@/components/OperationsCard"

export default function Operations() {

 const Data = [
  {
    id: "01",
    stepNumber: "01",
    headericon: <Shield className="w-4 h-4" />,
    header: "Roll Call Verification",
    subHeader: "Form Tutor",
    paragraph: "Morning register completion with absentee logging and cutoff compliance.",
    features: [
      "Master curriculum catalog with Core vs. Elective subjects.",
      "Form tutor classroom allocation with capacity constraints.",
      "Interactive weekly master timetable matrix (Periods 1–7)."
    ]
  },
  {
    id: "02",
    stepNumber: "02",
    headericon: <Shield className="w-4 h-4" />,
    header: "Assessment Entry",
    subHeader: "Subject Teacher",
    paragraph: "Continuous assessment and examination scores with aggregate computation.",
    features: [
      "Detailed daily absentee roster with guardian phone numbers.",
      "Direct parent call logging and medical excuse note attachments.",
      "Weekly compliance leaderboard and chronic absentee tracking."
    ]
  },
  {
    id: "03",
    stepNumber: "03",
    headericon: <Shield className="w-4 h-4" />,
    header: "Report Publishing",
    subHeader: "Principal",
    paragraph: "Executive broadsheet approval and terminal report card publishing.",
    features: [
      "Curriculum subject catalog with Core and Elective classifications.",
      "Form tutor classroom allocation with capacity constraints.",
      "Interactive weekly master timetable matrix (Periods 1–7)."
    ]
  },
  {
    id: "04",
    stepNumber: "04",
    headericon: <Shield className="w-4 h-4" />,
    header: "Payment Receipts",
    subHeader: "Bursar & Cashier",
    paragraph: "Bank draft reconciliation, official receipts, and clearance updates.",
    features: [
      "Master curriculum catalog with Core vs. Elective subjects.",
      "Form tutor classroom allocation with capacity constraints.",
      "Interactive weekly master timetable matrix (Periods 1–7)."
    ]
  },
  {
    id: "05",
    stepNumber: "05",
    headericon: <Shield className="w-4 h-4" />,
    header: "Guardian Statements",
    subHeader: "Parent Guardian",
    paragraph: "Multi-ward fee statements, online checkout, and circular reviews.",
    features: [
      "Master curriculum catalog with Core vs. Elective subjects.",
      "Form tutor classroom allocation with capacity constraints.",
      "Interactive weekly master timetable matrix (Periods 1–7)."
    ]
  }
];

     
    return (
        <>
        <div id="Operations" className="w-full flex flex-col items-center justify-center py-12">
            <div className="flex items-start w-full max-w-7xl flex-col px-4">
                <div className="w-full">
                            <h1 className="text-blue-950 font-bold my-2 text-4xl">Core Institutional Workflows</h1>
                   
                     <p className="text-gray-800 text-[18px] max-w-4xl mb-8">
                        Standardized administrative routines connecting faculty, bursars, and executive leadership.
                      </p>
                   
                </div>
            </div>
            <div className="my-5 grid grid-cols-5 gap-3 px-5">
            {Data.map((card) => (
                <OperationsCard
                    header={card.header}
                    subHeader={card.subHeader}
                    paragraph={card.paragraph}
                    stepNumber={card.stepNumber}
                />
            ))

            }
            </div>
        </div>        
        </>
    )
}