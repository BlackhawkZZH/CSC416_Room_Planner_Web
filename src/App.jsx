import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from "./pages/welcome/welcome"
import './App.less';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
