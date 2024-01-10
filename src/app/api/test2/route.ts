import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

//request url: http://localhost:3000/api/test2
export async function GET(req: Request) {
    const aa = new URL(req.url);
    // debugger;
    console.log( 123131);

    return NextResponse.json({ name: "John Doe" });
}
