import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";


export default function Hero() {
    return (
            <>
            <div className="w-full max-7xl py-10 flex flex-col items-center">
                <div className="flex items-center gap-2 bg-gray-200/80 rounded-full px-3">
                    <div className="rounded-full bg-green-500 w-2 h-2"/>
                    <span>Multi-Tenant Architecture for Independent School Networks</span>
                </div>
                <h1 className="font-bold max-w-3xl text-center text-blue-950 text-6xl mt-5 font-sans">The Operating System for Modern Multi-Campus Schools.</h1>
                <p className="text-center mt-4 text-zinc-500 text-[23px] max-w-3xl">A comprehensive campus operations platform connecting platform owners, principals, registrars, form tutors, students, and parents into one unified, role-governed workflow.</p>

                   <div className="items-center my-3 gap-3 flex">
                 <Button className="cursor-pointer py-6 font-bold">
                    <span>
                    Launch Principal Executive Portal Now
                    </span>
                    <ArrowRight/>
                </Button>
                <Button className="bg-white py-6 cursor-pointer font-bold border border-zinc-200 hover:bg-zinc-100 text-black">
                    Explore Form Tutor Gradebook
                </Button>
            </div>
            </div>
            </>
    )
}