import ReactDom from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

const app = ReactDom.createRoot(document.querySelector('#root'));
app.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);