import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'

import RcSesFooter from '@/components/layout/Footer'

const meta: Meta<typeof RcSesFooter> = {
  title: 'Organisms/Footer',
  component: RcSesFooter,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RcSesFooter>

export const Main: Story = {
  args: {
    text: '© Valstybės įmonė Registrų centras. Duomenys apie įmonę kaupiami ir saugomi Juridinių asmenų registre.\nStudentų g. 39, LT-08106 Vilnius | tel. +370 5 268 8262 | el. p. info@registrucentras.lt | įmonės kodas 124110246 | PVM mokėtojo kodas LT241102419',
  },
}

export const TokenBindings: Story = { ...Main }

export const TokenOverrides: Story = {
  ...Main,
  render: (args) => (
    <div
      style={
        {
          '--rc-color-neutrals-950': '#082d44',
          '--rc-color-neutrals-200': '#ffffff',
          '--rc-space-24': '32px',
        } as CSSProperties
      }
    >
      <RcSesFooter {...args} />
    </div>
  ),
}
