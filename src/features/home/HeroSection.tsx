'use client';

import { bricolageGrotesque, poppins } from "@/app/fonts";
import SplitText from "@/components/animations/SplitText/SplitText";
import Image from "next/image";
import AnimatedContent from "../../components/animations/AnimatedContent/AnimatedContent";
import 'animate.css';
import TextBadge from "@/components/TextBadge";
import { ButtonFilled, ButtonText } from "@/components/Button";

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
                <TextBadge text="🚀 Small effort, Make big change" />
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
            />
            <div className="flex flex-row mt-4 gap-4 md:mt-10">
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
                    <ButtonFilled label="Contribute Now" url="#" />
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
                    <ButtonText label="Explore company" url="#" />
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