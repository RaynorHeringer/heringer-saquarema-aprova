
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, subject, message } = await req.json()

    // Get Trello credentials from environment variables
    const TRELLO_API_KEY = Deno.env.get('TRELLO_API_KEY')
    const TRELLO_TOKEN = Deno.env.get('TRELLO_TOKEN')
    const TRELLO_LIST_ID = Deno.env.get('TRELLO_LIST_ID')

    if (!TRELLO_API_KEY || !TRELLO_TOKEN || !TRELLO_LIST_ID) {
      throw new Error('Missing Trello credentials')
    }

    // Create card name and description
    const cardName = `Novo Contato: ${name} - ${subject}`
    const cardDescription = `
**Nome:** ${name}
**Email:** ${email}
**Telefone:** ${phone || 'Não informado'}
**Assunto:** ${subject}

**Mensagem:**
${message}

---
*Enviado pelo site em ${new Date().toLocaleString('pt-BR')}*
    `

    // Create card in Trello
    const trelloResponse = await fetch('https://api.trello.com/1/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: TRELLO_API_KEY,
        token: TRELLO_TOKEN,
        idList: TRELLO_LIST_ID,
        name: cardName,
        desc: cardDescription,
        pos: 'top' // Add to top of list
      })
    })

    if (!trelloResponse.ok) {
      throw new Error(`Trello API error: ${trelloResponse.statusText}`)
    }

    const trelloCard = await trelloResponse.json()

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Card criado no Trello com sucesso!',
        cardId: trelloCard.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error creating Trello card:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
