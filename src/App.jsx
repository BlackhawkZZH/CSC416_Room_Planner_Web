import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from "./pages/welcome/welcome"
import './App.less';
import Timeline from './pages/timeline/timeline';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='timeline' element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
