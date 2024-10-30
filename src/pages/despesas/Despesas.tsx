import React, { useState, useEffect, useContext } from 'react';
import { Delete } from '@mui/icons-material';
import './Despesas.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import calculateDaysLeft from '../../utils/calculateDaysLeft';
import { Categoria, Data, deleteDespesa, Despesa, getAllDespesas, getCategorias, insertData, insertDespesa } from '../../services/despesas';
import { format } from 'date-fns';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { UserContext } from '../../context/UserContext';

interface DespesasProps {
  setLoading: (loading: boolean) => void;
  setLoadingText: (text: string) => void;
}

export default function Despesas({ setLoading, setLoadingText }: DespesasProps) {
  const { user } = useContext(UserContext);
  const [daysLeft, setDaysLeft] = useState(0);
  const [data, setData] = useState(Array<Despesa>);
  const [categoria, setCategoria] = useState(Array<Categoria>);
  const [loadingCategorias, setLoadingCategorias] = useState(false);
  const [value, setValue] = useState('');
  const [dataPagamento, setDataPagamento] = useState('');
  const [categoriaSelect, setCategoriaSelect] = useState('');
  // eslint-disable-next-line
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [pagina, setPagina] = useState(1);

  function loadData(offset: number) {
    setLoading(true);
    getAllDespesas(limit, offset).then((result: Data) => {
      setLoading(false);
      if (result.status === 406) {
        alert("Erro ao requisitar dados");
      } else if (result.status === 503) {
        alert("Serviço temporariamente indisponivel");
      } else if ((result.status === 200) && (result.data.length === 0)) {
        if (offset !== 0) {
          setPagina(pagina - 1);
          setOffset(offset - 10);
          alert("Sem mais dados");
        }
      } else if ((result.status === 200) && (result.data.length !== 0)) {
        setData(result.data);
      } else {
        alert("Erro interno, contate o ADM");
      }
    });
  }

  function loadCategorias() {
    if(loadingCategorias)
      return;

    setLoading(true);
    getCategorias().then((result: Data) => {
      setLoadingCategorias(true);
      setLoading(false);
      if (result.status === 406) {
        alert("Erro ao requisitar Categorias");
      } else if (result.status === 503) {
        alert("Serviço temporariamente indisponivel");
      } else if (result.status === 200) {
        setCategoria(result.data);
      } else {
        alert("Erro interno, contate o ADM");
      }
    });
  }

  function insert() {
    // por alguma motivo department_fk não esta sendo enviado, chega null no banco - verificar
    const despesa = new insertData();
    // @Author: Carlos
    // @Date: 30/10/2024
    // Utilizar o context de usuário
    despesa.department_fk = user ? user.departmentID : 1; // foi declarado metodo a interface Despesa
    despesa.value = parseInt(value);
    despesa.category_fk = parseInt(categoriaSelect);
    despesa.insertion_date = new Date();
    despesa.payment_date = new Date(dataPagamento);
    despesa.submitted = true;
    despesa.monthly_period_fk = 1; // revisar como vai funcionar a inserção do periodo

    setLoading(true);
    insertDespesa(despesa).then((result: Data) => {
      setLoading(false);
      if (result.status === 406) {
        alert("Erro ao inserir dados.");
      } else if (result.status === 503) {
        alert("Serviço temporariamente indisponivel");
      } else if (result.status === 201) {
        loadData(0);
      } else {
        alert("Erro interno, contate o ADM");
      }
    });
  }

  function delDespesa(despesaID: number) {
    setLoading(true);
    deleteDespesa(despesaID).then((result: Data) => {
      setLoading(false);
      if (result.status === 406) {
        alert("Erro ao inserir dados.");
      } else if (result.status === 503) {
        alert("Serviço temporariamente indisponivel");
      } else if (result.status === 200) {
        alert("Despesa deletada");
        loadData(offset);
      } else if (result.status === 404) {
        alert("Despesa não encontrada.");
        window.location.reload();
      } else {
        alert("Erro interno, contate o ADM");
      }
    });
  }

  async function nextPage() {
    setPagina(pagina + 1);
    setOffset(offset + 10);
  }

  async function previusPage() {
    if (offset !== 0) {
      setPagina(pagina - 1);
      setOffset(offset - 10);
    }
  }

  useEffect(() => {
    // Data de exemplo, pode ser alterada conforme a necessidade
    const days = calculateDaysLeft('31/12/2024');
    setDaysLeft(days);
  }, [daysLeft]);

  useEffect(() => {
    loadCategorias();
    // eslint-disable-next-line
  }, [loadingCategorias]);

  useEffect(() => {
    loadData(offset);
    // eslint-disable-next-line
  }, [offset]);

  // pagination


  return (
    <div className="content-container despesas-container">
      <h2>Cadastro Despesas</h2>
      <div className="form-section">
        <div className="form-item">
          <label htmlFor="despesa">Categoria</label>
          <select id="despesa" className="form-control" onChange={e => setCategoriaSelect(e.target.value)} required>
            <option value="">Selecione a categoria</option>
            {categoria.map((val: Categoria) => {
              return (
                <option value={`${val.id}`}>{val.name}</option>
              );
            })}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="valor">Valor R$</label>
          <input type="text" id="valor" className="form-control" placeholder="Valor" onChange={e => setValue(e.target.value)} required />
        </div>
        <div className="form-item">
          <label htmlFor="pago">Data do pagamento</label>
          <input type="date" id="pago" className="form-control" onChange={e => setDataPagamento(e.target.value)} required />
        </div>
        <div className="form-item">
          <button className="btn btn-success custom-button" onClick={insert}>Adicionar</button>
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
                <th style={{ textAlign: 'center' }}>Remover</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val: Despesa) => {
                return (
                  <tr>
                    <td>{val.id}</td>
                    <td>{val.category.name}</td>
                    <td>{format(val.payment_date, 'dd/MM/yyyy')}</td>
                    <td>R$ {val.value}</td>
                    <td style={{ textAlign: 'center' }}><button className="btn btn-danger btn-sm" onClick={() => { delDespesa(val.id) }}><Delete /></button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* pagination */}
      {/* a logica da paginação ainda não foi finalizada, é preciso adicionar limite para a ultima pagina, verificar as saidas dos resultado no console do backend para ajustar o limitador */}
      <Pagination aria-label="Page navigation example" size="sm" >
        <PaginationItem>
          <PaginationLink previous onClick={previusPage} />
        </PaginationItem>
        <PaginationItem>
          <li>
            <p className="page-link">{pagina}</p>
          </li>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next onClick={nextPage} />
        </PaginationItem>
      </Pagination>

      {/* pagination */}

      <div className="competency-section mt-4">
        <h4>Falta {daysLeft} dias para acabar a competência</h4>
      </div>

      <button className="btn btn-primary mt-3">Enviar</button>
    </div>
  );
}

