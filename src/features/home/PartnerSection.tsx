'use client';

import AnimatedContent from "@/components/animations/AnimatedContent/AnimatedContent";
import Image from "next/image";

export default function PartnerSection() {
    return (
        <div className="relative bg-gradient-default py-10 px-8">
            <div className="absolute top-0 left-0 z-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="296" height="89" viewBox="0 0 296 89" fill="none">
                    <path opacity="0.06" d="M126.548 14.7492C231.179 2.83736 289.427 -70.5299 294.904 -22.4183C300.381 25.6933 220.001 74.3519 115.37 86.2637C10.7392 98.1755 -78.5213 68.8297 -83.9986 20.7182C-89.4759 -27.3935 21.917 26.661 126.548 14.7492Z" fill="white" />
                </svg>
            </div>
            <div className="absolute bottom-0 right-0 z-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="299" height="77" viewBox="0 0 299 77" fill="none">
                    <path opacity="0.06" d="M211.483 74.2508C316.114 86.1626 374.361 159.53 379.839 111.418C385.316 63.3067 304.936 14.6481 200.305 2.73631C95.6738 -9.17549 6.41329 20.1703 0.935986 68.2818C-4.54131 116.393 106.852 62.339 211.483 74.2508Z" fill="white" />
                </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center">
                <AnimatedContent
                    distance={40}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0}
                    delay={0}
                >
                    <p className="text-sm text-neutral-0 text-center md:text-base lg:text-2xl">Trusted by over 10,000+ charitable organizations, from local community groups</p>
                </AnimatedContent>

                <AnimatedContent
                    distance={40}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0}
                    delay={0.2}
                >
                    <div className="flex flex-wrap gap-4 items-center justify-center mt-6 md:gap-8">
                        <Image src="/assets/images/logo-shopify.svg" width={0} height={0} sizes="100vw" alt="shopify" className="w-auto h-10 md:h-12 lg:h-16" />
                        <Image src="/assets/images/logo-upwork.svg" width={0} height={0} sizes="100vw" alt="upwork" className="w-auto h-10 md:h-12 lg:h-16" />
                        <Image src="/assets/images/logo-notion.svg" width={0} height={0} sizes="100vw" alt="notion" className="w-auto h-10 md:h-12 lg:h-16" />
                        <Image src="/assets/images/logo-medium.svg" width={0} height={0} sizes="100vw" alt="medium" className="w-auto h-10 md:h-12 lg:h-16" />
                        <Image src="/assets/images/logo-rippling.svg" width={0} height={0} sizes="100vw" alt="rippling" className="w-auto h-10 md:h-12 lg:h-16" />
                        <Image src="/assets/images/logo-airbnb.svg" width={0} height={0} sizes="100vw" alt="airbnb" className="w-auto h-10 md:h-12 lg:h-16" />
                    </div>
                </AnimatedContent>

            </div>
        </div>
    );
}