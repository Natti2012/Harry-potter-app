
import { Route, Routes } from "react-router-dom";
import './App.css';
import Casas from "./components/Casas/Casas";
import Characters from "./components/Characters";
import DetailCharacter from "./components/DetailCharacter";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Libros from "./components/Libros";
import NavHome from "./components/NavHome";
import Quiz from "./components/Quiz";
import Varitas from "./components/Varitas";

function App() {
  return (
    <div className="App">
      <NavHome />
      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="/character/:id" exact element={<DetailCharacter />} />
        <Route path="/libros" exact element={<Libros />} />
        <Route path="/characters/:page" exact element={<Characters />} />
        <Route path="/casas" exact element={<Casas/>} />
        <Route path="/quiz" exact element={<Quiz/>} />
        <Route path="/varitas" exact element={<Varitas/>} />


      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
