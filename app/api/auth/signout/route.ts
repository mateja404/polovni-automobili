import { deleteSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await deleteSession();
    revalidatePath("/");
    revalidatePath("/mojnalog");
    return NextResponse.redirect(new URL("/", req.nextUrl));
}