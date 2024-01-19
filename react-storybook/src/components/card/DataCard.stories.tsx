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
        Texto: "texto de ok",
        Estado: true
    },
};

export const EstadoMal: Story = {
    args: {
        Texto: "texto de mal",
        Estado: false
    },
};

export const EjemploData: Story = {
    args: {
        Texto: "texto de mal",
        Estado: false,
        Data: ["Error 1","Error 2","Error 3"]
    },
};

export const EjemploDataLargo: Story = {
    args: {
        Texto: "texto de mal",
        Estado: false,
        Data: ["Error 1","Error 2","Error 3","Error 2","Error 3","Error 2","Error 3","Error 2","Error 3","Error 2","Error 3","Error 2","Error 3","Error 2","Error 3","Error 2","Error 3"]
    },
};