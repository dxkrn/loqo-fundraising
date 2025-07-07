import Image from "next/image";
import Link from "next/link";

export default function DoantionCard() {
    return (
        <Link href={''}>
            <div className="border border-primary-light bg-neutral-0 p-4 rounded-lg">
                <Image
                    src={'/assets/images/donation-card-1.png'}
                    width={864}
                    height={576}
                    alt=""
                    className="rounded-sm"
                />
                <h5 className="text-base font-bold mt-4 md:text-lg lg:text-xl">Campaign for Clean Water Access</h5>
                <p className="text-xs text-neutral-600 pt-2 truncate md:text-base lg:text-lg">Since 2010, AquaLife has been committed to providing clean water solutions in drought-stricken regions.</p>
                <div className="flex gap-1 pt-4">
                    <p className="text-xs font-semibold md:text-sm lg:text-base">$75,000</p>
                    <p className="text-xs md:text-sm lg:text-base">raised of $150,000 goal</p>
                </div>
                <div className="w-full h-2 bg-primary-thin rounded-full overflow-hidden mt-2">
                    <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: '50%' }}
                    />
                </div>
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.12" d="M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z" fill="#B6A5DA" />
                            <path d="M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z" stroke="#B6A5DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-xs md:text-sm lg:text-base">5,200 supporters</p>
                    </div>
                    <p className="text-xs px-3 py-1 bg-neutral-200 rounded-full text-center md:text-sm lg:text-base">HEALTH</p>
                </div>
            </div>
        </Link>
    );
}