export default function PromoBanner() {
    return (
        <div className="flex flex-row p-3 bg-gradient-promo items-center justify-between">
            <p className="text-sm text-neutral-0">Unlock a 50% matching gift for donations made before Oct 10, 2023 🔥 Click here</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M17 7L7 17M7 7L17 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}