"use client"

import { ArrowRight, Check, Code2 } from "lucide-react"
import { Button } from "./ui/button"
import { Shield, GraduationCap, CreditCard, ClipboardList, Users, BookOpen } from "lucide-react";
import SixTailoredCard from "@/components/SixTailoredCard"
import CoreModulesCard from "./CoreModulesCard";
import PricingCard from "./PricingCard";

export default function CampusLicensing() {
  const pricingData = [
    {
        id: "1",
        badge: "EVALUATION",
        header: "30-Day Campus Pilot",
        price: "$0",
        priceSub: "/ 30 days",
        paragraph: "Full institutional access to test live academic sessions and roll call.",
        features: [
            "Up to 300 Enrolled Students",
            "1 Single Campus Partition",
            "Teacher Gradebook & Broadsheet",
            "Parent Portal with Child Switcher"
        ],
        buttonText: "Start Free Evaluation",
        isFeatured: false,
        isRecommended: false,
        featuresicon: <Check className="w-4 h-4"/>
    },
    {
        id: "2",
        badge: "Termly Pay-As-You-Grow",
        header: "Standard Term",
        price: "$0",
        priceSub: "/ 30 days",
        paragraph: "Full institutional access to test live academic sessions and roll call.",
        features: [
            "Up to 300 Enrolled Students",
            "1 Single Campus Partition",
            "Teacher Gradebook & Broadsheet",
            "Parent Portal with Child Switcher"
        ],
        buttonText: "Start Free Evaluation",
        isFeatured: false,
        isRecommended: false,
        featuresicon: <Check className="w-4 h-4"/>
    },
    {
        id: "3",
        badge: "MULTI-CAMPUS NETWORK",
        header: "Enterprise Annual",
        price: "$2,400",
        priceSub: "/ campus / year",
        paragraph: "Uncapped capacity for multi-school educational groups and regional chains.",
        features: [
            "Unlimited Enrolled Students & Arms",
            "Root Admin Centralized Multi-Tenancy",
            "Custom Report Card Letterhead & Watermarks",
            "Dedicated Cloud Infrastructure & 24/7 SLA"
        ],
        buttonText: "Provision Enterprise Network",
        isFeatured: true,
        isRecommended: true,
        featuresicon: <Check className="w-4 h-4"/>
    }
]
     
    return (
        <>
        <div id="Campus" className="w-full flex flex-col items-center justify-center py-12">
            <div className="flex items-start w-full max-w-7xl flex-col px-4">
                <p className="text-gray-400 font-extrabold">Institutional Licensing</p>
                <div className="w-full">
                    <h1 className="text-blue-950 font-bold my-2 text-4xl">Transparent Campus Tiers</h1>
                   
                     <p className="text-gray-800 text-[18px] max-w-4xl mb-8">
                       Flexible licensing models adapted for independent schools, expanding campuses, and large educational networks.
                    </p>
                   
                </div>
            </div>
            <div className="my-5 grid grid-cols-3 gap-3 px-5">
            {pricingData.map((card) => (
                <PricingCard
                    badge={card.badge}
                    header={card.header}
                    price={card.price}
                    priceSub={card.priceSub}
                    paragraph={card.paragraph}
                    features={card.features}
                    buttonText={card.buttonText}
                    isFeatured={card.isFeatured}
                    isRecommended={card.isRecommended}
                    featuresicon={card.featuresicon}
                />
            ))

            }
            </div>
        </div>        
        </>
    )
}