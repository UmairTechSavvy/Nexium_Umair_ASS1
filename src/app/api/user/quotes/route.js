

import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await axios.get('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': '532cxbW60RfcOxUm3c4T9w==hMaF2ua2p9fhQVEL',
      },
    });

    return NextResponse.json(res.data, { status: 200 });
  } catch (err) {
    const message =
      err?.response?.data?.error ?? err.message ?? 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
