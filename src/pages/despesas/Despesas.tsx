import React, { useState, useEffect } from 'react';
import './Despesas.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Despesas() {
  const [daysLeft, setDaysLeft] = useState(0);
  
  // Função para calcular os dias restantes até a data de competência
  const calculateDaysLeft = (endDate: string) => {
    const today = new Date(); // Data atual
    const [day, month, year] = endDate.split('/').map(Number); // Quebra a data no formato DD/MM/YYYY
    const end = new Date(year, month - 1, day); // Cria o objeto Date com a data de competência

    const differenceInTime = end.getTime() - today.getTime(); // Diferença em milissegundos
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Converte para dias
    return differenceInDays;
  };

  useEffect(() => {
    // Data de exemplo, pode ser alterada conforme a necessidade
    const days = calculateDaysLeft('25/10/2024');
    setDaysLeft(days);
  }, []);

  return (
    <div className="content-container despesas-container">
      <h2>Cadastro Despesas</h2>
      <div className="form-section">
        <div className="form-group d-flex align-items-center">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" placeholder="Enter payment name" />
        </div>
        <div className="form-group d-flex align-items-center">
          <label htmlFor="despesa">Despesa</label>
          <select id="despesa" className="form-control">
            <option value="">Select designation</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group d-flex align-items-center">
          <label htmlFor="valor">Valor R$</label>
          <input type="text" id="valor" className="form-control" placeholder="Valor" />
        </div>
        <div className="form-group d-flex align-items-center">
          <label htmlFor="pago">Pago</label>
          <input type="date" id="pago" className="form-control" />
          <button className="btn btn-success custom-button">Adicionar</button>
        </div>
      </div>

      <div className="table-section mt-4">
        <h4>Despesas</h4>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>SN</th>
                <th>Nome</th>
                <th>Despesa</th>
                <th>Data</th>
                <th>Valor</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {/* Linhas da tabela ficarão vazias, à espera de dados do back-end */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="competency-section mt-4">
        <h4>Falta {daysLeft} dias para acabar a competência</h4>
      </div>

      <button className="btn btn-primary mt-3">Enviar</button>
    </div>
  );
}
