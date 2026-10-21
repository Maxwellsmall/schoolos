import PlatformCard from "../components/PlatformCard"

export default function PlatformTenancy() {

    const cardData = [
        {
            id: "1",
            header: "Autonomous School Isolation",
            body: "Separate academic calendars, classroom arms, subject assignments, fee structures, and bursary ledgers per school campus without data cross-contamination.",
            footer: "Apex Academy · Greenfield STEM · St. Jude",
            classname: "",
            icon: ""
        }, 
        {
            id: "2",
            header: "Instant Campus Switcher",
            body: "Platform executives and regional educational supervisors seamlessly toggle between school campuses from the global topbar without logging in and out.",
            footer: "Single sign-on · Centralized session management",
            classname: "",
            icon: "",
        }, 
        {
            id: "3",
            header: "Role-Based Data Partitioning",
            body: "Strict permission boundary ensures teachers see only their assigned class cohorts, while students and parents only ever view their own personal ward records.",
            footer: "Principal · Registrar · Teacher · Parent · Student",
            classname: "",
            icon: ""
        }, 
    ]
        
    return (
        <>
        <div id="Architecture" className="w-full flex flex-col items-center justify-center py-12">
            <div className="flex items-start w-full max-w-6xl flex-col px-4">
                <p className="text-gray-400 font-extrabold">PLATFORM TENANCY & ISOLATION</p>
                <div>
                    <h1 className="text-blue-950 font-bold my-2 text-4xl">Engineered for Multi-School Operations</h1>
                    <p className="text-gray-800 text-[20px] max-w-3xl mb-8">
                     Run multiple autonomous campuses under a unified 
                     corporate group or operate as an independent institution. 
                     Each school campus maintains its own student census, fee 
                     structure, timetable, and grading rules.
                    </p>
                </div>
                
                <div className="grid grid-cols-3 gap-6 w-full">
                    {cardData.map((card) => (
                       <div key={card.id}>
                         <PlatformCard
                            header={card.header}
                            body={card.body}
                            footer={card.footer}
                            classname={card.classname}
                            icon={card.icon}
                         />
                       </div>
                    ))}
                </div>
            </div>
        </div>        
        </>
    )
}