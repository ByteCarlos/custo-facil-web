import React, { useState, useEffect } from 'react';
import { Delete } from '@mui/icons-material';
import './Despesas.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import calculateDaysLeft from '../../utils/calculateDaysLeft';

interface DespesasProps {
  setLoading: (loading: boolean) => void;
  setLoadingText: (text: string) => void;
}

export default function Despesas({ setLoading, setLoadingText }: DespesasProps) {
  const [daysLeft, setDaysLeft] = useState(0);

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
          <label htmlFor="despesa">Categoria</label>
          <select id="despesa" className="form-control" required>
            <option value="">Selecione a categoria</option>
            <option value="1">Material</option>
            <option value="2">Pessoal</option>
            <option value="3">Operacionais</option>
            <option value="4">Tecnologia</option>
            <option value="5">Logística</option>
            <option value="6">Projetos</option>
            <option value="7">Alimentação</option>
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="valor">Valor R$</label>
          <input type="text" id="valor" className="form-control" placeholder="Valor" />
        </div>
        <div className="form-item">
          <label htmlFor="pago">Data do pagamento</label>
          <input type="date" id="pago" className="form-control" required />
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
                <th>#</th>
                <th>Categoria</th>
                <th>Data do pagamento</th>
                <th>Valor</th>
                <th style={{textAlign: 'center'}}>Remover</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Habitação</td>
                <td>10/10/2024</td>
                <td>R$ 1.500,00</td>
                <td style={{textAlign: 'center'}}><button className="btn btn-danger btn-sm"><Delete /></button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Utilidades</td>
                <td>15/10/2024</td>
                <td>R$ 250,00</td>
                <td style={{textAlign: 'center'}}><button className="btn btn-danger btn-sm"><Delete /></button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Utilidades</td>
                <td>20/10/2024</td>
                <td>R$ 120,00</td>
                <td style={{textAlign: 'center'}}><button className="btn btn-danger btn-sm"><Delete /></button></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Alimentação</td>
                <td>25/10/2024</td>
                <td>R$ 450,00</td>
                <td style={{textAlign: 'center'}}><button className="btn btn-danger btn-sm"><Delete /></button></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Mobilidade</td>
                <td>30/10/2024</td>
                <td>R$ 200,00</td>
                <td style={{textAlign: 'center'}}><button className="btn btn-danger btn-sm"><Delete /></button></td>
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

