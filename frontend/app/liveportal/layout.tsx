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
        <div className="flex h-screen flex-col overflow-hidden bg-[#f8f6f0]">
            <Header />
            <div className="flex flex-1 min-h-0 overflow-hidden">
                <Sidebar />
                <main className="flex-1 min-w-0 min-h-0 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}