import converterMes from "../../../utils/converterMes";

type Custo = {
    custoTotal: number;
    produtos: string;
};

type MesData = {
    mes: string;
    custos: Custo[];
};

const prepareCustosPorDepartamento = (data: any[]) => {
    // Extrair departamentos para o eixo x
    const departamentos = data.map(dept => dept.departamento);

    // Construir um objeto para cada departamento, organizando custos por categoria
    const dataset = departamentos.map(departamento => {
        const deptData = data.find(d => d.departamento === departamento);
        const entry: Record<string, number | string> = { departamento };

        if (deptData) {
            deptData.custos.forEach((custo: { produtos: string | number; total: string | number; }) => {
                entry[custo.produtos] = custo.total;
            });
        }
        return entry;
    });

    return dataset;
};

const prepareTendenciaDeCusto = (data: MesData[]) => {
    // Extrai categorias únicas
    const produtos = Array.from(
        new Set(data.flatMap(entry => entry.custos.map(c => c.produtos)))
    );

    // Cria o dataset para cada mês com cada categoria como uma chave
    const dataset = data.map(entry => {
        const item: Record<string, number | string> = { mes: converterMes(entry.mes) };
        entry.custos.forEach(custo => {
            item[custo.produtos] = custo.custoTotal;
        });
        // Preenche as categorias ausentes com valor 0
        produtos.forEach(produto => {
            if (!(produto in item)) {
                item[produto] = 0;
            }
        });
        return item;
    });

    return { dataset, produtos };
};

export { prepareCustosPorDepartamento, prepareTendenciaDeCusto };