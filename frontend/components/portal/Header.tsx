"use client";
import { Bell, Home, School, School2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <div className="w-full flex justify-around items-center p-3 border-b">
      <div className="w-full flex justify-between items-center ">
        <div className="flex justify-between items-center gap-3">
<School />
        <div className="">
          <h1 className="font-bold text-zinc-500">School Campus: </h1>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" className="font-bold">
                  Apex International Academy ( Lagos )
                </Button>
              }
            />
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  GreenField Step Academy ( Abuja )
                </DropdownMenuItem>
                <DropdownMenuItem>St. Jude Colligate (Ibadan)</DropdownMenuItem>
                {/* <DropdownMenuItem>Settings</DropdownMenuItem> */}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        </div>
        
        <div className=" flex items-center gap-3">
            <div>
          <div className="p-2 bg-zinc-200 rounded-md flex gap-3 items-center">
            <p className="text-neutral-500">Role View: </p>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="outline" className="font-bold">School Super admin portal</Button>
                }
              />
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    School Admin (Registrar / Bursary)
                  </DropdownMenuItem>
                  <DropdownMenuItem> Teacher ( Form Tutor) </DropdownMenuItem>
                  <DropdownMenuItem>Student Portal</DropdownMenuItem>
                  <DropdownMenuItem>Parent Portal</DropdownMenuItem>
                  <DropdownMenuItem>
                    Root Admin (Platform Owner )
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
          <Button variant={"ghost"}>
            <Home />
            <p className="font-bold">Website Home</p>
          </Button>
          <Button variant={"ghost"}>
            <Bell />
          </Button>
        </div>
        
      </div>
    </div>
  );
}
