import { Badge } from "./ui/badge"
import { Button } from "./ui/button"


interface CoreModulesCardProps {
    header: string
    subHeader: string
    headericon: React.ReactNode
    paragraph: string
    features: string[]

}

const CoreModulesCard: React.FC<CoreModulesCardProps> = ({ headericon, header, paragraph, features, subHeader}) => {

    return (
            <>
            <div className={`p-6 bg-white shadow-sm transition-all flex flex-col items-center justify-center rounded-xl`}>
            <div className={`w-full flex gap-2 items-center`}>
                <span className="">{headericon}</span>
                <div className="flex mt-3 flex-col mb-10 justify-center items-start">
                    <h1 className="text-blue-950 font-bold text-[18px]">

                    {header}
                    </h1>
                    <span>{subHeader}</span>
                </div>
                    <p className="text-zinc-500 text-[14px]">{paragraph}</p>
            </div>
            
            <ul className="">
                {features?.map((item, index) => (
                    <li key={index} className="flex items-start text-xs text-gray-600 gap-2">
                            <div className="bg-slate-900 rounded-full w-2 h-2 font-bold"/>
                        <span className="text-zinc-500 text-[14px]">{item}</span>
                    </li>
                ))

                }
            </ul>
           
            </div>
            </>
    )
}

export default CoreModulesCard