import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({
    message: "hi",
    date: (new Date()).toString(),
  })
}

