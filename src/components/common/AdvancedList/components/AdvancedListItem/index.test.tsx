import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { type ReactElement, useState } from 'react'
import { describe, expect, test, vi } from 'vitest'

import NotePencilIcon from '@/assets/icons/NotePencilIcon'
import PencilSimpleLineIcon from '@/assets/icons/PencilSimpleLineIcon'
import TrashIcon from '@/assets/icons/TrashIcon'
import theme from '@/theme/light'

import AdvancedListItem from './index'

const renderItem = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('AdvancedListItem', () => {
  test('renders title and subtitle', () => {
    renderItem(<AdvancedListItem title='Main title' subtitle='Some subtitle' />)

    expect(screen.getByText('Main title')).toBeInTheDocument()
    expect(screen.getByText('Some subtitle')).toBeInTheDocument()
  })

  test('renders label pill when provided', () => {
    renderItem(<AdvancedListItem title='Title' label='Label' />)

    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  test('renders meta items via ListWithIcons', () => {
    renderItem(
      <AdvancedListItem
        title='Title'
        metaItems={[{ text: 'Meta info 1' }, { text: 'Meta info 2' }]}
      />,
    )

    expect(screen.getByText('Meta info 1')).toBeInTheDocument()
    expect(screen.getByText('Meta info 2')).toBeInTheDocument()
  })

  describe('leading: radio', () => {
    test('renders and calls onChange without bubbling to root onClick', () => {
      const onChange = vi.fn()
      const onClick = vi.fn()

      renderItem(
        <AdvancedListItem
          title='Savininkas juridinis asmuo'
          onClick={onClick}
          leading={{ type: 'radio', checked: false, onChange }}
        />,
      )

      fireEvent.click(screen.getByRole('radio'))

      expect(onChange).toHaveBeenCalledWith(true)
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('leading accessible name', () => {
    test('radio with no explicit aria-label is labelled by the item title', () => {
      renderItem(
        <AdvancedListItem
          title='Savininkas juridinis asmuo'
          leading={{ type: 'radio', checked: false, onChange: () => {} }}
        />,
      )

      expect(
        screen.getByRole('radio', { name: 'Savininkas juridinis asmuo' }),
      ).toBeInTheDocument()
    })

    test('checkbox with no explicit aria-label is labelled by the item title', () => {
      renderItem(
        <AdvancedListItem
          title='Nekilnojamasis daiktas'
          leading={{ type: 'checkbox', checked: false, onChange: () => {} }}
        />,
      )

      expect(
        screen.getByRole('checkbox', { name: 'Nekilnojamasis daiktas' }),
      ).toBeInTheDocument()
    })

    test('explicit aria-label overrides the title-based label', () => {
      renderItem(
        <AdvancedListItem
          title='Savininkas juridinis asmuo'
          leading={{
            type: 'radio',
            checked: false,
            onChange: () => {},
            'aria-label': 'Pasirinkti savininko tipą',
          }}
        />,
      )

      const radio = screen.getByRole('radio', { name: 'Pasirinkti savininko tipą' })
      expect(radio).not.toHaveAttribute('aria-labelledby')
    })
  })

  describe('leading: reorder (Įgaliotojai preset)', () => {
    test('calls onMoveUp/onMoveDown and does not bubble to root onClick', () => {
      const onMoveUp = vi.fn()
      const onMoveDown = vi.fn()
      const onClick = vi.fn()

      renderItem(
        <AdvancedListItem
          title='Jonas Jonaitis'
          onClick={onClick}
          leading={{ type: 'reorder', onMoveUp, onMoveDown }}
        />,
      )

      fireEvent.click(screen.getByRole('button', { name: 'Perkelti aukštyn' }))
      fireEvent.click(screen.getByRole('button', { name: 'Perkelti žemyn' }))

      expect(onMoveUp).toHaveBeenCalledTimes(1)
      expect(onMoveDown).toHaveBeenCalledTimes(1)
      expect(onClick).not.toHaveBeenCalled()
    })

    test('respects moveUpDisabled/moveDownDisabled', () => {
      renderItem(
        <AdvancedListItem
          title='Jonas Jonaitis'
          leading={{
            type: 'reorder',
            onMoveUp: () => {},
            onMoveDown: () => {},
            moveUpDisabled: true,
            moveDownDisabled: true,
          }}
        />,
      )

      expect(screen.getByRole('button', { name: 'Perkelti aukštyn' })).toBeDisabled()
      expect(screen.getByRole('button', { name: 'Perkelti žemyn' })).toBeDisabled()
    })

    test('omits a direction entirely when its handler is not provided (Reorder-up/Reorder-down variants)', () => {
      renderItem(
        <AdvancedListItem
          title='Jonas Jonaitis'
          leading={{ type: 'reorder', onMoveUp: () => {} }}
        />,
      )

      expect(screen.getByRole('button', { name: 'Perkelti aukštyn' })).toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: 'Perkelti žemyn' }),
      ).not.toBeInTheDocument()
    })
  })

  describe('leading: drag / icon / avatar / index (decorative selector variants)', () => {
    test('drag renders a non-interactive handle', () => {
      renderItem(<AdvancedListItem title='Title' leading={{ type: 'drag' }} />)

      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    test('icon renders the provided icon component', () => {
      const { container } = renderItem(
        <AdvancedListItem
          title='Title'
          leading={{ type: 'icon', icon: PencilSimpleLineIcon }}
        />,
      )

      expect(container.querySelector('svg')).toBeInTheDocument()
    })

    test('avatar renders the provided initials', () => {
      renderItem(
        <AdvancedListItem title='Title' leading={{ type: 'avatar', initials: 'JP' }} />,
      )

      expect(screen.getByText('JP')).toBeInTheDocument()
    })

    test('index renders the provided number', () => {
      renderItem(<AdvancedListItem title='Title' leading={{ type: 'index', index: 3 }} />)

      expect(screen.getByText('3')).toBeInTheDocument()
    })

    test('a decorative leading control does not block the card itself from being keyboard-focusable', () => {
      const onClick = vi.fn()
      renderItem(
        <AdvancedListItem
          title='Title'
          onClick={onClick}
          leading={{ type: 'avatar', initials: 'JP' }}
        />,
      )

      const root = screen.getByRole('button', { name: /Title/ })
      fireEvent.keyDown(root, { key: 'Enter' })

      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('trailing: actions (Įgaliotojai preset)', () => {
    test('renders Keisti/Pašalinti and calls their handlers without bubbling', () => {
      const onEdit = vi.fn()
      const onDelete = vi.fn()
      const onClick = vi.fn()

      renderItem(
        <AdvancedListItem
          title='Jonas Jonaitis'
          onClick={onClick}
          trailing={{
            type: 'actions',
            actions: [
              { label: 'Keisti', icon: NotePencilIcon, onClick: onEdit },
              { label: 'Pašalinti', icon: TrashIcon, onClick: onDelete },
            ],
          }}
        />,
      )

      fireEvent.click(screen.getByRole('button', { name: 'Keisti' }))
      fireEvent.click(screen.getByRole('button', { name: 'Pašalinti' }))

      expect(onEdit).toHaveBeenCalledTimes(1)
      expect(onDelete).toHaveBeenCalledTimes(1)
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('trailing: toggle (JA atstovai redaguojama preset)', () => {
    test('calls onChange without bubbling to root onClick', () => {
      const onChange = vi.fn()
      const onClick = vi.fn()

      renderItem(
        <AdvancedListItem
          title='Petras Petraitis'
          subtitle='Vadovas'
          onClick={onClick}
          trailing={{ type: 'toggle', checked: false, onChange }}
        />,
      )

      fireEvent.click(screen.getByRole('switch'))

      expect(onChange).toHaveBeenCalledWith(true)
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('trailing: status (JA atstovai peržiūra preset)', () => {
    test('renders the status label', () => {
      renderItem(
        <AdvancedListItem
          title='Ona Onaitė'
          subtitle='a.k. 3850.........'
          trailing={{ type: 'status', label: 'Laukiama parašo', color: 'warning' }}
        />,
      )

      expect(screen.getByText('Laukiama parašo')).toBeInTheDocument()
    })
  })

  describe('leading: checkbox + selected state (Pasirenkamas sąrašas preset)', () => {
    test('calls onChange without bubbling and reflects checked state', () => {
      const onChange = vi.fn()
      const onClick = vi.fn()

      renderItem(
        <AdvancedListItem
          title='Nekilnojamasis daiktas'
          subtitle='Unikalus Nr. 4400.....'
          state='selected'
          onClick={onClick}
          leading={{ type: 'checkbox', checked: true, onChange }}
        />,
      )

      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toBeChecked()

      fireEvent.click(checkbox)

      expect(onChange).toHaveBeenCalledWith(false)
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('leadingMedia (avatar + checkbox people list)', () => {
    test('renders alongside the leading selector without replacing it', () => {
      renderItem(
        <AdvancedListItem
          title='Petras Petraitis'
          leadingMedia={<span data-testid='avatar'>PP</span>}
          leading={{ type: 'checkbox', checked: false, onChange: () => {} }}
        />,
      )

      expect(screen.getByTestId('avatar')).toBeInTheDocument()
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    test('omitted by default: absent leadingMedia renders nothing extra', () => {
      renderItem(<AdvancedListItem title='No media' />)

      expect(screen.queryByTestId('avatar')).not.toBeInTheDocument()
    })
  })

  describe('trailing: price (Krepšelis preset)', () => {
    test('renders amount and caption', () => {
      renderItem(
        <AdvancedListItem
          title='NTR išrašas (objekto)'
          subtitle='Elektroninis dokumentas (PDF)'
          trailing={{ type: 'price', amount: '12,00 €', caption: 'su PVM' }}
        />,
      )

      expect(screen.getByText('12,00 €')).toBeInTheDocument()
      expect(screen.getByText('su PVM')).toBeInTheDocument()
    })
  })

  describe('accessibility', () => {
    test('root is not exposed as role=button when it has nested interactive controls, even with onClick set', () => {
      const onClick = vi.fn()

      const { container } = renderItem(
        <AdvancedListItem
          title='Jonas Jonaitis'
          onClick={onClick}
          trailing={{
            type: 'actions',
            actions: [{ label: 'Keisti', onClick: () => {} }],
          }}
        />,
      )

      const root = container.firstElementChild as HTMLElement
      expect(root.getAttribute('role')).not.toBe('button')
      expect(root).not.toHaveAttribute('tabindex')
      expect(screen.getByRole('button', { name: 'Keisti' })).toBeInTheDocument()
    })
  })

  describe('states', () => {
    test('disabled state blocks root onClick and marks aria-disabled', () => {
      const onClick = vi.fn()

      const { container } = renderItem(
        <AdvancedListItem title='Disabled item' state='disabled' onClick={onClick} />,
      )

      const root = container.firstElementChild as HTMLElement
      expect(root).toHaveAttribute('aria-disabled', 'true')
      expect(root).toHaveStyle('pointer-events: none')
      expect(root.getAttribute('role')).not.toBe('button')
    })

    test('clickable root is reachable via keyboard and role=button', () => {
      const onClick = vi.fn()

      renderItem(<AdvancedListItem title='Clickable item' onClick={onClick} />)

      const root = screen.getByRole('button', { name: /Clickable item/ })
      fireEvent.keyDown(root, { key: 'Enter' })

      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('layout', () => {
    test('root always uses the standard border radius (Radius aliases/List-item)', () => {
      const { container } = renderItem(<AdvancedListItem title='Item' />)

      const root = container.firstElementChild as HTMLElement
      expect(root).toHaveStyle('border-radius: 0.5rem')
    })

    test('selected state emphasizes via box-shadow, not a wider border (no sibling layout shift)', () => {
      const { container: restContainer } = renderItem(
        <AdvancedListItem title='Rest item' state='rest' />,
      )
      const { container: selectedContainer } = renderItem(
        <AdvancedListItem title='Selected item' state='selected' />,
      )

      const restRoot = restContainer.firstElementChild as HTMLElement
      const selectedRoot = selectedContainer.firstElementChild as HTMLElement

      // Border width must stay identical across states — animating it would grow/shrink the
      // item's rendered height and shift every sibling below it in the list.
      expect(restRoot).toHaveStyle('border-width: 0.0625rem')
      expect(selectedRoot).toHaveStyle('border-width: 0.0625rem')

      // The emphasis instead comes from box-shadow, which doesn't participate in layout.
      expect(restRoot).toHaveStyle('box-shadow: none')
      expect(selectedRoot).toHaveStyle('box-shadow: 0 0 0 0.0625rem #06a0d4')
    })
  })

  describe('expanded slot (GRM-12030 Phase 5)', () => {
    test('empty expanded slot: behaves like a plain card, no aria-expanded on the selector', () => {
      renderItem(
        <AdvancedListItem
          title='Title'
          leading={{ type: 'radio', checked: true, onChange: () => {} }}
        />,
      )

      expect(screen.getByRole('radio')).not.toHaveAttribute('aria-expanded')
    })

    test('radio leading + expandedContent: wires aria-expanded/aria-controls to the content region', () => {
      renderItem(
        <AdvancedListItem
          title='Savininkas juridinis asmuo'
          leading={{ type: 'radio', checked: true, onChange: () => {} }}
          expanded
          expandedContent={<div>Adreso ir įmonės laukai</div>}
        />,
      )

      const radio = screen.getByRole('radio')
      expect(radio).toHaveAttribute('aria-expanded', 'true')

      const controlsId = radio.getAttribute('aria-controls')
      expect(controlsId).toBeTruthy()
      expect(document.getElementById(controlsId as string)).toHaveTextContent(
        'Adreso ir įmonės laukai',
      )
    })

    test('checkbox leading + expandedContent: same aria wiring, reflects collapsed state', () => {
      renderItem(
        <AdvancedListItem
          title='Title'
          leading={{ type: 'checkbox', checked: true, onChange: () => {} }}
          expanded={false}
          expandedContent={<div>Details</div>}
        />,
      )

      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-expanded', 'false')
    })

    test('selecting the leading control calls both its own onChange and onExpandedChange', () => {
      const onChange = vi.fn()
      const onExpandedChange = vi.fn()

      renderItem(
        <AdvancedListItem
          title='Title'
          leading={{ type: 'radio', checked: false, onChange }}
          expanded={false}
          expandedContent={<div>Details</div>}
          onExpandedChange={onExpandedChange}
        />,
      )

      fireEvent.click(screen.getByRole('radio'))

      expect(onChange).toHaveBeenCalledWith(true)
      expect(onExpandedChange).toHaveBeenCalledWith(true)
    })

    test('collapsed content values are preserved across collapse/expand (stays mounted)', () => {
      const Wrapper = () => {
        const [expanded, setExpanded] = useState(true)
        return (
          <>
            <button type='button' onClick={() => setExpanded((prev) => !prev)}>
              toggle
            </button>
            <AdvancedListItem
              title='Title'
              leading={{ type: 'checkbox', checked: true, onChange: () => {} }}
              expanded={expanded}
              expandedContent={<input aria-label='Company name' defaultValue='' />}
            />
          </>
        )
      }

      renderItem(<Wrapper />)

      const input = screen.getByLabelText('Company name') as HTMLInputElement
      fireEvent.change(input, { target: { value: 'UAB Įmonė' } })
      expect(input).toHaveValue('UAB Įmonė')

      fireEvent.click(screen.getByRole('button', { name: 'toggle' })) // collapse
      fireEvent.click(screen.getByRole('button', { name: 'toggle' })) // expand again

      expect(screen.getByLabelText('Company name')).toHaveValue('UAB Įmonė')
    })

    test('focus does not jump into expandedContent automatically when expanding', () => {
      const Wrapper = () => {
        const [expanded, setExpanded] = useState(false)
        return (
          <AdvancedListItem
            title='Title'
            leading={{
              type: 'radio',
              checked: expanded,
              onChange: () => setExpanded(true),
            }}
            expanded={expanded}
            expandedContent={<input aria-label='Field' />}
          />
        )
      }

      renderItem(<Wrapper />)

      const radio = screen.getByRole('radio')
      radio.focus()
      fireEvent.click(radio)

      expect(document.activeElement).toBe(radio)
    })

    test('collapsing returns focus to the leading control when focus was inside the content', () => {
      const Wrapper = () => {
        const [expanded, setExpanded] = useState(true)
        return (
          <>
            <button type='button' onClick={() => setExpanded(false)}>
              collapse
            </button>
            <AdvancedListItem
              title='Title'
              leading={{ type: 'checkbox', checked: true, onChange: () => {} }}
              expanded={expanded}
              expandedContent={<input aria-label='Field' />}
            />
          </>
        )
      }

      renderItem(<Wrapper />)

      const field = screen.getByLabelText('Field')
      field.focus()
      expect(document.activeElement).toBe(field)

      fireEvent.click(screen.getByRole('button', { name: 'collapse' }))

      expect(document.activeElement).toBe(screen.getByRole('checkbox'))
    })

    test('marks collapsed content inert so it is not reachable', () => {
      renderItem(
        <AdvancedListItem
          title='Title'
          leading={{ type: 'checkbox', checked: false, onChange: () => {} }}
          expanded={false}
          expandedContent={<input aria-label='Field' />}
        />,
      )

      const field = screen.getByLabelText('Field') as HTMLInputElement
      const contentContainer = field.closest('[id]') as HTMLElement

      expect(contentContainer.inert).toBe(true)
    })

    test('nested radio group inside expandedContent is independent of the item leading control', () => {
      renderItem(
        <AdvancedListItem
          title='Title'
          leading={{ type: 'radio', checked: true, onChange: () => {} }}
          expanded
          expandedContent={
            <div role='radiogroup' aria-label='Deklaracija teikiama'>
              <label htmlFor='declaration-yes'>
                <input id='declaration-yes' type='radio' name='declaration' value='yes' />
                Taip
              </label>
              <label htmlFor='declaration-no'>
                <input id='declaration-no' type='radio' name='declaration' value='no' />
                Ne
              </label>
            </div>
          }
        />,
      )

      const nestedGroup = screen.getByRole('radiogroup', { name: 'Deklaracija teikiama' })
      const nestedRadios = within(nestedGroup).getAllByRole('radio')

      expect(nestedRadios).toHaveLength(2)
      nestedRadios.forEach((radio) => expect(radio).not.toHaveAttribute('aria-controls'))
    })

    test('typing in a field inside expandedContent does not toggle the leading control off', () => {
      const onChange = vi.fn()

      renderItem(
        <AdvancedListItem
          title='Nekilnojamasis daiktas'
          leading={{ type: 'checkbox', checked: true, onChange }}
          expanded
          expandedContent={<input aria-label='Laukas 1' />}
        />,
      )

      const field = screen.getByLabelText('Laukas 1')
      fireEvent.click(field)
      fireEvent.change(field, { target: { value: 'x' } })

      expect(onChange).not.toHaveBeenCalled()
      expect(screen.getByRole('checkbox')).toBeChecked()
    })
  })
})
