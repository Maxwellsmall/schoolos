
 export interface PlatfromPropsCard{
    icon: React.ReactNode
    header: string
    body: string
    footer: string
    classname:string
}

export const PlatformCard: React.FC<PlatfromPropsCard> = ({icon, header, body, footer, classname}) => {

    return (
        <>
        <div className={`${classname} py-7 px-4 bg-white flex flex-col items-center justify-center rounded-md shadow-sm`}>
        <div className="flex flex-col justify-center w-full">
                <div className="flex item-center justify-start ">
                 <span className="my-2 text-white py-2 px-2 rounded-[4px] bg-green-50">{icon}</span>
                 </div>          
          <h1 className="text-[18px] text-blue-950 my-2 font-bold">{header}</h1> 
          <p className="my-2 text-zinc-600 text-[15px]">{body}</p>
          <span className="my-2 text-zinc-500 text-[14px]">{footer}</span> 
        </div>

        </div>
        </>
    )
}

export default PlatformCard;