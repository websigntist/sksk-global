import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, productName, subject } = body;

    const emailTarget = 'info@sksglobalassociates.com';

    // Post to FormSubmit AJAX endpoint for info@sksglobalassociates.com
    const response = await fetch(`https://formsubmit.co/ajax/${emailTarget}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: subject || `New Inquiry from Website (${productName || 'General Inquiry'})`,
        Name: name,
        Email: email,
        Phone: phone || 'N/A',
        Product: productName || 'N/A',
        Message: message || 'N/A',
        _template: 'table'
      })
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      // Fallback response if external service is offline
      return NextResponse.json({ success: true, fallback: true });
    }
  } catch (error) {
    console.error('Inquiry Submission Error:', error);
    // Allow seamless client UX fallback
    return NextResponse.json({ success: true, error: true });
  }
}
