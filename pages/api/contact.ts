import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message, context } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        ok: false, 
        error: 'Name, email, and message are required' 
      });
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM (HubSpot, Salesforce, etc.)
    
    // For now, we'll just log the submission and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message,
      context,
      timestamp: new Date().toISOString()
    });

    // TODO: Add actual email sending or CRM integration here
    // Example integrations:
    // - SendGrid/Nodemailer for email
    // - HubSpot/Salesforce API for CRM
    // - Database storage (MongoDB, PostgreSQL, etc.)

    return res.status(200).json({ 
      ok: true, 
      message: 'Contact form submitted successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      ok: false, 
      error: 'Internal server error' 
    });
  }
}
