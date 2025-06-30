export async function excluirCliente(id: number) {
  const resposta = await fetch('http://localhost:32831/cliente/excluir', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  if (!resposta.ok) {
    const textoErro = await resposta.text();
    throw new Error(textoErro || 'Erro ao excluir cliente');
  }

  return true;
}
