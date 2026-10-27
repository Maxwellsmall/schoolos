import { Button } from "@/components/ui/button";
import { BookOpen, Ellipsis, GraduationCap, Plus, Search, Trash, UserCheck } from "lucide-react";


export default function Teacher() {
    const data = [
        {
            subject: "Mathematics",
            classArm: "JSS 2 Gold",
            AssignedSub: "Mrs. Folashade Adeyemi",
            Actions: "Unassign"
        },
         {
            subject: "Mathematics",
            classArm: "JSS 2 Diamond",
            AssignedSub: "Mrs. Folashade Adeyemi",
            Actions: "Unassign"
        },
        
         
         {
            subject: "English Language",
            classArm: "JSS 2 Gold",
            AssignedSub: "Mr. Ayodele Danjuma",
            Actions: "Unassign"
        },
        {
            subject: "Basic Science",
            classArm: "JSS 2 Gold",
            AssignedSub: "Mrs. Nneka Okafor",
            Actions: "Unassign"
        },
          {
            subject: "Basic Technology",
            classArm: "JSS 2 Gold",
            AssignedSub: "Mr. Chinedu Balogun",
            Actions: "Unassign"
        },
        {
            subject: "Physics",
            classArm: "SSS 1 Science",
            AssignedSub: "Engr. Olufemi Sowore",
            Actions: "Unassign"
        },
        
        

    ]
    
    return (
        <>
        <div className="p-8 max-w-7xl mx-auto">
        

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
            <h1  className="text-zinc-900 text-2xl font-bold tracking-tight">Teacher Subject Allocations</h1>
            <p className="text-zinc-500 text-sm mt-1">Allocate specialized subject instructors across junior and senior classroom streams.</p>
        </div>
        <div className="flex items-center gap-2">
            <Button>
                <Plus className="w-4 h-4 mr-1"/> Allocate Teacher
            </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="relative w-full sm:w-[400px]">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400"/>
                <input type="search" 
                placeholder="Filter Allocations by teacher name or subject..."
                className="pl-9 bg-white border-zinc-300 focus-visible:ring-zinc-400"
                />
            </div>

        <div className="flex items-center gap-2 text-sm text-zinc-600">
            <span className="text-zinc-500">Class:</span>
            <select name="" id=""
            className="flex items-center gap-2 text-sm text-zinc-600"
            >
                <option value="" className="font-medium text-zinc-800 text-xs">All Classroom</option>
                <option value="" className="font-medium text-zinc-800 text-xs">JSS 1 Gold</option>
                <option value="" className="font-medium text-zinc-800 text-xs">JSS 1 Diamond</option>
                <option value="" className="font-medium text-zinc-800 text-xs">JSS 2 Gold</option>
                <option value="" className="font-medium text-zinc-800 text-xs">JSS 2 Diamond</option>
                <option value="" className="font-medium text-zinc-800 text-xs">JSS 1 Science</option>
                <option value="" className="font-medium text-zinc-800 text-xs">JSS 2 Science</option>
            </select>
        </div>
      </div>

      <div className="w-full bg-white rounded-lg border- border-zinc-200 shadow-2xs overflow-hidden">
        <div className="grid grid-cols-12 bg-emerald-50/40 px-6 py-3 border-b border-zinc-200 text-xs font-semibold text-emerald-800/80 tracking-wider">
            <div className="col-span-3">SUBJECT</div>
            <div className="col-span-3">CLASSROOM ARM</div>
            <div className="col-span-4">Assigned Subject Teacher</div>
            <div className="col-span-2">Actions</div>
        </div>

        <div className="divide-y divide-zinc-200">
            {data.map((item, index) => (
                <div key={index} className="grid grid-cols-12 items-center px-6 py-5 hover:bg-zinc-50/80 transition-colors">

                    <div className="col-span-3 flex items-center gap-2.5">
                        <BookOpen className="w-4 h-4 text-zinc-600"/>
                        <span className="text-xs text-zinc-600">{item.subject}</span>
                    </div>

                  
                     <div className="col-span-3 flex items-center gap-2.5">
                        <GraduationCap className="w-4 h-4 text-zinc-600"/>
                        <span className="text-xs text-zinc-600">{item.classArm}</span>
                    </div>

                    <div className="col-span-4 flex items-center gap-2.5">
                        <UserCheck className="w-4 h-4 text-zinc-600"/>
                        <span className="text-xs text-zinc-600">{item.AssignedSub}</span>
                    </div>
                  

                    <div className="col-span-2  flex items-center gap-2.5">
                        <Trash className="w-4 h-4 text-red-600"/>
                        <span className="text-red-600 text-xs">{item.Actions}</span>
                    </div>
                </div>

                
            ))}
        </div>
      </div>
        </div>
        </>
    )
}