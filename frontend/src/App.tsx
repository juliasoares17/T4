import React, { useState } from 'react';
import Home from './paginas/home';
import PaginaListarClientes from './paginas/listagem';
import PaginaCadastrarCliente from './paginas/cadastro';

function App() {
  const [pagina, setPagina] = useState('Home');
  const [clienteSelecionado, setClienteSelecionado] = useState<any | null>(null);

  const navegarPara = (novaPagina: string) => setPagina(novaPagina);

  const editarCliente = (cliente: any) => {
    setClienteSelecionado(cliente);
    setPagina('Editar');
  };

  const voltarParaListagem = () => {
    setClienteSelecionado(null);
    setPagina('Listar');
  };

  let conteudo;
  switch (pagina) {
    case 'Home':
      conteudo = <Home navegarPara={navegarPara} />;
      break;
    case 'Listar':
      conteudo = (
        <PaginaListarClientes
          voltar={() => setPagina('Home')}
          editar={editarCliente}
        />
      );
      break;
    case 'Cadastrar': 
      conteudo = <PaginaCadastrarCliente voltar={() => setPagina('Home')} />;
      break;
    default:
      conteudo = <p className="text-center">Página não encontrada</p>;
  }

  return <div>{conteudo}</div>;
}

export default App;
