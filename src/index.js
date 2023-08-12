import ReactDOM from 'react-dom/client';
import App from './App';
import searchImages from './api';

searchImages('cars');

const el : any = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App />);