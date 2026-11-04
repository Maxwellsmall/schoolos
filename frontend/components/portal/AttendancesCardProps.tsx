
interface CardProps {
    title:string
    number: string
    paragraph: string
    icon: React.ReactNode
}


const AttendancesCardProps: React.FC<CardProps> = ({title, number, paragraph, icon}) => {
  return (
    <div className=" px-5 py-3 bg-white rounded-md shadow-sm">
        <div className="w-full flex flex-col gap-3">
            <div className="flex gap-2 justify-between">
                <h2 className="text-zinc-500/60 font-semibold text-[13px]">{title}</h2>
                <span className="">{icon}</span>
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-semibold text-3xl">{number}</p>
                <span className="text-zinc-400 text-xs mb-4">{paragraph}</span>
            </div>
        </div>
    </div>
  )
}

export default AttendancesCardProps
