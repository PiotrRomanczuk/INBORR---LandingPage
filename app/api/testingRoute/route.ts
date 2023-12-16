import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse){
    try {
        const { email, content } = await req.json();
        
        console.log(email, content);
      
      if (!email || !content) {

          return NextResponse.json(
            { error: "Email and content are required fields" },
            { status: 400 });
        }

        const data = email + " " + content;

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
