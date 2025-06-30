import { bricolageGrotesque } from "@/app/fonts";
import { ButtonFilled, ButtonText } from "@/components/Button";
import TextBadge from "@/components/TextBadge";
import Image from "next/image";

export default function ServiceSection() {
    return (
        <div className="w-full flex flex-col p-5 ">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-primary-thin rounded-xl p-5 gap-8 md:p-16 md:flex-row md:rounded-4xl">
                <Image
                    src="/assets/images/banner-service.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-lg md:rounded-4xl"
                    width={1941}
                    height={1296}
                />

                <div>
                    <TextBadge text="🚀 Small effort, Make big change" />
                    <h2 className={`${bricolageGrotesque.className} antialiased text-2xl text-left font-bold md:text-3xl lg:text-4xl`}>Maximize Impact and Foster Generosity</h2>
                    <p className="text-xs pt-2 text-neutral-600 text-left md:text-base">Generosity Hub unites compassionate individuals with impactful causes. Engage with the stories that matter, contribute to the change you wish to see, and witness the direct impact of your generosity</p>

                    <div className="py-4 flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-1 px-2 py-1 bg-neutral-0 border border-primary-light rounded-lg md:px-4 md:py-2">
                            <svg className="w-4 md:w-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.9815 4.85198C19.3395 5.20996 19.3395 5.79036 18.9815 6.14834L8.89818 16.2317C8.5402 16.5897 7.9598 16.5897 7.60182 16.2317L3.01849 11.6483C2.6605 11.2904 2.6605 10.71 3.01849 10.352C3.37647 9.994 3.95687 9.994 4.31485 10.352L8.25 14.2871L17.6852 4.85198C18.0431 4.494 18.6235 4.494 18.9815 4.85198Z" />
                            </svg>
                            <p className="text-xs md:text-base">Quickly respond to urgent global crises</p>
                        </div>
                        <div className="flex flex-row items-center gap-1 px-2 py-1 bg-gradient-promo text-neutral-0 border border-primary-light rounded-lg md:px-4 md:py-2">
                            <svg className="w-4 md:w-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.9815 4.85198C19.3395 5.20996 19.3395 5.79036 18.9815 6.14834L8.89818 16.2317C8.5402 16.5897 7.9598 16.5897 7.60182 16.2317L3.01849 11.6483C2.6605 11.2904 2.6605 10.71 3.01849 10.352C3.37647 9.994 3.95687 9.994 4.31485 10.352L8.25 14.2871L17.6852 4.85198C18.0431 4.494 18.6235 4.494 18.9815 4.85198Z" />
                            </svg>
                            <p className="text-xs md:text-base">Access real-time updates on how your contributions</p>
                        </div>
                        <div className="flex flex-row items-center gap-1 px-2 py-1 bg-neutral-0 border border-primary-light rounded-lg md:px-4 md:py-2">
                            <svg className="w-4 md:w-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.9815 4.85198C19.3395 5.20996 19.3395 5.79036 18.9815 6.14834L8.89818 16.2317C8.5402 16.5897 7.9598 16.5897 7.60182 16.2317L3.01849 11.6483C2.6605 11.2904 2.6605 10.71 3.01849 10.352C3.37647 9.994 3.95687 9.994 4.31485 10.352L8.25 14.2871L17.6852 4.85198C18.0431 4.494 18.6235 4.494 18.9815 4.85198Z" />
                            </svg>
                            <p className="text-xs md:text-base">Hear directly from those you’ve helped through heartfelt</p>
                        </div>
                        <div className="flex flex-row items-center gap-1 px-2 py-1 bg-neutral-0 border border-primary-light rounded-lg md:px-4 md:py-2">
                            <svg className="w-4 md:w-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.9815 4.85198C19.3395 5.20996 19.3395 5.79036 18.9815 6.14834L8.89818 16.2317C8.5402 16.5897 7.9598 16.5897 7.60182 16.2317L3.01849 11.6483C2.6605 11.2904 2.6605 10.71 3.01849 10.352C3.37647 9.994 3.95687 9.994 4.31485 10.352L8.25 14.2871L17.6852 4.85198C18.0431 4.494 18.6235 4.494 18.9815 4.85198Z" />
                            </svg>
                            <p className="text-xs md:text-base">We ensure every dollar with our transparent</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-2">
                        <ButtonFilled label="Contribute Now" url="#" />
                        <ButtonText label="Join with Us" url="#" />
                    </div>
                </div>
            </div>
        </div>
    );
}