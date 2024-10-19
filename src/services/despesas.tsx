import axios, { AxiosResponse } from "axios";

interface Categorys {
  id: number;
  name: String;
}

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
  category_fk: number;
  insertion_date: Date;
  payment_date: Date;
  status: String;
  category: Categorys;
  department: Department;
  monthly_period?: MonthlyPeriods;
};

export interface Categoria {
  id: number;
  name: String;
}

export class Data {
  status!: number;
  data: Array<any> = [];
}

export class insertData {
  department_fk!: number;
  value!: number;
  category_fk!: number;
  insertion_date!: Date;
  payment_date!: Date;
  status!: String;
  monthly_period_fk!: number;
}

export const getAllDespesas = async (): Promise<Data> => {
  const data = new Data();

  await axios.get(`${process.env.REACT_APP_API_URL}/despesas`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then((result: AxiosResponse<Despesa[]>) => {
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
      Authorization: `Bearer ${localStorage.getItem('token')}`,
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
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then((result) => {
    console.log(result);
  });

  return { ...data };
}