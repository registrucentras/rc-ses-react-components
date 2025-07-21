/* eslint-disable class-methods-use-this */
import Cookies from 'js-cookie'

import env from '@/env'

const cookieAttributes: Cookies.CookieAttributes = {
  domain: env.ENV_AUTH_TOKEN_COOKIE_HOST,
  sameSite: 'Strict',
  secure: true,
}

class CookieStorage implements Storage {
  setItem(k: string, v: any) {
    Cookies.set(k, v, cookieAttributes)
  }

  getItem(k: string) {
    return Cookies.get(k) ?? null
  }

  clear() {
    const allKeys = Object.keys(Cookies.get())
    allKeys.forEach((k) => Cookies.remove(k, cookieAttributes))
  }

  removeItem(k: string) {
    Cookies.remove(k, cookieAttributes)
  }

  get length() {
    const allKeys = Object.keys(Cookies.get())
    return allKeys.length
  }

  key(index: number) {
    const allKeys = Object.keys(Cookies.get())

    return index > -1 && index <= allKeys.length ? allKeys[index] : ''
  }
}

export default CookieStorage
