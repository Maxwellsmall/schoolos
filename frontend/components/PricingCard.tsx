import { Button } from "./ui/button"

interface PricingCardProps {
    badge: string
    header: string
    price: string
    priceSub: string
    paragraph: string
    features: string[]
    featuresicon: React.ReactNode
    buttonText: string
    isFeatured?: boolean
    isRecommended?: boolean
}

const PricingCard: React.FC<PricingCardProps> = ({
    badge, 
    header, 
    price,
    priceSub,
    paragraph, 
    features, 
    featuresicon, 
    buttonText, 
    isFeatured = false, 
    isRecommended = false
}) => {
    return (
        <div className={`p-6 bg-white shadow-sm transition-all flex flex-col justify-between rounded-xl h-full ${
            isFeatured
                ? "border-2 border-slate-900 shadow-md"
                : "border border-gray-200"
        }`}>
            <div>
                <div className="w-full flex justify-between items-center mb-3">
                    <span className="text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                        {badge}
                    </span>
                    {isRecommended && (
                        <span className="bg-slate-900 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
                            Recommended
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {header}
                </h3>

                <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="text-4xl font-extrabold text-slate-900">{price}</span>
                    <span className="text-sm text-gray-500 font-medium">{priceSub}</span>
                </div>

                <p className="text-zinc-500 text-[13px] leading-relaxed mb-6">
                    {paragraph}
                </p>

                <hr className="border-gray-100 mb-6" />
                
                <ul className="space-y-3 mb-8">
                    {features?.map((item, index) => (
                        <li key={index} className="flex items-start text-xs text-gray-600 gap-2.5">
                            <span className="mt-0.5 shrink-0 text-emerald-500">{featuresicon}</span>
                            <span className="text-zinc-600 text-[13px] leading-normal">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Button className={`w-full cursor-pointer py-3 font-semibold text-sm transition-colors rounded-lg ${
                isFeatured
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "bg-white text-slate-800 border border-gray-200 hover:bg-gray-50 shadow-sm"
            }`}>
                {buttonText}
            </Button>
        </div>
    )
}

export default PricingCard;