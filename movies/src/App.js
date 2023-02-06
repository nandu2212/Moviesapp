import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header/header';
import Home from './Pages/Home/Home';
import Movie from './Pages/Movies/Movies';
import MovieList from './Components/Movielist/MovieList';
function App() {
  return (

    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='movie/:id' element={<Movie/>}></Route>
      <Route path='movies/:type' element={<MovieList/>}></Route>
      <Route path='/' element={<h3>error page</h3>}></Route>
      </Routes></BrowserRouter>
    </>
  );
}

export default App;
