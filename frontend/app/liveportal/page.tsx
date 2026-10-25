import { CheckSquare, Plus, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <div className="p-10 ">
      <div className="md:flex gap-4 rounded-md p-10 justify-between relative isolate">
        <img src="/portal_campus_banner_1792621768749.jpg" className="absolute inset-0 w-full rounded-md h-full object-cover object-center opacity-40" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#143d34]/95 via-[#143d34]/85 to-[#1a4b40]/60 rounded-md"></div>
        <div className="text-white text-[13px] relative z-10">
          <div className="flex flex-wrap gap-5 items-center ">
            <p className="font-bold text-green-200">Lagos Campus</p>
            <p>Enterprice maual</p>
            <p>first term (week 7)</p>
          </div>
          <h1 className="text-3xl my-2 font-bold">Apex International Academy</h1>
          <p className="text-[14px] mb-2 italic">
            "Excellence in Knowledge and Character"
          </p>
          <div className="text-[12px] flex gap-3 relative ">
            <p>
              {" "}
              Morning roll call:{" "}
              <span className="font-bold"> 94.2% submitted </span>
            </p>
            <p>
              Curriculum:{" "}
              <span className="font-bold"> WAEC & Cambridge IGSCE</span>
            </p>
          </div>
        </div>
        <div className="flex h-[100px] items-center gap-3 bg-white/10 backdrop-blur-2xl px-5 rounded-md border border-white relative z-10">
          <UserCircle />
          <div className="text-white text-xs">
            <p className="text-[15px]">Dr.Authur Vance</p>
            <p className="text-green-300">Head of School & Principal</p>
            <p className="">SCF-00F . Executive Office</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-5">
            <div className="text-xs gap-3">
                <p className="text-xl font-bold">Principal Executive Operations</p>
                <p>Apex Interational Academy . 2025/2026 . First Term (Week 7)</p>
            </div>
            <div className="">
                <Button variant="ghost"> <CheckSquare /> Attendance Register</Button>
                <Button variant="selected"> <Plus/> Register Student </Button>
            </div>
        </div>
        <div className="grid grid-rows-1 md:grid-cols-4  gap-5">
            <div className="p-5 bg-white border rounded-md">
                <p className="text-xs text-zinc-500">Total Enrollment</p>
                <h1 className="text-2xl font-bold">658 students</h1>
                <div className="flex justify-between items-center">

                <p className="text-xs text-zinc-500">330 boys / 318 girls</p>
                <div className="bg-[#e5dbbf] p-1 px-2 rounded-sm text-[10px]">Quota: 1000</div>
                </div>
            </div>
            <div className="p-5 bg-white border rounded-md">
                <p className="text-xs text-zinc-500">Today's Daily Attendance</p>
                <h1 className="text-2xl font-bold text-green-600">94.2% Present</h1>
                <div className="flex justify-between items-center">

                <p className="text-xs text-zinc-500">610 Present • 38 Absent</p>
                <div className="text-green-900 p-1 px-2 rounded-sm text-[10px]">22 of 24 Classes Submitted</div>
                </div>
            </div>
            <div className="p-5 bg-white border rounded-md">
                <p className="text-xs">Term fee Collections</p>
                <h1 className="text-2xl font-bold">$142,500</h1>
                <div className="flex justify-between items-center">

                <p className="text-xs text-zinc-500">$180,000 Target (79.1%)</p>
                <div className="bg-green-50 border border-green-700 p-1 px-2 rounded-sm text-[10px]">On Track</div>
                </div>
            </div>
            <div className="p-5 bg-white border rounded-md">
                <p className="text-xs">Staff On Duty Today</p>
                <h1 className="text-2xl font-bold">38 / 42 Staff</h1>
                <div className="flex justify-between items-center">

                <p className="text-xs text-zinc-500">4 on approved medical leave</p>
                <div className="p-1 px-2 rounded-sm text-[10px]">Zero unassigned periods</div>
                </div>
            </div>
            
        </div>
        <div className="grid md:grid-cols-2 gap-5 my-5">
            <div className="bg-white rounded-md">
                <div className="flex justify-between m-5 border-b ">
                    <p className="font-semibold text-xs">$ Recent Fee Inflow Ledger</p>
                    <Button variant={"ghost"} className="text-xs">View all</Button>
                </div>
                <div className="flex justify-around text-xs text-zinc-500 p-3">
                    <p>STUDENT</p>
                    <p>AMOUNT</p>
                    <p>PAYMENT CHANNEL</p>
                    <p>TIME</p>
                </div>
            <div className="flex justify-around text-xs text-zinc-500 p-3">
                <p>Chinedu Eze (Gr 11)
            <span className="text-[10px]"> REC-90214 </span>
            </p>
            <p>$500.00</p>
            <p>Direct Bank Transfer</p>
            <p>Today, 11:40 AM</p>
            </div>
            </div>
            <div className=""></div>
        </div>
    </div>
  );
}
