import React from 'react';

export default function Home({ navegarPara }: { navegarPara: (pagina: string) => void }) {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4">Gerência de Clientes</h1>
      <p className="text-center">Utilize as opções abaixo para gerenciar os clientes do sistema.</p>

      <div className="d-flex flex-column align-items-center gap-3 mt-4">
        <button className="btn btn-primary w-50" onClick={() => navegarPara('Listar')}>
          📋 Listar Clientes
        </button>
        <button className="btn btn-success w-50" onClick={() => navegarPara('Cadastrar')}>
          ➕ Cadastrar Novo Cliente
        </button>
      </div>
    </div>
  );
}
