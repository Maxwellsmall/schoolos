
interface CardProps {
    title:string
    number: number
    paragraph: string
    icon: React.ReactNode
}


const AttendancesCardProps: React.FC<CardProps> = ({title, number, paragraph, icon}) => {
  return (
    <div className="w-[250px] px-5 py-5 bg-white rounded-md shadow-sm">
        <div className="">

        </div>
    </div>
  )
}

export default AttendancesCardProps
