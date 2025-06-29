import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-background flex flex-row px-4 py-3 items-center justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="20" viewBox="0 0 88 20" fill="none">
                <g clipPath="url(#clip0_405_3757)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 14C7.33696 14 6.46884 13.4688 6 13C5.53116 12.5312 5 12.663 5 12V0H0V12C0 16.142 3.858 19 8 19H13V14H8ZM23 5C22.4091 5 21.546 4.77385 21 5C20.454 5.22615 19.4179 5.58214 19 6C18.5821 6.41786 18.2261 7.45403 18 8C17.7739 8.54597 18 9.40905 18 10C18 10.5909 17.7739 10.454 18 11C18.2261 11.546 18.5821 12.5821 19 13C19.4179 13.4179 20.454 13.7739 21 14C21.546 14.2261 22.4091 14 23 14C24.1935 14 25.1561 13.8439 26 13C26.8439 12.1561 27 11.1935 27 10C27 8.80653 26.8439 6.84391 26 6C25.1561 5.15609 24.1935 5 23 5ZM13 10C13 4.7535 17.7535 0 23 0C28.2465 0 32 4.7535 32 10C32 15.2465 28.2465 19 23 19C17.7535 19 13 15.2465 13 10ZM77 5C75.8065 5 73.8439 5.15609 73 6C72.1561 6.84391 72 8.80653 72 10C72 11.1935 72.1561 12.1561 73 13C73.8439 13.8439 75.8065 14 77 14C78.1935 14 79.1561 13.8439 80 13C80.8439 12.1561 81 11.1935 81 10C81 8.80653 80.8439 6.84391 80 6C79.1561 5.15609 78.1935 5 77 5ZM67 10C67 4.7535 71.7535 0 77 0C82.2465 0 86 4.7535 86 10C86 15.2465 82.2465 19 77 19C71.7535 19 67 15.2465 67 10ZM43 0C37.7535 0 33 4.7535 33 10C33 15.2465 37.7535 19 43 19H57C57.9845 19 58.107 19.278 59 19L62 20L65 15C65.7326 13.6248 65.9999 11.5581 66 10C66 4.7535 62.2465 0 57 0H43ZM61 10C61 8.80653 60.8439 6.84391 60 6C59.1561 5.15609 58.1935 5 57 5H43C42.409 5 41.546 4.77385 41 5C40.454 5.22615 39.4179 5.58214 39 6C38.5821 6.41786 38.2261 7.45403 38 8C37.7739 8.54597 38 9.40905 38 10C38 10.5909 37.7739 10.454 38 11C38.2261 11.546 38.5821 12.5821 39 13C39.4179 13.4179 40.454 13.7739 41 14C41.546 14.2261 42.409 14 43 14H57C58.1874 14 59.1571 13.8364 60 13C60.8429 12.1636 60.9908 11.1874 61 10Z" fill="#211145" />
                    <path d="M89 2.00002C89 2.39785 89.2813 2.71872 89 3.00002C88.7187 3.28133 88.3978 3.00002 88 3.00002C87.6022 3.00002 86.2813 3.28133 86 3.00002C85.7187 2.71872 86 2.39785 86 2.00002C86 1.6022 85.7187 0.281329 86 2.42591e-05C86.2813 -0.28128 87.6022 2.42591e-05 88 2.42591e-05C88.3978 2.42591e-05 88.7187 -0.28128 89 2.42591e-05C89.2813 0.281329 89 1.6022 89 2.00002Z" fill="#211145" />
                </g>
                <defs>
                    <clipPath id="clip0_405_3757">
                        <rect width="88" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <div className="hidden gap-4 md:flex">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5.25" stroke="#211145" strokeWidth="1.5" />
                    </svg>
                    <p className="text-sm px-3 py-2">Products</p>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5.25" stroke="#211145" strokeWidth="1.5" />
                    </svg>
                    <p className="text-sm px-3 py-2">Products</p>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5.25" stroke="#211145" strokeWidth="1.5" />
                    </svg>
                    <p className="text-sm px-3 py-2">Products</p>
                </div>
            </div>

            <div className="flex flex-row gap-2">
                <Link href={"#"}>
                    <p className="text-sm px-3 py-2">Signin</p>
                </Link>
                <Link href={"#"}>
                    <p className="text-sm text-neutral-0 px-3 py-2 bg-primary rounded-lg">Get Started</p>
                </Link>
            </div>
        </div>
    );
}