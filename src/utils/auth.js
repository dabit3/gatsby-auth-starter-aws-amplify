const isBrowser = typeof window !== `undefined`

export const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()
  if (user) return !!user.username
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return
  setUser({})
  callback()
}
