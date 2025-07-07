import DoantionCard from "./DonationCard";

export default function DonationList() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <DoantionCard />
            <DoantionCard />
            <DoantionCard />
            <DoantionCard />
            <DoantionCard />
            <DoantionCard />
        </div>
    );
}