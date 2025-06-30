import Link from "next/link";

export function ButtonFilled({ label, url }: { label: string, url: string }) {
    return (
        <Link href={url}>
            <p className="text-sm text-neutral-0 px-4 py-3 bg-primary rounded-xl md:px-8 md:text-base hover:opacity-90">{label}</p>
        </Link>
    );
}

export function ButtonOutlined({ label, url }: { label: string, url: string }) {
    return (
        <Link href={url}>
            <p className="text-sm text-neutral-900 px-4 py-3 border border-primary border-2 bg-transparent rounded-xl md:px-8 md:text-base hover:bg-primary hover:text-neutral-0">{label}</p>
        </Link>
    );
}
export function ButtonText({ label, url }: { label: string, url: string }) {
    return (
        <Link href={url}>
            <p className="text-sm text-neutral-900 px-4 py-3 bg-transparent rounded-xl md:px-8 md:text-base hover:bg-primary hover:text-neutral-0">{label}</p>

        </Link>
    );
}