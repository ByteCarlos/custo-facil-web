import axios, { AxiosResponse } from "axios";

// interface Categorys {
//   id: number;
//   name: String;
// }

interface Department {
  id: number;
  name: String;
  Description: String;
}

interface MonthlyPeriods {
  id: number;
  month_year: Date;
  open_date: Date;
  close_date: Date;
  status: String;
}

export interface Despesa {
  id: number;
  department_fk: number;
  monthly_period_fk: number;
  value: number;
  produto: {
    id: number;
    nome: String;
    category_id: number;
  };
  produtos_fk: number;
  insertion_date: Date;
  payment_date: Date;
  status: String;
  // category: Categorys;
  department: Department;
  departmentID: number; // foi necessario declarar para buscar o tipo correto
  monthly_period?: MonthlyPeriods;
};

export interface Categoria {
  id: number;
  name: String;
}

export interface Produto {
  id: number;
  nome: String;
  category_id: number;
}

export class Data {
  status!: number;
  data: Array<any> = [];
}

export class insertData {
  department_fk!: number;
  value!: number;
  // category_fk!: number;
  produtos_fk!: number;
  insertion_date!: Date;
  payment_date!: Date;
  submitted!: Boolean;
  monthly_period_fk!: number;
}

export const getAllDespesas = async (limit: number, offset: number): Promise<Data> => {
  const data = new Data();

  await axios.get(`${process.env.REACT_APP_API_URL}/despesas`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      role: "Despesas",
    },
    params: {
      limit: limit,
      offset: offset,
    },
  }).then((result: AxiosResponse<Despesa[]>) => {
    // console.log(result.data);
    data.status = result.status;
    data.data = result.data;
  }).catch((err: Error & AxiosResponse) => {
    data.status = err.status;
  });

  return { ...data };
  
};

export const getCategorias = async (): Promise<Data> => {
  const data = new Data();

  await axios.get(`${process.env.REACT_APP_API_URL}/despesas/categorias`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
  }).then((result: AxiosResponse<Categoria[]>) => {
    data.status = result.status;
    data.data = result.data;
  }).catch((err: Error & AxiosResponse) => {
    data.status = err.status;
  });

  return { ...data };
}

export const insertDespesa = async (insertData: insertData): Promise<Data> => {
  const data = new Data();

  await axios.post(`${process.env.REACT_APP_API_URL}/despesas`,[{...insertData}], {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
  }).then((result: AxiosResponse) => {
    data.status = result.status;
  }).catch((err: Error & AxiosResponse) => {
    data.status = err.status;
  });

  return { ...data };
}

export const deleteDespesa = async (despesaID: number): Promise<Data> => {
  const data = new Data();

  await axios.delete(`${process.env.REACT_APP_API_URL}/despesas?id=${despesaID}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
  }).then((result: AxiosResponse) => {
    data.status = result.status;
  }).catch((err: Error & AxiosResponse) => {
    data.status = err.status;
  });

  return { ...data };
}

export const getProdutos= async (): Promise<Data> => {
  const data = new Data();

  await axios.get(`${process.env.REACT_APP_API_URL}/despesas/produtos`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
  }).then((result: AxiosResponse<Produto[]>) => {
    data.status = result.status;
    data.data = result.data;
  }).catch((err: Error & AxiosResponse) => {
    data.status = err.status;
  });

  return { ...data };
}