/* eslint-disable react/function-component-definition */
import { Meta, StoryFn } from '@storybook/react'

import RcSesAlert from '@/components/common/Alert'
import FieldPreview from '@/components/storybook/FieldPreview'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const meta: Meta<typeof RcSesAlert> = {
  title: 'components/common/Alert',
  component: RcSesAlert,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesAlert> = (args) => (
  <Fields>
    <FieldView>
      <RcSesAlert {...args} />
    </FieldView>
    <FieldPreview>
      <PreviewTitle>State previews</PreviewTitle>
      <RcSesAlert severity='info' title='Info'>
        {lorem}
      </RcSesAlert>
      <RcSesAlert severity='warning' title='Warning'>
        {lorem}
      </RcSesAlert>
      <RcSesAlert severity='error' title='Error'>
        {lorem}
      </RcSesAlert>
      <RcSesAlert severity='success' title='Success'>
        {lorem}
      </RcSesAlert>
    </FieldPreview>
  </Fields>
)

export const Main = Template.bind({})
Main.args = {
  children: lorem,
  severity: 'info',
}
