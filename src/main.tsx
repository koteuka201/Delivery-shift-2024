import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { QueryClient,  QueryClientProvider} from '@tanstack/react-query'

import { DeliveryContextProvider } from './context/DeliveryContext.tsx'
import { Router } from './components/router/Router.tsx'

import './index.scss'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <DeliveryContextProvider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </DeliveryContextProvider>
  </QueryClientProvider>,
)
