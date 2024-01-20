import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

interface barChartDataset {
    Titulo: string,
    Data: number[]
}


export interface barChartProps {
    Titulo: string,
    Labels: string[]
    Data: barChartDataset[]
}

const colors: string[] = [
    'rgba(247, 230, 101, 0.5)',
    'rgba(206, 247, 101, 0.5)',
    'rgba(157, 247, 101, 0.5)',
    'rgba(106, 247, 101, 0.5)',
    'rgba(101, 247, 147, 0.5)',
    'rgba(101, 247, 196, 0.5)',
    'rgba(101, 237, 247, 0.5)',
    'rgba(101, 167, 247, 0.5)',
    'rgba(147, 101, 247, 0.5)',
    'rgba(103, 101, 247, 0.5)'
]


export function barChart(props: barChartProps) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: props.Titulo,
            },
        },
    };

    const labels = props.Labels;



    const ValidarData = () => {

        let flag: boolean = true;

        if (props.Labels.length > 10 || props.Data.length > 10) {

            flag = false;

        }

        props.Data.forEach((item: barChartDataset) => {

            if (props.Labels.length != item.Data.length) {

                flag = false;

            }

        });

        return flag
    }

    const GetColor = (i:number) => {

        return colors[i];

    }

    const InitChart = () => {

        const datasets = props.Data.map((item:barChartDataset, i:number) => {
            return {
                label: item.Titulo,
                data: item.Data,
                backgroundColor: GetColor(i),
            }

        });

        const data = {
            labels,
            datasets: datasets,
        };

        return <Bar options={options} data={data} />;

    }

    const InitError = () => {

        return <>
            <div>
                <h1 className='text-danger'>Error</h1>
            </div>
            <div>
                <ul>
                    <li>Valide que los datos tengan la misma cantidad de registros</li>
                    <li>Solo se acepta un maximo de 10 Dataset</li>
                </ul>
            </div>
        </>;

    }



    return (ValidarData()) ? InitChart(): InitError();

}