import { NextResponse, type NextRequest } from "next/server";
import { i18n } from "./lang/i18n";

// Get the preferred locale, similar to above or using a library
// function getLocale(request) { ... }

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname

    const pathname = request.nextUrl.pathname;
    console.log("pathname", pathname);
    const pathnameIsMissingLocale = i18n.locales.every(
        locale =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = "zh";

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url),
        );
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        // "/((?!_next).*)",
        // Optional: only run on root (/) URL
        // '/'
        // "/((?!api|_next/static|_next/image|favicon.ico).*)",
        "/i18n",
    ],
};
