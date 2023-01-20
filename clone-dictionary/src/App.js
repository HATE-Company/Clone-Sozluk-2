import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import 'flowbite';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
