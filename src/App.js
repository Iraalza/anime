import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import Film from './components/Film';
import Films from './components/Films';
import Species from './components/Species';
import SpeciesList from './components/SpeciesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the world of anime!</h1>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/films" element={<Films />} />
        <Route path="/films/:filmId/*" element={<Film />} />
        <Route path="/species" element={<SpeciesList />} />
        <Route path="/species/:speciesId/*" element={<Species />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
