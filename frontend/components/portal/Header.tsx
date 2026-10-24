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
    <div className="p-3 border-b w-full flex justify-between items-center">
        <div className="flex gap-3 items-center w-[310] border-r">
      <div className="text-center p-2 px-4  bg-green-700 rounded-md">S</div>
      <div className="">
        <h1>SchoolOs</h1>
        <p className="text-xs">Campus Operationals Portal</p>
      </div>
        </div>
      <div className="w-full flex justify-around items-center">
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
                    <DropdownMenuItem>
                      St. Jude Colligate (Ibadan)
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className=" flex items-center gap-3">
            <div>
              <div className="p-2 bg-[#b3b19d] rounded-md flex gap-3 items-center">
                <p className="text-neutral-900">Role View: </p>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button variant="outline" className="font-bold">
                        School Super admin portal
                      </Button>
                    }
                  />
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        School Admin (Registrar / Bursary)
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        {" "}
                        Teacher ( Form Tutor){" "}
                      </DropdownMenuItem>
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
    </div>
  );
}
