import {
  BriefcaseIcon as Briefcase,
  EnvelopeSimpleIcon as EnvelopeSimple,
  InfoIcon as Info,
  MapPinIcon as MapPin,
  PhoneIcon as Phone,
  PhoneCallIcon as PhoneCall,
  UserListIcon as UserList,
} from '@phosphor-icons/react'

import createIcon from './createIcon'

// One line per icon. Pass `{ weight, size }` only when the default (regular, 24) differs.
// The pure annotation lets consumers' bundlers drop the icons they don't import.
export const BriefcaseIcon = /* @__PURE__ */ createIcon(Briefcase)
export const EnvelopeSimpleIcon = /* @__PURE__ */ createIcon(EnvelopeSimple)
export const InfoIcon = /* @__PURE__ */ createIcon(Info)
export const MapPinIcon = /* @__PURE__ */ createIcon(MapPin)
export const PhoneCallIcon = /* @__PURE__ */ createIcon(PhoneCall)
export const PhoneIcon = /* @__PURE__ */ createIcon(Phone)
export const UserListIcon = /* @__PURE__ */ createIcon(UserList)
