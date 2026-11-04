import React from 'react'
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"



const ScoresGrading = () => {
  return (
    <div className="p-8 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-zinc-900 text-2xl font-bold tracking-tight">
            Scores, Grading Scale & Report Cards
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            Maintain WAEC-standard secondary evaluation benchmarks and inspect official student report sheets.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="rounded-md bg-zinc-900 hover:bg-zinc-800 text-white cursor-pointer">
            <Plus className="w-4 h-4 mr-1" /> Enroll Student
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ScoresGrading
