"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronLeft, ChevronRight, ClipboardCheck, Clock, Ellipsis, EyeIcon, FileWarningIcon, Mail, Phone, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import AttendanceCard from "@/components/portal/AttendancesCardProps"
import { ProgressTrack } from "@base-ui/react"

export default function Attendance() {
  const data = [
    {
      title: "Overall Daily Attendance",
      number: "3%",
      icon: <ClipboardCheck className="w-4 h-4"/>,
      paragraph: "4 of 117 students present"

    },
    {
      title: "On-Time Present",
      number: "4",
      icon: <CheckCircle className="w-4 h-4"/>,
      paragraph: "Arrived before 7:45 AM assembly"

    },
    {
      title: "Late Coming",
      number: "0",
      icon: <Clock className="w-4 h-4"/>,
      paragraph: "Marked with disciplinary remarks"

    },
    {
      title: "Unexcused Absentees",
      number: "0",
      icon: <FileWarningIcon  className="w-4 h-4"/>,
      paragraph: "Parent notification recommended"

    },
   
  ]
  const studentData = [
     {
      classroomArm: "JSS 1 Gold",
      enrolled: "30 students",
      present: "0",
      absent: "0",
      lateArrivals: "0",
      rate: "0%",
      rateStatus: "Not Active",
      actions: "View Roll Call",
      actionIcon: <EyeIcon className="w-3 h-3"/>

    },
    {
      classroomArm: "JSS 1 Diamond",
      enrolled: "28 students",
      present: "0",
      absent: "0",
      lateArrivals: "0",
      rate: "0%",
      rateStatus: "Not Active",
      actions: "View Roll Call",
      actionIcon: <EyeIcon className="w-3 h-3"/>

    },
      {
      classroomArm: "JSS 2 Gold",
      enrolled: "4 students",
      present: "4",
      absent: "0",
      lateArrivals: "0",
      rate: "100%",
      rateStatus: "Active",
      actions: "View Roll Call",
      actionIcon: <EyeIcon className="w-3 h-3"/>

    },
    {
      classroomArm: "JSS 2 Diamond",
      enrolled: "29 students",
      present: "0",
      absent: "0",
      lateArrivals: "0",
      rate: "0%",
      rateStatus: "Not Active",
      actions: "View Roll Call",
      actionIcon: <EyeIcon className="w-3 h-3"/>

    },
        {
      classroomArm: "SSS 1 Science",
      enrolled: "1 students",
      present: "0",
      absent: "0",
      lateArrivals: "0",
      rate: "100%",
      rateStatus: "Not Active",
      actions: "View Roll Call",
      actionIcon: <EyeIcon className="w-3 h-3"/>

    },
    {
      classroomArm: "SSS 2 Science",
      enrolled: "25 students",
      present: "0",
      absent: "0",
      lateArrivals: "0",
      rate: "0%",
      rateStatus: "Not Active",
      actions: "View Roll Call",
      actionIcon: <EyeIcon className="w-3 h-3"/>

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

        <div className="grid grid-cols-4 gap-4 items-center">
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

        <div className=" mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-[380px]">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
          <Input 
            type="search" 
            placeholder="Filter classroom roll call..." 
            className="pl-9 bg-white border-zinc-300 focus-visible:ring-zinc-400"
          />
        </div>

              

        </div>
        <div className="w-full bg-white rounded-lg border border-zinc-200 shadow-2xs overflow-hidden">
                <div className="grid grid-cols-12 hover:bg-zinc-100/50 bg-emerald-50/20 px-6 py-3 border-b border-zinc-200 text-xs font-semibold text-emerald-800/80 tracking-wider">
                  <div className="col-span-2 text-zinc-400">CLASSROOM ARM</div>
                  <div className="col-span-1 text-zinc-400">ENROLLED</div>
                  <div className="col-span-1 ml-5 text-zinc-400">PRESENT</div>
                  <div className="col-span-1 ml-7 text-zinc-400">ABSENT</div>
                  <div className="col-span-2 ml-6 text-zinc-400">LATE ARRIVALS</div>
                  <div className="col-span-3 ml-3 text-zinc-400">ATTTENDANCE RATE</div>
                  <div className="col-span-1 text-zinc-400">ACTIONS</div>
                </div>

                <div className="divide-y divide-zinc-200">
                  {studentData.map((item, index) => (
                    <div key={index}
                    className="grid grid-cols-12 items-center px-6 py-4 hover:bg-zinc-50/80 transition-colors"
                    >
                      <div className="col-span-2">
                        <span className="inline-block text-zinc-700 text-[13px] font-semibold">
                          {item.classroomArm}
                        </span>
                      </div>

                      <div className="col-span-2">
                        <span className="inline-block text-zinc-700 text-[13px] font-normal">
                          {item.enrolled}
                        </span>
                      </div>

                      <div className="col-span-1">
                        <span className="inline-block text-green-800 text-[13px] font-semibold">
                          {item.present}
                        </span>
                      </div>

                      <div className="col-span-1">
                        <span className="inline-block text-red-500 text-[13px] font-semibold">
                          {item.absent}
                        </span>
                      </div>


                      <div className="col-span-1">
                        <span className="inline-block text-red-800 text-[13px] font-semibold">
                          {item.lateArrivals}
                        </span>
                      </div>

                      <div className="col-span-2 flex gap-2 py-[2px]">
                        <span className="text-xs text-zinc-900 font-bold">
                          {item.rate}
                        </span>
                        <span
                        className={`inline-block px-2 gap-2 ${
                          item.rateStatus === "Not active"
                          ? "bg-zinc-200 rounded-full w-[80px]"
                          : item.rateStatus === "Active" 
                          ?  "bg-emerald-600 rounded-full w-[80px]"
                          :  "bg-zinc-200 rounded-full w-[80px]"

                        }`}
                        >

                        </span>
                      </div>

                      <div className="col-span-1">
                        <Button className="bg-white border border-zinc-200 rounded-md hover:bg-zinc-100">
                          <span className="text-black">{item.actionIcon}</span>
                          <span className="text-black text-[12px]">{item.actions}</span>
                        </Button>
                      </div>

                    </div>
                  ))

                  }

                </div>

        </div>

        <div>
      <div className="flex items-center justify-between mt-6 text-sm">
        <p className="text-zinc-500">Showing 1 to {studentData.length} of {studentData.length} records</p>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" className="h-8 w-8 border-zinc-300 disabled:opacity-40" disabled>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-zinc-600 font-medium text-xs">Page 1 of 1</span>
          <Button variant="outline" size="icon" className="h-8 w-8 border-zinc-300 disabled:opacity-40" disabled>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
        </div>
    </div>
  )
}