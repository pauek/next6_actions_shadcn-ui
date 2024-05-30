import { serverSearchMovies } from "@/lib/movies";
import { NextResponse } from "next/server";

export async function GET() {
  const movies = await serverSearchMovies();
  return NextResponse.json(movies);
}
