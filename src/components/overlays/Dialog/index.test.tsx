import { Button } from '@mui/material'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import RcSesDialog from './index'

describe('RcSesDialog', () => {
  it('should render dialog title', () => {
    render(<RcSesDialog open dialogTitle='Test Title' actions={<Button>Close</Button>} />)

    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('should render children when provided', () => {
    render(
      <RcSesDialog open dialogTitle='Test Title' actions={<Button>Close</Button>}>
        Test Content
      </RcSesDialog>,
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('should not render DialogContent when children are not provided', () => {
    render(<RcSesDialog open dialogTitle='Test Title' actions={<Button>Close</Button>} />)

    const dialogContent = document.querySelector('.MuiDialogContent-root')
    expect(dialogContent).not.toBeInTheDocument()
  })

  it('should render actions', () => {
    render(
      <RcSesDialog open dialogTitle='Test Title' actions={<Button>Submit</Button>} />,
    )

    expect(screen.getByText('Submit')).toBeInTheDocument()
  })

  it('should apply medium size by default', () => {
    render(<RcSesDialog open dialogTitle='Test Title' actions={<Button>Close</Button>} />)

    const paper = document.querySelector('.MuiDialog-paper')
    expect(paper).toHaveStyle({ width: '600px' })
  })

  it('should apply small size (480px)', () => {
    render(
      <RcSesDialog
        open
        size='sm'
        dialogTitle='Test Title'
        actions={<Button>Close</Button>}
      />,
    )

    const paper = document.querySelector('.MuiDialog-paper')
    expect(paper).toHaveStyle({ width: '480px' })
  })

  it('should apply large size (800px)', () => {
    render(
      <RcSesDialog
        open
        size='lg'
        dialogTitle='Test Title'
        actions={<Button>Close</Button>}
      />,
    )

    const paper = document.querySelector('.MuiDialog-paper')
    expect(paper).toHaveStyle({ width: '800px' })
  })

  it('should render ReactNode as title', () => {
    render(
      <RcSesDialog
        open
        dialogTitle={<h2>Custom Title Element</h2>}
        actions={<Button>Close</Button>}
      />,
    )

    expect(screen.getByText('Custom Title Element')).toBeInTheDocument()
  })
})
