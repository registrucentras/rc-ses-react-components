/**
 * Internal spacing references.
 * Tooltip max-width values are layout dimensions, not spacing primitives.
 */
const spacingTokens = {
  'spacing-aliases-badge-icon-text-gap': 'var(--rc-space-badge-icon-text-gap)',
  'spacing-aliases-badge-padding-x-regular': 'var(--rc-space-badge-padding-x-regular)',
  'spacing-aliases-badge-padding-x-small': 'var(--rc-space-badge-padding-x-small)',
  'spacing-aliases-badge-padding-y-regular': 'var(--rc-space-badge-padding-y-regular)',
  'spacing-aliases-badge-padding-y-small': 'var(--rc-space-badge-padding-y-small)',
  'spacing-aliases-bottom-sheet-content-gap': 'var(--rc-space-bottom-sheet-content-gap)',
  'spacing-aliases-bottom-sheet-footer-gap': 'var(--rc-space-bottom-sheet-footer-gap)',
  'spacing-aliases-bottom-sheet-handle-gap': 'var(--rc-space-bottom-sheet-handle-gap)',
  'spacing-aliases-bottom-sheet-padding-bottom':
    'var(--rc-space-bottom-sheet-padding-bottom)',
  'spacing-aliases-bottom-sheet-padding-top': 'var(--rc-space-bottom-sheet-padding-top)',
  'spacing-aliases-bottom-sheet-padding-x': 'var(--rc-space-bottom-sheet-padding-x)',
  'spacing-aliases-bottom-sheet-section-gap': 'var(--rc-space-bottom-sheet-section-gap)',
  'spacing-aliases-breadcrumbs-item-gap': 'var(--rc-space-breadcrumbs-item-gap)',
  'spacing-aliases-button-group-gap': 'var(--rc-space-button-group-gap)',
  'spacing-aliases-button-icon-text-gap-regular':
    'var(--rc-space-button-icon-text-gap-regular)',
  'spacing-aliases-button-icon-text-gap-small':
    'var(--rc-space-button-icon-text-gap-small)',
  'spacing-aliases-button-padding-icon-only-regular':
    'var(--rc-space-button-padding-icon-only-regular)',
  'spacing-aliases-button-padding-icon-only-small':
    'var(--rc-space-button-padding-icon-only-small)',
  'spacing-aliases-button-padding-x-link': 'var(--rc-space-button-padding-x-link)',
  'spacing-aliases-button-padding-x-regular': 'var(--rc-space-button-padding-x-regular)',
  'spacing-aliases-button-padding-x-small': 'var(--rc-space-button-padding-x-small)',
  'spacing-aliases-button-padding-y-regular': 'var(--rc-space-button-padding-y-regular)',
  'spacing-aliases-button-padding-y-small': 'var(--rc-space-button-padding-y-small)',
  'spacing-aliases-card-footer-buttons-gap': 'var(--rc-space-card-footer-buttons-gap)',
  'spacing-aliases-card-heading-gap': 'var(--rc-space-card-heading-gap)',
  'spacing-aliases-card-padding-bottom': 'var(--rc-space-card-padding-bottom)',
  'spacing-aliases-card-padding-top': 'var(--rc-space-card-padding-top)',
  'spacing-aliases-card-padding-x': 'var(--rc-space-card-padding-x)',
  'spacing-aliases-card-section-gap': 'var(--rc-space-card-section-gap)',
  'spacing-aliases-cards-card-heading-gap': 'var(--rc-space-cards-card-heading-gap)',
  'spacing-aliases-cards-card-padding': 'var(--rc-space-cards-card-padding)',
  'spacing-aliases-cards-card-section-gap': 'var(--rc-space-cards-card-section-gap)',
  'spacing-aliases-cards-step-card-heading-gap':
    'var(--rc-space-cards-step-card-heading-gap)',
  'spacing-aliases-cards-step-card-padding': 'var(--rc-space-cards-step-card-padding)',
  'spacing-aliases-cards-step-card-section-gap':
    'var(--rc-space-cards-step-card-section-gap)',
  'spacing-aliases-cards-subcard-heading-gap':
    'var(--rc-space-cards-subcard-heading-gap)',
  'spacing-aliases-cards-subcard-padding': 'var(--rc-space-cards-subcard-padding)',
  'spacing-aliases-cards-subcard-section-gap':
    'var(--rc-space-cards-subcard-section-gap)',
  'spacing-aliases-content-card-padding-compact':
    'var(--rc-space-content-card-padding-compact)',
  'spacing-aliases-content-card-padding-regular':
    'var(--rc-space-content-card-padding-regular)',
  'spacing-aliases-form-field-gap': 'var(--rc-space-form-field-gap)',
  'spacing-aliases-form-group-gap': 'var(--rc-space-form-group-gap)',
  'spacing-aliases-group-card-head-gap': 'var(--rc-space-group-card-head-gap)',
  'spacing-aliases-group-card-row-padding-y': 'var(--rc-space-group-card-row-padding-y)',
  'spacing-aliases-group-card-section-gap': 'var(--rc-space-group-card-section-gap)',
  'spacing-aliases-header-padding-bottom': 'var(--rc-space-header-padding-bottom)',
  'spacing-aliases-header-padding-top': 'var(--rc-space-header-padding-top)',
  'spacing-aliases-header-padding-x': 'var(--rc-space-header-padding-x)',
  'spacing-aliases-help-section-card-gap': 'var(--rc-space-help-section-card-gap)',
  'spacing-aliases-help-section-heading-gap': 'var(--rc-space-help-section-heading-gap)',
  'spacing-aliases-help-section-padding': 'var(--rc-space-help-section-padding)',
  'spacing-aliases-input-padding-y': 'var(--rc-space-input-padding-y)',
  'spacing-aliases-list-expanded-indent': 'var(--rc-space-list-expanded-indent)',
  'spacing-aliases-list-heading-gap': 'var(--rc-space-list-heading-gap)',
  'spacing-aliases-list-item-gap': 'var(--rc-space-list-item-gap)',
  'spacing-aliases-list-item-padding': 'var(--rc-space-list-item-padding)',
  'spacing-aliases-meta-icon-text-gap': 'var(--rc-space-meta-icon-text-gap)',
  'spacing-aliases-meta-item-gap': 'var(--rc-space-meta-item-gap)',
  'spacing-aliases-page-breadcrumbs-to-h1': 'var(--rc-space-page-breadcrumbs-to-h1)',
  'spacing-aliases-page-card-to-footer': 'var(--rc-space-page-card-to-footer)',
  'spacing-aliases-page-h1-to-stepper': 'var(--rc-space-page-h1-to-stepper)',
  'spacing-aliases-page-section-gap': 'var(--rc-space-page-section-gap)',
  'spacing-aliases-page-stepper-to-card': 'var(--rc-space-page-stepper-to-card)',
  'spacing-aliases-pagination-button-gap': 'var(--rc-space-pagination-button-gap)',
  'spacing-aliases-popular-card-stack-gap': 'var(--rc-space-popular-card-stack-gap)',
  'spacing-aliases-segmented-segment-gap': 'var(--rc-space-segmented-segment-gap)',
  'spacing-aliases-segmented-track-padding': 'var(--rc-space-segmented-track-padding)',
  'spacing-aliases-selectable-area-padding-x':
    'var(--rc-space-selectable-area-padding-x)',
  'spacing-aliases-selectable-area-padding-y':
    'var(--rc-space-selectable-area-padding-y)',
  'spacing-aliases-service-list-item-gap': 'var(--rc-space-service-list-item-gap)',
  'spacing-aliases-service-list-item-padding-x':
    'var(--rc-space-service-list-item-padding-x)',
  'spacing-aliases-service-list-item-padding-y':
    'var(--rc-space-service-list-item-padding-y)',
  'spacing-aliases-service-list-item-text-gap':
    'var(--rc-space-service-list-item-text-gap)',
  'spacing-aliases-side-nav-gap': 'var(--rc-space-side-nav-gap)',
  'spacing-aliases-side-nav-row-padding-x': 'var(--rc-space-side-nav-row-padding-x)',
  'spacing-aliases-side-nav-row-padding-y': 'var(--rc-space-side-nav-row-padding-y)',
  'spacing-aliases-snackbar-padding-x': 'var(--rc-space-snackbar-padding-x)',
  'spacing-aliases-snackbar-padding-y': 'var(--rc-space-snackbar-padding-y)',
  'spacing-aliases-stack-default': 'var(--rc-space-stack-default)',
  'spacing-aliases-stack-loose': 'var(--rc-space-stack-loose)',
  'spacing-aliases-stack-tight': 'var(--rc-space-stack-tight)',
  'spacing-aliases-stepper-item-gap': 'var(--rc-space-stepper-item-gap)',
  'spacing-aliases-subcard-element-gap': 'var(--rc-space-subcard-element-gap)',
  'spacing-aliases-subcard-heading-gap': 'var(--rc-space-subcard-heading-gap)',
  'spacing-aliases-subcard-padding': 'var(--rc-space-subcard-padding)',
  'spacing-aliases-subcard-section-gap': 'var(--rc-space-subcard-section-gap)',
  'spacing-aliases-tooltip-max-width': 'var(--rc-space-tooltip-max-width)',
  'spacing-aliases-tooltip-padding': 'var(--rc-space-tooltip-padding)',
  'spacing-aliases-topbar-padding-x': 'var(--rc-space-topbar-padding-x)',
} as const

export { spacingTokens }
export default spacingTokens
