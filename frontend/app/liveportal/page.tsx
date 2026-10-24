import { CheckSquare, Plus, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <div className="p-10 ">
      <div className="flex gap-4 h-[200px] rounded-md p-10 justify-between relative isolate">
        <img src="/portal_campus_banner_1792621768749.jpg" className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#143d34]/95 via-[#143d34]/85 to-[#1a4b40]/60"></div>
        <div className="text-white">
          <div className="flex gap-5 items-center text-[13px]">
            <p className="font-bold text-green-200">Lagos Campus</p>
            <p>Enterprice maual</p>
            <p>first term (week 7)</p>
          </div>
          <h1 className="text-3xl my-2 font-bold">Apex International Academy</h1>
          <p className="text-[14px] mb-2 italic">
            "Excellence in Knowledge and Character"
          </p>
          <div className="text-[12px] flex gap-3">
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
        <div className="flex h-[100px] items-center gap-3 bg-green-700/40 px-5 rounded-md border border-white">
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
    </div>
  );
}
