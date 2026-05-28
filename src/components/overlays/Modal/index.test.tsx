import { render, screen } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { beforeAll, describe, expect, it, vi } from 'vitest'

import inputEn from '@/i18n/namespaces/input/en.json'
import inputLt from '@/i18n/namespaces/input/lt.json'

import RcSesModal from './index'

beforeAll(() => {
  if (!i18n.isInitialized) {
    i18n.init({
      lng: 'lt',
      resources: {
        lt: { input: inputLt },
        en: { input: inputEn },
      },
    })
  }
})

describe('RcSesModal', () => {
  it('renders title and message', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <RcSesModal
          open
          onClose={vi.fn()}
          title='Test Title'
          message='Test Message'
          onPrimaryAction={vi.fn()}
        />
      </I18nextProvider>,
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  it('renders success variant with only primary button', () => {
    const onPrimary = vi.fn()

    render(
      <I18nextProvider i18n={i18n}>
        <RcSesModal
          open
          onClose={vi.fn()}
          title='Success!'
          message='Operation complete'
          variant='success'
          onPrimaryAction={onPrimary}
        />
      </I18nextProvider>,
    )

    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(1)
  })

  it('uses custom primary label when provided', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <RcSesModal
          open
          onClose={vi.fn()}
          title='Test'
          message='Test Message'
          primaryActionLabel='Custom Label'
          onPrimaryAction={vi.fn()}
        />
      </I18nextProvider>,
    )

    expect(screen.getByText('Custom Label')).toBeInTheDocument()
  })

  it('renders custom actions when provided', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <RcSesModal
          open
          onClose={vi.fn()}
          title='Test'
          message='Test Message'
          actions={<button type='button'>Custom Action</button>}
          onPrimaryAction={vi.fn()}
        />
      </I18nextProvider>,
    )

    expect(screen.getByText('Custom Action')).toBeInTheDocument()
  })
})
