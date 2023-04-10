import { Navigate, useLocation } from 'react-router-dom'
import React from 'react'
import { useUser } from './UseUser'

const RequireAuth = ({ children }) => {
  const location = useLocation()
  const { userName } = useUser()

  if (!userName) {
    return <Navigate to='/sign-in' state={{ from: location }} />
  }
  return children
}

export { RequireAuth }
