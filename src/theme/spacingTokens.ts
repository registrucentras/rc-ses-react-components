// CSS variable references. Values and responsive modes live in tokens.css.
const spacingTokens = {
  'spacing-aliases-badge-icon-text-gap':
    'var(--rc-spacing-spacing-aliases-badge-icon-text-gap)',
  'spacing-aliases-badge-padding-x-regular':
    'var(--rc-spacing-spacing-aliases-badge-padding-x-regular)',
  'spacing-aliases-badge-padding-x-small':
    'var(--rc-spacing-spacing-aliases-badge-padding-x-small)',
  'spacing-aliases-badge-padding-y-regular':
    'var(--rc-spacing-spacing-aliases-badge-padding-y-regular)',
  'spacing-aliases-badge-padding-y-small':
    'var(--rc-spacing-spacing-aliases-badge-padding-y-small)',
  'spacing-aliases-bottom-sheet-content-gap':
    'var(--rc-spacing-spacing-aliases-bottom-sheet-content-gap)',
  'spacing-aliases-bottom-sheet-footer-gap':
    'var(--rc-spacing-spacing-aliases-bottom-sheet-footer-gap)',
  'spacing-aliases-bottom-sheet-handle-gap':
    'var(--rc-spacing-spacing-aliases-bottom-sheet-handle-gap)',
  'spacing-aliases-bottom-sheet-padding-bottom':
    'var(--rc-spacing-spacing-aliases-bottom-sheet-padding-bottom)',
  'spacing-aliases-bottom-sheet-padding-top':
    'var(--rc-spacing-spacing-aliases-bottom-sheet-padding-top)',
  'spacing-aliases-bottom-sheet-padding-x':
    'var(--rc-spacing-spacing-aliases-bottom-sheet-padding-x)',
  'spacing-aliases-bottom-sheet-section-gap':
    'var(--rc-spacing-spacing-aliases-bottom-sheet-section-gap)',
  'spacing-aliases-breadcrumbs-item-gap':
    'var(--rc-spacing-spacing-aliases-breadcrumbs-item-gap)',
  'spacing-aliases-button-group-gap':
    'var(--rc-spacing-spacing-aliases-button-group-gap)',
  'spacing-aliases-button-icon-text-gap-regular':
    'var(--rc-spacing-spacing-aliases-button-icon-text-gap-regular)',
  'spacing-aliases-button-icon-text-gap-small':
    'var(--rc-spacing-spacing-aliases-button-icon-text-gap-small)',
  'spacing-aliases-button-padding-icon-only-regular':
    'var(--rc-spacing-spacing-aliases-button-padding-icon-only-regular)',
  'spacing-aliases-button-padding-icon-only-small':
    'var(--rc-spacing-spacing-aliases-button-padding-icon-only-small)',
  'spacing-aliases-button-padding-x-link':
    'var(--rc-spacing-spacing-aliases-button-padding-x-link)',
  'spacing-aliases-button-padding-x-regular':
    'var(--rc-spacing-spacing-aliases-button-padding-x-regular)',
  'spacing-aliases-button-padding-x-small':
    'var(--rc-spacing-spacing-aliases-button-padding-x-small)',
  'spacing-aliases-button-padding-y-regular':
    'var(--rc-spacing-spacing-aliases-button-padding-y-regular)',
  'spacing-aliases-button-padding-y-small':
    'var(--rc-spacing-spacing-aliases-button-padding-y-small)',
  'spacing-aliases-card-footer-buttons-gap':
    'var(--rc-spacing-spacing-aliases-card-footer-buttons-gap)',
  'spacing-aliases-card-heading-gap':
    'var(--rc-spacing-spacing-aliases-card-heading-gap)',
  'spacing-aliases-card-padding-bottom':
    'var(--rc-spacing-spacing-aliases-card-padding-bottom)',
  'spacing-aliases-card-padding-top':
    'var(--rc-spacing-spacing-aliases-card-padding-top)',
  'spacing-aliases-card-padding-x': 'var(--rc-spacing-spacing-aliases-card-padding-x)',
  'spacing-aliases-card-section-gap':
    'var(--rc-spacing-spacing-aliases-card-section-gap)',
  'spacing-aliases-cards-card-heading-gap':
    'var(--rc-spacing-spacing-aliases-cards-card-heading-gap)',
  'spacing-aliases-cards-card-padding':
    'var(--rc-spacing-spacing-aliases-cards-card-padding)',
  'spacing-aliases-cards-card-section-gap':
    'var(--rc-spacing-spacing-aliases-cards-card-section-gap)',
  'spacing-aliases-cards-step-card-heading-gap':
    'var(--rc-spacing-spacing-aliases-cards-step-card-heading-gap)',
  'spacing-aliases-cards-step-card-padding':
    'var(--rc-spacing-spacing-aliases-cards-step-card-padding)',
  'spacing-aliases-cards-step-card-section-gap':
    'var(--rc-spacing-spacing-aliases-cards-step-card-section-gap)',
  'spacing-aliases-cards-subcard-heading-gap':
    'var(--rc-spacing-spacing-aliases-cards-subcard-heading-gap)',
  'spacing-aliases-cards-subcard-padding':
    'var(--rc-spacing-spacing-aliases-cards-subcard-padding)',
  'spacing-aliases-cards-subcard-section-gap':
    'var(--rc-spacing-spacing-aliases-cards-subcard-section-gap)',
  'spacing-aliases-content-card-padding-compact':
    'var(--rc-spacing-spacing-aliases-content-card-padding-compact)',
  'spacing-aliases-content-card-padding-regular':
    'var(--rc-spacing-spacing-aliases-content-card-padding-regular)',
  'spacing-aliases-form-field-gap': 'var(--rc-spacing-spacing-aliases-form-field-gap)',
  'spacing-aliases-form-group-gap': 'var(--rc-spacing-spacing-aliases-form-group-gap)',
  'spacing-aliases-group-card-head-gap':
    'var(--rc-spacing-spacing-aliases-group-card-head-gap)',
  'spacing-aliases-group-card-row-padding-y':
    'var(--rc-spacing-spacing-aliases-group-card-row-padding-y)',
  'spacing-aliases-group-card-section-gap':
    'var(--rc-spacing-spacing-aliases-group-card-section-gap)',
  'spacing-aliases-header-padding-bottom':
    'var(--rc-spacing-spacing-aliases-header-padding-bottom)',
  'spacing-aliases-header-padding-top':
    'var(--rc-spacing-spacing-aliases-header-padding-top)',
  'spacing-aliases-header-padding-x':
    'var(--rc-spacing-spacing-aliases-header-padding-x)',
  'spacing-aliases-help-section-card-gap':
    'var(--rc-spacing-spacing-aliases-help-section-card-gap)',
  'spacing-aliases-help-section-heading-gap':
    'var(--rc-spacing-spacing-aliases-help-section-heading-gap)',
  'spacing-aliases-help-section-padding':
    'var(--rc-spacing-spacing-aliases-help-section-padding)',
  'spacing-aliases-input-padding-y': 'var(--rc-spacing-spacing-aliases-input-padding-y)',
  'spacing-aliases-list-expanded-indent':
    'var(--rc-spacing-spacing-aliases-list-expanded-indent)',
  'spacing-aliases-list-heading-gap':
    'var(--rc-spacing-spacing-aliases-list-heading-gap)',
  'spacing-aliases-list-item-gap': 'var(--rc-spacing-spacing-aliases-list-item-gap)',
  'spacing-aliases-list-item-padding':
    'var(--rc-spacing-spacing-aliases-list-item-padding)',
  'spacing-aliases-meta-icon-text-gap':
    'var(--rc-spacing-spacing-aliases-meta-icon-text-gap)',
  'spacing-aliases-meta-item-gap': 'var(--rc-spacing-spacing-aliases-meta-item-gap)',
  'spacing-aliases-page-breadcrumbs-to-h1':
    'var(--rc-spacing-spacing-aliases-page-breadcrumbs-to-h1)',
  'spacing-aliases-page-card-to-footer':
    'var(--rc-spacing-spacing-aliases-page-card-to-footer)',
  'spacing-aliases-page-h1-to-stepper':
    'var(--rc-spacing-spacing-aliases-page-h1-to-stepper)',
  'spacing-aliases-page-section-gap':
    'var(--rc-spacing-spacing-aliases-page-section-gap)',
  'spacing-aliases-page-stepper-to-card':
    'var(--rc-spacing-spacing-aliases-page-stepper-to-card)',
  'spacing-aliases-pagination-button-gap':
    'var(--rc-spacing-spacing-aliases-pagination-button-gap)',
  'spacing-aliases-popular-card-stack-gap':
    'var(--rc-spacing-spacing-aliases-popular-card-stack-gap)',
  'spacing-aliases-segmented-segment-gap':
    'var(--rc-spacing-spacing-aliases-segmented-segment-gap)',
  'spacing-aliases-segmented-track-padding':
    'var(--rc-spacing-spacing-aliases-segmented-track-padding)',
  'spacing-aliases-selectable-area-padding-x':
    'var(--rc-spacing-spacing-aliases-selectable-area-padding-x)',
  'spacing-aliases-selectable-area-padding-y':
    'var(--rc-spacing-spacing-aliases-selectable-area-padding-y)',
  'spacing-aliases-service-list-item-gap':
    'var(--rc-spacing-spacing-aliases-service-list-item-gap)',
  'spacing-aliases-service-list-item-padding-x':
    'var(--rc-spacing-spacing-aliases-service-list-item-padding-x)',
  'spacing-aliases-service-list-item-padding-y':
    'var(--rc-spacing-spacing-aliases-service-list-item-padding-y)',
  'spacing-aliases-service-list-item-text-gap':
    'var(--rc-spacing-spacing-aliases-service-list-item-text-gap)',
  'spacing-aliases-side-nav-gap': 'var(--rc-spacing-spacing-aliases-side-nav-gap)',
  'spacing-aliases-side-nav-row-padding-x':
    'var(--rc-spacing-spacing-aliases-side-nav-row-padding-x)',
  'spacing-aliases-side-nav-row-padding-y':
    'var(--rc-spacing-spacing-aliases-side-nav-row-padding-y)',
  'spacing-aliases-snackbar-padding-x':
    'var(--rc-spacing-spacing-aliases-snackbar-padding-x)',
  'spacing-aliases-snackbar-padding-y':
    'var(--rc-spacing-spacing-aliases-snackbar-padding-y)',
  'spacing-aliases-stack-default': 'var(--rc-spacing-spacing-aliases-stack-default)',
  'spacing-aliases-stack-loose': 'var(--rc-spacing-spacing-aliases-stack-loose)',
  'spacing-aliases-stack-tight': 'var(--rc-spacing-spacing-aliases-stack-tight)',
  'spacing-aliases-stepper-item-gap':
    'var(--rc-spacing-spacing-aliases-stepper-item-gap)',
  'spacing-aliases-subcard-element-gap':
    'var(--rc-spacing-spacing-aliases-subcard-element-gap)',
  'spacing-aliases-subcard-heading-gap':
    'var(--rc-spacing-spacing-aliases-subcard-heading-gap)',
  'spacing-aliases-subcard-padding': 'var(--rc-spacing-spacing-aliases-subcard-padding)',
  'spacing-aliases-subcard-section-gap':
    'var(--rc-spacing-spacing-aliases-subcard-section-gap)',
  'spacing-aliases-tooltip-max-width':
    'var(--rc-spacing-spacing-aliases-tooltip-max-width)',
  'spacing-aliases-tooltip-padding': 'var(--rc-spacing-spacing-aliases-tooltip-padding)',
  'spacing-aliases-topbar-padding-x':
    'var(--rc-spacing-spacing-aliases-topbar-padding-x)',
  'spacing-primitives-0': 'var(--rc-spacing-spacing-primitives-0)',
  'spacing-primitives-10': 'var(--rc-spacing-spacing-primitives-10)',
  'spacing-primitives-12': 'var(--rc-spacing-spacing-primitives-12)',
  'spacing-primitives-16': 'var(--rc-spacing-spacing-primitives-16)',
  'spacing-primitives-2': 'var(--rc-spacing-spacing-primitives-2)',
  'spacing-primitives-20': 'var(--rc-spacing-spacing-primitives-20)',
  'spacing-primitives-24': 'var(--rc-spacing-spacing-primitives-24)',
  'spacing-primitives-32': 'var(--rc-spacing-spacing-primitives-32)',
  'spacing-primitives-36': 'var(--rc-spacing-spacing-primitives-36)',
  'spacing-primitives-4': 'var(--rc-spacing-spacing-primitives-4)',
  'spacing-primitives-40': 'var(--rc-spacing-spacing-primitives-40)',
  'spacing-primitives-48': 'var(--rc-spacing-spacing-primitives-48)',
  'spacing-primitives-6': 'var(--rc-spacing-spacing-primitives-6)',
  'spacing-primitives-64': 'var(--rc-spacing-spacing-primitives-64)',
  'spacing-primitives-8': 'var(--rc-spacing-spacing-primitives-8)',
  'spacing-primitives-80': 'var(--rc-spacing-spacing-primitives-80)',
  'spacing-primitives-96': 'var(--rc-spacing-spacing-primitives-96)',
} as const

export { spacingTokens }
export default spacingTokens
