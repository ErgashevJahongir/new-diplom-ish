import { useContext } from 'react'
import { TableContext } from '../context/UserContext'

export function useUser() {
  return useContext(TableContext)
}
