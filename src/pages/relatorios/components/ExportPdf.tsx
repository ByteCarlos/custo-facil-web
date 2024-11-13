import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { getCustosPorDepartamento } from '../../../services/reports/getCustosPorDepartamento';

// Definir o tipo para Custo e Departamento
interface Custo {
    categoria: string;
    total: number;
}

interface Departamento {
    departamento: string;
    custos: Custo[];
}

// Definir o tipo para os dados
export interface Data {
    data: Departamento[];
}

const styles = StyleSheet.create({
    page: { padding: 30 },
    header: { fontSize: 22, textAlign: 'center', marginBottom: 20, fontWeight: 'bold' },
    subHeader: { fontSize: 14, marginBottom: 10 },
    section: { marginBottom: 20 },
    tableRow: { flexDirection: 'row', paddingVertical: 5 },
    cell: { width: '50%', textAlign: 'left', paddingLeft: 5 },
    departmentTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    separator: { borderBottom: '1px solid #000', marginBottom: 20 },
    valueText: { fontSize: 14, textAlign: 'right', paddingRight: 5 },
});

interface ReportDocumentProps {
    data: Data | null;
}

const ReportDocument = ({ data }: ReportDocumentProps) => (
    <Document>
        <Page style={styles.page}>
            <Text style={styles.header}>Relatório de Despesas por Departamento</Text>
            <Text style={styles.subHeader}>Data de Emissão: {new Date().toLocaleDateString()}</Text>

            {data?.data.map((departamento) => (
                <View style={styles.section} key={departamento.departamento}>
                    <Text style={styles.departmentTitle}>Departamento: {departamento.departamento}</Text>
                    {departamento.custos.map((custo, index) => (
                        <View style={styles.tableRow} key={index}>
                            <Text style={[ styles.cell ]}>{custo.categoria}</Text>
                            <Text style={[ styles.cell, styles.valueText ]}>R$ {custo.total.toFixed(2)}</Text>
                        </View>
                    ))}
                    <View style={styles.separator} />
                </View>
            ))}
        </Page>
    </Document>
);

const ExportPdf = () => {
    const [ data, setData ] = useState<Data | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reportData = await getCustosPorDepartamento();
                setData(reportData);
            } catch (error) {
                console.error("Erro ao carregar os dados do relatório:", error);
            }
        };

        fetchData();
    }, []);

    return data ? <ReportDocument data={data} /> : null;
};

export default ExportPdf;
