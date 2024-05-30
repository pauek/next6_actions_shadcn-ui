import { serverSearchMovies } from "@/lib/movies";
import { NextResponse } from "next/server";

export async function GET(req) {
  const query = req.nextUrl.searchParams.get("query");
  const movies = await serverSearchMovies(query);
  return NextResponse.json(movies);
}
