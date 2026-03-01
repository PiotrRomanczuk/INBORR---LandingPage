import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse){
    try {
        const { email, message } = await req.json();

      if (!email || !message) {

          return NextResponse.json(
            { error: "Email and message are required fields" },
            { status: 400 });
        }

        const data = email + " testestes " + message;

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
