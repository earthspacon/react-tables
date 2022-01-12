import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from './store/store'
import { ContextProvider } from './components/ModalContext'
import 'antd/dist/antd.min.css'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Provider>,
  document.getElementById('root')
)
