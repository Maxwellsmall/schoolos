import React from "react"

interface CoreModulesCardProps {
    header: string
    subHeader: string
    headericon: React.ReactNode
    paragraph: string
    features: string[]
}

const CoreModulesCard: React.FC<CoreModulesCardProps> = ({ 
    headericon, 
    header, 
    paragraph, 
    features, 
    subHeader 
}) => {
    return (
        <div className="p-6 bg-white border border-gray-200 shadow-sm transition-all flex flex-col items-start justify-between rounded-xl h-full">
            <div className="w-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                      {headericon}
                  </div>
                  <div className="flex flex-col">
                      <h2 className="text-blue-950 font-bold text-[18px] leading-snug">
                          {header}
                      </h2>
                      <span className="text-xs text-gray-400 font-medium mt-0.5">
                          {subHeader}
                      </span>
                  </div>
              </div>
                
              <p className="text-zinc-500 text-[14px] leading-relaxed mb-6">
                  {paragraph}
              </p>
            </div>
            
            <ul className="space-y-2.5 w-full">
                {features?.map((item, index) => (
                    <li key={index} className="flex items-start text-xs text-gray-600 gap-2.5">
                        <div className="bg-slate-900 rounded-full w-1.5 h-1.5 shrink-0 mt-1.5"/>
                        <span className="text-zinc-500 text-[13px] leading-normal">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CoreModulesCard;