import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'
import { FirstApp } from './FirstApp'
import { HelloWorldApp } from './HelloWorldApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/>
        <FirstApp title="Hola, soy Goku" subTitle="con subtitulo"/> */}
        <CounterApp value={5}/>
    </React.StrictMode>
)
