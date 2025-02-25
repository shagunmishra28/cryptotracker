import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CoinProvider from './context/CoinProvider'

const FIVE_MINUTES_INTERVAL = 1000 * 60 * 5

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: FIVE_MINUTES_INTERVAL,
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CoinProvider>
        <App />
      </CoinProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
