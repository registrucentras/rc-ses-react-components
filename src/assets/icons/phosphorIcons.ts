import {
  ArrowLeftIcon as ArrowLeft,
  ArrowRightIcon as ArrowRight,
  ArrowsClockwiseIcon as ArrowsClockwise,
  ArrowsInLineVerticalIcon as ArrowsInLineVertical,
  ArrowsOutLineVerticalIcon as ArrowsOutLineVertical,
  BarcodeIcon as Barcode,
  BriefcaseIcon as Briefcase,
  CalendarBlankIcon as CalendarBlank,
  CaretDoubleLeftIcon as CaretDoubleLeft,
  CaretDoubleRightIcon as CaretDoubleRight,
  CaretDownIcon as CaretDown,
  CaretLeftIcon as CaretLeft,
  CaretRightIcon as CaretRight,
  CaretUpIcon as CaretUp,
  CheckIcon as Check,
  CheckCircleIcon as CheckCircle,
  CheckSquareIcon as CheckSquare,
  CircleIcon as Circle,
  CopyIcon as Copy,
  EnvelopeSimpleIcon as EnvelopeSimple,
  InfoIcon as Info,
  ListIcon as List,
  MagnifyingGlassIcon as MagnifyingGlass,
  MapPinIcon as MapPin,
  MapPinAreaIcon as MapPinArea,
  MinusIcon as Minus,
  NotePencilIcon as NotePencil,
  PencilSimpleLineIcon as PencilSimpleLine,
  PhoneIcon as Phone,
  PhoneCallIcon as PhoneCall,
  PlusIcon as Plus,
  QuestionIcon as Question,
  ScalesIcon as Scales,
  ScrollIcon as Scroll,
  ShoppingCartIcon as ShoppingCart,
  SpinnerGapIcon as SpinnerGap,
  SquareIcon as Square,
  TrashIcon as Trash,
  UploadSimpleIcon as UploadSimple,
  UserIcon as User,
  UserListIcon as UserList,
  WarningIcon as Warning,
  WarningCircleIcon as WarningCircle,
  WarningDiamondIcon as WarningDiamond,
  XIcon as X,
  XCircleIcon as XCircle,
} from '@phosphor-icons/react'

import createIcon from './createIcon'

