import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@auth0/nextjs-auth0'

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getSession()
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { text, customerId, channel, timestamp } = await request.json()

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 })
    }

    // Call OpenAI API for sentiment analysis
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: `You are a customer service sentiment analyzer. Analyze the following customer interaction and provide:
1. Sentiment score (1-10, where 1 is very negative and 10 is very positive)
2. Risk level (low, medium, high, critical)
3. Key issues identified
4. Recommended action
5. Urgency level (low, medium, high, urgent)

Respond in JSON format only.`
          },
          {
            role: 'user',
            content: `Customer interaction: "${text}"`
          }
        ],
        temperature: 0.3,
        max_tokens: 500
      })
    })

    if (!openaiResponse.ok) {
      throw new Error('OpenAI API request failed')
    }

    const openaiData = await openaiResponse.json()
    const analysis = openaiData.choices[0]?.message?.content

    // Parse the JSON response from OpenAI
    let sentimentData
    try {
      sentimentData = JSON.parse(analysis)
    } catch (error) {
      // Fallback if JSON parsing fails
      sentimentData = {
        sentiment_score: 5,
        risk_level: 'medium',
        key_issues: ['Unable to parse response'],
        recommended_action: 'Review manually',
        urgency_level: 'medium'
      }
    }

    // Determine if alert is needed
    const needsAlert = sentimentData.risk_level === 'high' || 
                      sentimentData.risk_level === 'critical' ||
                      sentimentData.sentiment_score <= 3

    const result = {
      id: Date.now().toString(),
      customerId,
      channel,
      timestamp,
      text,
      analysis: sentimentData,
      needsAlert,
      processedAt: new Date().toISOString()
    }

    // Here you would typically save to database
    // For now, we'll just return the result
    console.log('Sentiment analysis result:', result)

    return NextResponse.json(result)

  } catch (error) {
    console.error('Sentiment analysis error:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Sentiment analysis endpoint' })
} 