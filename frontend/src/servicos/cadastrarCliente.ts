export async function cadastrarCliente(cliente: any) {
  const resposta = await fetch('http://localhost:32831/cliente/cadastrar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cliente),
  });

  const textoResposta = await resposta.text(); // <- em vez de tentar .json() direto
  console.log('Texto da resposta do backend:', textoResposta);

  if (!resposta.ok) {
    throw new Error(`Erro ao cadastrar cliente: ${textoResposta}`);
  }

  try {
    return JSON.parse(textoResposta); // tenta converter caso seja JSON válido
  } catch {
    return textoResposta; // ou retorna como string mesmo
  }
}