// One line per icon. Pass `{ size, weight }` only when the default (24, regular) differs,
// and `name` only when the export name doesn't follow `<Phosphor name><Weight>Icon`.
// The pure annotation lets consumers' bundlers drop the icons they don't import.
export const ArrowLeftIcon = /* @__PURE__ */ createIcon(ArrowLeft)
export const ArrowRightIcon = /* @__PURE__ */ createIcon(ArrowRight)
export const ArrowsClockwiseIcon = /* @__PURE__ */ createIcon(ArrowsClockwise)
export const BarcodeIcon = /* @__PURE__ */ createIcon(Barcode)
export const BriefcaseIcon = /* @__PURE__ */ createIcon(Briefcase)
export const CalendarBlankIcon = /* @__PURE__ */ createIcon(CalendarBlank)
export const CaretDoubleLeftBoldIcon = /* @__PURE__ */ createIcon(CaretDoubleLeft, {
  size: 16,
  weight: 'bold',
})
export const CaretDoubleRightBoldIcon = /* @__PURE__ */ createIcon(CaretDoubleRight, {
  size: 16,
  weight: 'bold',
})
export const CaretDownBoldIcon = /* @__PURE__ */ createIcon(CaretDown, {
  size: 16,
  weight: 'bold',
})
export const CaretDownFill = /* @__PURE__ */ createIcon(CaretDown, {
  weight: 'fill',
  name: 'CaretDownFill',
})
export const CaretDownIcon = /* @__PURE__ */ createIcon(CaretDown)
export const CaretLeftBoldIcon = /* @__PURE__ */ createIcon(CaretLeft, {
  size: 16,
  weight: 'bold',
})
export const CaretLeftIcon = /* @__PURE__ */ createIcon(CaretLeft, { size: 16 })
export const CaretRightBoldIcon = /* @__PURE__ */ createIcon(CaretRight, {
  size: 16,
  weight: 'bold',
})
export const CaretUpBoldIcon = /* @__PURE__ */ createIcon(CaretUp, {
  size: 16,
  weight: 'bold',
})
export const CaretUpIcon = /* @__PURE__ */ createIcon(CaretUp, { size: 16 })
export const CheckBoldIcon = /* @__PURE__ */ createIcon(CheckSquare, {
  weight: 'fill',
  name: 'CheckBoldIcon',
})
export const CheckCircleFillIcon = /* @__PURE__ */ createIcon(CheckCircle, {
  weight: 'fill',
})
export const CheckIcon = /* @__PURE__ */ createIcon(Check)
export const CheckUncheckedBoldIcon = /* @__PURE__ */ createIcon(Square, {
  name: 'CheckUncheckedBoldIcon',
})
export const CircleFilledIcon = /* @__PURE__ */ createIcon(Circle, {
  weight: 'fill',
  name: 'CircleFilledIcon',
})
export const CloseIcon = /* @__PURE__ */ createIcon(X, { name: 'CloseIcon' })
export const CollapseChevronsIcon = /* @__PURE__ */ createIcon(ArrowsInLineVertical, {
  size: 16,
  weight: 'bold',
  name: 'CollapseChevronsIcon',
})
export const CopyIcon = /* @__PURE__ */ createIcon(Copy)
export const EnvelopeSimpleIcon = /* @__PURE__ */ createIcon(EnvelopeSimple)
export const ExpandChevronsIcon = /* @__PURE__ */ createIcon(ArrowsOutLineVertical, {
  size: 16,
  weight: 'bold',
  name: 'ExpandChevronsIcon',
})
export const InfoFillIcon = /* @__PURE__ */ createIcon(Info, { weight: 'fill' })
export const InfoIcon = /* @__PURE__ */ createIcon(Info)
export const ListIcon = /* @__PURE__ */ createIcon(List)
export const MagnifyingGlassIcon = /* @__PURE__ */ createIcon(MagnifyingGlass)
export const MapPinAreaIcon = /* @__PURE__ */ createIcon(MapPinArea)
export const MapPinIcon = /* @__PURE__ */ createIcon(MapPin)
export const MinusBoldIcon = /* @__PURE__ */ createIcon(Minus, {
  size: 16,
  weight: 'bold',
})
export const MinusIcon = /* @__PURE__ */ createIcon(Minus, { size: 16 })
export const NotePencilIcon = /* @__PURE__ */ createIcon(NotePencil, { size: 16 })
export const PencilSimpleLineIcon = /* @__PURE__ */ createIcon(PencilSimpleLine)
export const PhoneCallIcon = /* @__PURE__ */ createIcon(PhoneCall)
export const PhoneIcon = /* @__PURE__ */ createIcon(Phone)
export const PlusBoldIcon = /* @__PURE__ */ createIcon(Plus, { size: 16, weight: 'bold' })
export const PlusIcon = /* @__PURE__ */ createIcon(Plus, { size: 16 })
export const QuestionFillIcon = /* @__PURE__ */ createIcon(Question, {
  size: 16,
  weight: 'fill',
})
export const QuestionIcon = /* @__PURE__ */ createIcon(Question, { size: 16 })
export const ScalesIcon = /* @__PURE__ */ createIcon(Scales)
export const ScrollIcon = /* @__PURE__ */ createIcon(Scroll)
export const ShoppingCartIcon = /* @__PURE__ */ createIcon(ShoppingCart)
export const SpinnerGapBoldIcon = /* @__PURE__ */ createIcon(SpinnerGap, {
  weight: 'bold',
})
export const TrashIcon = /* @__PURE__ */ createIcon(Trash)
export const UploadSimpleIcon = /* @__PURE__ */ createIcon(UploadSimple)
export const UserIcon = /* @__PURE__ */ createIcon(User)
export const UserListIcon = /* @__PURE__ */ createIcon(UserList)
export const WarningCircleIcon = /* @__PURE__ */ createIcon(WarningCircle, {
  weight: 'fill',
  name: 'WarningCircleIcon',
})
export const WarningDiamondFillIcon = /* @__PURE__ */ createIcon(WarningDiamond, {
  weight: 'fill',
})
export const WarningFillIcon = /* @__PURE__ */ createIcon(Warning, { weight: 'fill' })
export const XCircleFillIcon = /* @__PURE__ */ createIcon(XCircle, { weight: 'fill' })
