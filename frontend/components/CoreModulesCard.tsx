import { Badge } from "./ui/badge"
import { Button } from "./ui/button"


interface CoreModulesCardProps {
    badge: string
    header: string
    headericon: React.ReactNode
    paragraph: string
    features: string[]
    featuresicon: React.ReactNode
    buttonText: string
    isFeatured: boolean
    isFeaturedBadge: boolean

}

const CoreModulesCard: React.FC<CoreModulesCardProps> = ({badge, headericon, featuresicon, header, paragraph, features, buttonText, isFeatured = false, isFeaturedBadge = false}) => {

    return (
            <>
            <div className={`p-6 bg-white shadow-sm transition-all flex flex-col items-center justify-center rounded-xl
                    ${isFeatured
                        ? "border-2 border-slate-900 shadow-md"
                        : "border border-gray-200"
                    
                    }
                `}>
            <div className={`w-full flex justify-between items-center
                        ${
                            isFeatured
                            ? " text-black"
                            : " text-slate-700"

                        }
                `}>
                <Badge className={`rounded-md bg-blue-950/100 text-white
                                ${
                                    isFeaturedBadge
                                    ? " bg-slate-900"
                                    : "bg-green-50 text-black"
                    
                                }
                                `}>
                    {badge}
                </Badge>
                <span className="">{headericon}</span>
            </div>
            <div className="flex mt-3 flex-col mb-10 justify-center items-start">
                <h1 className="text-blue-950 font-bold text-[18px]">

                {header}
                </h1>
                <p className="text-zinc-500 text-[14px]">{paragraph}</p>
            </div>
            
            <ul className="">
                {features?.map((item, index) => (
                    <li key={index} className="flex items-start text-xs text-gray-600 gap-2">
                        <span className="text-zinc-500 mt-1">{featuresicon}</span>
                        <span className="text-zinc-500 text-[14px]">{item}</span>
                    </li>
                ))

                }
            </ul>
            <Button className={`w-full text-white cursor-pointer mt-5 py-3 hover:bg-blue-900 font-bold bg-blue-950/100
                ${
                    isFeatured
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "bg-white text-slate-800 border border-gray-200 hover:bg-gray-50"
                }
                `}>
                {buttonText}
            </Button>
            </div>
            </>
    )
}

export default CoreModulesCard