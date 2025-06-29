'use client';

import { bricolageGrotesque, poppins } from "@/app/fonts";
import SplitText from "@/components/animations/SplitText/SplitText";
import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "../animations/AnimatedContent/AnimatedContent";
import 'animate.css';

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

export default function HeroSection() {
    return (
        <div className="px-8 py-10 flex flex-col items-center justify-center">

            {/* TODO: add hero decorations */}
            {/* <p className="text-4xl animate__animated animate__pulse animate__infinite animate__slow animate__delay-2s">HELLO</p> */}

            <AnimatedContent
                distance={80}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0}
                delay={0.5}
            >
                <p className="text-xs px-5 py-2 mb-4 bg-badge rounded-full md:text-base">🚀 Small effort, Make big change</p>
            </AnimatedContent>

            <SplitText
                text="Empower Change"
                className={`${bricolageGrotesque.className} antialiased text-3xl font-bold text-center md:text-6xl lg:text-8xl`}
                delay={100}
                duration={0.8}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
            />
            <SplitText
                text="with Every Donation"
                className={`${bricolageGrotesque.className} antialiased text-3xl font-bold text-center md:text-6xl lg:text-8xl`}
                delay={100}
                duration={0.8}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
            />
            <SplitText
                text="Boost your nonprofit's reach with our suite of fundraising tools. Craft compelling campaigns, engage and track all in one place."
                className={`${poppins.className} antialiased text-sn text-neutral-600 my-3 text-center md:px-40 md:text-base lg:text-2xl`}
                delay={100}
                duration={0.5}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="flex flex-row mt-4 md:mt-10">
                <AnimatedContent
                    distance={80}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0}
                    delay={0.1}
                >
                    <Link href={"#"}>
                        <p className="text-sm text-neutral-0 px-4 py-3 bg-primary rounded-xl md:px-8 md:text-base hover:opacity-90">Contribute Now</p>
                    </Link>
                </AnimatedContent>

                <AnimatedContent
                    distance={80}
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
                    <Link href={"#"}>
                        <p className="text-sm text-neutral-900 px-4 py-3 bg-transparent md:px-8 md:text-base rounded-xl">Explore company</p>
                    </Link>
                </AnimatedContent>
            </div>

            <div className="w-full grid grid-cols-3 mt-8 gap-4 md:mt-10 lg:mt-16 md:gap-8" >
                <AnimatedContent
                    distance={-150}
                    direction="horizontal"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0}
                    delay={0.4}
                >
                    <Image src={"/assets/images/hero-1.png"} width={448} height={602} alt="hero-1" className="rounded-2xl" />
                </AnimatedContent>

                <AnimatedContent
                    distance={150}
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
                    <Image src={"/assets/images/hero-2.png"} width={448} height={602} alt="hero-2" className="rounded-2xl" />
                </AnimatedContent>

                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0}
                    delay={0.3}
                >
                    <Image src={"/assets/images/hero-3.png"} width={448} height={602} alt="hero-3" className="rounded-2xl" />
                </AnimatedContent>

            </div>
        </div>
    );
}