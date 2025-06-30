import React, { useState } from 'react';
import { cadastrarCliente } from '../servicos/cadastrarCliente';

export default function PaginaCadastrarCliente({ voltar }: { voltar: () => void }) {
  const [cliente, setCliente] = useState({
    nome: '',
    nomeSocial: '',
    email: '',
    endereco: {
      estado: '',
      cidade: '',
      bairro: '',
      rua: '',
      numero: '',
      codigopostal: '',
      informacoesAdicionais: ''
    },
    telefones: [
      { ddd: '', numero: '' }
    ]
  });

  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('endereco.')) {
      const campo = name.split('.')[1];
      setCliente(prev => ({
        ...prev,
        endereco: {
          ...prev.endereco,
          [campo]: value
        }
      }));
    } else if (name.startsWith('telefone.')) {
      const campo = name.split('.')[1];
      setCliente(prev => ({
        ...prev,
        telefones: [{
          ...prev.telefones[0],
          [campo]: value
        }]
      }));
    } else {
      setCliente(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setMensagem('');

    try {
      await cadastrarCliente(cliente);
      setMensagem('✅ Cliente cadastrado com sucesso!');
    } catch (e: any) {
      setErro(e.message);
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">📝 Cadastrar Novo Cliente</h2>

      {erro && <div className="alert alert-danger">{erro}</div>}
      {mensagem && <div className="alert alert-success">{mensagem}</div>}

      <button className="btn btn-secondary mb-4" onClick={voltar}>
        ⬅ Voltar à Home
      </button>

      <form onSubmit={handleSubmit}>
        <h4 className="mb-3">Dados Pessoais</h4>
        <div className="mb-3">
          <label>Nome:</label>
          <input className="form-control" name="nome" value={cliente.nome} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Nome Social:</label>
          <input className="form-control" name="nomeSocial" value={cliente.nomeSocial} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={cliente.email} onChange={handleChange} />
        </div>

        <h4 className="mt-4 mb-3">Endereço</h4>
        {['estado', 'cidade', 'bairro', 'rua', 'numero', 'codigopostal'].map((campo) => (
          <div className="mb-3" key={campo}>
            <label>{campo[0].toUpperCase() + campo.slice(1)}:</label>
            <input
              className="form-control"
              name={`endereco.${campo}`}
              value={(cliente.endereco as any)[campo]}
              onChange={handleChange}
              required={campo !== 'informacoesAdicionais'}
            />
          </div>
        ))}
        <div className="mb-3">
          <label>Informações adicionais:</label>
          <textarea
            className="form-control"
            name="endereco.informacoesAdicionais"
            value={cliente.endereco.informacoesAdicionais}
            onChange={handleChange}
          />
        </div>

        <h4 className="mt-4 mb-3">Telefone</h4>
        <div className="mb-3">
          <label>DDD:</label>
          <input
            className="form-control"
            name="telefone.ddd"
            value={cliente.telefones[0].ddd}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Número:</label>
          <input
            className="form-control"
            name="telefone.numero"
            value={cliente.telefones[0].numero}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          ✅ Cadastrar Cliente
        </button>
      </form>
    </div>
  );
}
