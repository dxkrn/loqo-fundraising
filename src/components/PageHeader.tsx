import { bricolageGrotesque } from "@/app/fonts";
import Image from "next/image";

export default function PageHeader({ title, description }: { title: string, description: string }) {
    return (
        <div className="relative z-0 w-full bg-gradient-cover">
            <Image
                src={"/assets/images/pattern-page-header.svg"}
                alt=""
                fill
                className="object-cover"
            />

            <div className="relative z-50 w-full items-center justify-center px-8 py-32 md:px-16 md:py-40">
                <h1 className={`${bricolageGrotesque.className} text-4xl text-center font-bold text-neutral-0 md:text-6xl`}>{title}</h1>
                <p className="text-sm text-center text-neutral-0 md:text-lg">{description}</p>
            </div>
        </div>
    );
}