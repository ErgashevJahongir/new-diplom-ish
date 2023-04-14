import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Loading from './components/Loading'
import { TableProvider } from './context/UserContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <TableProvider>
          <App />
        </TableProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
)
