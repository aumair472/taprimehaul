import { NextResponse } from "next/server";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
};

export async function POST(req: Request) {
  const pageclipSiteKey = process.env.PAGECLIP_SITE_KEY || process.env.NEXT_PUBLIC_PAGECLIP_SITE_KEY;
  const requestOrigin = req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL;
  const requestReferer = req.headers.get("referer") || requestOrigin;

  if (!pageclipSiteKey) {
    return NextResponse.json(
      { error: "Form configuration missing. Please contact support." },
      { status: 500 }
    );
  }

  let payload: ContactFormData;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  try {
    const pageclipResponse = await fetch(`https://send.pageclip.co/${pageclipSiteKey}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(requestOrigin ? { Origin: requestOrigin } : {}),
        ...(requestReferer ? { Referer: requestReferer } : {}),
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "manual",
    });

    const isAccepted = pageclipResponse.ok || (pageclipResponse.status >= 300 && pageclipResponse.status < 400);

    if (!isAccepted) {
      return NextResponse.json(
        { error: "Unable to submit form right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to submit form right now. Please try again." },
      { status: 502 }
    );
  }
}
