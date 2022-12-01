import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import AppErrorBoundary from "./App/AppErrorBoundary";
import AppFallback from "./App/AppFallback";

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppErrorBoundary FallbackComponent={AppFallback}>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
)
