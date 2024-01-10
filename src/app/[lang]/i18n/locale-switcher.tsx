"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function LocaleSwitcher() {
    const pathName = usePathname();
    const redirectedPathName = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };
    const { push } = useRouter();

    return (
        <>
            <button
                onClick={() => {
                    push(redirectedPathName("zh"));
                }}
            >
                zh
            </button>
            <Link href={redirectedPathName("en")}>en</Link>
        </>
    );
}
