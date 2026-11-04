"use client"
import React from "react"
import Header from "@/components/portal/Header";
import Sidebar from "@/components/portal/Sidebar";
import { usePathname } from "next/navigation";

export default function layout({
    children,
}:{
    children: React.ReactNode;
}) {
    const pathname = usePathname()
    return (
        <div className="flex h-screen  overflow-hidden">
                <Sidebar />
            <div className="flex flex-1 flex-col min-h-0 overflow-hidden">
            <Header /> 
                <main className="flex-1 min-w-0 min-h-0 overflow-y-auto">
                    {/* {if (pathname) == "session"}{

                    } */}
                    {children}
                </main>
            </div>
        </div> 
    )
}