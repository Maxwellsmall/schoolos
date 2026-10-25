import { CheckSquare, Plus, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <>
      <div className="p-10 ">
        <div className="md:flex gap-4 rounded-md justify-between relative isolate mb-3">
          <div className="">
            <h1 className="text-black text-2xl font-semibold">
              School Operations Overview
            </h1>
            <p className="text-black">
              Apex Royal College administrative dashboard for First Term
              2024/2025.
            </p>
          </div>
          <Button>Manage Students</Button>
        </div>
        <div className="grid grid-rows-1 md:grid-cols-4 border-t py-5 gap-5">
          <div className="p-5 bg-white border rounded-md">
            <p className="text-md text-zinc-500">Total Students Enrolled</p>
            <h1 className="text-2xl font-bold">5</h1>

            <p className="text-xs text-zinc-500">
              Active students across JSS & SSS arms
            </p>
          </div>
          <div className="p-5 bg-white border rounded-md">
            <p className="text-xs text-zinc-500">
              Academic & Non-Teaching Staff
            </p>
            <h1 className="text-2xl font-bold text-green-600">7</h1>
            <div className="flex justify-between items-center">
              <p className="text-xs text-zinc-500">
                Full-time staff members on roster
              </p>
            </div>
          </div>
          <div className="p-5 bg-white border rounded-md">
            <p className="text-xs">Active Class Arms</p>
            <h1 className="text-2xl font-bold">6</h1>
            <div className="flex justify-between items-center">
              <p className="text-xs text-zinc-500">
                6 Junior and Senior Class Arms
              </p>
            </div>
          </div>
          <div className="p-5 bg-white border rounded-md">
            <p className="text-xs">TERM FEE COLLECTIVE</p>
            <h1 className="text-2xl font-bold">₦630,000</h1>
            <div className="flex justify-between items-center">
              <p className="text-xs text-zinc-500">Outstanding: ₦330,000</p>
            </div>
          </div>
          </div>
          <div className="text-xs w border p-5 rounded-md">
            <div className="bg-white rounded-md">
              <div className="flex justify-between items-center">
                <div className="">
                  <h1 className="text-xl font-semibold">Recent Fee Invoices</h1>
                  <p className="mb-5">First Term 2024/2025 billing and payment progress</p>
                </div>
                <Button variant="ghost">View all</Button>
              </div>
              <div className="text-[13px] flex justify-between border rounded-md p-3 mb-5">
                <div className="">
                    <p className="font-semibold">Oluwaseun Chukwu</p>
                    <p>ARA/2023/048  JSS 2 Gold</p>
                </div>
                <div className="flex gap-2">
                    <div>
                    <p>₦240,000</p>
                    <p>Paid: ₦240,000</p>
                    </div>
                    <span className="p-2 bg-green-800 text-white items-center rounded">Paid</span>
                </div>
              </div>
                <div className="text-[13px] flex justify-between border rounded-md p-3 mb-5">
                <div className="">
                    <p className="font-semibold">Fatima Bello</p>
                    <p>ARA/2023/049  JSS 2 Gold</p>
                </div>
                <div className="flex gap-2">
                    <div>
                    <p>₦240,000</p>
                    <p>Paid: ₦150,000</p>
                    </div>
                    <span className="p-2 bg-orange-600 text-white items-center rounded">Part Paid</span>
                </div>
              </div>
               <div className="text-[13px] flex justify-between border rounded-md p-3 mb-5">
                <div className="">
                    <p className="font-semibold">Demilade Adeleke</p>
                    <p>ARA/2023/050 JSS 2 Gold</p>
                </div>
                <div className="flex gap-2">
                    <div>
                    <p>₦240,000</p>
                    <p>Paid: ₦0</p>
                    </div>
                    <span className="p-2 bg-red-800 text-white items-center rounded">overdue</span>
                </div>
              </div>
               <div className="text-[13px] flex justify-between border rounded-md p-3 mb-5">
                <div className="">
                    <p className="font-semibold">Bilal Abubakar</p>
                    <p>ARA/2023/048 JSS 2 Gold</p>
                </div>
                <div className="flex gap-2">
                    <div>
                    <p>₦240,000</p>
                    <p>Paid: ₦240,000</p>
                    </div>
                    <span className="p-2 bg-green-800 text-white items-center rounded">Paid</span>
                </div>
              </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
