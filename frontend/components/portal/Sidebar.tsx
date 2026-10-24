"use ckient"
import { Button } from "../ui/button"
import { Building2, UserCircle } from "lucide-react"

export default function Sidebar(){
    return (
        <div className="bg-[#fdfcf9] h-full w-[310px] hidden md:block"> 
            <div className="bg-[#ece6dc] p-3 py-3">
                <p className="text-[12px] text-[#717D76]">ACTIVE CAMPUS</p>
                <p className="text-[12px]">Apex International School</p>
                <p className="text-[12px]">Lagos Campus . <span className="text-green-500"> First Term Week 7 </span></p>
            </div>
            <div className="m-5">
                <p className="text-xs tracking-wider">SUPER ADMIN WORKSPACE</p>
                <div className="">
                    <Button variant={"selected"} className="flex justify-start gap-2 items-center px-5 bg-green-800 w-full">
                            <Building2 />
                            Executive Dashboard
                    </Button>
                    <Button variant={"ghost"} className="flex justify-around items-center px-5">
                            <Building2 />
                            Academic session and class
                    </Button>
                </div>
                <div className="flex absolute bottom-0 p-2 gap-3 items-center jusrify-start self-start">
                    <UserCircle size={35}/>
                    <div className="text-xs">
                        <p className="font-bold ">Dr. Authur Dance</p>
                        <span className="text-[10px] text-zinc-500">Super Admin</span>
                    </div>
                </div>
            </div>
        </div>
    )
}