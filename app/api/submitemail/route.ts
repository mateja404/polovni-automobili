import { NextRequest, NextResponse } from "next/server";
import { sendForgotPwEmail } from "@/lib/actions";

export async function POST(req: NextRequest) {
    const { email } = await req.json();
    console.log(email)
    await sendForgotPwEmail(email);
    return new NextResponse("ok", { status: 200 });
}