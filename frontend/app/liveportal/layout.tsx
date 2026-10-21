"use client"
import React from "react"
import Header from "@/components/portal/Header";

export default function layout({
    children,
}:{
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />

            <main>
                {children}
            </main>
        </div>
    )
}