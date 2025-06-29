import Image from "next/image";
import { bricolageGrotesque } from "./fonts";

export default function Home() {
  return (
    <>
      <h1 className={`${bricolageGrotesque.className} antialiased text-4xl text-primary font-bold`}>Hello World!</h1>
      <div className="w-80 h-80 bg-gradient-cover mb-8"></div>
      <div className="w-80 h-80 bg-gradient-promo mb-8"></div>
      <div className="w-80 h-80 bg-gradient-footer mb-8"></div>
      <div className="w-80 h-80 bg-gradient-default mb-8"></div>
    </>
  );
}
