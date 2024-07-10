import ReactDOM from 'react-dom/client'

import { QueryClient,  QueryClientProvider} from '@tanstack/react-query'

import { App } from './App.tsx'
import { DeliveryContextProvider } from './context/DeliveryContext.tsx'

import './index.scss'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <DeliveryContextProvider>
      <App />
    </DeliveryContextProvider>
  </QueryClientProvider>,
)
