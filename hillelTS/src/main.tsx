import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {CounterProvider} from "./contexts/CounterContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <CounterProvider>
            <App />
        </CounterProvider>
    </BrowserRouter>
);
