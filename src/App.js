import HomePage from './page/HomePage';
import Celebrities from './page/CelebritiesPage';
import RandomCelebrities from './page/RandomCelebrities';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CelDescription from './page/CelDescription';
import FormMessagePage from './page/FormMessagePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/celebrities" element={<Celebrities />} />
        <Route path="/random" element={<RandomCelebrities />} />
        <Route path="/celebrities/description/:id" element={<CelDescription />} />
        <Route path="/message" element={<FormMessagePage/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
