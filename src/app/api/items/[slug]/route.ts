import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { slug: string } }
) {
    // console.log(params);
    const slug = params.slug;

    return NextResponse.json({ name: slug });
}
