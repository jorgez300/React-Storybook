import type { Meta, StoryObj } from '@storybook/react';

import { CommonTable } from './Tables';

const meta: Meta<typeof CommonTable> = {
    component: CommonTable,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommonTable>;

export const Basic: Story = {
    args: {
        Propiedades: {
            size: "xl",
            striped: true,
            bordered: true,
            hover:true
        }
    },
};