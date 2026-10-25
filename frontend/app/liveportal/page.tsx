import { CheckSquare, Plus, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <>
    <div className="p-10 ">
      <div className="md:flex gap-4 rounded-md justify-between relative isolate mb-3">
        <div className="">
            <h1 className="text-black text-2xl font-semibold">School Operations Overview</h1>
            <p className="text-black">Apex Royal College administrative dashboard for First Term 2024/2025.</p>
        </div>
        <Button>Manage Students</Button>
      </div>
        <div className="grid grid-rows-1 md:grid-cols-4 border-t py-5 gap-5">
            <div className="p-5 bg-white border rounded-md">
                <p className="text-md text-zinc-500">Total Students Enrolled</p>
                <h1 className="text-2xl font-bold">5</h1>

                <p className="text-xs text-zinc-500">Active students across JSS & SSS arms</p>
            
            </div>
            <div className="p-5 bg-white border rounded-md">
                <p className="text-xs text-zinc-500">Academic & Non-Teaching Staff</p>
                <h1 className="text-2xl font-bold text-green-600">7</h1>
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
        <div className="grid md:grid-cols-2 gap-5 my-5 ">
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
        </>
  );
}
