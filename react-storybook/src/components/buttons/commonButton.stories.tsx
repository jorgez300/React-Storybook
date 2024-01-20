import type { Meta, StoryObj } from '@storybook/react';

import { CommonButton } from './commonButtons';

const meta: Meta<typeof CommonButton> = {
    component: CommonButton,
    tags: ['autodocs'],
    argTypes: {onClick: { action: 'clicked' }},
};

export default meta;
type Story = StoryObj<typeof CommonButton>;

export const Primary: Story = {
    args: {
        Texto: "Boton de prueba",
        Habilitado: true
    },
};

export const ConPropiedades: Story = {
    args: {
        Texto: "Boton de prueba",
        Habilitado: true,
        Propiedades: {
            variant: 'success',
            className:"w-100 p-5"
        }
    },
};