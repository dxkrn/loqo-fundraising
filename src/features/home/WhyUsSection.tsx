import { bricolageGrotesque } from "@/app/fonts";
import Link from "next/link";

export default function WhyUsSection() {
    return (
        <div className="w-full flex flex-col px-5 py-10 gap-8 bg-gradient-default md:px-20">
            <div>
                <h2 className={`${bricolageGrotesque.className} antialiased text-2xl text-neutral-0 text-center font-bold md:text-3xl lg:text-4xl`}>Why Should Choose Fundraising?</h2>
                <p className="text-xs text-neutral-0 pt-2 text-center md:text-base"> Our platform ensures that every donation, big or small, directly advances our mission to tackle pressing global issues. With a focus on transparency</p>
            </div>

            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                <Link href={"#"}>
                    <div className="h-full justify-between flex flex-col px-3 py-2 rounded-lg md:px-6 md:py-4 bg-blur gap-1 text-neutral-0 hover:bg-secondary hover:text-neutral-900">
                        <div className="flex items-center gap-1">
                            <svg className="w-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M12.8078 8.83341C16.8078 12.8334 16.8078 19.5001 16.8078 19.5001V28.8334C16.8078 29.3855 16.36 29.8334 15.8078 29.8334C15.2557 29.8334 14.8078 29.3855 14.8078 28.8334V21.1742C14.8078 19.9695 14.0022 18.9222 12.8408 18.6025C10.4265 17.9379 7.54544 16.9042 6.14118 15.5001C4.26918 13.6281 3.71131 9.78488 3.54504 7.66061C3.48184 6.85208 4.15985 6.17408 4.96838 6.23741C7.09265 6.40368 10.9358 6.96141 12.8078 8.83341ZM27.4388 2.52901C26.1364 2.21448 24.3674 2.02341 22.1412 2.30075C17.8924 2.82995 15.3496 4.83741 13.8114 7.05808C13.9509 7.17621 14.0938 7.29128 14.2218 7.41941C16.633 9.83035 17.7704 13.0001 18.3128 15.4923C23.7238 15.4435 25.6514 10.9425 26.1412 8.94328C26.6656 6.80261 27.3961 5.52368 28.0897 4.75995C28.7898 3.98901 28.4512 2.77341 27.4388 2.52901Z" />
                            </svg>
                            <h6 className={`${bricolageGrotesque.className} text-base font-bold truncate md:text-xl `}>Immediate</h6>
                        </div>
                        <p className="text-xs opacity-60 md:text-base ">Your donations directly provide necessities such as food, education</p>
                        <div className="flex items-center gap-1">
                            <p className="text-xs font-bold md:text-base">Discover More</p>
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.0774 4.41083C11.4028 4.08539 11.9305 4.08539 12.2559 4.41083L17.2559 9.41083C17.5814 9.73626 17.5814 10.2639 17.2559 10.5893L12.2559 15.5893C11.9305 15.9148 11.4028 15.9148 11.0774 15.5893C10.752 15.2639 10.752 14.7363 11.0774 14.4108L14.6548 10.8334H3.33333C2.8731 10.8334 2.5 10.4603 2.5 10.0001C2.5 9.53984 2.8731 9.16675 3.33333 9.16675H14.6548L11.0774 5.58934C10.752 5.2639 10.752 4.73626 11.0774 4.41083Z" />
                            </svg>
                        </div>
                    </div>
                </Link>
                <Link href={"#"}>
                    <div className="h-full justify-between flex flex-col px-3 py-2 rounded-lg md:px-6 md:py-4 bg-blur gap-1 text-neutral-0 hover:bg-secondary hover:text-neutral-900">
                        <div className="flex items-center gap-1">
                            <svg className="w-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M28.0655 16.7673C29.6633 18.0744 29.7509 20.4352 28.3283 21.8578L23.6471 26.9364C23.1189 27.5093 22.2144 27.5093 21.6863 26.9364L17.0051 21.8578C15.5824 20.4352 15.6701 18.0744 17.2679 16.7673C18.6572 15.6308 20.7271 15.8741 21.9963 17.1433L22.6667 17.8138L23.3371 17.1433C24.6063 15.874 26.6761 15.6308 28.0655 16.7673ZM4.81001 25.3333C4.81001 26.8061 6.00388 28 7.47668 28H19.9471L15.5345 23.2136C14.5651 22.2461 14 20.8822 14 19.4317C14 17.9812 14.5651 16.6166 15.5912 15.5905C17.4519 13.7285 20.5939 13.5234 22.6667 15.067C22.9216 14.877 23.1935 14.7146 23.4767 14.5774V12.0052H25.3696C25.6121 12.0052 25.7127 11.6944 25.5159 11.5525L15.7805 4.5289C14.8029 3.8237 13.4836 3.8237 12.5061 4.5289L2.77081 11.5525C2.57415 11.6944 2.67441 12.0052 2.91708 12.0052H4.80988L4.81001 25.3333Z" />
                            </svg>
                            <h6 className={`${bricolageGrotesque.className} text-base font-bold truncate md:text-xl `}>Transparency</h6>
                        </div>
                        <p className="text-xs opacity-60 md:text-base ">Every contribution is tracked, showing how your help an tangible </p>
                        <div className="flex items-center gap-1">
                            <p className="text-xs font-bold md:text-base">Discover More</p>
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.0774 4.41083C11.4028 4.08539 11.9305 4.08539 12.2559 4.41083L17.2559 9.41083C17.5814 9.73626 17.5814 10.2639 17.2559 10.5893L12.2559 15.5893C11.9305 15.9148 11.4028 15.9148 11.0774 15.5893C10.752 15.2639 10.752 14.7363 11.0774 14.4108L14.6548 10.8334H3.33333C2.8731 10.8334 2.5 10.4603 2.5 10.0001C2.5 9.53984 2.8731 9.16675 3.33333 9.16675H14.6548L11.0774 5.58934C10.752 5.2639 10.752 4.73626 11.0774 4.41083Z" />
                            </svg>
                        </div>
                    </div>
                </Link>
                <Link href={"#"}>
                    <div className="h-full justify-between flex flex-col px-3 py-2 rounded-lg md:px-6 md:py-4 bg-blur gap-1 text-neutral-0 hover:bg-secondary hover:text-neutral-900">
                        <div className="flex items-center gap-1">
                            <svg className="w-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M25.3333 30.3334C25.6197 30.3334 25.9036 30.211 26.1016 29.9734C26.4544 29.5495 26.3985 28.9187 25.974 28.5651C23.9753 26.8998 20.5156 23.7806 17.3554 20.4011C21.6002 15.6394 23.6666 12.0145 23.6666 9.33341C23.6666 4.74741 20.586 1.66675 16 1.66675C11.414 1.66675 8.33331 4.74741 8.33331 9.33341C8.33331 16.2683 23.0182 28.7065 24.6926 30.1017C24.8801 30.2573 25.1066 30.3334 25.3333 30.3334ZM10.3333 9.33341C10.3333 5.15568 13.2604 3.66675 16 3.66675C18.7396 3.66675 21.6666 5.15568 21.6666 9.33341C21.6666 10.8047 20.664 13.6485 16.002 18.9141C12.8698 15.3737 10.3333 11.7422 10.3333 9.33341ZM7.30665 30.1017C7.11985 30.2573 6.89265 30.3334 6.66731 30.3334C6.38091 30.3334 6.09638 30.211 5.89838 29.9734C5.54491 29.5495 5.60211 28.9187 6.02665 28.5651C6.06518 28.5327 9.72345 25.4746 13.4797 21.6222C13.9238 22.1239 14.3744 22.6191 14.8276 23.1033C11.0242 26.9943 7.34611 30.069 7.30665 30.1017Z" />
                            </svg>
                            <h6 className={`${bricolageGrotesque.className} text-base font-bold truncate md:text-xl `}>Matching Gifts</h6>
                        </div>
                        <p className="text-xs opacity-60 md:text-base "> For every dollar you give, our matching donors will impact of your</p>
                        <div className="flex items-center gap-1">
                            <p className="text-xs font-bold md:text-base">Discover More</p>
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.0774 4.41083C11.4028 4.08539 11.9305 4.08539 12.2559 4.41083L17.2559 9.41083C17.5814 9.73626 17.5814 10.2639 17.2559 10.5893L12.2559 15.5893C11.9305 15.9148 11.4028 15.9148 11.0774 15.5893C10.752 15.2639 10.752 14.7363 11.0774 14.4108L14.6548 10.8334H3.33333C2.8731 10.8334 2.5 10.4603 2.5 10.0001C2.5 9.53984 2.8731 9.16675 3.33333 9.16675H14.6548L11.0774 5.58934C10.752 5.2639 10.752 4.73626 11.0774 4.41083Z" />
                            </svg>
                        </div>
                    </div>
                </Link>
                <Link href={"#"}>
                    <div className="h-full justify-between flex flex-col px-3 py-2 rounded-lg md:px-6 md:py-4 bg-blur gap-1 text-neutral-0 hover:bg-secondary hover:text-neutral-900">
                        <div className="flex items-center gap-1">
                            <svg className="w-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M17 19.3333H25.3333V25.3333C25.3333 26.8061 24.1395 28 22.6667 28H17V19.3333ZM6.66667 25.3333C6.66667 26.8061 7.86053 28 9.33333 28H15V19.3333H6.66667V25.3333ZM6.66667 17.3333H15V9.33333H10.8803C9.49227 9.33333 9 8.4356 9 7.66667C9 6.89773 9.49213 6 10.8803 6C12.8668 6 14.4335 7.98027 15 9.33333H17C17.5625 7.98067 19.1213 6 21.1197 6C22.5077 6 23 6.89773 23 7.66667C23 8.4356 22.5079 9.33333 21.1197 9.33333H17V17.3333H25.3333C26.8061 17.3333 28 16.1395 28 14.6667V12C28 10.5272 26.8061 9.33333 25.3333 9.33333H24.5903C24.8521 8.81253 25 8.24173 25 7.66667C25 5.8444 23.6673 4 21.1197 4C18.4953 4 16.8971 5.92453 16 7.61267C15.1028 5.92453 13.5045 4 10.8803 4C8.3328 4 7 5.8444 7 7.66667C7 8.24173 7.14787 8.81253 7.40973 9.33333H6.66667C5.19387 9.33333 4 10.5272 4 12V14.6667C4 16.1395 5.19387 17.3333 6.66667 17.3333Z" />
                            </svg>
                            <h6 className={`${bricolageGrotesque.className} text-base font-bold truncate md:text-xl `}>Scalable Pricing</h6>
                        </div>
                        <p className="text-xs opacity-60 md:text-base ">Our pricing model scales with your donation volume and ensures</p>
                        <div className="flex items-center gap-1">
                            <p className="text-xs font-bold md:text-base">Discover More</p>
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.0774 4.41083C11.4028 4.08539 11.9305 4.08539 12.2559 4.41083L17.2559 9.41083C17.5814 9.73626 17.5814 10.2639 17.2559 10.5893L12.2559 15.5893C11.9305 15.9148 11.4028 15.9148 11.0774 15.5893C10.752 15.2639 10.752 14.7363 11.0774 14.4108L14.6548 10.8334H3.33333C2.8731 10.8334 2.5 10.4603 2.5 10.0001C2.5 9.53984 2.8731 9.16675 3.33333 9.16675H14.6548L11.0774 5.58934C10.752 5.2639 10.752 4.73626 11.0774 4.41083Z" />
                            </svg>
                        </div>
                    </div>
                </Link>
                <Link href={"#"}>
                    <div className="h-full justify-between flex flex-col px-3 py-2 rounded-lg md:px-6 md:py-4 bg-blur gap-1 text-neutral-0 hover:bg-secondary hover:text-neutral-900">
                        <div className="flex items-center gap-1">

                            <svg className="w-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M17 3.16675V3.50008H18.6666C19.2188 3.50008 19.6666 3.94795 19.6666 4.50008C19.6666 5.05221 19.2188 5.50008 18.6666 5.50008H15.3333C14.7825 5.50008 14.3333 5.94861 14.3333 6.50008C14.3333 7.05155 14.7825 7.50008 15.3333 7.50008H16.6666C18.3202 7.50008 19.6666 8.84581 19.6666 10.5001C19.6666 12.0402 18.4954 13.2981 17 13.4663V13.8334C17 14.3855 16.5521 14.8334 16 14.8334C15.4478 14.8334 15 14.3855 15 13.8334V13.5001H13.3333C12.7812 13.5001 12.3333 13.0522 12.3333 12.5001C12.3333 11.9479 12.7812 11.5001 13.3333 11.5001H16.6666C17.2174 11.5001 17.6666 11.0515 17.6666 10.5001C17.6666 9.94861 17.2174 9.50008 16.6666 9.50008H15.3333C13.6797 9.50008 12.3333 8.15435 12.3333 6.50008C12.3333 4.95995 13.5045 3.70208 15 3.53381V3.16675C15 2.61461 15.4478 2.16675 16 2.16675C16.5521 2.16675 17 2.61461 17 3.16675ZM23.796 20.3571L20.8006 23.6338C20.296 24.1858 19.5829 24.5002 18.8356 24.5002H14.6552C14.2874 24.5002 13.9892 24.2017 13.9892 23.8335C13.9892 23.4654 14.2873 23.1669 14.6552 23.1669H18.2764C19.2777 23.1669 20.1228 22.2777 19.9298 21.2942L19.9214 21.2527C19.6738 20.0387 18.6072 19.167 17.3696 19.167H11.7628C11.0564 19.167 10.3789 19.4479 9.87944 19.9481L8.77611 21.0526C8.27664 21.5527 7.59904 21.8337 6.89251 21.8337H5.33211C4.59651 21.8337 4.00024 22.4306 4.00024 23.167V28.5003C4.00024 29.2366 4.59651 29.8337 5.33211 29.8337H19.9828C21.6742 29.8337 23.265 29.0297 24.2694 27.6673L27.6036 23.1446C28.1322 22.3509 28.1322 21.3166 27.6036 20.5229C26.7173 19.1919 24.7941 19.1082 23.796 20.3571Z" />
                            </svg>
                            <h6 className={`${bricolageGrotesque.className} text-base font-bold truncate md:text-xl `}>Safe and Secure</h6>
                        </div>
                        <p className="text-xs opacity-60 md:text-base ">PCI and data privacy compliance with encryption and protection against </p>
                        <div className="flex items-center gap-1">
                            <p className="text-xs font-bold md:text-base">Discover More</p>
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.0774 4.41083C11.4028 4.08539 11.9305 4.08539 12.2559 4.41083L17.2559 9.41083C17.5814 9.73626 17.5814 10.2639 17.2559 10.5893L12.2559 15.5893C11.9305 15.9148 11.4028 15.9148 11.0774 15.5893C10.752 15.2639 10.752 14.7363 11.0774 14.4108L14.6548 10.8334H3.33333C2.8731 10.8334 2.5 10.4603 2.5 10.0001C2.5 9.53984 2.8731 9.16675 3.33333 9.16675H14.6548L11.0774 5.58934C10.752 5.2639 10.752 4.73626 11.0774 4.41083Z" />
                            </svg>
                        </div>
                    </div>
                </Link>
                <Link href={"#"}>
                    <div className="h-full justify-between flex flex-col px-3 py-2 rounded-lg md:px-6 md:py-4 bg-blur gap-1 text-neutral-0 hover:bg-secondary hover:text-neutral-900">
                        <div className="flex items-center gap-1">
                            <svg className="w-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 2.66675C8.63626 2.66675 2.66666 8.63621 2.66666 16.0001C2.66666 23.3639 8.63626 29.3334 16 29.3334C23.3637 29.3334 29.3333 23.3638 29.3333 16.0001C29.3333 8.63635 23.3637 2.66675 16 2.66675ZM21.6616 16.5246L16.9804 21.6031C16.4523 22.1761 15.5477 22.1761 15.0196 21.6031L10.3384 16.5246C8.91572 15.1019 9.00332 12.7411 10.6012 11.4341C11.9905 10.2975 14.0604 10.5409 15.3296 11.8102L15.9999 12.4806L16.6701 11.8102C17.9393 10.5409 20.0092 10.2975 21.3985 11.4341C22.9964 12.7411 23.0843 15.1019 21.6616 16.5246Z" />
                            </svg>
                            <h6 className={`${bricolageGrotesque.className} text-base font-bold truncate md:text-xl `}>Great Support</h6>
                        </div>
                        <p className="text-xs opacity-60 md:text-base ">Our in-house support, developers, and strategists will make sure you </p>
                        <div className="flex items-center gap-1">
                            <p className="text-xs font-bold md:text-base">Discover More</p>
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.0774 4.41083C11.4028 4.08539 11.9305 4.08539 12.2559 4.41083L17.2559 9.41083C17.5814 9.73626 17.5814 10.2639 17.2559 10.5893L12.2559 15.5893C11.9305 15.9148 11.4028 15.9148 11.0774 15.5893C10.752 15.2639 10.752 14.7363 11.0774 14.4108L14.6548 10.8334H3.33333C2.8731 10.8334 2.5 10.4603 2.5 10.0001C2.5 9.53984 2.8731 9.16675 3.33333 9.16675H14.6548L11.0774 5.58934C10.752 5.2639 10.752 4.73626 11.0774 4.41083Z" />
                            </svg>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
}