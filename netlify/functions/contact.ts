import { Handler } from '@netlify/functions'

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    }
  }

  try {
    const data = JSON.parse(event.body || '{}')

    // Here you would typically:
    // 1. Validate the data
    // 2. Send email using SendGrid, Mailgun, or similar
    // 3. Store in database if needed

    console.log('Contact form submission:', data)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Thank you for your message! We will get back to you soon.',
      }),
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    }
  }
}

