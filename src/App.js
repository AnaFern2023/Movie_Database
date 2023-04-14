import './App.css';

import Home from './components/Home'
import MovieDetails from './components/MovieDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
