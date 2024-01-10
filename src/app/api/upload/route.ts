import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";

export async function POST(req: Request) {
    const form = new IncomingForm();
    // form.parse(req, (err, fields, files) => {});

    const aa = new URL(req.url);

    console.log(aa, 123131);

    return NextResponse.json({ name: "John Doe" });
}
