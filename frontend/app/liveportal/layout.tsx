"use client"
import React from "react"
import Header from "@/components/portal/Header";
import Sidebar from "@/components/portal/Sidebar";

export default function layout({
    children,
}:{
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen  overflow-hidden">
                <Sidebar />
            <div className="flex flex-1 flex-col min-h-0 overflow-hidden">
            <Header /> 
                <main className="flex-1 min-w-0 min-h-0 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div> 
    )
}