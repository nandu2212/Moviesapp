import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<h1>hello world2</h1>}></Route>
      <Route path='movie/:id' element={<h1>movie details</h1>}></Route>
      <Route path='movies/:type' element={<h2>movies types</h2>}></Route>
      <Route path='/' element={<h3>error page</h3>}></Route>
      </Routes></BrowserRouter>
    </>
  );
}

export default App;
