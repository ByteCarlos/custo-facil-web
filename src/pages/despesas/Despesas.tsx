import React, { useState, useEffect } from 'react';
import './Despesas.scss';
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
  }, [daysLeft]);

  return (
    <div className="content-container despesas-container">
      <h2>Cadastro Despesas</h2>
      <div className="form-section">
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" placeholder="Enter payment name" />
        </div>
        <div className="form-item">
          <label htmlFor="despesa">Despesa</label>
          <select id="despesa" className="form-control">
            <option value="">Select designation</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="valor">Valor R$</label>
          <input type="text" id="valor" className="form-control" placeholder="Valor" />
        </div>
        <div className="form-item">
          <label htmlFor="pago">Pago</label>
          <input type="date" id="pago" className="form-control" />
        </div>
        <div className="form-item">
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
            <tr>
    <td>1</td>
    <td>Aluguel</td>
    <td>Habitação</td>
    <td>10/10/2024</td>
    <td>R$ 1.500,00</td>
    <td><button className="btn btn-warning btn-sm">Editar</button></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Conta de Luz</td>
    <td>Utilidades</td>
    <td>15/10/2024</td>
    <td>R$ 250,00</td>
    <td><button className="btn btn-warning btn-sm">Editar</button></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Internet</td>
    <td>Utilidades</td>
    <td>20/10/2024</td>
    <td>R$ 120,00</td>
    <td><button className="btn btn-warning btn-sm">Editar</button></td>
  </tr>
  <tr>
    <td>4</td>
    <td>Supermercado</td>
    <td>Alimentação</td>
    <td>25/10/2024</td>
    <td>R$ 450,00</td>
    <td><button className="btn btn-warning btn-sm">Editar</button></td>
  </tr>
  <tr>
    <td>5</td>
    <td>Transporte</td>
    <td>Mobilidade</td>
    <td>30/10/2024</td>
    <td>R$ 200,00</td>
    <td><button className="btn btn-warning btn-sm">Editar</button></td>
  </tr>
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
