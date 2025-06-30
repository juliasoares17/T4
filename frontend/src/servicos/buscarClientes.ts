export async function buscarClientes() {
  const resposta = await fetch('http://localhost:32831/cliente/clientes');
  const dados = await resposta.json();

  // Apenas loga se o status for inválido, mas não interrompe
  if (!resposta.ok) {
    console.warn('Resposta com erro HTTP, mas com dados:', resposta.status, dados);
    // Opcional: lançar erro se os dados forem claramente inválidos
  }

  return dados;
}
