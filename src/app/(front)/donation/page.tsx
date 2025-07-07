import { bricolageGrotesque } from "@/app/fonts";
import PageHeader from "@/components/PageHeader";
import TextBadge from "@/components/TextBadge";
import DonationList from "@/features/donation/DonationList";

export default function Donation() {
    return (
        <>
            <PageHeader title="List Donation" description="Short description about this page to helping information or context" />
            <div className="w-full px-8 py-16 md:p-24">
                <TextBadge text="🚀 Small effort, Make big change" />
                <h2 className={`${bricolageGrotesque.className} antialiased text-2xl font-bold md:text-3xl lg:text-4xl`}>Explore Our Active Fundraisers Part</h2>
                <p className="text-xs text-neutral-600 pt-2 pb-8 md:text-base">Join us in supporting a diverse range of passionate campaigns each dedicate to making a real difference in the world. From providing education and healthcare to underprivileged communities, to championing</p>
                <DonationList />
            </div>
        </>
    );
}