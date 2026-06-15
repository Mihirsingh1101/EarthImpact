import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, org, subject, message, updates } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Submit to Formspree
    const response = await fetch(`https://formspree.io/f/${process.env.FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name, email, _replyto: email, organization: org || 'N/A', subject, message, newsletter: updates ? 'Yes' : 'No' }),
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: result?.errors?.[0]?.message || 'Submission failed.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
