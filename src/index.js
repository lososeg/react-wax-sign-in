import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import {UALProvider} from 'ual-reactjs-renderer'
import {Anchor} from "ual-anchor"
import {Wax} from '@eosdacio/ual-wax'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './store/store'
import {WAX_APP_NAME, WAX_CHAIN_ID, WAX_NODE} from './utils/constant'
import {themeOptions} from './utils/theme'

const theme = createTheme(themeOptions)

const waxChain = {
    chainId: WAX_CHAIN_ID,
    rpcEndpoints: [WAX_NODE]
}
const anchor = new Anchor([waxChain], {
    appName: WAX_APP_NAME,
})
const wax = new Wax([waxChain], {})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <UALProvider appName={WAX_APP_NAME} chains={[waxChain]} authenticators={[wax, anchor]}>
                <Suspense fallback={<div>Loading...</div>}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <App/>
                    </ThemeProvider>
                </Suspense>
            </UALProvider>
        </BrowserRouter>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
