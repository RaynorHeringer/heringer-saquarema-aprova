
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
    console.log('=== INÍCIO DA FUNÇÃO create-trello-card ===')
    
    const { name, email, phone, subject, message } = await req.json()
    console.log('Dados recebidos:', { name, email, phone, subject, message })

    // Get Trello credentials from environment variables
    const TRELLO_API_KEY = Deno.env.get('TRELLO_API_KEY')
    const TRELLO_TOKEN = Deno.env.get('TRELLO_TOKEN')
    const BOARD_ID = 'eHqhE838'

    console.log('=== VERIFICAÇÃO DE CREDENCIAIS ===')
    console.log('API Key existe:', !!TRELLO_API_KEY)
    console.log('API Key primeiros 8 caracteres:', TRELLO_API_KEY?.substring(0, 8))
    console.log('Token existe:', !!TRELLO_TOKEN)
    console.log('Token primeiros 8 caracteres:', TRELLO_TOKEN?.substring(0, 8))
    console.log('Board ID:', BOARD_ID)

    if (!TRELLO_API_KEY || !TRELLO_TOKEN) {
      const error = 'Missing Trello credentials: ' + 
        (!TRELLO_API_KEY ? 'API_KEY ' : '') +
        (!TRELLO_TOKEN ? 'TOKEN ' : '')
      console.error('ERRO:', error)
      throw new Error(error)
    }

    // Teste simples: tentar acessar informações do usuário primeiro
    console.log('=== TESTE 1: Verificando acesso à API ===')
    const memberUrl = `https://api.trello.com/1/members/me?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`
    console.log('Testando acesso do usuário à API...')

    try {
      const memberResponse = await fetch(memberUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      console.log('Status resposta member:', memberResponse.status)

      if (!memberResponse.ok) {
        const errorText = await memberResponse.text()
        console.error('Erro ao acessar dados do usuário:', errorText)
        throw new Error(`Credenciais inválidas (${memberResponse.status}): ${errorText}`)
      }

      const memberData = await memberResponse.json()
      console.log('Usuário autenticado:', memberData.username || memberData.fullName)

    } catch (memberError) {
      console.error('Erro no teste de autenticação:', memberError)
      throw new Error(`Falha na autenticação: ${memberError.message}`)
    }

    // Teste 2: Acessar o board específico
    console.log('=== TESTE 2: Acessando board específico ===')
    const boardUrl = `https://api.trello.com/1/boards/${BOARD_ID}?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`
    
    const boardResponse = await fetch(boardUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    console.log('Status resposta board:', boardResponse.status)

    if (!boardResponse.ok) {
      const errorText = await boardResponse.text()
      console.error('Erro ao acessar board:', errorText)
      throw new Error(`Erro ao acessar board ${BOARD_ID} (${boardResponse.status}): ${errorText}`)
    }

    const boardData = await boardResponse.json()
    console.log('Board encontrado:', boardData.name)

    // Teste 3: Buscar listas do board
    console.log('=== TESTE 3: Buscando listas do board ===')
    const listsUrl = `https://api.trello.com/1/boards/${BOARD_ID}/lists?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`
    
    const listsResponse = await fetch(listsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    console.log('Status resposta listas:', listsResponse.status)

    if (!listsResponse.ok) {
      const errorText = await listsResponse.text()
      console.error('Erro ao buscar listas:', errorText)
      throw new Error(`Erro ao buscar listas (${listsResponse.status}): ${errorText}`)
    }

    const lists = await listsResponse.json()
    console.log('Listas encontradas:', lists.map((list: any) => ({ id: list.id, name: list.name })))

    if (lists.length === 0) {
      throw new Error('Nenhuma lista encontrada no board')
    }

    const targetList = lists[0]
    console.log('Usando lista:', { id: targetList.id, name: targetList.name })

    // Teste 4: Criar o card
    console.log('=== TESTE 4: Criando card ===')
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

    const cardUrl = `https://api.trello.com/1/cards?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}&idList=${targetList.id}&name=${encodeURIComponent(cardName)}&desc=${encodeURIComponent(cardDescription)}&pos=top`
    
    console.log('Criando card na lista:', targetList.name)

    const cardResponse = await fetch(cardUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    console.log('Status criação card:', cardResponse.status)

    const responseText = await cardResponse.text()
    console.log('Resposta criação card:', responseText)

    if (!cardResponse.ok) {
      console.error('Erro ao criar card:', responseText)
      throw new Error(`Erro ao criar card (${cardResponse.status}): ${responseText}`)
    }

    const trelloCard = JSON.parse(responseText)
    console.log('=== SUCESSO! Card criado ===')
    console.log('Card ID:', trelloCard.id)
    console.log('Card URL:', trelloCard.url)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Card criado no Trello com sucesso!',
        cardId: trelloCard.id,
        cardUrl: trelloCard.url,
        listName: targetList.name
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('=== ERRO GERAL ===')
    console.error('Erro na função:', error)
    console.error('Stack trace:', error.stack)
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
