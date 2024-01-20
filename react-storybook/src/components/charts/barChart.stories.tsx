import type { Meta, StoryObj } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { barChart } from './barChart';



const meta: Meta<typeof barChart> = {
    component: barChart,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof barChart>;

export const EjemploChartOK: Story = {
    args: {
        Titulo: "Grafico de ejemplo",
        Labels: ['Santa Fe', 'Laja', 'Pacifico', 'Mulchen', 'Bucalemu'],
        Data: [
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Producto Terminado",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Subproducto",
                Data: [1,2,3,4,5]
            }
        ]
    },
};

export const EjemploChartUnDataset: Story = {
    args: {
        Titulo: "Grafico de ejemplo",
        Labels: ['Santa Fe', 'Laja', 'Pacifico', 'Mulchen', 'Bucalemu'],
        Data: [
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            }
        ]
    },
};


export const EjemploChartError: Story = {
    args: {
        Titulo: "Grafico de ejemplo con error",
        Labels: ['Santa Fe', 'Laja', 'Pacifico', 'Mulchen', 'Bucalemu'],
        Data: [
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4]
            },
            {
                Titulo: "Producto Terminado",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Subproducto",
                Data: [1,2]
            }
        ]
    },
};

export const EjemploChartErrorSuperaMaximo: Story = {
    args: {
        Titulo: "Grafico de ejemplo con error",
        Labels: ['Santa Fe', 'Laja', 'Pacifico', 'Mulchen', 'Bucalemu'],
        Data: [
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            },
            {
                Titulo: "Celulosa",
                Data: [1,2,3,4,5]
            }
        ]
    },
};