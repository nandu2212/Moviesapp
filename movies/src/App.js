import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header/header';
import Home from './Pages/Home/Home';
import Movie from './Pages/Movies/Movies';
import MovieList from './Components/Movielist/MovieList';
import Login from './Components/Login/login';
import Register from './Components/Register/Register';
function App() {
  return (

    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
<Route path='/register' element={<Register/>}></Route>
      <Route path='movie/:id' element={<Movie/>}></Route>
      <Route path='movies/:type' element={<MovieList/>}></Route>
      <Route index element={<Login/>}></Route>
      </Routes></BrowserRouter>
    </>
  );
}

export default App;
