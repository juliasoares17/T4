export async function editarCliente(cliente: any) {
  const resposta = await fetch('http://localhost:32831/cliente/atualizar', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cliente),
  });

  if (!resposta.ok) {
    const textoErro = await resposta.text();
    throw new Error(textoErro || 'Erro ao atualizar cliente');
  }

  // Verifica se há conteúdo antes de tentar parsear JSON
  const textoResposta = await resposta.text();

  if (!textoResposta) {
    // Nenhum conteúdo (ex: 204 No Content)
    return null;
  }

  try {
    return JSON.parse(textoResposta);
  } catch (erro) {
    throw new Error('Resposta do servidor não é um JSON válido');
  }
}
