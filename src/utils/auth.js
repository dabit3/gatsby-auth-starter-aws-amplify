const isBrowser = typeof window !== `undefined`

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {}

export const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return
  setUser({})
  callback()
}