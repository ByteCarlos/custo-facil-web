import axios, { AxiosError, AxiosResponse } from "axios";

export class Permission {
  permisso: Boolean = false;
  msg?: String;
}

export const checkPermission = async (routecheck: String): Promise<Permission> => {
  const data = new Permission();

  await axios.get(`${process.env.REACT_APP_API_URL}${routecheck}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then((result: AxiosResponse) => {
    // console.log(result);
    if (result.status === 200) {
      data.permisso = true;
    } else {
      throw new AxiosError("Não é possível acessar ou o serviço está indiponivel.");
      // throw new Error("Não é possível acessar ou o serviço está indiponivel.");
    }
  }).catch((err: AxiosError) => {
    // console.log(err);
    if (err.status === 401) {
      data.permisso = false;
      data.msg = "Você não possui acesso";
    } else {
      data.msg = "O serviço pode está indiponivel.";
    }
  });

  return { ...data };
};