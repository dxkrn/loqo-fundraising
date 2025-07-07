import DoantionCard from "./DonationCard";

export default function DonationList() {
    return (
        <div className="grid grid-cols-1 gap-4">
            <DoantionCard />
            <DoantionCard />
            <DoantionCard />
            <DoantionCard />
            <DoantionCard />
            <DoantionCard />
        </div>
    );
}