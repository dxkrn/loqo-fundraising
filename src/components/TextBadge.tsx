export default function TextBadge({ text }: { text: string }) {
    return (
        <p className="w-fit text-xs px-5 py-2 mb-4 bg-badge rounded-full md:text-base">{text}</p>
    );
}