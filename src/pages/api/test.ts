import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req, 123131);
    console.log({
        a: 1,
        b: [{ c: 1 }, { c: 2 }],
    });

    res.status(200).json({ name: "John Doe111" });
}
