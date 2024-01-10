import { NextResponse } from "next/server";
import fs from "fs";
import { headers } from "next/headers";

export async function GET(req: Request, res: Response) {
    const fileContent = fs.readFileSync(
        // "/Users/jia/Pictures/壁纸/wallhaven-1k7v3v.jpg"
        "/Users/jia/workFile/TourMind/tm-nft-mint/public/videos/2-1-2.mp4"
    );
    // res.writeHead(200, { "Content-Type": contentType });
    // res.end(content, "utf-8");

    const headersList = headers();
    const referer = headersList.get("referer");
    return new Response(fileContent, {
        status: 200,
    });
}
