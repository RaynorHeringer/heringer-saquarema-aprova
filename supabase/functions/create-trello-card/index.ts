
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
    console.log('Função create-trello-card iniciada')
    
    const { name, email, phone, subject, message } = await req.json()
    console.log('Dados recebidos:', { name, email, phone, subject, message })

    // Get Trello credentials from environment variables
    const TRELLO_API_KEY = Deno.env.get('TRELLO_API_KEY')
    const TRELLO_TOKEN = Deno.env.get('TRELLO_TOKEN')
    const TRELLO_LIST_ID = Deno.env.get('TRELLO_LIST_ID')

    console.log('API Key existe:', !!TRELLO_API_KEY)
    console.log('Token existe:', !!TRELLO_TOKEN)
    console.log('List ID existe:', !!TRELLO_LIST_ID)
    console.log('List ID valor:', TRELLO_LIST_ID)

    if (!TRELLO_API_KEY || !TRELLO_TOKEN || !TRELLO_LIST_ID) {
      const error = 'Missing Trello credentials: ' + 
        (!TRELLO_API_KEY ? 'API_KEY ' : '') +
        (!TRELLO_TOKEN ? 'TOKEN ' : '') +
        (!TRELLO_LIST_ID ? 'LIST_ID' : '')
      console.error(error)
      throw new Error(error)
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

    console.log('Enviando para Trello:', {
      cardName,
      listId: TRELLO_LIST_ID,
      apiKey: TRELLO_API_KEY?.substring(0, 8) + '...'
    })

    // Create card in Trello
    const trelloUrl = `https://api.trello.com/1/cards?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}&idList=${TRELLO_LIST_ID}&name=${encodeURIComponent(cardName)}&desc=${encodeURIComponent(cardDescription)}&pos=top`
    
    console.log('URL da API Trello:', trelloUrl.replace(TRELLO_TOKEN, 'TOKEN_HIDDEN').replace(TRELLO_API_KEY, 'KEY_HIDDEN'))

    const trelloResponse = await fetch(trelloUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    console.log('Status da resposta Trello:', trelloResponse.status)
    console.log('Headers da resposta:', Object.fromEntries(trelloResponse.headers.entries()))

    const responseText = await trelloResponse.text()
    console.log('Resposta Trello (texto):', responseText)

    if (!trelloResponse.ok) {
      console.error('Erro da API Trello:', responseText)
      throw new Error(`Trello API error (${trelloResponse.status}): ${responseText}`)
    }

    const trelloCard = JSON.parse(responseText)
    console.log('Card criado com sucesso:', trelloCard.id)

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
    console.error('Erro na função:', error)
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
