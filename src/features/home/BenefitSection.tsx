import { bricolageGrotesque } from "@/app/fonts";
import Image from "next/image";

export default function BenefitSection() {
    return (
        <div className="w-full px-5 py-10 grid grid-cols-1 gap-8 items-end md:px-20 md:grid-cols-2">
            <div className="flex flex-col gap-8">
                <div>
                    <h2 className={`${bricolageGrotesque.className} antialiased text-2xl font-bold md:text-3xl lg:text-4xl`}>Impactful Giving Platform From Fundraising Hub</h2>
                    <p className="text-xs text-neutral-600 pt-2 md:text-base">Connect your philanthropy with causes that matter. Our platform channels your donations to charities, ensuring that every dollar contributes to  change. Our dedicated system is designed for transparency </p>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                    <div className="flex flex-col px-3 py-2 rounded-lg md:px-6 md:py-4 bg-gradient-cover gap-1 text-neutral-0">
                        <h6 className={`${bricolageGrotesque.className} text-base font-bold md:text-xl`}>Health Initiatives</h6>
                        <p className="text-xs opacity-60 md:text-base">Provide essential medical care and health education to regions where it's</p>
                    </div>
                    <div className="flex flex-col px-3 py-2 rounded-lg md:px-6 md:py-4 border border-primary-light gap-1">
                        <h6 className={`${bricolageGrotesque.className} text-base font-bold md:text-xl`}>Environmental Action</h6>
                        <p className="text-xs opacity-60 md:text-base">Protect our planet by supporting conservation efforts and sustainable</p>
                    </div>
                    <div className="flex flex-col px-3 py-2 rounded-lg md:px-6 md:py-4 border border-primary-light gap-1">
                        <h6 className={`${bricolageGrotesque.className} text-base font-bold md:text-xl`}>Human Rights</h6>
                        <p className="text-xs opacity-60 md:text-base">Advocate and support human rights protection globally through strategic</p>
                    </div>
                    <div className="flex flex-col px-3 py-2 rounded-lg md:px-6 md:py-4 border border-primary-light gap-1">
                        <h6 className={`${bricolageGrotesque.className} text-base font-bold md:text-xl`}>Education Support</h6>
                        <p className="text-xs opacity-60 md:text-base">Invest in the future by funding educational programs and resources</p>
                    </div>
                </div>
            </div>

            <Image
                src={"/assets/images/banner-benefit.jpg"}
                width={1498}
                height={1000}
                alt=""
                className="w-full h-64 md:h-100 object-cover rounded-lg "
            />
        </div>
    );
}