"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Ellipsis, Mail, Phone, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import AttendanceCard from "@/components/portal/AttendancesCardProps"

export default function Attendance() {
  const data = [
    {
      title: "Chukwu, Emeka",
      number: 3,
      icon: <ChevronLeft/>,
      paragraph: "ggggg"

    },
   
  ]

  return (
    <div className="p-8 w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-zinc-900 text-2xl font-semibold tracking-tight">
            School Attendance Summary
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            Daily institutional roll call audits and student presence rates across all secondary streams.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="rounded-md bg-zinc-900 hover:bg-zinc-800 text-white cursor-pointer">
            <Plus className="w-4 h-4 mr-1" /> Add Guardian
          </Button>
        </div>
      </div>

        <div>
            {data.map((item, index) => (
                <div key={index}>
                <AttendanceCard 
                title={item.title}
                number={item.number}
                icon={item.icon}
                paragraph={item.paragraph}
                />
                </div>
               
            ))

            }
        </div>
    </div>
  )
}