import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { StyleSheetManager } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
<Suspense fallback={<div>Carregando</div>}>
  <BrowserRouter >
    <StyleSheetManager shouldForwardProp={(prop) => prop!=="shake"}>
      <App/>
    </StyleSheetManager>
  </BrowserRouter>
</Suspense>
)
