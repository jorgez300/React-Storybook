import type { Meta, StoryObj } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataCard } from './DataCard';



const meta: Meta<typeof DataCard> = {
    component: DataCard,
};

export default meta;
type Story = StoryObj<typeof DataCard>;

export const EstadoOk: Story = {
    args: {
        Texto: "Formato OK sin datos a mostrar",
        Estado: true
    },
};

export const EstadoMal: Story = {
    args: {
        Texto: "Formato de error sin datos a mostrar",
        Estado: false,
        Data: []
    },
};

export const EjemploData: Story = {
    args: {
        Texto: "Formato de error con pocos datos a mostrar",
        Estado: false,
        Data: ["Error 1","Error 2","Error 3"]
    },
};

export const EjemploDataLargo: Story = {
    args: {
        Texto: "Formato de error con muchos datos a mostrar",
        Estado: false,
        Data: ["Error 1","Error 2","Error 3","Error 2","Error 3","Error 2","Error 3","Error 2","Error 3","Error 2","Error 3","Error 2","Error 3","Error 2","Error 3","Error 2","Error 3"]
    },
};