

export default function Footer() {
    return (
        <>
     
        <footer className="w-full py-7 px-4 bg-slate-950">

            <div className="w-full flex flex-col items-center">
                 <div className="w-full flex items-start justify-between">
                <div className="flex gap-2 items-center">
                    <img src="" alt="" className="w-7 h-7 rounded-md bg-red-500"/>
                    <div className="flex flex-col">
                    <h1 className="text-white font-bold text-[17px]">Apex International Academy</h1>
                    <p className="text-zinc-500 text-[14px]">School Information System · Powered by SchoolOS</p>
                 </div>
                </div>
                 <div className="flex items-center justify-center">
                    <ul className="flex items-center gap-3">
                        <li className="text-zinc-500 text-[14px]">Staff Login</li>
                        <li className="text-zinc-500 text-[14px]">Parent Portal</li>
                        <li className="text-zinc-500 text-[14px]">Quick Demo</li>
                    </ul>
                 </div>
                 </div>
                 <div className="w-full border-b border-gray-600 py-2"/>
                 <div className="w-full my-5">
                        <div className="w-full flex items-start justify-between">
                    <div className="flex flex-col">
                    <p className="text-zinc-500 text-[14px]">© 2026 Apex International Academy. Official Academic Platform.</p>
                 </div>
                 <div className="flex items-center justify-center">
                  <p className="text-zinc-500 text-[14px]">Security & Data Privacy Compliant · Encrypted Record</p>
                 </div>
                 </div>
                 </div>
             </div>        
        </footer>
        </>
      
    )
}