/* eslint-disable react/function-component-definition */
import type { Meta, StoryFn } from '@storybook/react'

import RcSesFooter from '@/components/common/Footer'

const meta: Meta<typeof RcSesFooter> = {
  title: 'components/common/Footer',
  component: RcSesFooter,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesFooter> = (args) => <RcSesFooter {...args} />

export const Main = Template.bind({})
Main.args = {
  text: '© Valstybės įmonė Registrų centras. Duomenys apie įmonę kaupiami ir saugomi Juridinių asmenų registre.\nStudentų g. 39, LT-08106 Vilnius | tel. +370 5 268 8262 | el. p. info@registrucentras.lt | įmonės kodas 124110246 | PVM mokėtojo kodas LT241102419',
}
