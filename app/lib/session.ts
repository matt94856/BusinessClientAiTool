// Simple session management
export interface User {
  id: string
  email: string
  name?: string
}

export const setUserSession = (user: User) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('whispr_user', JSON.stringify(user))
  }
}

export const getUserSession = (): User | null => {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem('whispr_user')
    return userStr ? JSON.parse(userStr) : null
  }
  return null
}

export const clearUserSession = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('whispr_user')
  }
}

export const isAuthenticated = (): boolean => {
  return getUserSession() !== null
} 