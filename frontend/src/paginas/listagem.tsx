import React, { useEffect, useState } from 'react';
import { buscarClientes } from '../servicos/buscarClientes';
import { excluirCliente } from '../servicos/excluirCliente';

interface Props {
  voltar: () => void;
  editar: (cliente: any) => void; // nova prop para editar
}

export default function PaginaListarClientes({ voltar, editar }: Props) {
  const [clientes, setClientes] = useState<any[] | null>(null);
  const [erro, setErro] = useState('');

  const carregarClientes = () => {
    buscarClientes()
      .then((dados) => {
        console.log("Clientes recebidos:", dados);
        setClientes(dados);
      })
      .catch((e) => {
        console.error("Erro ao buscar clientes:", e);
        setErro(e.message);
      });
  };

  useEffect(() => {
    carregarClientes();
  }, []);

  const excluir = async (id: number) => {
  if (!window.confirm('Tem certeza que deseja excluir este cliente?')) return;

  try {
    await excluirCliente(id);
    setClientes((clientes) => clientes?.filter((c) => c.id !== id) || []);
  } catch (e: any) {
    console.error('Erro ao excluir cliente:', e);
    setErro(e.message || 'Erro desconhecido ao excluir cliente');
  }
};

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">📋 Lista de Clientes</h2>

      {erro && (
        <div className="alert alert-danger">
          <strong>Erro:</strong>{' '}
          {typeof erro === 'string' ? erro : JSON.stringify(erro)}
        </div>
      )}

      <button className="btn btn-secondary mb-4" onClick={voltar}>
        ⬅ Voltar à Home
      </button>

      {clientes === null ? (
        <p className="text-muted text-center">Carregando clientes...</p>
      ) : clientes.length === 0 ? (
        <p className="text-muted text-center">Nenhum cliente encontrado.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Nome Social</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Localização</th>
              <th>Ações</th> {/* coluna nova */}
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.nomeSocial}</td>
                <td>{cliente.email ?? '—'}</td>
                <td>
                  {cliente.telefones?.[0]
                    ? `(${cliente.telefones[0].ddd}) ${cliente.telefones[0].numero}`
                    : '—'}
                </td>
                <td>
                  {cliente.endereco?.cidade}, {cliente.endereco?.estado}
                </td>
                <td>
                  <div className="d-flex">
                    <button className="btn btn-warning btn-sm me-2" onClick={() => editar(cliente)}>
                      ✏️ Editar
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => excluir(cliente.id)}
                    >
                      🗑️ Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

