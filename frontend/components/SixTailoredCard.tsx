import { Badge } from "./ui/badge"
import { Button } from "./ui/button"


interface SixTailoredCardProps {
    badge: string
    header: string
    headericon: React.ReactNode
    paragraph: string
    list: string
    listicon: React.ReactNode
    button: string

}

const SixTailored: React.FC<SixTailoredCardProps> = ({badge, headericon, listicon, header, paragraph, list, button}) => {

    return (
            <>
            <div className="py-5 px-4 bg-white shadow flex flex-col items-center justify-center rounded-md">
            <div className="w-full flex justify-between items-center">
                <Badge className="rounded-md bg-blue-950/100 text-white">
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
            <div className="flex flex-col w-full gap-3">

                {/* {list.map()

                } */}
                <div className="flex items-center gap-2">
                    <span className="text-zinc-500">{listicon}</span>
                    <span className="text-zinc-500 text-[14px]">{list}</span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-zinc-500">{listicon}</span>
                    <span className="text-zinc-500 text-[14px]">{list}</span>
                </div>

                <div className="flex items-center">
                    <span className="text-zinc-500 ">{listicon}</span>
                    <span className="text-zinc-500 text-[14px]">{list}</span>
                </div>

            </div>
            <Button className="w-full text-white cursor-pointer mt-5 py-3 hover:bg-blue-900 font-bold bg-blue-950/100">
                {button}
            </Button>
            </div>
            </>
    )
}

export default SixTailored