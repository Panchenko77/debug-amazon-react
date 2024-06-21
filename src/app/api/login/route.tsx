import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const authorization = headers().get("Authorization");
  if (authorization?.startsWith("Bearer ")) {
    const idToken = authorization.split("Bearer ")[1];

    //Generate session cookie
    const expiresIn = 60 * 60 * 24 * 5 * 1000;

    const options = {
      name: "session",
      value: idToken,
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
    };

    //Add the cookie to the browser
    cookies().set(options);
  }

  return NextResponse.json({}, { status: 200 });
}

export async function GET(request: NextRequest) {
  const session = cookies().get("session")?.value || "";

  //Validate if the cookie exist in the request
  if (!session) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  return NextResponse.json({ isLogged: true }, { status: 200 });
}
