"use client"

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";



export default function Header() {
    const pathname = usePathname()

    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId)
        if (element){
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        }
    }
    return (
        <>
        <div className="w-full flex items-center justify-between bg-blue-950 py-2 px-2">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"/>
                <span className="text-white text-[14px]">SchoolOS Enterprise v2.4</span>
                <span className="text-zinc-400 text-[14px]">· Multi-Campus Academic Year 2025/2026 Engine</span>
            </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-400 text-[14px]">· 18 Campuses Live</span>
                <span className="text-zinc-400 text-[14px]">· 12,450 Active Students</span>
                <span className="text-white font-bold underline hover:text-green-300 hover:font-bold cursor-pointer h text-[14px]">Launch Portal Demo</span>
            </div>
            
        </div>
        <header className="w-full px-4 py-2 bg-white z-50 border border-zinc-200 sticky top-0">
            <div className="w-full flex items-center justify-between">
                   <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-xs bg-zinc-900 text-white dark:bg-white dark:text-black transition-colors">
              <svg
                className="w-4 h-4 text-white dark:text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="4" />
              </svg>
            </div>
            <div className="flex flex-col items-start ml-2">
              <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                SchoolOs
              </h2>
              <p className="text-[12px] text-zinc-500/70 dark:text-zinc-400">
                Multi-Campus Education Managemen
              </p>
            </div>
          </div>
          <nav className="flex items-center justify-center">
            <ul className="w-full flex items-center gap-4">
                <li 
                className={
                  pathname === "/Architecture"
                ?  "text-[14px] font-semibold text-zinc-500 cursor-pointer hover:text-black hover:font-bold"
                : "text-[14px] font-bold text-black cursor-pointer"
                }
                onClick={() => scrollToSection("Architecture")}>Campus Governance</li>
                <li 
                className={
                  pathname === "/Roles Portal"
                    ?  "text-[14px] font-semibold text-zinc-500 cursor-pointer hover:text-black hover:font-bold"
                : "text-[14px] font-bold text-black cursor-pointer"
                 }
                 onClick={() => scrollToSection("Roles Portal")}
                 > Roles Portals</li>
                <li 
                className={
                  pathname === "/Core Modules"
                    ?  "text-[14px] font-semibold text-zinc-500 cursor-pointer hover:text-black hover:font-bold"
                : "text-[14px] font-bold text-black cursor-pointer"
                }
                onClick={() => scrollToSection("Core Modules")}>Stakeholder Workspaces</li>
                <li 
                className={
                  pathname === "/Security"
                    ?  "text-[14px] font-semibold text-zinc-500 cursor-pointer hover:text-black hover:font-bold"
                : "text-[14px] font-bold text-black cursor-pointer"
                }
                onClick={() => scrollToSection("Security")}>Core Modules</li>
                <li 
                className={
                  pathname === "/Campus"
                    ?  "text-[14px] font-semibold text-zinc-500 cursor-pointer hover:text-black hover:font-bold"
                : "text-[14px] font-bold text-black cursor-pointer"
              }
              onClick={() => scrollToSection("Campus")}>Operations</li>
                              <li 
                className={
                  pathname === "/Campus"
                    ?  "text-[14px] font-semibold text-zinc-500 cursor-pointer hover:text-black hover:font-bold"
                : "text-[14px] font-bold text-black cursor-pointer"
              }
              onClick={() => scrollToSection("Campus")}>Licensing</li>
                <li 
                className={
                  pathname === "/FAQ"
                    ?  "text-[14px] font-semibold text-zinc-500 cursor-pointer hover:text-black hover:font-bold"
                : "text-[14px] font-bold text-black cursor-pointer"
                }
                onClick={() => scrollToSection("FAQ")}>FAQ</li>
                 <li 
                className={
                  pathname === "/FAQ"
                    ?  "text-[14px] font-semibold text-zinc-500 cursor-pointer hover:text-black hover:font-bold"
                : "text-[14px] font-bold text-black cursor-pointer"
                }
                onClick={() => scrollToSection("FAQ")}>Sign in</li>
            </ul>
            </nav>
            <div className="items-center gap-3 flex">
                <Button className="bg-white cursor-pointer border border-zinc-200 hover:bg-zinc-100 text-black">
                    Register School
                </Button>
                 <Button className="cursor-pointer bg-slate-900">
                    <span>
                    Enter Live Portal
                    </span>
                    <ArrowRight/>
                </Button>
            </div>
             </div>        
        </header>
        </>
    )
}
