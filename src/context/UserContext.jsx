import { createContext, useState, useEffect } from 'react'

export const TableContext = createContext()

export const TableProvider = ({ children }) => {
  const [userName, setUserName] = useState(null)

  useEffect(() => {
    if (sessionStorage.getItem('diplom-ish')) {
      setUserName(sessionStorage.getItem('diplom-ish'))
    }
  }, [])

  const value = {
    userName,
    setUserName,
  }

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>
}
