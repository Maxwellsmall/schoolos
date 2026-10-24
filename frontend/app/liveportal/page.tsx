import { UserCircle } from "lucide-react";

export default function () {
  return (
    <div className="p-10 ">
      <div className="flex gap-4 bg-green-900 rounded-md p-10 justify-between">
        <div className="text-white">
          <div className="flex gap-5 items-center text-[13px]">
            <p className="font-bold text-green-200">Lagos Campus</p>
            <p>Enterprice maual</p>
            <p>first term (week 7)</p>
          </div>
          <h1 className="text-3xl my-2 font-bold">Apex International Academy</h1>
          <p className="text-[14px] mb-2 italic">
            "Excellence in Knowledge and Character"
          </p>
          <div className="text-[12px] flex gap-3">
            <p>
              {" "}
              Morning roll call:{" "}
              <span className="font-bold"> 94.2% submitted </span>
            </p>
            <p>
              Curriculum:{" "}
              <span className="font-bold"> WAEC & Cambridge IGSCE</span>
            </p>
          </div>
        </div>
        <div className="flex h-[100px] items-center gap-3 bg-green-700/80 px-5 rounded-md border border-white">
          <UserCircle />
          <div className="text-white text-xs">
            <p className="text-[15px]">Dr.Authur Vance</p>
            <p className="text-green-300">Head of School & Principal</p>
            <p className="">SCF-00F . Executive Office</p>
          </div>
        </div>
      <div className="">
            <div className="">
                <p>Principal Executive Operations</p>
                <p>Apex Interational Academy . </p>
            </div>
            <div className=""></div>
        </div>
      </div>
    </div>
  );
}
