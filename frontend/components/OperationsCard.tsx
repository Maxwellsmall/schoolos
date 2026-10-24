import React from "react"

interface CoreModulesCardProps {
    stepNumber: string // e.g., "01", "02", "03"
    header: string
    subHeader: string
    paragraph: string
    onOpenPortal?: () => void
}

const OperationsCard: React.FC<CoreModulesCardProps> = ({ 
    stepNumber,
    header, 
    subHeader, 
    paragraph, 
    onOpenPortal
}) => {
    return (
        <div className="p-6 bg-white border border-gray-200/80 rounded-xl shadow-sm transition-all flex flex-col justify-between h-full min-h-[300px]">
            <div className="w-full flex flex-col">
                <span className="text-slate-400 font-semibold text-xs mb-3 tracking-wider">
                    {stepNumber}
                </span>

                <div className="flex flex-col mb-4">
                    <h3 className="text-slate-900 font-bold text-[15px] leading-tight">
                        {header}
                    </h3>
                    <span className="text-xs text-slate-500 font-normal mt-1">
                        {subHeader}
                    </span>
                </div>

                <p className="text-slate-500 text-[13px] leading-relaxed">
                    {paragraph}
                </p>
            </div>

            <div className="pt-6 mt-auto">
                <button 
                    onClick={onOpenPortal}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors group cursor-pointer"
                >
                    <span>Open in Portal</span>
                    <svg 
                        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default OperationsCard;