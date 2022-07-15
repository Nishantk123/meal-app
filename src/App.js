import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Header from './component/Header';
import Landing from './component/Landing';
import Ingredients from './component/Ingredients';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/ingredients" element={<Ingredients />} />

      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Header />
    //   <Landing />
    // </div>
  );
}

export default App;
