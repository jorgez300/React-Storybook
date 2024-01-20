import type { Meta, StoryObj } from '@storybook/react';

import { CommonButton } from './commonButtons';

const meta: Meta<typeof CommonButton> = {
    component: CommonButton
};

export default meta;
type Story = StoryObj<typeof CommonButton>;

export const Primary: Story = {
    args: {
        Texto: "Boton de prueba",
        Habilitado: true
    },
};