import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import { RequireAuth } from './hooks/Requaired'
import SudlanganlikHaqida from './pages/SudlanganlikHaqida'
import YangiSudHaqida from './pages/YangiSudHaqida'
import TolovlarniKorish from './pages/TolovlarniKorish'
import XabarnomalarniKorish from './pages/XabarnomalarniKorish'
const LayoutComponent = lazy(() => import('./components/Layout'))
const LayoutComponent2 = lazy(() => import('./components/Layout2'))
const Page404 = lazy(() => import('./pages/404Page'))
const SignUp = lazy(() => import('./pages/SignUp'))
const SignIn = lazy(() => import('./pages/SignIn'))
const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutComponent2 />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/dashboard' element={<LayoutComponent />}>
        <Route
          index
          element={
            <RequireAuth>
              <SudlanganlikHaqida />
            </RequireAuth>
          }
        />
        <Route
          path='new-court-about'
          element={
            <RequireAuth>
              <YangiSudHaqida />
            </RequireAuth>
          }
        />
        <Route
          path='payment'
          element={
            <RequireAuth>
              <TolovlarniKorish />
            </RequireAuth>
          }
        />
        <Route
          path='messages'
          element={
            <RequireAuth>
              <XabarnomalarniKorish />
            </RequireAuth>
          }
        />
      </Route>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default App
