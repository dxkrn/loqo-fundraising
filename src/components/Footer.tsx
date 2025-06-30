import { bricolageGrotesque } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="p-5">
            <div className="flex flex-col px-5 py-10 bg-gradient-footer rounded-xl md:px-10 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-10">
                    <div>
                        <p className={`${bricolageGrotesque.className} text-neutral-0 text-3xl md:text-4xl lg:text-6xl`}>Stay Connected</p>
                        <div className="flex gap-2 items-center">
                            <p className={`${bricolageGrotesque.className} text-neutral-0 text-3xl md:text-4xl lg:text-6xl`}>with</p>
                            <Image src={"/assets/images/icon-email-circle.svg"} width={0} height={0} alt="" className="w-8 h-8 md:w-12 md:h-12" />
                            <p className={`${bricolageGrotesque.className} text-neutral-0 text-3xl md:text-4xl lg:text-6xl`}>causes</p>
                        </div>
                        <p className="text-neutral-0 text-xs pt-2 opacity-60 md:text-base">Join our community of change-makers and stay informed</p>
                    </div>
                    <div>
                        <p className="text-neutral-0 text-xs md:text-base">Stay up to date</p>
                        <div className="py-2 flex flex-row  w-fullborder gap-2">
                            <input type="email" placeholder="Subscribe" className="w-full text-xs px-4 py-2 bg-neutral-0 opacity-50 rounded-lg md:text-base" />
                            <Link href={"#"}>
                                <div className="flex px-4 py-2 bg-secondary rounded-lg items-center justify-center hover:opacity-80">
                                    <p className="text-xs md:text-base">Subscribe</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M5.83333 14.1663L14.1667 5.83301M14.1667 5.83301H5.83333M14.1667 5.83301V14.1663" stroke="#211145" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <p className="text-neutral-0 text-xs opacity-60 md:text-base">By subscribe you agree to with Privacy Policy</p>
                    </div>
                </div>

                <hr className="my-8 border-neutral-0 border-t opacity-20" />

                <div className="w-full flex flex-col gap-8 md:justify-between md:flex-row">
                    <div className="w-1/4">
                        <Image src={"/assets/images/logo-loqo.svg"} width={0} height={0} alt="Loqo" className="w-32 lg:w-40" />
                        <p className="w-[224] mt-2 text-xs text-neutral-0 opacity-50">Support transformative projects track progress you care about.</p>
                    </div>

                    <div className="flex flex-row w-full gap-1">

                        <div className="flex flex-col w-1/5 gap-3">
                            <h6 className={`${bricolageGrotesque.className} text-neutral-0 text-sm font-bold truncate lg:text-2xl`}>Quick</h6>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">Home</p>
                            </Link>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">Our Service</p>
                            </Link>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">About Us</p>
                            </Link>
                        </div>

                        <div className="flex flex-col w-1/5 gap-3">
                            <h6 className={`${bricolageGrotesque.className} text-neutral-0 text-sm font-bold truncate lg:text-2xl`}>Explore</h6>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">Campaign</p>
                            </Link>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">Volunteer</p>
                            </Link>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">Our Blog</p>
                            </Link>
                        </div>

                        <div className="flex flex-col w-1/5 gap-3">
                            <h6 className={`${bricolageGrotesque.className} text-neutral-0 text-sm font-bold truncate lg:text-2xl`}>Learn</h6>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">FAQ</p>
                            </Link>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">How it Works</p>
                            </Link>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">Testimonials</p>
                            </Link>
                        </div>

                        <div className="flex flex-col w-1/5 gap-3">
                            <h6 className={`${bricolageGrotesque.className} text-neutral-0 text-sm font-bold truncate lg:text-2xl`}>Network</h6>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">Donate Now</p>
                            </Link>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">Country</p>
                            </Link>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">Event & Place</p>
                            </Link>
                        </div>

                        <div className="flex flex-col w-1/5 gap-3">
                            <h6 className={`${bricolageGrotesque.className} text-neutral-0 text-sm font-bold truncate lg:text-2xl`}>Legal</h6>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">Privacy Policy</p>
                            </Link>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">Term of Service</p>
                            </Link>
                            <Link href={"#"}>
                                <p className=" text-neutral-0 text-xs opacity-70 truncate lg:text-base">Cookies</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex flex-row px-5 pt-5 items-center justify-between">
                <p className="text-sm">© 2025 Loqo. All right reserved</p>
                <div className="flex gap-2">
                    <Link href={"#"}>
                        <Image src={"/assets/images/logo-twitter-circle.svg"} width={0} height={0} alt="" className="w-8 md:w-12" />
                    </Link>
                    <Link href={"#"}>
                        <Image src={"/assets/images/logo-linkedin-circle.svg"} width={0} height={0} alt="" className="w-8 md:w-12" />
                    </Link>
                    <Link href={"#"}>
                        <Image src={"/assets/images/logo-instagram-circle.svg"} width={0} height={0} alt="" className="w-8 md:w-12" />
                    </Link>
                    <Link href={"#"}>
                        <Image src={"/assets/images/logo-facebook-circle.svg"} width={0} height={0} alt="" className="w-8 md:w-12" />
                    </Link>
                </div>
            </div>
        </div >
    );
}