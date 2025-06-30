import React, { useState } from 'react';
import { editarCliente } from '../servicos/editarCliente';

export default function PaginaEditarCliente({
  cliente,
  voltar,
}: {
  cliente: any;
  voltar: () => void;
}) {
  const [formulario, setFormulario] = useState({ ...cliente });
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Atualiza endereço ou telefone se o campo for nested
    if (name.startsWith('endereco.')) {
      const campo = name.split('.')[1];
      setFormulario((prev: any) => ({
        ...prev,
        endereco: {
          ...prev.endereco,
          [campo]: value,
        },
      }));
    } else if (name.startsWith('telefone.')) {
      const campo = name.split('.')[1];
      setFormulario((prev: any) => ({
        ...prev,
        telefones: [
          {
            ...prev.telefones[0],
            [campo]: value,
          },
        ],
      }));
    } else {
      setFormulario((prev: any) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setSucesso('');

    try {
      await editarCliente(formulario);
      setSucesso('Cliente atualizado com sucesso!');
      setTimeout(() => voltar(), 1000); // volta após 1s
    } catch (err: any) {
      setErro(err.message || 'Erro ao atualizar cliente');
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">✏️ Editar Cliente</h2>

      {erro && <div className="alert alert-danger">{erro}</div>}
      {sucesso && <div className="alert alert-success">{sucesso}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            name="nome"
            className="form-control"
            value={formulario.nome}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nome Social</label>
          <input
            type="text"
            name="nomeSocial"
            className="form-control"
            value={formulario.nomeSocial}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formulario.email || ''}
            onChange={handleChange}
          />
        </div>

        <h5 className="mt-4">Endereço</h5>

        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Estado"
            name="endereco.estado"
            value={formulario.endereco?.estado || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Cidade"
            name="endereco.cidade"
            value={formulario.endereco?.cidade || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Bairro"
            name="endereco.bairro"
            value={formulario.endereco?.bairro || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Rua"
            name="endereco.rua"
            value={formulario.endereco?.rua || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Número"
            name="endereco.numero"
            value={formulario.endereco?.numero || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Código Postal"
            name="endereco.codigopostal"
            value={formulario.endereco?.codigopostal || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Informações Adicionais"
            name="endereco.informacoesAdicionais"
            value={formulario.endereco?.informacoesAdicionais || ''}
            onChange={handleChange}
          />
        </div>

        <h5 className="mt-4">Telefone</h5>
        <div className="mb-2">
          <input
            className="form-control"
            placeholder="DDD"
            name="telefone.ddd"
            value={formulario.telefones?.[0]?.ddd || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Número"
            name="telefone.numero"
            value={formulario.telefones?.[0]?.numero || ''}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success me-2">
          💾 Salvar Alterações
        </button>
        <button type="button" className="btn btn-secondary" onClick={voltar}>
          ⬅ Cancelar
        </button>
      </form>
    </div>
  );
}
