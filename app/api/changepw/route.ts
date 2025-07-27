import { submitNewPassword } from "@/lib/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { password } = await req.json();
    const result = await submitNewPassword(password);
    return NextResponse.json({ message: result }, { status: 200 });
}