import { NextResponse } from "next/server";

export function GET(request: Request) {
  console.log(request);
  return NextResponse.json("mety");
}
