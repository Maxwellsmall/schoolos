"use client";
import { Bell, Home, School, School2Icon, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Header() {
  return (
    <div className="p-3 border-b w-full flex justify-between items-center text-xs">
       
      <div className="w-full flex justify-around items-center">
        <div className="w-full flex justify-between items-center ">
          <div className="flex items-center">
            <p>Academia</p>
            <ChevronRight />
            <p>Admin</p>
          </div>
          <div className="flex items-center">
            <div className="p-2 rounded-md border">
              <p>Active session: <span className="font-semibold"> 2024/2025(Term 1) </span></p>
            </div>
            <Button variant="ghost" className="flex ml-5 border border-muted/40">
              <User size={13} />
              Role: <span className="font-semibold">Admin</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
