
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
    const BOARD_ID = 'eHqhE838' // Board ID fornecido pelo usuário

    console.log('API Key existe:', !!TRELLO_API_KEY)
    console.log('Token existe:', !!TRELLO_TOKEN)
    console.log('Board ID:', BOARD_ID)

    if (!TRELLO_API_KEY || !TRELLO_TOKEN) {
      const error = 'Missing Trello credentials: ' + 
        (!TRELLO_API_KEY ? 'API_KEY ' : '') +
        (!TRELLO_TOKEN ? 'TOKEN ' : '')
      console.error(error)
      throw new Error(error)
    }

    // First, validate credentials by getting board info and lists
    console.log('Validando credenciais e obtendo listas do board...')
    const boardUrl = `https://api.trello.com/1/boards/${BOARD_ID}/lists?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`
    
    console.log('Chamando API para obter listas:', boardUrl.replace(TRELLO_TOKEN, 'TOKEN_HIDDEN').replace(TRELLO_API_KEY, 'KEY_HIDDEN'))

    const boardResponse = await fetch(boardUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    console.log('Status da resposta do board:', boardResponse.status)

    if (!boardResponse.ok) {
      const errorText = await boardResponse.text()
      console.error('Erro ao acessar board:', errorText)
      throw new Error(`Erro ao acessar board Trello (${boardResponse.status}): ${errorText}`)
    }

    const lists = await boardResponse.json()
    console.log('Listas encontradas no board:', lists.map((list: any) => ({ id: list.id, name: list.name })))

    // Use the first list or find a specific one
    const targetList = lists[0] // Using first list for now
    if (!targetList) {
      throw new Error('Nenhuma lista encontrada no board')
    }

    console.log('Usando lista:', { id: targetList.id, name: targetList.name })

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

    console.log('Criando card no Trello...')

    // Create card in Trello using the validated list ID
    const trelloUrl = `https://api.trello.com/1/cards?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}&idList=${targetList.id}&name=${encodeURIComponent(cardName)}&desc=${encodeURIComponent(cardDescription)}&pos=top`
    
    console.log('URL da API Trello para criar card:', trelloUrl.replace(TRELLO_TOKEN, 'TOKEN_HIDDEN').replace(TRELLO_API_KEY, 'KEY_HIDDEN'))

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
        cardId: trelloCard.id,
        listName: targetList.name
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
