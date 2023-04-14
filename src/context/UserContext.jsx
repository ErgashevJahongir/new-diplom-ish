import { createContext, useState, useEffect } from 'react'

export const TableContext = createContext()

export const TableProvider = ({ children }) => {
  const [userName, setUserName] = useState(JSON.parse(localStorage.getItem('diplom-ish')))

  useEffect(() => {
    if (localStorage.getItem('diplom-ish')) {
      setUserName(JSON.parse(localStorage.getItem('diplom-ish')))
    }
  }, [])

  const value = {
    userName,
    setUserName,
  }

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>
}
