import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store,{persistor} from './app/store'
import {Provider} from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<BrowserRouter>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
     </Provider>
</BrowserRouter>
)
